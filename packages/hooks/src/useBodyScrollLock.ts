"use client";

import { useCallback, useEffect, useMemo } from "react";

export const useBodyScrollLock = () => {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = useMemo(
    () => ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"],
    [],
  );
  // const preventDefaultFalg = false

  const preventDefault = (event: Event) => {
    event.preventDefault();
  };

  const preventDefaultForScrollKeys = useCallback(
    (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        preventDefault(event);
        return false;
      }

      return undefined;
    },
    [keys],
  );

  // modern Chrome requires { passive: false } when adding event
  let supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      () => {},
      Object.defineProperty({}, "passive", {
        get() {
          supportsPassive = true;
        },
      }),
    );
    // eslint-disable-next-line no-empty
  } catch (e) {}

  const wheelOpt = useMemo(
    () => (supportsPassive ? { passive: false } : false),
    [supportsPassive],
  );

  // call this to Disable
  const disableScroll = useCallback(() => {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener("wheel", preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }, [preventDefaultForScrollKeys, wheelOpt]);

  // call this to Enable
  const enableScroll = useCallback(() => {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener("wheel", preventDefault, false);
    window.removeEventListener("touchmove", preventDefault, false);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }, [preventDefaultForScrollKeys]);

  // 스크롤 잠금
  // const enableScrollLock = useCallback(() => {
  // 	const { body } = document
  // 	if (!body.getAttribute('scrollY')) {
  // 		const pageY = window.scrollY
  // 		body.setAttribute('scrollY', pageY.toString())
  // 		body.style.overflow = 'hidden'
  // 		body.style.position = 'fixed'
  // 		body.style.left = '0px'
  // 		body.style.right = '0px'
  // 		body.style.bottom = '0px'
  // 		body.style.top = `-${pageY}px`
  // 	}
  // }, [])

  // 스크롤 잠금 해제
  // const disableScrollLock = useCallback(() => {
  // 	const { body } = document
  // 	if (body.getAttribute('scrollY')) {
  // 		body.style.removeProperty('overflow')
  // 		body.style.removeProperty('position')
  // 		body.style.removeProperty('top')
  // 		body.style.removeProperty('left')
  // 		body.style.removeProperty('right')
  // 		body.style.removeProperty('bottom')
  // 		window.scrollTo(0, Number(body.getAttribute('scrollY')))
  // 		body.removeAttribute('scrollY')
  // 	}
  // }, [])

  useEffect(() => {
    disableScroll();
    // enableScrollLock()

    return () => {
      // disableScrollLock()
      enableScroll();
    };
  }, [disableScroll, enableScroll]);
};
