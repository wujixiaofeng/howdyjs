export default'<h1 id="size-observer">Size Observer</h1>\n<p><strong>监听元素尺寸变化插件</strong></p>\n<h2 id="特性">特性</h2>\n<ol>\n<li>当盒子大小改变时会触发回调函数</li>\n<li>基于JS试验API：<a href="https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API">ResizeObserver</a></li>\n<li>基于<a href="https://github.com/que-etc/resize-observer-polyfill">resize-observer-polyfill</a></li>\n<li>封装了vue指令的形式</li>\n</ol>\n<h2 id="原生使用">原生使用</h2>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> SizeObserver <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/size-observer&#x27;</span>\n<span class="hljs-keyword">const</span> resizeObserve = <span class="hljs-keyword">new</span> SizeObserver({ \n  <span class="hljs-attr">el</span>: <span class="hljs-string">&#x27;#resize&#x27;</span>, <span class="hljs-comment">// Selector or Dom</span>\n  <span class="hljs-attr">options</span>: {\n    <span class="hljs-comment">// Your Options</span>\n    <span class="hljs-comment">// 参考下方说明</span>\n  }\n});\n<span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#x27;#resize&#x27;</span>).addEventListener(<span class="hljs-string">&#x27;sizechange&#x27;</span>, <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {\n  <span class="hljs-comment">// 盒子触发回调，回调参数参考下方说明</span>\n  <span class="hljs-keyword">const</span> { contentRect } = e\n})\n</code></pre>\n<ul>\n<li>UMD CDN: <a href="https://unpkg.com/@howdyjs/size-observer/dist/index.umd.js" target="_blank">https://unpkg.com/@howdyjs/size-observer/dist/index.umd.js</a></li>\n<li>UMD Name: <code>HowdySizeObserver</code></li>\n</ul>\n<h3 id="options-objcet">Options (Objcet)</h3>\n<table>\n<thead>\n<tr>\n<th align="left">参数</th>\n<th align="left">说明</th>\n<th align="left">类型</th>\n<th align="left">可选值</th>\n<th align="left">默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">wait</td>\n<td align="left">节流延迟(ms)</td>\n<td align="left">Number</td>\n<td align="left">-</td>\n<td align="left">0</td>\n</tr>\n<tr>\n<td align="left">immediate</td>\n<td align="left">是否立即先执行一遍回调</td>\n<td align="left">Boolean</td>\n<td align="left">-</td>\n<td align="left">true</td>\n</tr>\n</tbody></table>\n<h3 id="event">Event</h3>\n<ul>\n<li>初始化后，会自动加入一个<code>sizechange</code>的自定义事件监听, 可以在回调中获取到盒子大小变化后的属性。</li>\n</ul>\n<p>回调函数中提供以下参数</p>\n<table>\n<thead>\n<tr>\n<th align="left">参数</th>\n<th align="left">说明</th>\n<th align="left">类型</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">contentRect</td>\n<td align="left">Dom大小改变后的位置信息</td>\n<td align="left">Object</td>\n</tr>\n</tbody></table>\n<p>ContentRect Types</p>\n<pre><code class="language-ts"><span class="hljs-keyword">interface</span> DOMRectReadOnly {\n  <span class="hljs-keyword">readonly</span> x: <span class="hljs-built_in">number</span>;\n  <span class="hljs-keyword">readonly</span> y: <span class="hljs-built_in">number</span>;\n  <span class="hljs-keyword">readonly</span> width: <span class="hljs-built_in">number</span>;\n  <span class="hljs-keyword">readonly</span> height: <span class="hljs-built_in">number</span>;\n  <span class="hljs-keyword">readonly</span> top: <span class="hljs-built_in">number</span>;\n  <span class="hljs-keyword">readonly</span> right: <span class="hljs-built_in">number</span>;\n  <span class="hljs-keyword">readonly</span> bottom: <span class="hljs-built_in">number</span>;\n  <span class="hljs-keyword">readonly</span> left: <span class="hljs-built_in">number</span>;\n}\n</code></pre>\n<h2 id="以vue指令方式使用">以Vue指令方式使用</h2>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { SizeObserverDirective } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@howdyjs/size-observer&#x27;</span>\n<span class="hljs-comment">// Vue3全局引入</span>\napp.use(SizeObserverDirective)\n\n<span class="hljs-comment">// Vue2全局引入(对vue2做了兼容)</span>\nVue.use(SizeObserverDirective)\n\n<span class="hljs-comment">// 组件内引入</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">directive</span>: {\n    <span class="hljs-attr">SizeObserver</span>: SizeObserverDirective\n  }\n}\n</code></pre>\n<p>其余Vue指令使用方式可参考<code>Example</code>.</p>\n';
