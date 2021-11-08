var s=`<pre><code class="language-vue"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>
    Absolute\u6A21\u5F0F: \u63A7\u5236absolute\u62D6\u62FD\u5143\u7D20\u53EA\u5141\u8BB8\u5728\u5176\u7236\u5143\u7D20\u4E0B\u8FDB\u884C\u62D6\u62FD.
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-to-drag</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;move-box&quot;</span>&gt;</span>
      DRAG
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { defineComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;
<span class="hljs-keyword">import</span> { ToDragDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../../../../packages/to-drag&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineComponent({
  <span class="hljs-attr">directives</span>: {
    <span class="hljs-string">&#x27;to-drag&#x27;</span>: ToDragDirective
  },
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">isAbsolute</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">needComputeBorder</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">// default is true, will compute parent border width</span>
      }
    };
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.wrapper</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">600px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">4px</span> solid <span class="hljs-number">#262626</span>;
  <span class="hljs-attribute">position</span>: relative;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#889</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-number">#ffe0e0</span>;
}
<span class="hljs-selector-class">.move-box</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">45deg</span>, <span class="hljs-built_in">rgb</span>(<span class="hljs-number">174</span>, <span class="hljs-number">79</span>, <span class="hljs-number">252</span>), <span class="hljs-built_in">rgb</span>(<span class="hljs-number">137</span>, <span class="hljs-number">64</span>, <span class="hljs-number">253</span>));
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">30px</span> <span class="hljs-built_in">rgb</span>(<span class="hljs-number">43</span>, <span class="hljs-number">58</span>, <span class="hljs-number">73</span>);
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">left</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">50%</span> - <span class="hljs-number">40px</span>);
  <span class="hljs-attribute">top</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">50%</span> - <span class="hljs-number">40px</span>);
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.2rem</span>;
  <span class="hljs-attribute">font-weight</span>: bold;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  user-select: none;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
`;export{s as default};
