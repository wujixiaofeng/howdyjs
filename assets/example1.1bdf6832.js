var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item,index) in imgList&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-img-zoom</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;image&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;num in 9&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;&#x27;fake&#x27;+num&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fake&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ImgZoomDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/img-zoom&#x27;</span>;
<span class="hljs-keyword">import</span> { baseURL } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../global&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-attr">ImgZoom</span>: ImgZoomDirective
  },
  setup () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">imgList</span>: <span class="hljs-built_in">Array</span>.from({ <span class="hljs-attr">length</span>: <span class="hljs-number">9</span> }, <span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> <span class="hljs-string">\`<span class="hljs-subst">\${baseURL}</span>images/img/<span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>.jpg\`</span>)
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.wrapper</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">justify-content</span>: space-around;
  <span class="hljs-attribute">flex-wrap</span>: wrap;
}
<span class="hljs-selector-class">.box</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">45deg</span>, <span class="hljs-number">#bdc3c7</span>, <span class="hljs-number">#2c3e50</span>);
  <span class="hljs-attribute">height</span>: <span class="hljs-number">160px</span>;
  <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">cursor</span>: pointer;
}
<span class="hljs-selector-class">.fake</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">visibility</span>: hidden;
}
<span class="hljs-selector-class">.box</span> <span class="hljs-selector-tag">img</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">object-fit</span>: cover;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
