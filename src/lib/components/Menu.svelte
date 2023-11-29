<div>
	<button><slot name="toggle" /></button>
	<menu><slot /></menu>
</div>

<style>
	div {
		transition: all 0.5s ease;
	}
	
  button {
    border: none;
    background-color: inherit;
  }

  menu {
    position: absolute;
    display: none;
    margin-block-start: 0;
    padding: 0;
    background-color: rgb(235, 234, 234);
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
  }

  div:hover,
  div:focus,
  div:hover > menu,
  div:focus > menu {
    display: block;
    visibility: visible;
    opacity: 1;
  }
</style>
