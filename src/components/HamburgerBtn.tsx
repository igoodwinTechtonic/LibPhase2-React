import * as React from "react";

const HamburgerBtn = () => {

  const hamCheckBox = React.useRef<HTMLInputElement | null>(null);

  // Add an event listener that closes the ham nav (unchecks it)...
  const uncheckHamBtn = () => {
    hamCheckBox.current!.checked = false
  }

  // Create a hook that adds event listeners
  React.useEffect(() => {
    // hamCheckBox.current = document.querySelector('.menu__toggle');

    // ...When window size changes
    window.addEventListener('resize', uncheckHamBtn);
    // ...When orientation changes
    window.addEventListener('orientationChange', uncheckHamBtn);
    // ...When href link changes
    window.addEventListener('popstate', uncheckHamBtn);

    // Remove event listeners when unmounting
    return () => {
      window.removeEventListener('resize', uncheckHamBtn);
      window.removeEventListener('orientationChange', uncheckHamBtn);
      window.removeEventListener('popstate', uncheckHamBtn);
    }
  }, [] );

  return (
    <>
      <input ref={hamCheckBox} type="checkbox" className="menu__toggle"></input>
      <label className="menu__btn">
        <span></span>
      </label>
    </>
  );
};

export default HamburgerBtn;
