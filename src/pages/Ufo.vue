<template>
  <main-layout>
    <h1>Confirmed U.F.O. Sightings</h1>

    <img src="../assets/ufo/ufo1.jpg" />
    <p>
      <i>
        A photgraph taken during a normal rock concert at Muskelrock Festival in Sweden 2022. Yet,
        after the photograph was developed, an unidentified and unexplainable object can be seen in
        the top right corner of the picture.
      </i>
    </p>
    <hr />
    <br />

    <img src="../assets/ufo/ufo2.jpg" />
    <p>
      <i>
        This Visitör was photographed trying to make an escape from the Tyrolen Research Base
        outside of Blädinge, Småland. You can see a group of S.M.I. agents closing in from all
        sides. Shortly after the photograph was made, they are reported to have made the arrest. No
        further information on the Visitör is known to the public.
      </i>
    </p>
    <hr />
    <br />

    <div class="twocol">
      <img src="../assets/ufo/ufo3.jpg" />
      <img src="../assets/ufo/ufo4.jpg" />
    </div>
    <video  autoplay muted loop>
      <source src="../assets/ufo/ufo_vid_2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p>
      <i>
        Leaked images from inside Area 417.
      </i>
    </p>
    <hr />
    <br />

    <div class="twocol">
      <img src="../assets/ufo/ufo5.jpg" />
      <video width="400" height="400" autoplay muted loop>
        <source src="../assets/ufo/ufo_vid_3.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <p>
      <i>
        Tunguska, Siberia, 1987. No survivors.
        <br/>
        No official statement was ever made.
      </i>
    </p>
    <hr />
    <br />

    <p>Report your own U.F.O. sightings to armoryofficial@gmail.com.</p>
    <p>The truth is out there!</p>
    <br/>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';

export default {
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

.twocol img,video {
  max-width: 50%;
  height: auto;
}
</style>
