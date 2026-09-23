<template>
  <div>
    <div v-if="commentPosted" class="new-comment">
      <h3>Thanks for your comment!</h3>
    </div>
    <form v-else class="new-comment" @submit.prevent="submit">
      <h3>Leave a comment</h3>
      <label for="comment-name">Name</label>
      <input
        id="comment-name"
        v-model="name"
        autocomplete="name"
        placeholder="Your name"
        :class="{ invalidInput: invalidName }"
      />
      <label for="comment-body">Comment</label>
      <textarea
        id="comment-body"
        v-model="comment"
        placeholder="Write your comment here"
        :class="{ invalidInput: invalidComment }"
      />
      <p v-if="errorMessage" class="error-message" role="alert">{{ errorMessage }}</p>
      <button type="submit" :disabled="submitting">{{ submitting ? 'Transmitting…' : 'Submit' }}</button>
      <slot></slot>
    </form>
    <h3>Comments:</h3>
    <p v-if="loading">Receiving transmissions…</p>
    <div class="comments">
      <div v-for="item in sortedComments" :key="item.timestampUnique">
        <Comment :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import Comment from './Comment.vue';

const BASE_URL = 'https://imgtv0cop5.execute-api.eu-west-1.amazonaws.com/Prod/comments';

const props = defineProps({
  pageId: {
    type: String,
    required: true,
  },
});

const name = ref('');
const comment = ref('');
const comments = ref([]);
const invalidName = ref(false);
const invalidComment = ref(false);
const commentPosted = ref(false);
const errorMessage = ref('');
const loading = ref(true);
const submitting = ref(false);

const sortedComments = computed(() => comments.value.toSorted((a, b) => b.timestampUnique.localeCompare(a.timestampUnique)));

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${props.pageId}`);
    comments.value = Array.isArray(response.data.comments) ? response.data.comments : [];
  } catch {
    errorMessage.value = 'The comment archive could not be reached. Try again later.';
  } finally {
    loading.value = false;
  }
});

async function submit() {
  invalidName.value = name.value.trim() === '';
  invalidComment.value = comment.value.trim() === '';
  errorMessage.value = '';
  if (invalidName.value || invalidComment.value) return;

  const timestamp = Date.now();
  const newComment = {
    name: name.value.trim(),
    comment: comment.value.trim(),
    timestampUnique: `${timestamp}-${crypto.randomUUID()}`,
    createdAt: timestamp,
  };

  submitting.value = true;
  try {
    await axios.post(`${BASE_URL}/${props.pageId}`, newComment);
    comments.value.push(newComment);
    commentPosted.value = true;
  } catch {
    errorMessage.value = 'Transmission failed. Your comment was not posted.';
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
div.new-comment {
  background-color: #004114;
  border: 2px solid var(--text-color);
  max-width: 666px;
  margin: 0 auto;
  padding: 1rem;
}
label {
  display: block;
  font-weight: bold;
  margin: 1rem 0 0.35rem;
}
input,
textarea {
  background-color: #000000;
  color: var(--text-color);
  font-size: 21px;
  text-align: center;
  border: 2px solid var(--text-color);
  outline: none;
  width: 80%;
}
.error-message {
  color: #ff6868;
}
textarea {
  margin: 0 auto;
  height: 200px;
}
div.comments {
  background-color: #004114;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--text-color);
  max-width: 666px;
  margin: 0 auto;
}
.invalidInput {
  border: 2px solid #ff0000;
  color: #ff0000;
  animation-name: blinker;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-delay: infinite;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
