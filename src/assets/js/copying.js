const createSVG = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const svgns = 'http://www.w3.org/2000/svg';
    const xlinkns = 'http://www.w3.org/1999/xlink';
    const typeHeight = 126;
    const copyHeight = 1000 * h/(3 * w);
    const copies = Math.ceil(copyHeight/40);
    let heights = [];
    for (let i = 1; i <= copies; i++) {
        heights.push(Math.round(Math.sin(i / copies) * 100) / 100);
    }
    const totalHeight = heights.reduce((total, number) => total + number);
    heights = heights.map((item) => item / totalHeight);

    const createCopies = (svg, defs, isReversed = false) => {
        for (let i = 0; i < copies; i++) {
            let prevHeights = 0;
            for (let j = 0; j < i; j++) {
                prevHeights += heights[j];
            }
            let thisX, thisHeight, clipIndex;
            thisX = heights[i] * copyHeight;
            if (!isReversed) {
                thisHeight = prevHeights * copyHeight;
                clipIndex = i;
                clipPath = '#type';
            } else {
                thisHeight = prevHeights * copyHeight;
                clipIndex = copies + i;
                clipPath = '#type-reversed';
            }
            const clip = document.createElementNS(svgns, 'clipPath');
            clip.setAttributeNS(null, 'id', `clip-${clipIndex}`);
            const clipRect = document.createElementNS(svgns, 'rect');
            clipRect.setAttributeNS(null, 'width', '100%');
            clipRect.setAttributeNS(null, 'height', `${thisX}`);
            clip.appendChild(clipRect);
            defs.appendChild(clip);
            const el = document.createElementNS(svgns, 'use');
            el.setAttributeNS(null, 'clip-path', `url(#clip-${clipIndex})`);
            el.setAttributeNS(xlinkns, 'href', clipPath);
            el.setAttributeNS(null, 'y', `${thisHeight}`);
            if (isReversed) {
                el.setAttributeNS(
                    null,
                    'transform',
                    `scale(1 -1) translate(0 -${typeHeight + copyHeight * 2})`
                );
            }
            svg.appendChild(el);
        }
    };
    const svg = document.querySelector('#copying-hero');
    svg.setAttributeNS(
        null,
        'viewBox',
        `0 0 1447 ${typeHeight + copyHeight * 2}`
    );
    const defs = svg.querySelector('defs');
    createCopies(svg, defs, false);
    createCopies(svg, defs, true);
    const el = document.createElementNS(svgns, 'use');
    el.setAttributeNS(null, 'y', copyHeight);
    el.setAttributeNS(xlinkns, 'href', '#type');
    svg.appendChild(el);
};

createSVG();
