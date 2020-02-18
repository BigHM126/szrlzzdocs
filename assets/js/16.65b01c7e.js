(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{222:function(t,v,_){"use strict";_.r(v);var i=_(0),s=Object(i.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"安装指南"}},[t._v("安装指南")]),t._v(" "),_("h2",{attrs:{id:"安装顺序"}},[t._v("安装顺序")]),t._v(" "),_("p",[_("code",[t._v("安装过程中请严格遵守以下安装顺序，并确保每一过程都按要求完成后再继续。")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("ERP环境检查")])]),t._v(" "),_("li",[_("p",[t._v("ERP服务器端补丁更新")])]),t._v(" "),_("li",[_("p",[t._v("ERP服务器端1P插件安装")])]),t._v(" "),_("li",[_("p",[t._v("MES服务器环境检查")])]),t._v(" "),_("li",[_("p",[t._v("ERP服务器或MES服务器环境检查有异常，请务必先修复，然后再继续下一步")])]),t._v(" "),_("li",[_("p",[t._v("MES服务器端安装")])])]),t._v(" "),_("h2",{attrs:{id:"安装环境要求"}},[t._v("安装环境要求")]),t._v(" "),_("h3",{attrs:{id:"硬件环境要求"}},[t._v("硬件环境要求")]),t._v(" "),_("blockquote",[_("p",[t._v("基本准则")])]),t._v(" "),_("ol",[_("li",[t._v("独立部署，MES服务器内存必须大于16G;有效内存不低于8G;")]),t._v(" "),_("li",[t._v("集中部署，MES服务器内存必须大于32G;有效内存不低于12G;")])]),t._v(" "),_("blockquote",[_("p",[t._v("推荐配置")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("项目")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("要求")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("处理器（CPU）")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("四核以上，主频2.66G以上")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("内存（RAM）")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("64GB以上")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("硬盘（HD）")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("5*1T以上，RAID5+热备（SAS HD，10Krpm或以上）")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("注意事项：\n-   推荐配置磁盘阵列，至少4张10K转/分的硬盘以上制作Raid0+1或RAID5+热备。\n-   建议服务器内存增加到64G，现硬件发展十分迅速，上述处理器是最低配置建议。\n-   使用最低配置不保证运行效率，但正常运行系统没有问题。\n-   数据库服务器硬盘空间要大，建议容量2TB以上，有数据保护机制，数据库分区1.5TB以上。\n-   必须使用原版安装操作系统，不能使用被修改过的Ghost 版本。\n\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br")])]),_("h3",{attrs:{id:"软件环境要求"}},[t._v("软件环境要求")]),t._v(" "),_("blockquote",[_("p",[t._v("服务器操作系统要求")])]),t._v(" "),_("p",[t._v("服务器支持：")]),t._v(" "),_("ul",[_("li",[t._v("Windows Server 2008 R2 X64（SP1以上）")]),t._v(" "),_("li",[t._v("Windows Server2012 R2 Standard X64")]),t._v(" "),_("li",[t._v("Windows 7旗舰版 X64")]),t._v(" "),_("li",[t._v("Windows 10专业版 X64")])]),t._v(" "),_("blockquote",[_("p",[t._v("服务器数据库及其版本要求")])]),t._v(" "),_("ul",[_("li",[t._v("SQL Server 2012及以上版本")]),t._v(" "),_("li",[_("code",[t._v("**SQL Server 2008不支持")])])]),t._v(" "),_("h3",{attrs:{id:"erp环境要求"}},[t._v("ERP环境要求")]),t._v(" "),_("ul",[_("li",[t._v("用友软件U8+的版本要求")])]),t._v(" "),_("blockquote",[_("p",[t._v("U8+必要补丁安装")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('推荐安装U8版本为U8+V13.0，并打了文件名尾部为"-FS"、"-ST"、"InterfaceChangeFiles"的补丁文件：\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ul",[_("li",[_("p",[t._v("KB-U8V13.0-XXXXXX-XXXXXX-InterfaceChangeFiles.msi")])]),t._v(" "),_("li",[_("p",[t._v("CP-U8V13.0-XXXXX-XXXXXX-FS.msi")])]),t._v(" "),_("li",[_("p",[t._v("CP-U8V13.0-XXXXX-XXXXXX-ST.msi")])]),t._v(" "),_("li",[_("p",[t._v("其它ERP软件要求")]),t._v(" "),_("p",[_("em",[t._v("待续")])])])]),t._v(" "),_("h3",{attrs:{id:"客户端要求"}},[t._v("客户端要求")]),t._v(" "),_("ul",[_("li",[t._v("客户端必须是中文版本的WIN7(打SP1补丁)、WIN8、Windows server\n2008、Windows Server 2012、WIN10")]),t._v(" "),_("li",[t._v("安装谷歌Chrome浏览器，浏览器的版本为56以上。")]),t._v(" "),_("li",[_("code",[t._v("WinXP不支持")])])]),t._v(" "),_("h2",{attrs:{id:"安装注意事项"}},[t._v("安装注意事项")]),t._v(" "),_("blockquote",[_("p",[t._v("ERP服务器注意事项")])]),t._v(" "),_("ul",[_("li",[t._v("安装U8插件：必须要先安装Framework4.6.1程序")]),t._v(" "),_("li",[t._v("安装U8插件：请确认服务器计算机已经安装了")]),t._v(" "),_("li",[t._v("安装过程中需要使用"),_("code",[t._v("ERP账套管理员")]),t._v("账号和密码，请确认正确可用")]),t._v(" "),_("li",[t._v("安装过程中需要使用"),_("code",[t._v("数据库管理员")]),t._v("账号和密码，请确认正确可用")])]),t._v(" "),_("blockquote",[_("p",[t._v("MES服务器注意事项")])]),t._v(" "),_("ul",[_("li",[t._v("安装MES：建议操作系统Server 2012中文X64位及以上版本。")]),t._v(" "),_("li",[t._v("安装MES：请确认安装 X64位 SQL Server2012或以上版本。建议数据库系统为:SQL Server 2012中文X64位企业版。")]),t._v(" "),_("li",[t._v("安装MES：如果操作系统为windows server 2008,则需要执行安装盘plugins目录下的vcredist_x64.exe文件。")]),t._v(" "),_("li",[t._v("安装MES：MES应用服务器必须要先安装Framework2.6程序。")]),t._v(" "),_("li",[t._v("安装MES：必须在服务器电脑上安装google浏览器。")]),t._v(" "),_("li",[t._v("安装过程中需要使用"),_("code",[t._v("数据库管理员")]),t._v("账号和密码，请确认正确可用")])]),t._v(" "),_("blockquote",[_("p",[t._v("应用客户终端注意事项")])]),t._v(" "),_("ul",[_("li",[t._v("ERP服务器未按"),_("code",[t._v("U8+必要补丁安装")]),t._v("要求，客户端将无法正常访问，")]),t._v(" "),_("li",[t._v("Windows自带防护墙已关闭（如果打开防火墙，请将U8服务的13391端口设置为允许访问），并已启用IIS中的ASP服务")]),t._v(" "),_("li",[t._v("有关防护墙和端口设置请联络本企业IT管理员")])]),t._v(" "),_("h2",{attrs:{id:"安装前检查"}},[t._v("安装前检查")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("确保SQL SERVER服务器的TCP/IP协议启用。\nTCP/IP启用的详情设置如下：\n"),_("a",{attrs:{href:""}},[t._v("图片")])])]),t._v(" "),_("li",[_("p",[t._v("集中部署时，请确保MES数据库必须要与U8的数据库在同一个实例下；")])]),t._v(" "),_("li",[_("p",[t._v("MES安装目录所在的磁盘的最少可用空间必须大于5G的磁盘空间，在真实运行时请尽量为其分配大于100GB空间，因为在程序运行时会产生日志，这些日志文件会随着程序运行的时间增长而增大;")])]),t._v(" "),_("li",[_("p",[t._v("MES安装的可用内存必须大于5G。MES在WINDOWS运行需要至少5GB可用内存，可用内存不是指硬件安装的内存容量，而是指当前系统中可用的内存余额")])])]),t._v(" "),_("p",[_("code",[t._v("例如：安装的内存为8GB，在安装R9时，系统中已用内存 26%,约2.1GB，可用的内存余额只有5.9G。将发生运行时错误。")])]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[t._v("服务器可能会误杀安装文件，请确保防火墙已关闭或信任所有安装文件。")])]),t._v(" "),_("h2",{attrs:{id:"用友oem版本集中部署，服务器端安装"}},[t._v("用友OEM版本集中部署，服务器端安装")]),t._v(" "),_("ol",[_("li",[t._v('运行HY-U8V13.0-38801-xxxxxx-1P.msi文件，自动弹出安装欢迎界面。如想取消安装可以选择"取消"操作；选择"下一步"继续安装程序。')])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image5.png",alt:"图片"}})]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("确认许可协议")])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image6.png",alt:"图片"}})]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("确认安装")])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image7.png",alt:"图片"}})]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("选择要与MES建立接口的账套，执行脚本。")])]),t._v(" "),_("p",[t._v("1）、按任意键继续。")]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image8.png",alt:"图片"}})]),t._v(" "),_("p",[t._v("2）、执行数据库操作。")]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image9.png",alt:"图片"}}),t._v(" "),_("img",{attrs:{src:"media/image10.png",alt:"图片"}})]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('说明：\n\n1.  录入数据库服务器的电脑名或IP地址，本地用localhost也可以，对应操作"1"；\n\n2.  录入数据库的用户名和密码，对应操作"2"；\n\n3.  单击"测试连接"，查看能否连接数据库服务器，对应操作"3"；\n\n4.  选择要与MES建立接口的U8账套，不关联的不选择，对应操作"4"；\n\n5.  单击"开始执行"，执行数据脚本，对应操作"5"；\n\n6.  单击"取消"，退出安装。\n\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br")])]),_("ol",{attrs:{start:"5"}},[_("li",[t._v("数据库操作完成。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image11.png",alt:"图片"}})]),t._v(" "),_("ol",{attrs:{start:"6"}},[_("li",[t._v("服务器插件安装完成。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image12.png",alt:"图片"}})]),t._v(" "),_("ol",{attrs:{start:"7"}},[_("li",[t._v("启用MES模块。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image13.png",alt:"图片"}})]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('说明：\n\n1）、单击"基础设置"，对应操作"1"；\n\n2）、单击"基本信息"，对应操作"2"；\n\n3）、单击"系统启用"，对应操作"3"；\n\n4）、单击"生产MES插件"选择启用机械行业MES插件，\n\n对应操作"4"。\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br")])]),_("ol",{attrs:{start:"8"}},[_("li",[t._v('安装成功并且在模块启用中启用了"机械行业MES"后，在U8中呈现如下结果。')])]),t._v(" "),_("p",[t._v('1)、菜单中增加"生产制造/生产MES插件"')]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image14.png",alt:"图片"}})]),t._v(" "),_("blockquote",[_("p",[t._v('2）、单击"选项"，弹出窗口，用来设置MES与U8的接口地址和MES打开地址。')])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image15.png",alt:"图片"}})]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('说明：\n\n1）、U8API地址格式：http:// XXX.XXX.X.XXX:13391\n\n2）、MES地址格式：<http://XXX.XXX.X.XXX:8080>\n\n3）、保存。\n\n注意：端口13391或8080一般不会被占用，若被占用，则在IIS服务器中重新设置这2个用用的端口，确认能访问后，再将正确，没有被占用的端口手工填些在这个界面。\n\n3）、单击"访问MES"，用来打开MES应用程序。\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br")])]),_("h3",{attrs:{id:"_4-1-3-mes在u8的配置"}},[_("strong",[t._v("4.1.3. MES在U8的配置")])]),t._v(" "),_("h4",{attrs:{id:"在u8中设置登陆mes接口"}},[t._v("在U8中设置登陆MES接口")]),t._v(" "),_("p",[t._v("登陆操作说明：")]),t._v(" "),_("p",[t._v("1、登陆用户必须在MES和U8中必须同时存在，密码可以不必相同，但是MES配置的接口账套编码必须与登陆的U8账套一致；")]),t._v(" "),_("p",[t._v("2、MES地址配置")]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image18.png",alt:""}}),t._v('{width="5.768055555555556in"\nheight="2.529861111111111in"}')]),t._v(" "),_("p",[t._v("操作说明：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v('单击"生产制造"，对应操作"1"；')])]),t._v(" "),_("li",[_("p",[t._v('单击"生产MES插件"，对应操作"2"；')])]),t._v(" "),_("li",[_("p",[t._v('单击"选项"，对应操作"3"；')])]),t._v(" "),_("li",[_("p",[t._v('录入"U8API地址"，即设置读写U8数据的接口地址。U8API地址格式：'),_("a",{attrs:{href:"http://ip:%E7%AB%AF%E5%8F%A3%E5%8F%B7%EF%BC%88%E9%BB%98%E8%AE%A4%EF%BC%9A13391",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ip:端口号（默认：13391"),_("OutboundLink")],1),t._v('），对应操作"5"；')])]),t._v(" "),_("li",[_("p",[t._v('录入"MES地址"，即设置登陆MES的地址。MES地址格式：'),_("a",{attrs:{href:"http://ip:%E7%AB%AF%E5%8F%A3%E5%8F%B7%EF%BC%88%E9%BB%98%E8%AE%A4%EF%BC%9A8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ip:端口号（默认：8080"),_("OutboundLink")],1),t._v('），对应操作"6"；')])]),t._v(" "),_("li",[_("p",[t._v('单击"保存"，保存修改内容，对应操作"7"。')])])]),t._v(" "),_("h4",{attrs:{id:"修改-uwinapi-端口的方法"}},[t._v('修改"UWinAPI"端口的方法')]),t._v(" "),_("p",[t._v("若从U8登陆MES需要的UWinAPI端口被占用，则需要在IIS管理器来修改这个被占用的端口。")]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image19.png",alt:""}}),t._v('{width="5.768055555555556in"\nheight="3.5909722222222222in"}')]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image20.png",alt:""}}),t._v('{width="5.768055555555556in"\nheight="2.8465277777777778in"}')]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image21.png",alt:""}}),t._v('{width="5.768055555555556in"\nheight="3.8208333333333333in"}')]),t._v(" "),_("p",[t._v("操作说明：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v('打开windows server 服务器的"控制面板"中的"管理工具"，对应操作"1"；')])]),t._v(" "),_("li",[_("p",[t._v('打开"iis管理器"，对应操作"2"；')])]),t._v(" "),_("li",[_("p",[t._v('在打开的新窗口中，单击iis服务器，对应操作"3"；')])]),t._v(" "),_("li",[_("p",[t._v('单击"网站"，对应操作"4"；')])]),t._v(" "),_("li",[_("p",[t._v('单击"UWinAPI",对应操作"5"；')])]),t._v(" "),_("li",[_("p",[t._v('单击右则工具栏的"绑定"，对应操作"6"；')])]),t._v(" "),_("li",[_("p",[t._v('在新窗口中单击网站行，对应操作"7"；')])]),t._v(" "),_("li",[_("p",[t._v('单击"编辑"，对应操作"8"；')])]),t._v(" "),_("li",[_("p",[t._v('在新弹出窗口录入新的端口号，对应操作"9"；')])]),t._v(" "),_("li",[_("p",[t._v('单击"保存"，保存修改结果；')])]),t._v(" "),_("li",[_("p",[t._v('单击"放弃"，不保存修改内容；')])]),t._v(" "),_("li",[_("p",[t._v('若此端口被修改，则MES的账套信息中"读取服务地址"和"写入服务地址"的端口号也需要修改一致。')])])]),t._v(" "),_("h4",{attrs:{id:"修改-mes地址-端口的方法"}},[t._v('修改"MES地址"端口的方法')]),t._v(" "),_("p",[t._v('若"MES地址"端口被占用，需要修改。必须先在MES服务管理器中修改，然后在MES接口设置中修改为新端口。')]),t._v(" "),_("p",[t._v("一、在MES中操作。"),_("img",{attrs:{src:"media/image22.png",alt:""}}),t._v('{width="5.7701115485564305in"\nheight="5.041036745406824in"}')]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image23.png",alt:""}}),t._v('{width="3.1458333333333335in"\nheight="2.0833333333333335in"}')]),t._v(" "),_("p",[t._v("操作说明：")]),t._v(" "),_("p",[t._v('1、 打开MES服务管理器，对应操作 "1"；')]),t._v(" "),_("p",[t._v('2、 单击"r9-oem-web\nv1.0.yyoem"，单击鼠标右键，弹出菜单，在菜单中单击"设置端口启用"，对应操作"2"；')]),t._v(" "),_("p",[t._v('3、 录入新的端口号，对应操作"3"；')]),t._v(" "),_("p",[t._v('4、 单击"保存"，对应操作"4"；')]),t._v(" "),_("p",[t._v("二、在U8中操作")]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image18.png",alt:""}}),t._v('{width="5.768055555555556in"\nheight="2.529861111111111in"}')]),t._v(" "),_("p",[t._v("操作说明：")]),t._v(" "),_("p",[t._v('1、 单击"生产制造"，对应操作"1"；')]),t._v(" "),_("p",[t._v('2、 单击"生产MES插件"，对应操作"2"；')]),t._v(" "),_("p",[t._v('3、 单击"选项"，对应操作"3"；')]),t._v(" "),_("p",[t._v('4、\n录入"MES地址"，修改端口号与MES设置的一致，即设置登陆MES的地址。MES地址格式：http://ip:端口号（默认：8080），对应操作"6"；')]),t._v(" "),_("p",[t._v('5、 单击"保存"，保存修改内容，对应操作"7"。')]),t._v(" "),_("h4",{attrs:{id:"在u8中登陆mes"}},[t._v("在U8中登陆MES")]),t._v(" "),_("p",[t._v("用来在U8中直接以U8当前用户登陆MES。")]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image18.png",alt:""}}),t._v('{width="5.768055555555556in"\nheight="2.529861111111111in"}')]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image24.png",alt:""}}),t._v('{width="5.768055555555556in"\nheight="1.6472222222222221in"}')]),t._v(" "),_("p",[t._v("登陆操作说明：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("登陆用户必须在MES和U8中必须同时存在，密码可以不必相同，但是MES配置的接口账套编码必须与登陆的U8账套一致；")])]),t._v(" "),_("li",[_("p",[t._v('单击"生产制造"，对应操作"1"；')])]),t._v(" "),_("li",[_("p",[t._v('单击"生产MES插件"，对应操作"2"；')])]),t._v(" "),_("li",[_("p",[t._v('单击"访问MES",对应操作"4"；')])]),t._v(" "),_("li",[_("p",[t._v('安装U8的用户及权限直接登陆MES,对应显示"8"。')]),t._v(" "),_("ol",[_("li",[_("h2",{attrs:{id:"mes安装"}},[t._v("MES安装")]),t._v(" "),_("ol",[_("li",[_("h3",{attrs:{id:"mes安装-2"}},[t._v("MES安装")])])])])]),t._v(" "),_("div",{staticClass:"language-{=html} line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\x3c!-- --\x3e\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("strong",[t._v("将安装文件u8-mes-x64.zip解压，然后双击运行安装程序setup.exe文件。")])])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image25.png",alt:""}}),t._v('{width="5.759697069116361in"\nheight="2.760071084864392in"}')]),t._v(" "),_("p",[_("strong",[t._v("说明：")])]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v('单击"u8-mes-x64.zip"等文件复制到本地硬盘，然后用解压软件解压；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('执行"setup.exe"安装程序，对应操作"1"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('选择安装目录，安装目录中不可以包含空格以及特殊字符，对应操作"2"，目录所在磁盘的空间必须大于5G,因为有日志需要记录，在安装后可能需要更多的空间，目录所在的空间最少要大于10G；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('执行后续安装过程，对应操作"3"；')])]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("在弹出的窗口中录入数据库信息，界面如下。")])])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image26.png",alt:""}}),t._v('{width="5.2910050306211724in"\nheight="4.0619925634295715in"}')]),t._v(" "),_("p",[_("strong",[t._v("说明：")])]),t._v(" "),_("p",[_("strong",[t._v('1）、主机地址：就是部署MES的电脑的IP,对应操作"1"；')])]),t._v(" "),_("p",[_("strong",[t._v("2）、连接端口：：就是SQL SERVER数据库设置的端口，默认为")])]),t._v(" "),_("p",[_("strong",[t._v('1433，一般不用改；对应操作"5"；')])]),t._v(" "),_("p",[_("strong",[t._v("3）、登陆账号：就是能登陆SQL SERVER并有权限进行读写操作")])]),t._v(" "),_("p",[_("strong",[t._v('的用户，一般用sa,对应操作"6"；')])]),t._v(" "),_("p",[_("strong",[t._v('4）、登陆密码：是登陆账号的密码,对应操作"7"；')])]),t._v(" "),_("p",[_("strong",[t._v("5）、测试连接：测试是否与SQL SERVER是否能连接，保障后面")])]),t._v(" "),_("p",[_("strong",[t._v("的操作能进行，都会返回能连接或不能连接的提示，若不能")])]),t._v(" "),_("p",[_("strong",[t._v("连接，则需要查找原因，直到可以正常连接,对应操作")])]),t._v(" "),_("p",[_("strong",[t._v('"8"；')])]),t._v(" "),_("p",[_("strong",[t._v('6）、单击"下一步"，继续执行安装,对应操作"9"；')])]),t._v(" "),_("p",[_("strong",[t._v('7）、单击"上一步"，返回前一界面,对应操作"10"；')])]),t._v(" "),_("p",[_("strong",[t._v('8）、单击"取消"，放弃安装,对应操作"11"。')])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("参数设置正确后，继续下一步的安装；")])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image27.png",alt:""}}),t._v('{width="5.343081802274716in"\nheight="4.051576990376203in"}')]),t._v(" "),_("p",[_("strong",[t._v("说明：")])]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v('单击"是"，则接受前一界面的配置，继续执行安装，对应操"12"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('单击"否"，则退回到前一界面。')])]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("复制安装文件。")])])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image28.png",alt:""}}),t._v('{width="3.528570647419073in"\nheight="2.696706036745407in"}')]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("strong",[t._v("若出现提示VC++安装提示，则安装退出。在安装文件目录下的plugins目录下，安装VCREDIST_X64.EXE这个文件。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image29.png",alt:""}}),t._v('{width="5.229166666666667in"\nheight="2.1458333333333335in"}')]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("strong",[t._v('再重新以系统管理员运行MES安装程序"setup.exe"程序；')])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image25.png",alt:""}}),t._v('{width="5.759697069116361in"\nheight="2.760071084864392in"}')]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[_("strong",[t._v("安装完成后，保存安装信息，一般保存在安装目录下；")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image30.png",alt:""}}),t._v('{width="4.108108048993876in"\nheight="3.3192683727034122in"}')]),t._v(" "),_("h3",{attrs:{id:"mes安装时，操作系统环境缺失的解决方法"}},[t._v("MES安装时，操作系统环境缺失的解决方法")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v('安装时提示"丢失MSVCR120.DLL"，MES安装程序退出，需要在安装包下的plugin目录安装vcredist_x86')])])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("错误提示：")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image31.png",alt:""}}),t._v('{width="3.9161767279090114in"\nheight="1.5206430446194226in"}')]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("解决办法：")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image17.png",alt:""}}),t._v('{width="4.927928696412948in"\nheight="1.8714206036745407in"}')]),t._v(" "),_("p",[_("strong",[t._v("说明：")])]),t._v(" "),_("p",[t._v("a.  "),_("strong",[t._v("路径为安装盘目录为plugins；")])]),t._v(" "),_("p",[t._v("b.  "),_("strong",[t._v("执行vcredist_x64.exe文件；")])]),t._v(" "),_("p",[t._v("c.  "),_("strong",[t._v("再重新执行MES安装程序。")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("1.  ### MES服务启动\n")])])]),_("p",[t._v("MES所有服务都集中在服务管理控制台中，可以对全部的服务进行管理和监控。类似于windows的任务管理器。")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("MES管理控制台开始启动服务。")])])]),t._v(" "),_("p",[_("strong",[t._v("1）、开始启动")])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image32.png",alt:""}}),t._v('{width="6.531073928258968in"\nheight="6.0360367454068244in"}')]),t._v(" "),_("p",[_("strong",[t._v("全部的组件")])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image33.png",alt:""}}),t._v('{width="4.927928696412948in"\nheight="4.567957130358705in"}')]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("2）、启动完成。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image34.png",alt:""}}),t._v('{width="6.231316710411199in"\nheight="4.441441382327209in"}')]),t._v(" "),_("p",[_("strong",[t._v("说明一：MES任务管理器说明。")])]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v('服务：即服务的名称，对应操作"1"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('服务对应的程序，即一个实例，是WINDOWS系统的一个进程，对应操作"2"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('启用端口：服务占用的端口号，对应操作"3"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('状态：服务的状态（上线/下线/已停用），对应操作"4"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('PID：服务占用操作系统的进程ID，对应操作"5"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('备注：服务的功能说明，对应操作"6"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('组件可用性检查：检查组件的可用性，对应操作"18"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('关闭：最小化MES服务管理器，对应操作"19"；')])])])]),t._v(" "),_("p",[_("strong",[t._v("说明二：MES任务管理器右键菜单说明。")])]),t._v(" "),_("p",[_("strong",[t._v("在任意服务上单击鼠标右键，就会弹出任务的管理功能菜单。")])]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v('增加/移除运行实列：用来给某服务再增加/减少一个服务，用来负载均衡服务，对应操作"7"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('下线：服务启动了，但是不提供服务，对应操作"8"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('用浏览器访问：就是用浏览器打开当前服务，以查看能否正常启动和访问，对应操作"9"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('刷新所有服务：重新读取全部服务的状态，并重新显示出来，对应操作"10"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('启动：启动选择的服务，对用操作"11"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('启动所有服务：启动全部没有启动的服务，对应操作"12"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('停止：停止选择的服务，对用操作"13"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('停止所有服务：停用全部启动的服务，对应操作"14"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('设置启用端口：若端口被其他应用占用，则需要更换其他的空闲端口，才能启用成功，对应操作"15"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('查看错误：用来查询服务启动或运行过程中记录的错误，以便分析产生错误的原因，对应操作"16"；')])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v('查看启动脚本：用来查看这个服务启动的程序启动脚本，对应操作"17"。')])]),t._v(" "),_("ol",[_("li",[_("h3",{attrs:{id:"mes服务启动异常的解决"}},[t._v("MES服务启动异常的解决")])])])])]),t._v(" "),_("div",{staticClass:"language-{=html} line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\x3c!-- --\x3e\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",[_("li",[_("strong",[t._v('若"业务运营"支撑服务启动失败，需要先启动"配置管理器"服务。')])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image35.png",alt:""}}),t._v('{width="6.3125in" height="5.83125in"}')]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("strong",[t._v('若启动"配置服务器"成功，启动"web服务"服务还是报错，则需要新建业务账套；')])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image36.png",alt:""}}),t._v('{width="6.3125in"\nheight="5.831944444444445in"}'),_("img",{attrs:{src:"media/image37.png",alt:""}}),t._v('{width="5.728450349956256in"\nheight="4.093238188976378in"}')]),t._v(" "),_("p",[_("strong",[t._v('若"配置服务器"已经启动，启动其他的服务还是报错，则需要单击"启动所有服务",单击任意服务，然后点鼠标右键，弹出菜单，单击"启动服务器"，对应操作"3"；')])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image38.png",alt:""}}),t._v('{width="6.3125in" height="5.75in"}')]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("strong",[t._v('若服务已经启动过，也没报错，但是还是显示"已停止"，则需要"刷新所有服务状态"，对应操作"4"；')])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image38.png",alt:""}}),t._v('{width="6.3125in" height="5.75in"}')]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[_("strong",[t._v("如果服务的端口被占用，则服务启动不了，则需要修改端口，重新启动服务。")])])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("错误提示：")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image39.png",alt:""}}),t._v('{width="2.6979166666666665in"\nheight="1.5208333333333333in"}')]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("解决办法：")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image40.png",alt:""}}),t._v('{width="6.3125in" height="4.506944444444445in"}')]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image23.png",alt:""}}),t._v('{width="3.1458333333333335in"\nheight="2.0833333333333335in"}')]),t._v(" "),_("p",[_("strong",[t._v("说明：")])]),t._v(" "),_("p",[t._v("a)  "),_("strong",[t._v('在需要调整的服务上单击鼠标右键，弹出菜单，单击"停用"，先停用此服务，必须先停用才能更改端口；')])]),t._v(" "),_("p",[t._v("b)  "),_("strong",[t._v('在弹出菜单中单击"设置启用端口"，对应操作"2"；')])]),t._v(" "),_("p",[t._v("c)  "),_("strong",[t._v('录入新的端口，对应操作"3"；')])]),t._v(" "),_("p",[t._v("d)  "),_("strong",[t._v('单击"确定"，保存端口设置，对应操作"4"；')])]),t._v(" "),_("p",[t._v("e)  "),_("strong",[t._v('单击"取消"，不修改端口，对应操作"5"；')])]),t._v(" "),_("p",[t._v("f)  "),_("strong",[t._v('单击"启用"，重新启用服务。')])]),t._v(" "),_("div",{staticClass:"language-{=html} line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("\x3c!-- --\x3e\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",{attrs:{start:"5"}},[_("li",[_("strong",[t._v("怎样打开MES服务管理器。")])])]),t._v(" "),_("p",[_("strong",[t._v("用户如果安装完MES后未创建账套，在重启服务器之后，MES配置管理器启动时会卡在请创建账套这里，需要手动打开服务管理器。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image41.png",alt:""}}),t._v('{width="6.3125in" height="3.2583333333333333in"}')]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image42.png",alt:""}}),t._v('{width="6.3125in" height="2.85in"}')]),t._v(" "),_("p",[_("strong",[t._v("说明：")])]),t._v(" "),_("p",[t._v("a.  "),_("strong",[t._v("在google浏览器中录入服务管理器地址，格式为："),_("a",{attrs:{href:"http://xxx.xxx.xxx.xxx:%E7%AB%AF%E5%8F%A3%EF%BC%88%E9%BB%98%E8%AE%A4%E4%B8%BA81",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://xxx.xxx.xxx.xxx:端口（默认为81"),_("OutboundLink")],1),t._v('），对应操作"1"；')])]),t._v(" "),_("p",[t._v("b.  "),_("strong",[t._v('录入系统管理员/密码：admin/密码，对应操作"2"；')])]),t._v(" "),_("p",[t._v("c.  "),_("strong",[t._v('单击"登陆"，对应操作"3"；')])]),t._v(" "),_("p",[t._v("d.  "),_("strong",[t._v('单击"账套"，对应操作"4"；')])]),t._v(" "),_("p",[t._v("e.  "),_("strong",[t._v('单击"创建账套"，对应操作"5"；')])]),t._v(" "),_("p",[t._v("f.  "),_("strong",[t._v("后续新建业务账套的操作与章节4.2.5.的操作相同。")])]),t._v(" "),_("h2",{attrs:{id:"应用终端安装"}},[t._v("应用终端安装")]),t._v(" "),_("p",[t._v("谷歌浏览器安装，相关操作如有疑问请联络您所在公司的IT管理员。")]),t._v(" "),_("h2",{attrs:{id:"异常问题处理"}},[t._v("异常问题处理")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v('安装时提示"丢失MSVCR120.DLL"，插件安装程序退出，需要在安装包下的plugin目录安装vcredist_x86')])])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("错误提示：")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image16.png",alt:"图片"}})]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("解决办法：")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"media/image17.png",alt:"图片"}})]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("**说明：**\n\na.  **路径为安装盘目录为plugins；**\n\nb.  **执行vcredist\\_x64.exe文件；**\n\nc.  **再重新执行MES安装程序。**\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br")])])])}),[],!1,null,null,null);v.default=s.exports}}]);