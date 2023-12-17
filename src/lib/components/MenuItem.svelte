<li><slot /></li>

<style>
  li {
    font-family: "Noto Sans";
    position: relative;
    display: block;
    font-weight: bold;
    padding: 0.5rem;
    transition-duration: 0.5s;
    inline-size: 200%;
  }

  li:hover,
  li:focus {
    background-color: rgb(226, 226, 226);
    cursor: pointer;
  }
</style>
