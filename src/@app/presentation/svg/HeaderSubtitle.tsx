import React from "react";

export const HeaderSubtitle: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => (
  <svg viewBox="0 0 255 25" {...props}>
    <g fill="#2a2a2a" fillRule="evenodd">
      <path d="M82 11h4v4h-4zM149 11h4v4h-4z" />
      <g fillRule="nonzero">
        <path d="M109.95 6.475V19.05c0 1.817-.45 3.192-1.35 4.125s-2.225 1.4-3.975 1.4c-1.867 0-3.492-.45-4.875-1.35l.3-1.325c.817.483 1.567.825 2.25 1.025s1.467.3 2.35.3c1.25 0 2.196-.342 2.837-1.025.642-.683.963-1.683.963-3v-3.225c-.383.85-.95 1.504-1.7 1.962s-1.65.688-2.7.688c-1.1 0-2.075-.262-2.925-.788s-1.512-1.258-1.987-2.2-.713-2.02-.713-3.237c0-1.233.237-2.32.713-3.263.475-.941 1.137-1.67 1.987-2.187s1.825-.775 2.925-.775c1.05 0 1.946.217 2.688.65s1.304 1.067 1.687 1.9v-2.25zm-5.7 10.775c1.3 0 2.32-.433 3.063-1.3s1.112-2.05 1.112-3.55c0-1.517-.37-2.712-1.113-3.588S105.55 7.5 104.25 7.5c-1.317 0-2.35.437-3.1 1.312s-1.125 2.071-1.125 3.588.375 2.704 1.125 3.562 1.783 1.288 3.1 1.288zM119.5 6.175c.417 0 .783.033 1.1.1l-.075 1.375c-.317-.067-.7-.1-1.15-.1-1.267 0-2.212.404-2.838 1.213-.625.808-.937 1.77-.937 2.887V19h-1.5V9.95c0-1.3-.067-2.458-.2-3.475h1.45l.2 2.325c.317-.85.83-1.5 1.537-1.95s1.513-.675 2.413-.675zM122.825 19V6.475h1.5V19zM122.6 1.3h2.025v1.95H122.6zm5.925 17.7V.6h1.5V19zm5.7 0V.6h1.5V19zM6.338 6.175c1.1 0 2.07.27 2.912.813.842.541 1.496 1.308 1.962 2.3.467.991.7 2.137.7 3.437s-.229 2.433-.687 3.4-1.112 1.717-1.962 2.25c-.85.533-1.825.8-2.926.8-1.05 0-1.945-.23-2.687-.688-.742-.458-1.296-1.12-1.663-1.987v7.9h-1.5V9.95c0-1.3-.066-2.458-.2-3.475h1.45l.2 2.45c.367-.883.93-1.562 1.688-2.038.758-.475 1.662-.712 2.712-.712zm-.2 11.65c1.316 0 2.341-.446 3.075-1.337s1.1-2.146 1.1-3.763c0-1.633-.367-2.912-1.1-3.837-.734-.926-1.75-1.388-3.05-1.388-1.334 0-2.359.45-3.075 1.35s-1.075 2.175-1.075 3.825c0 1.633.358 2.9 1.075 3.8s1.733 1.35 3.05 1.35zm19.75-11.35V19h-1.526v-2.4c-.366.833-.92 1.47-1.662 1.913s-1.63.662-2.663.662c-1.116 0-2.095-.262-2.937-.787s-1.492-1.275-1.95-2.25-.688-2.113-.688-3.413.234-2.446.7-3.437c.467-.992 1.121-1.759 1.963-2.3.842-.542 1.812-.813 2.912-.813 1.017 0 1.896.217 2.638.65s1.304 1.067 1.687 1.9v-2.25zm-5.626 11.35c1.3 0 2.309-.45 3.025-1.35.717-.9 1.075-2.167 1.075-3.8 0-1.65-.358-2.925-1.075-3.825-.716-.9-1.733-1.35-3.05-1.35-1.316 0-2.341.462-3.075 1.387-.733.926-1.1 2.205-1.1 3.838 0 1.617.367 2.87 1.1 3.762s1.767 1.338 3.1 1.338zm13.85 1.35c-2.033 0-3.641-.558-4.825-1.675l.55-1.175c.667.55 1.338.942 2.013 1.175s1.454.35 2.337.35c1.034 0 1.821-.18 2.363-.537s.813-.88.813-1.563c0-.567-.18-1.012-.538-1.337s-.946-.588-1.763-.788l-2.125-.475c-1-.233-1.787-.65-2.362-1.25s-.863-1.3-.863-2.1c0-1.1.421-1.98 1.263-2.638.842-.658 1.962-.987 3.362-.987.884 0 1.705.142 2.463.425s1.387.692 1.887 1.225L38.112 9c-1.15-1-2.408-1.5-3.775-1.5-.966 0-1.716.192-2.25.575s-.8.917-.8 1.6c0 .567.171 1.025.513 1.375.342.35.87.608 1.587.775l2.15.525c2.25.5 3.375 1.608 3.375 3.325 0 1.05-.433 1.896-1.3 2.538s-2.033.962-3.5.962zM44.512 7.7v7.45c0 1 .192 1.692.575 2.075.384.383.95.575 1.7.575.467 0 .917-.075 1.35-.225v1.375c-.533.133-1.074.2-1.624.2-1.1 0-1.963-.308-2.588-.925s-.937-1.542-.937-2.775V7.7h-2.475V6.475h2.475V3.15l1.525-.575v3.9h3.7V7.7zm11.7-1.525c.417 0 .784.033 1.1.1l-.075 1.375c-.316-.067-.7-.1-1.15-.1-1.266 0-2.212.404-2.837 1.213-.625.808-.938 1.77-.938 2.887V19h-1.5V9.95c0-1.3-.066-2.458-.2-3.475h1.45l.2 2.325c.317-.85.83-1.5 1.538-1.95s1.512-.675 2.413-.675zm13.95.3l-5.9 13.825c-.583 1.367-1.312 2.37-2.187 3.013s-1.97 1.095-3.288 1.362l-.3-1.2c1.2-.283 2.105-.65 2.713-1.1s1.12-1.158 1.537-2.125l.525-1.225-5.35-12.55h1.625l4.525 11 4.55-11zM171.262 19.175c-1.183 0-2.216-.267-3.1-.8s-1.566-1.287-2.05-2.263-.725-2.104-.725-3.387c0-1.3.242-2.446.725-3.437.484-.992 1.175-1.759 2.075-2.3.9-.542 1.942-.813 3.125-.813.85 0 1.663.146 2.438.438.775.291 1.412.695 1.912 1.212l-.6 1.2c-.65-.533-1.27-.92-1.862-1.163a4.815 4.815 0 00-1.838-.362c-1.35 0-2.416.462-3.2 1.388-.783.925-1.175 2.204-1.175 3.837 0 1.6.388 2.85 1.163 3.75s1.846 1.35 3.212 1.35c.634 0 1.246-.12 1.838-.362s1.212-.621 1.862-1.138l.6 1.175c-.533.517-1.195.925-1.987 1.225s-1.596.45-2.413.45zm17.8-12.7V19h-1.525v-2.4c-.366.833-.92 1.47-1.662 1.913s-1.63.662-2.663.662c-1.116 0-2.095-.262-2.937-.787s-1.492-1.275-1.95-2.25-.687-2.113-.687-3.413.233-2.446.7-3.437c.466-.992 1.12-1.759 1.962-2.3.842-.542 1.812-.813 2.913-.813 1.016 0 1.895.217 2.637.65s1.304 1.067 1.688 1.9v-2.25zm-5.625 11.35c1.3 0 2.309-.45 3.025-1.35s1.076-2.167 1.076-3.8c0-1.65-.359-2.925-1.076-3.825s-1.733-1.35-3.05-1.35-2.341.462-3.075 1.388c-.733.925-1.1 2.204-1.1 3.837 0 1.617.367 2.87 1.1 3.763s1.767 1.337 3.1 1.337zm11.9-10.125v7.45c0 1 .192 1.692.576 2.075.383.383.95.575 1.7.575.466 0 .916-.075 1.35-.225v1.375c-.534.133-1.075.2-1.626.2-1.1 0-1.962-.308-2.587-.925-.625-.617-.938-1.542-.938-2.775V7.7h-2.475V6.475h2.475V3.15l1.525-.575v3.9h3.7V7.7zm16.6 4.85h-9.5v.075c0 1.683.388 2.97 1.163 3.863s1.904 1.337 3.388 1.337c1.5 0 2.874-.517 4.124-1.55l.6 1.2c-.55.517-1.25.93-2.1 1.237s-1.724.463-2.625.463c-1.9 0-3.4-.575-4.5-1.725-1.1-1.15-1.65-2.733-1.65-4.75 0-1.283.246-2.42.738-3.413.492-.991 1.18-1.758 2.063-2.3.883-.541 1.9-.812 3.05-.812 1.65 0 2.937.533 3.862 1.6s1.387 2.55 1.387 4.45zm-5.25-5.125c-1.15 0-2.083.346-2.8 1.038s-1.166 1.662-1.35 2.912h7.95c-.1-1.283-.474-2.262-1.125-2.937-.65-.676-1.541-1.013-2.675-1.013zm13.925-1.25c.417 0 .784.033 1.1.1l-.074 1.375c-.317-.067-.7-.1-1.15-.1-1.267 0-2.213.404-2.838 1.213-.625.808-.938 1.77-.938 2.887V19h-1.5V9.95c0-1.3-.066-2.458-.2-3.475h1.45l.2 2.325c.317-.85.83-1.5 1.538-1.95s1.512-.675 2.413-.675zM223.939 19V6.475h1.5V19zm-.225-17.7h2.025v1.95h-2.025zm11.75 4.875c3.016 0 4.525 1.617 4.525 4.85V19h-1.525v-7.875c0-1.25-.255-2.167-.763-2.75s-1.304-.875-2.387-.875c-1.25 0-2.259.383-3.025 1.15-.767.767-1.15 1.8-1.15 3.1V19h-1.5V9.95c0-1.3-.067-2.458-.2-3.475h1.45l.2 2.3c.383-.85.958-1.496 1.725-1.938.766-.441 1.65-.662 2.65-.662zm13.45 0c1.05 0 1.945.217 2.687.65s1.304 1.067 1.688 1.9v-2.25h1.524V19.05c0 1.817-.45 3.192-1.35 4.125-.9.933-2.224 1.4-3.974 1.4-1.867 0-3.492-.45-4.875-1.35l.3-1.325c.816.483 1.566.825 2.25 1.025s1.466.3 2.35.3c1.25 0 2.195-.342 2.837-1.025.642-.683.963-1.683.963-3v-3.225c-.384.85-.95 1.504-1.7 1.962s-1.65.688-2.7.688c-1.1 0-2.075-.262-2.925-.787s-1.513-1.259-1.988-2.2-.712-2.021-.712-3.238c0-1.233.237-2.32.712-3.263.475-.941 1.137-1.67 1.988-2.187s1.824-.775 2.925-.775zm.2 1.325c-1.317 0-2.35.437-3.1 1.313s-1.126 2.07-1.126 3.587c0 1.517.375 2.704 1.125 3.563s1.784 1.287 3.1 1.287c1.3 0 2.321-.433 3.063-1.3s1.112-2.05 1.112-3.55c0-1.517-.37-2.712-1.112-3.588S250.413 7.5 249.112 7.5z" />
      </g>
    </g>
  </svg>
);
