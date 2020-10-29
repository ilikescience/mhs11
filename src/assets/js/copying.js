const createSVG = () => {
    const svg = document.querySelector('#copying-hero');
    svg.innerHTML = `
    <svg id="copying-hero" viewBox="0 0 1447 800">
            <defs>
                <path id="type" d="M222.535 73.316h-48.382c-4.652 9.862-17.678 18.05-58.058 18.05-47.637 0-67.362-7.816-67.362-26.982 0-20.842 19.725-28.843 67.362-28.843 40.38 0 53.592 8.374 58.244 20.283h48.382C220.674 20.096 186.621.185 116.095.185 44.267.185.165 15.258.165 64.384s44.102 62.338 115.93 62.338c70.526 0 104.393-17.864 106.44-53.406zM357.707 126.722c81.132 0 112.58-21.586 112.58-63.269 0-41.682-31.448-63.268-112.58-63.268-81.133 0-112.581 21.586-112.581 63.268 0 41.683 31.448 63.269 112.581 63.269zm0-35.356c-38.333 0-64.199-5.583-64.199-27.913s25.866-27.912 64.199-27.912 62.338 5.582 62.338 27.912-24.005 27.913-62.338 27.913zM623.262 92.296c37.217 0 66.99-3.721 66.99-41.869 0-38.147-29.773-46.52-66.99-46.52H494.12V123h46.521V92.296h82.621zm7.257-51.173c7.444 0 13.212 1.489 13.212 9.305 0 7.815-5.768 9.304-13.212 9.304h-89.878V41.123h89.878zM889.353 3.907h-54.895l-43.543 55.452-43.916-55.452h-54.895l75.364 88.761V123h46.521V92.668l75.364-88.761zM906.158 3.907V123h46.521V3.907h-46.521zM1150.84 123h46.52V3.907h-46.52v72.386L1028.03 3.907h-46.523V123h46.523V51.916L1150.84 123zM1331.87 126.722c39.82 0 67.92-12.282 84.66-34.798-3.35 11.165-6.32 22.888-6.32 31.076h36.47V61.406h-99.18v19.54h60.66c-18.05 7.07-36.84 10.42-66.99 10.42-51.36 0-71.08-8.746-71.08-26.982 0-20.842 19.72-28.843 67.36-28.843 40.38 0 53.59 8.374 58.24 16.561h48.38C1442.03 20.096 1406.11.185 1337.45.185c-69.97 0-115.93 15.073-115.93 64.199s45.96 62.338 110.35 62.338z" fill="var(--c--theme-fg)" />
                <path id="type-reversed" d="M222.535 73.316h-48.382c-4.652 9.862-17.678 18.05-58.058 18.05-47.637 0-67.362-7.816-67.362-26.982 0-20.842 19.725-28.843 67.362-28.843 40.38 0 53.592 8.374 58.244 20.283h48.382C220.674 20.096 186.621.185 116.095.185 44.267.185.165 15.258.165 64.384s44.102 62.338 115.93 62.338c70.526 0 104.393-17.864 106.44-53.406zM357.707 126.722c81.132 0 112.58-21.586 112.58-63.269 0-41.682-31.448-63.268-112.58-63.268-81.133 0-112.581 21.586-112.581 63.268 0 41.683 31.448 63.269 112.581 63.269zm0-35.356c-38.333 0-64.199-5.583-64.199-27.913s25.866-27.912 64.199-27.912 62.338 5.582 62.338 27.912-24.005 27.913-62.338 27.913zM623.262 92.296c37.217 0 66.99-3.721 66.99-41.869 0-38.147-29.773-46.52-66.99-46.52H494.12V123h46.521V92.296h82.621zm7.257-51.173c7.444 0 13.212 1.489 13.212 9.305 0 7.815-5.768 9.304-13.212 9.304h-89.878V41.123h89.878zM889.353 3.907h-54.895l-43.543 55.452-43.916-55.452h-54.895l75.364 88.761V123h46.521V92.668l75.364-88.761zM906.158 3.907V123h46.521V3.907h-46.521zM1150.84 123h46.52V3.907h-46.52v72.386L1028.03 3.907h-46.523V123h46.523V51.916L1150.84 123zM1331.87 126.722c39.82 0 67.92-12.282 84.66-34.798-3.35 11.165-6.32 22.888-6.32 31.076h36.47V61.406h-99.18v19.54h60.66c-18.05 7.07-36.84 10.42-66.99 10.42-51.36 0-71.08-8.746-71.08-26.982 0-20.842 19.72-28.843 67.36-28.843 40.38 0 53.59 8.374 58.24 16.561h48.38C1442.03 20.096 1406.11.185 1337.45.185c-69.97 0-115.93 15.073-115.93 64.199s45.96 62.338 110.35 62.338z" fill="var(--c--theme-fg)" transform="scale(1 -1) translate(0 -127)" />
            </defs>
        </svg>
    `;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const svgns = 'http://www.w3.org/2000/svg';
    const xlinkns = 'http://www.w3.org/1999/xlink';
    const typeHeight = 126;
    const copyHeight = (800 * h) / (3 * w);
    const copies = Math.ceil(copyHeight / 40);
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

window.onresize = createSVG;
