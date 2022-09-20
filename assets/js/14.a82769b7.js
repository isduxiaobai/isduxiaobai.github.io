(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{417:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("@"),t("a",{attrs:{href:"%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E6%90%AD%E5%BB%BALAMP%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83"}},[s._v("TOC")])]),s._v(" "),t("p",[t("code",[s._v("在云服务器上安装一套配置了Linux、Apache、MySQL和PHP应用的开发环境。")])]),s._v(" "),t("hr"),s._v(" "),t("h1",{attrs:{id:"登录云服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录云服务器"}},[s._v("#")]),s._v(" 登录云服务器")]),s._v(" "),t("p",[s._v("在购买ECS服务器后，系统会创建一个ECS实例。每一个ECS实例对应一台已购买的云服务器。您可以通过电脑上自带的终端工具访问云服务器，进行应用部署和环境搭建。")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("在ECS实例列表页面，选择实例的所属地域。")])]),s._v(" "),t("li",[t("p",[s._v("找到目标实例，然后在操作列选择 【更多】 >【 密码/密钥 】> 【重置实例密码】，然后在弹出的对话框设置ECS实例的登录密码。")])]),s._v(" "),t("li",[t("p",[s._v("在弹出的页面，单击【立即重启】使新密码生效。")])]),s._v(" "),t("li",[t("p",[s._v("在ECS实例列表页面，复制ECS实例的公网IP地址。")])]),s._v(" "),t("li",[t("p",[s._v("打开电脑上的命令行终端工具。\nWindows：Powershell。\nMAC：Terminal。\nWindows用户请检查系统中是否安装有SSH工具。检查方法：\na.  在终端中输入命令ssh -V。\nssh -V\n如果显示SSH版本则表示已安装，如下图所示。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/e3f945b4fb554046bc5f19b761ca6b06.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("b.  如果未安装，请下载安装OpenSSH工具。")])]),s._v(" "),t("li",[t("p",[s._v("在终端中输入连接命令ssh root@[ipaddress]。\n您需要将其中的 ipaddress 替换为您的ECS服务器的公网IP地址。例如。\nssh root@123.123.123.123\n命令显示结果如下。")])]),s._v(" "),t("li",[t("p",[s._v("输入 yes，然后输入云服务器的登录密码。\n登录成功后会显示如下信息。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/e663667dc519429ca3f0ad4c435cd8a3.png",alt:"在这里插入图片描述"}})])])]),s._v(" "),t("hr"),s._v(" "),t("h1",{attrs:{id:"安装apache服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装apache服务"}},[s._v("#")]),s._v(" 安装Apache服务")]),s._v(" "),t("p",[s._v("Apache是世界使用排名第一的Web服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的Web服务器端软件之一。")]),s._v(" "),t("ol",[t("li",[s._v("在ECS服务器上，执行以下命令，安装Apache服务及其扩展包。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y install httpd httpd-manual mod_ssl mod_perl mod_auth_mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("返回类似如下图结果则表示安装成功。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/45b2ba1ce3a34bc89f146f5b4d513ee5.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("执行以下命令，启动Apache服务。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" httpd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[s._v("返回ECS控制台，在ECS实例列表页面，单击已创建的ECS实例ID链接进入ECS详情页。")])]),s._v(" "),t("li",[t("p",[s._v("在左侧导航栏，单击 本实例安全组，然后单击安全组的ID链接查看安全组配置。")])])]),s._v(" "),t("p",[s._v("确保安全组开放了80端口访问，否则无法访问已搭建的个人网站。安全组是一种虚拟防火墙，具备状态检测和数据包过滤能力，用于在云端划分安全域。通过配置安全组规则，您可以控制安全组内一台或多台ECS实例的入流量和出流量。")]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("测试Apache服务是否安装并启动成功。\nApache默认监听80端口，所以只需在浏览器访问ECS分配的IP地址"),t("code",[s._v("http://<ECS公网IP>")]),s._v("，如下图。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/53f5e7c83d20473b959b5d40437dd07b.png",alt:"在这里插入图片描述"}})])]),s._v(" "),t("hr"),s._v(" "),t("h1",{attrs:{id:"安装mysql数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql数据库"}},[s._v("#")]),s._v(" 安装MySQL数据库")]),s._v(" "),t("ol",[t("li",[s._v("执行以下命令，下载并安装MySQL。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("wget http:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com/get/mysql57-community-release-el7-10"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("noarch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rpm &&\nyum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y install mysql57-community-release-el7-10"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("noarch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rpm &&\nyum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y install mysql-community-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[t("code",[s._v("出现如图所示报错信息")]),s._v("\n参考:"),t("a",{attrs:{href:"https://blog.csdn.net/weixin_53768277/article/details/124119115",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决安装MySql失败"),t("OutboundLink")],1),s._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/6cacb99907c046d0ada5feb6e6919063.png",alt:"在这里插入图片描述"}})])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("执行以下命令，启动MySQL数据库。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("执行以下命令，查看MySQL初始密码。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("grep "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log/mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("执行以下命令，登录数据库。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("执行以下命令，修改MySQL默认密码。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" global validate_password_policy=0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改密码安全策略为低（只校验密码长度，至少8位）。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("ALTER USER "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12345678'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("执行以下命令，授予root用户远程管理权限。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("GRANT ALL PRIVILEGES ON "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" TO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12345678'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("输入exit退出数据库。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/570392aa6f4842349af1110d2ec6a815.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("hr"),s._v(" "),t("h1",{attrs:{id:"安装php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装php"}},[s._v("#")]),s._v(" 安装PHP")]),s._v(" "),t("ol",[t("li",[s._v("执行如下命令，安装PHP环境。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y install php php-mysql gd php-gd gd-devel php-xml php-common php-mbstring php-ldap php-pear php-xmlrpc php-imap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("执行如下命令创建PHP测试页面。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<?php phpinfo(); ?>"')]),s._v(" > "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www/html/phpinfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("执行如下命令，重启Apache服务。")])]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("systemctl restart httpd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("打开浏览器，访问"),t("code",[s._v("http://<ECS公网IP>/phpinfo.php")]),s._v("，显示如下页面表示PHP语言环境安装成功。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/34f86b0d61474e38b287b1216c59afc1.png",alt:"在这里插入图片描述"}})])]),s._v(" "),t("hr"),s._v(" "),t("h1",{attrs:{id:"创建环境副本-可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建环境副本-可选"}},[s._v("#")]),s._v(" 创建环境副本（可选）")]),s._v(" "),t("p",[s._v("至此已完成开发环境的搭建。环境搭建完成后，可以将配置环境通过自定义镜像制作成环境副本保存下来。\n"),t("code",[s._v("注：使用快照服务会产生少量费用。")])]),s._v(" "),t("ol",[t("li",[s._v("登录ECS管理控制台。")]),s._v(" "),t("li",[s._v("若初次使用快照，参考以下操作开通快照服务。\na.  在左侧导航栏，单击 【存储与快照】 > 【快照】。\nb.  在弹出的通知对话框中，阅读开通声明，然后单击 【确定】 开通快照。")]),s._v(" "),t("li",[s._v("在ECS实例列表页，单击目标实例的 【管理】 链接，进入实例详情页。")]),s._v(" "),t("li",[s._v("在 【本实例云盘】 页面，单击 【创建快照】 。")]),s._v(" "),t("li",[s._v("填写快照名称，单击 【创建 】。")]),s._v(" "),t("li",[s._v("在【本实例快照】 页面，等待快照创建完成，单击 【创建自定义镜像】 。")]),s._v(" "),t("li",[s._v("填写 自定义镜像名称 和 自定义镜像描述 ，单击【创建】 。")]),s._v(" "),t("li",[s._v("在 【镜像列表】页可以看到刚才创建的自定义镜像。")])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("Authors\n:  杜小白")])])}),[],!1,null,null,null);t.default=r.exports}}]);