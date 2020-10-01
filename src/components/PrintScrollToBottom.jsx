import { useEffect, useMemo } from 'react';

const scroll = () => window.scrollTo(0, document.documentElement.scrollHeight);

const PrintScrollToBottom = ({ children }) => {
  const component = useScroll(children);
  return component;
};

function useScroll(component) {
  const { clientHeight, scrollTop, scrollHeight } = document.documentElement;

  const scrolled = useMemo(() => {
    return clientHeight + scrollTop < scrollHeight;
  }, [clientHeight, scrollTop, scrollHeight]);

  useEffect(() => {
    if (!scrolled) scroll();
  });

  return component;
}

export default PrintScrollToBottom;
