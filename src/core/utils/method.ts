export const setTransform = (el: any, transform: any) => {
  el.style.transform = transform;
  el.style.WebkitTransform = transform;
};

export const isVisibleTop = (el: any, container: any) => {
  const wHeight = window.innerHeight;
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentNode.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const offset = parentRect.top + el.offsetTop - containerRect.top;
  const visible = offset < wHeight && rect.bottom <= wHeight + rect.height;
  return visible;
};

export const isVisible = (start: any, end: any, yCurrent: any) => {
  const visible = start <= yCurrent && end >= yCurrent;
  return visible;
};

export const setStyles = (spacer: any, container: any) => {
  container.style.position = 'fixed';
  container.style.left = 0;
  container.style.top = 0;
  container.style.zIndex = 2;
  container.style.width = '100%';
  container.classList.add('active');

  const containerHeight = container.getBoundingClientRect().height;
  spacer.style.height = containerHeight + 'px';
  spacer.style.width = '1px';
  spacer.style.position = 'relative';
};

export const updateElements = (blocks: any, yCurrent: any) => {
  blocks.forEach((b: any) => {
    if (isVisible(b.start, b.end, yCurrent)) {
      const el = b.el;
      const progress = -((b.start - yCurrent) / b.difference);
      const px = progress * (b.distance / 100) * 100;
      const position = parseFloat(px as any).toFixed(2);
      if (b.direction === 'x')
        setTransform(el, 'translateX(' + position + 'px)');
      else setTransform(el, 'translateY(' + position + 'px)');
    }
  });
};

export const createBlock = (data: any, container: any) => {
  const el = data.children.ref.current;
  const { dataDirection, dataPx, dataPercent } = data;
  const wHeight = window.innerHeight;

  const direction = dataDirection || 'y';
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentNode.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const offset = parentRect.top + el.offsetTop - containerRect.top;
  const start = isVisibleTop(el, container) ? 0 : offset - wHeight;
  const distance = dataPx
    ? dataPx
    : dataPercent
      ? ((rect.height + wHeight) * dataPercent) / 100
      : 100;
  const end =
    direction === 'y'
      ? start + rect.height + wHeight + Number(distance)
      : start + rect.height + wHeight;
  const difference = end - start;

  return {
    el,
    dataPx,
    dataPercent,
    start,
    end,
    distance,
    difference,
    direction
  };
};

export const reCalculateBlocks = (blocks: any, container: any) => {
  return blocks.map((block: any) => {
    const el = block.el;
    const dataPx = block.dataPx;
    const dataPercent = block.dataPercent;
    const direction = block.direction;

    const wHeight = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const parentRect = el.parentNode.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const offset = parentRect.top + el.offsetTop - containerRect.top;
    const start = isVisibleTop(el, container) ? 0 : offset - wHeight;
    const distance = dataPx
      ? dataPx
      : dataPercent
        ? ((rect.height + wHeight) * dataPercent) / 100
        : 100;
    const end =
      direction === 'y'
        ? start + rect.height + wHeight + Number(distance)
        : start + rect.height + wHeight;
    const diffrence = end - start;

    return {
      ...block,
      start,
      end,
      distance,
      diffrence
    };
  });
};
