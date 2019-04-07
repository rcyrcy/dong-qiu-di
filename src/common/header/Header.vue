<template>
  <div class="header">
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAkBAMAAAC08zNQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUxpcf///////////////////////////////////////////////9z4L/oAAAAMdFJOUwB3RLsYYuOZM4jMqtatMpAAAAJoSURBVEjHrZY/b9NAFMDPiQOBZshRVSwZjAFRpAxFJwZQhrC0IDEEkJg6MDB6KFLHDpH5AmFn69oJ8QGSmCY0fR+K9873304gFW/wPd/d73zvz70zY4wJgY+vYsRkM2GeNPg9xl7xxPY0xYHRBwUDwLYPXSYbGnrHUeRqLIKZGSylA9OAboIj2EnNQUBzJT2YaXUTHdGEXSg4P4NnjEFVNtEdv3M9HdidP4FlOr4pXVob0GlVFB07XfuabtAb7UJORInTR8bbeTo0Po+crxSatj43+tzGCpL/RLcEyktYUPNiWzp9TaY9sCZKhpYckfZBiOeUgbuw1HnCM/iyNyxpeOi7t6TJnC5pPaDXw0rAPm9BDyr0UtFPHbuFypYkoNdmixjLw2gcJD8zDbwG8N5Llcc2144yvd51so4u/JOPs3SuZXY787/Q5nwbOoKVthuuZWwK3t2Cnmq7B06u5ftSK3NaHgCXztPNmYp66XNZ1o58hy9O2T/S0oqLIF4rS891pl5YOsYnaceSblTCnRj6ivP7VMJ4ZumGovswkX1wTsk0gKLMLVyzpNvOijNDt+BSam9lwYkoGo7XvhuafbT0xNB0IknrKHrm0ceWRvcruxPm0L+ldgs+1dB9Q8fO+TZ1je3gPNKacv56uj5id/GbpO3ArxvQ5K3b0u+XNbT1WlDXVJ6f4fgheq4Fi2FItwU4Xqs53xiH8beMdp3Rhnyacmek6Dt+bSnpHlxRQTkhE6GGXmy6gZE+wbEVbrqV1dE/0cS9GjqnyCW9H1SOTol4k4W3f5yqV6zgbe9ucyRVvxyx8y+Smt+QP9qO+wgB35ueAAAAAElFTkSuQmCC"
      class="header-img"
    >
    <nav-link></nav-link>
  </div>
</template>

<script>
import navLink from "./Link";
export default {
  name: "headerHome",
  components: {
    navLink
  }
};
</script>

<style lang="stylus" scoped>
.header {
  height: 0.8rem;
  background-color: #16b13a;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: flex-end;

  .header-img {
    width: 1.2rem;
    position: absolute;
    left: 0.2rem;
    top: 50%;
    transform: translateY(-45%);
  }
}
</style>


