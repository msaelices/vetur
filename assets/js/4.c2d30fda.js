(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{163:function(e,t,s){"use strict";s.r(t);var i=s(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("Contribution is welcome! There are many ways you could help Vetur's development:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("Comment on feature requests that you'd like to contribute before sending PR.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("Vetur consists of 2 parts")]),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("The language client launches Vue Language Server on port 6005 whenever a Vue file is opened.")]),e._v(" "),s("p",[e._v("To compile:")]),e._v(" "),e._m(7),s("p",[e._v("To debug:")]),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("It should look like this:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("Two ways of using it:")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),s("ul",[e._m(15),e._v(" "),s("li",[e._v("Install "),s("a",{attrs:{href:"https://github.com/SublimeText/PackageDev",target:"_blank",rel:"noopener noreferrer"}},[e._v("PackageDev"),s("OutboundLink")],1),e._v(" if you haven't")]),e._v(" "),s("li",[e._v("F7 to compile yaml grammar to tmLanguage files")]),e._v(" "),e._m(16)]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("PR that fixes grammar & typo or clarify & illustrate usage is welcome.")]),e._v(" "),e._m(20),e._v(" "),e._m(21)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"contribution-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contribution-guide","aria-hidden":"true"}},[this._v("#")]),this._v(" Contribution Guide")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Writing Code")]),this._v(" "),t("li",[this._v("Improving Doc")]),this._v(" "),t("li",[this._v("Managing Issues")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[this._v("#")]),this._v(" Code")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"coding-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coding-style","aria-hidden":"true"}},[this._v("#")]),this._v(" Coding Style")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Prettier with 120 print-width")]),e._v(" "),s("li",[e._v("TSLint")]),e._v(" "),s("li",[s("code",[e._v("const")]),e._v(" over "),s("code",[e._v("let")]),e._v(" whenever possible")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"code-dev-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code-dev-guide","aria-hidden":"true"}},[this._v("#")]),this._v(" Code Dev Guide")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Language Client as a normal VS Code extension")]),this._v(" "),t("li",[this._v("Vue Language Server")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("yarn\n"),s("span",{attrs:{class:"token function"}},[e._v("cd")]),e._v(" server "),s("span",{attrs:{class:"token operator"}},[e._v("&&")]),e._v(" yarn "),s("span",{attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{attrs:{class:"token function"}},[e._v("cd")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\nyarn compile or\nyarn "),s("span",{attrs:{class:"token function"}},[e._v("watch")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("The extension has 2 configurations for debugging i.e client and server.")]),e._v(" "),s("li",[e._v("Run the client configuration first.")]),e._v(" "),s("li",[e._v("As the client launches the language server lazily, open any .vue file so that the server is started.")]),e._v(" "),s("li",[e._v("Run the server configuration which binds the server code to port 6005 to enable debugging.")]),e._v(" "),s("li",[e._v("At this point breakpoints in both server and client code should work.")]),e._v(" "),s("li",[e._v("Alternatively, you can run the 'all' compound debug config too. You need to make sure to open a .vue file within 10 seconds so the server can be started and attached to")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/vuejs/vetur/master/docs/images/debug.png",alt:"VS Code Debugging"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[t("code",[this._v("vetur.dev.vlsPath")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can use this setting to make Vetur load a development version of "),t("code",[this._v("vue-language-server")]),this._v(". Some use cases:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("You fixed a bug in Vetur, but the PR is pending and won't be published anytime soon.")]),this._v(" "),t("li",[this._v("You want to use TS 3.1, but Vetur bundles TS 2.8.")]),this._v(" "),t("li",[this._v("You are contributing to Vetur, and would run alpha/beta/RC versions in your daily development to provide feedback and find bugs.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[s("code",[e._v("yarn global add vue-language-server")]),e._v(" and point the setting to "),s("code",[e._v("yarn global dir")]),e._v(" + "),s("code",[e._v("node_modules/vue-language-server")])]),e._v(" "),s("li",[e._v("Clone this repo, build it and point it to the ABSOLUTE path of "),s("code",[e._v("/server")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"grammar-dev-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grammar-dev-guide","aria-hidden":"true"}},[this._v("#")]),this._v(" Grammar Dev Guide")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Open the yaml files in "),t("code",[this._v("/syntax")]),this._v(" with Sublime Text")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Run the "),t("code",[this._v("client")]),this._v(" debug target in vetur project root")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Tip: In VS Code, use F1 -> Inspect TM Scopes:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/vuejs/vetur/master/docs/images/scope.png",alt:"scope"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"doc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doc","aria-hidden":"true"}},[this._v("#")]),this._v(" Doc")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Issues")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Answer other people's questions")]),this._v(" "),t("li",[this._v("Make & ask for repro cases")])])}],!1,null,null,null);n.options.__file="CONTRIBUTING.md";t.default=n.exports}}]);