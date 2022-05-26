(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{449:function(e,a,t){"use strict";t.r(a);var n=t(65),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"building-packages-for-almalinux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-packages-for-almalinux"}},[e._v("#")]),e._v(" Building packages for AlmaLinux")]),e._v(" "),t("p",[e._v("This guide contains step-by-step instructions on how to build for AlmaLinux packages for different architectures. It also includes some background information about the mock tool, setup instructions, and some examples. These details can be helpful for the building packages for the AlmaLinux project.")]),e._v(" "),t("h2",{attrs:{id:"about-mock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-mock"}},[e._v("#")]),e._v(" About "),t("code",[e._v("mock")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://rpm-software-management.github.io/mock/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mock"),t("OutboundLink")],1),e._v(" is a tool for building RPM packages. It allows you to build packages for multiple architectures and different versions of RPM-based systems. It's possible to use mock to build packages for AlmaLinux OS as well.")]),e._v(" "),t("p",[e._v("This guide contains steps on how to build packages for AlmaLinux for different architectures.")]),e._v(" "),t("p",[e._v("The mock tool has such advantages as:")]),e._v(" "),t("ul",[t("li",[e._v("Mock creates a clean environment and clears it after the process is completed;")]),e._v(" "),t("li",[e._v("It is possible to build packages for different architectures and distributions with mock;")]),e._v(" "),t("li",[e._v("Mock doesn't require installing many development packages and tools.")])]),e._v(" "),t("p",[e._v("The mock tool already contains config files for x86_64 and aarch64 architectures. You can find them in the "),t("code",[e._v("/etc/mock/")]),e._v(" directory.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/building-packages-guide_etc-mock.png",alt:"image"}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Mock doesn't have a config file to build i686 packages. So you have to create a config yourselves to make that possible.")])]),e._v(" "),t("p",[e._v("Mock rebuilds RPMs from source RPMs. You have to download source RPMs in advance. All packages are available at "),t("a",{attrs:{href:"https://repo.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo.almalinux.org"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Full package name contains "),t("code",[e._v("package name")]),e._v(", "),t("code",[e._v("version")]),e._v(", "),t("code",[e._v("release")]),e._v(" and "),t("code",[e._v("architecture")]),e._v(". For example, in "),t("strong",[e._v("zlib-1.2.11-17.el8.src.rpm")]),e._v(" "),t("code",[e._v("package name")]),e._v(" is "),t("strong",[e._v("zlib")]),e._v(", "),t("strong",[e._v("1.2.11")]),e._v(" is "),t("code",[e._v("version")]),e._v(", "),t("strong",[e._v("17.el8")]),e._v(" is "),t("code",[e._v("release")]),e._v(", and "),t("strong",[e._v("src")]),e._v(" for "),t("code",[e._v("architecture")]),e._v(" but it indicates that it's an RPM source package.")]),e._v(" "),t("h2",{attrs:{id:"setup-mock-and-rpm-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-mock-and-rpm-build"}},[e._v("#")]),e._v(" Setup mock and rpm-build")]),e._v(" "),t("ul",[t("li",[e._v("First step is to install EPEL repository to your system:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo dnf install -y epel-release\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Get more information about "),t("a",{attrs:{href:"/repos/Extras"}},[e._v("AlmaLinux supports EPEL and other repositories")]),e._v(" on AlmaLinux wiki.")])]),e._v(" "),t("ul",[t("li",[e._v("After EPEL installation is completed, you can install the mock tool:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo dnf install -y mock rpm-build\n")])])]),t("ul",[t("li",[e._v("Run the following command to be added to the mock group. That is necessary as you are going to use mock to build packages:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo usermod -a -G mock username\n")])])]),t("h2",{attrs:{id:"building-packages-from-srpms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-packages-from-srpms"}},[e._v("#")]),e._v(" Building packages from SRPMS")]),e._v(" "),t("h3",{attrs:{id:"instruction-if-changes-are-needed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instruction-if-changes-are-needed"}},[e._v("#")]),e._v(" Instruction if changes are needed")]),e._v(" "),t("p",[e._v("These steps allow you to make some changes before building the package.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Once you've "),t("a",{attrs:{href:"#setup-mock"}},[e._v("installed mock and put the user in the mock group")]),e._v(", you need to download a package you want to build from "),t("a",{attrs:{href:"https://repo.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo.almalinux.org"),t("OutboundLink")],1),e._v(". Use the "),t("code",[e._v("wget")]),e._v(" command with the URL of the package. The downloaded package will appear in your home directory unless you specify.")])]),e._v(" "),t("li",[t("p",[e._v("Unpack the package and create directory structure using "),t("code",[e._v("rpm -i")]),e._v(" command:")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rpm -i ./fullpackagename.src.rpm\n")])])]),t("p",[e._v("This command creates your workplace directory structure "),t("code",[e._v("rpmbuild")]),e._v(". There are two folders for now: SOURCES and SPECS. The purpose of the SOURCES directory is to download the source tarballs into this directory. SPECS directory contains "),t("code",[e._v(".spec")]),e._v(" files which have package meta information and build instructions.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Now is the right time to make some changes, if needed, before building a package.")])]),e._v(" "),t("ul",[t("li",[e._v("Switch to SPECS directory to prepare the source using rpmbuild, the -bs flag, and specifying the spec filename. Some more directories are created:\n"),t("ul",[t("li",[e._v("BUILD has unpacked sources that get compiled in this directory;")]),e._v(" "),t("li",[e._v("BUILDROOT is used for copied files during the install phase;")]),e._v(" "),t("li",[e._v("RPMS has the created rpms;")]),e._v(" "),t("li",[e._v("SRPMS  has a "),t("code",[e._v(".src.rpm")]),e._v(" with a spec file and the sources.")])])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rpmbuild -bs packagename.spec\n")])])]),t("p",[t("img",{attrs:{src:"/images/building-packages-guide_rpmbuild.png",alt:"images"}})]),e._v(" "),t("p",[e._v("Switch to the SRPMS directory to build the package. The next step depends on what architecture you are building packages.")]),e._v(" "),t("h4",{attrs:{id:"x86-64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x86-64"}},[e._v("#")]),e._v(" x86_64")]),e._v(" "),t("p",[e._v("Use the "),t("code",[e._v("almalinux-8-x86_64.cfg")]),e._v(" file that mock already has to build packages.")]),e._v(" "),t("p",[e._v("Run the following command to build the package:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mock -r almalinux-8-x86_64 --rebuild fullpackagename.src.rpm\n")])])]),t("p",[e._v("Here is an example of what you can see as a building process:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("INFO: mock.py version 2.12 starting (python version = 3.6.8, NVR = mock-2.12-1.el8)...\nStart(bootstrap): init plugins\n...\nFinish(bootstrap): chroot init\nStart: chroot init\n\n...\n\nStart: dnf update\n...\nAlmaLinux 8 - AppStream                                                     2.2 MB/s | 8.0 MB     00:03    \nAlmaLinux 8 - PowerTools                                                    6.9 kB/s | 4.7 kB     00:00    \nAlmaLinux 8 - PowerTools                                                    866 kB/s | 2.4 MB     00:02    \nAlmaLinux 8 - Extras                                                        5.2 kB/s | 3.9 kB     00:00    \nAlmaLinux 8 - Extras                                                        7.3 kB/s |  12 kB     00:01    \nDependencies resolved.\n============================================================================================================\n Package                            Architecture  Version                            Repository        Size\n============================================================================================================\nUpgrading:\n almalinux-release                  x86_64        8.5-3.el8                          baseos            24 k\n annobin                            x86_64        9.72-1.el8_5.2                     appstream        110 k\n bash                               x86_64        4.4.20-2.el8                       baseos           1.5 M\n ...                      baseos           1.2 M\n sqlite-libs                        x86_64        3.26.0-15.el8                      baseos           580 k\n systemd-libs                       x86_64        239-51.el8                         baseos           1.1 M\n tpm2-tss                           x86_64        2.3.2-4.el8                        baseos           274 k\n util-linux                         x86_64        2.32.1-28.el8                      baseos           2.5 M\n which                              x86_64        2.21-16.el8                        baseos            48 k\n\nTransaction Summary\n============================================================================================================\nUpgrade  74 Packages\n\nTotal download size: 133 M\nDownloading Packages:\nAlmaLinux 8 - AppStream           195% [==================================================================] done.B/s | 1.2 kB     --:-- ETA\n(1/74): almalinux-release-8.5-3.el8.x86_64.rpm                              244 kB/s |  24 kB     00:00    \n(2/74): chkconfig-1.19.1-1.el8.x86_64.rpm                                   486 kB/s | 197 kB     00:00    \n...\n(71/74): qt5-srpm-macros-5.15.2-1.el8.noarch.rpm                             37 kB/s | 9.5 kB     00:00    \n(72/74): rpm-build-4.14.3-19.el8.x86_64.rpm                                 168 kB/s | 172 kB     00:01    \n(73/74): gcc-c++-8.5.0-3.el8.alma.x86_64.rpm                                611 kB/s |  12 MB     00:20    \n(74/74): gcc-8.5.0-3.el8.alma.x86_64.rpm                                    783 kB/s |  23 MB     00:30    \n------------------------------------------------------------------------------------------------------------\nTotal                                                                       2.2 MB/s | 133 MB     01:00     \nRunning transaction check\nTransaction check succeeded.\nRunning transaction test\nTransaction test succeeded.\nRunning transaction\n  Running scriptlet: filesystem-3.8-6.el8.x86_64                                                        1/1 \n  Preparing        :                                                                                    1/1 \n  Upgrading        : libgcc-8.5.0-3.el8.alma.x86_64                                                   1/148 \n  Running scriptlet: libgcc-8.5.0-3.el8.alma.x86_64                                                   1/148 \n  Upgrading        : crypto-policies-20210617-1.gitc776d3e.el8.noarch                                 2/148 \n  ...\n  Cleanup          : ncurses-base-6.1-7.20180224.el8.noarch                                         147/148 \n  Cleanup          : libgcc-8.4.1-1.el8.alma.x86_64                                                 148/148 \n  ...\n  Verifying        : almalinux-release-8.5-3.el8.x86_64                                               1/148 \n  Verifying        : almalinux-release-8.4-3.el8.x86_64                                               2/148 \n  ...\n  Verifying        : rpm-build-4.14.3-19.el8.x86_64                                                 147/148 \n  Verifying        : rpm-build-4.14.3-14.el8_4.x86_64                                               148/148 \n\nUpgraded:\n  almalinux-release-8.5-3.el8.x86_64                        annobin-9.72-1.el8_5.2.x86_64                   \n  bash-4.4.20-2.el8.x86_64                                  binutils-2.30-108.el8_5.1.x86_64                \n  ...\n  systemd-libs-239-51.el8.x86_64                            tpm2-tss-2.3.2-4.el8.x86_64                     \n  util-linux-2.32.1-28.el8.x86_64                           which-2.21-16.el8.x86_64                        \n\nComplete!\nINFO: Calling postupdate hooks because there are new/updated packages:\nkrb5-libs-1.18.2-14.el8.x86_64\nfile-libs-5.33-20.el8.x86_64\n...\nrpm-build-libs-4.14.3-19.el8.x86_64\nopenldap-2.4.46-18.el8.x86_64\nStart: creating root cache\nFinish: creating root cache\nFinish: dnf update\nFinish: chroot init\nStart: build phase for zlib-1.2.11-17.el8.src.rpm\nStart: build setup for zlib-1.2.11-17.el8.src.rpm\nBuilding target platforms: x86_64\nBuilding for target x86_64\nWrote: /builddir/build/SRPMS/zlib-1.2.11-17.el8.src.rpm\nAlmaLinux 8 - BaseOS                                                        3.7 kB/s | 4.3 kB     00:01    \nAlmaLinux 8 - AppStream                                                     4.9 kB/s | 4.7 kB     00:00    \nAlmaLinux 8 - PowerTools                                                    4.1 kB/s | 4.7 kB     00:01    \nAlmaLinux 8 - Extras                                                        5.1 kB/s | 3.9 kB     00:00    \nDependencies resolved.\n============================================================================================================\n Package                          Architecture     Version                        Repository           Size\n============================================================================================================\nInstalling:\n autoconf                         noarch           2.69-29.el8                    appstream           710 k\n automake                         noarch           1.16.1-7.el8                   appstream           712 k\n libtool                          x86_64           2.4.6-25.el8                   appstream           708 k\nInstalling dependencies:\n emacs-filesystem                 noarch           1:26.1-7.el8                   baseos               69 k\n groff-base                       x86_64           1.22.3-18.el8                  baseos              1.0 M\n m4                               x86_64           1.4.18-7.el8                   baseos              222 k\n ...\n perl-threads                     x86_64           1:2.21-2.el8                   baseos               61 k\n perl-threads-shared              x86_64           1.58-2.el8                     baseos               47 k\n\nTransaction Summary\n============================================================================================================\nInstall  40 Packages\n... \n(39/40): perl-libs-5.26.3-420.el8.x86_64.rpm                                389 kB/s | 1.6 MB     00:04    \n(40/40): perl-interpreter-5.26.3-420.el8.x86_64.rpm                         1.0 MB/s | 6.3 MB     00:06    \n------------------------------------------------------------------------------------------------------------\nTotal                                                                       1.1 MB/s | 8.9 MB     00:07     \nRunning transaction check\nTransaction check succeeded.\nRunning transaction test\nTransaction test succeeded.\nRunning transaction\n  Preparing        :                                                                                    1/1 \n  Installing       : m4-1.4.18-7.el8.x86_64                                                            1/40 \n  Running scriptlet: m4-1.4.18-7.el8.x86_64                                                            1/40 \n  Installing       : groff-base-1.22.3-18.el8.x86_64                                                   2/40 \n  ...\n  Installing       : libtool-2.4.6-25.el8.x86_64                                                      40/40 \n  Running scriptlet: libtool-2.4.6-25.el8.x86_64                                                      40/40 \n  Verifying        : emacs-filesystem-1:26.1-7.el8.noarch                                              1/40 \n  Verifying        : groff-base-1.22.3-18.el8.x86_64                                                   2/40 \n  ...\n  Verifying        : perl-Thread-Queue-3.13-1.el8.noarch                                              40/40 \n\nInstalled:\n  autoconf-2.69-29.el8.noarch                           automake-1.16.1-7.el8.noarch                       \n  ...     \n  perl-threads-1:2.21-2.el8.x86_64                      perl-threads-shared-1.58-2.el8.x86_64              \n\nComplete!\nFinish: build setup for zlib-1.2.11-17.el8.src.rpm\nStart: Outputting list of installed packages\nFinish: Outputting list of installed packages\nStart: rpmbuild zlib-1.2.11-17.el8.src.rpm\n...\npatching file contrib/minizip/unzip.c\nPatch #2 (zlib-1.2.11-IBM-Z-hw-accelrated-deflate-s390x.patch):\n+ echo 'Patch #2 (zlib-1.2.11-IBM-Z-hw-accelrated-deflate-s390x.patch):'\n+ /usr/bin/patch --no-backup-if-mismatch -p1 --fuzz=0\npatching file Makefile.in\npatching file configure\n...\npatching file test/crc32_test.c\n+ echo 'Patch #3 (zlib-1.2.11-optimized-CRC32-framework.patch):'\n+ /usr/bin/patch --no-backup-if-mismatch -p1 --fuzz=0\n...\n+ /usr/bin/patch --no-backup-if-mismatch -p1 --fuzz=0\npatching file crc32.c\npatching file deflate.c\n...\npatching file deflate.c\npatching file test/infcover.c\n+ echo 'Patch #6 (zlib-1.2.11-IBM-Z-hw-accelrated-deflate-fix.patch):'\n+ /usr/bin/patch --no-backup-if-mismatch -p1 --fuzz=0\n...\ngcc -O2 -g -pipe -Wall -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -Wp,-D_GLIBCXX_ASSERTIONS -fexceptions -fstack-protector-strong -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -specs=/usr/lib/rpm/redhat/redhat-annobin-cc1 -m64 -mtune=generic -fasynchronous-unwind-tables -fstack-clash-protection -fcf-protection -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o inflate.o inflate.c\ngcc -O2 -g -pipe -Wall -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -Wp,-D_GLIBCXX_ASSERTIONS -fexceptions -fstack-protector-strong -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -specs=/\n\nProvides: debuginfo(build-id) = e0d0a31c725b443047e37c342f2f7a925a141786 zlib-debuginfo = 1.2.11-17.el8 zlib-debuginfo(x86-64) = 1.2.11-17.el8\nRequires(rpmlib): rpmlib(CompressedFileNames) <= 3.0.4-1 rpmlib(FileDigests) <= 4.6.0-1 rpmlib(PayloadFilesHavePrefix) <= 4.0-1\nRecommends: zlib-debugsource(x86-64) = 1.2.11-17.el8\nChecking for unpackaged file(s): /usr/lib/rpm/check-files /builddir/build/BUILDROOT/zlib-1.2.11-17.el8.x86_64\nWrote: /builddir/build/RPMS/zlib-1.2.11-17.el8.x86_64.rpm\nWrote: /builddir/build/RPMS/zlib-devel-1.2.11-17.el8.x86_64.rpm\nWrote: /builddir/build/RPMS/zlib-static-1.2.11-17.el8.x86_64.rpm\nWrote: /builddir/build/RPMS/zlib-debugsource-1.2.11-17.el8.x86_64.rpm\nWrote: /builddir/build/RPMS/zlib-debuginfo-1.2.11-17.el8.x86_64.rpm\nExecuting(%clean): /bin/sh -e /var/tmp/rpm-tmp.x41aFv\n+ umask 022\n+ cd /builddir/build/BUILD\n+ cd zlib-1.2.11\n+ /usr/bin/rm -rf /builddir/build/BUILDROOT/zlib-1.2.11-17.el8.x86_64\n+ exit 0\nFinish: rpmbuild zlib-1.2.11-17.el8.src.rpm\nFinish: build phase for zlib-1.2.11-17.el8.src.rpm\nINFO: Done(zlib-1.2.11-17.el8.src.rpm) Config(almalinux-8-x86_64) 18 minutes 57 seconds\nINFO: Results and/or logs in: /var/lib/mock/almalinux-8-x86_64/result\nFinish: run\n")])])]),t("h4",{attrs:{id:"aarch64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aarch64"}},[e._v("#")]),e._v(" aarch64")]),e._v(" "),t("p",[e._v("Use the "),t("code",[e._v("almalinux-8-aarch64.cfg")]),e._v(" file, though you need your computer or VM running on arm or qemu to proceed.")]),e._v(" "),t("p",[e._v("Run the following command to build the package:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mock -r almalinux-8-aarch64 --rebuild fullpackagename.src.rpm\n")])])]),t("h4",{attrs:{id:"i686"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i686"}},[e._v("#")]),e._v(" i686")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://repo.almalinux.org/vault/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vault"),t("OutboundLink")],1),e._v(" repository contains all i686 packages.\nNote, mock doesn't have a specified config file to build i686 packages or AlmaLinux. So you have to download this "),t("a",{attrs:{href:"#config-file-for-i686"}},[e._v("config file")]),e._v(". Next, we need to put that config to the "),t("code",[e._v("/etc/mock/")]),e._v(" directory. It is possible to build i686 now.")]),e._v(" "),t("p",[e._v("Run the following command to build the package:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mock -r almalinux-8-i686 --rebuild fullpackagename.src.rpm\n")])])]),t("h3",{attrs:{id:"instruction-without-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instruction-without-changes"}},[e._v("#")]),e._v(" Instruction without changes")]),e._v(" "),t("p",[e._v("In case you need to build a package without any changes, follow mentioned steps:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#setup-mock"}},[e._v("Install")]),e._v(" "),t("code",[e._v("epel-release")]),e._v(", "),t("code",[e._v("mock")]),e._v(", "),t("code",[e._v("rpm-build")]),e._v(" and "),t("code",[e._v("add a user")]),e._v(" to the mock group.")]),e._v(" "),t("li",[e._v("Download a package you want to rebuild from "),t("a",{attrs:{href:"https://repo.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo.almalinux.org"),t("OutboundLink")],1),e._v(". Use the "),t("code",[e._v("wget")]),e._v(" command with the URL of the package.")]),e._v(" "),t("li",[e._v("Run "),t("code",[e._v('mock -r "configname" --rebuild fullpackagename.src.rpm')]),e._v(" to build the package.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v('"configname" is the name of a configuration file from '),t("code",[e._v("/etc/mock/")]),e._v(" without the "),t("code",[e._v("/etc/mock/")]),e._v(" path prefix and the "),t("code",[e._v(".cfg")]),e._v(" suffix. "),t("a",{attrs:{href:"#x86-64"}},[e._v("Check the information")]),e._v(" above to see examples.")])]),e._v(" "),t("p",[e._v("Builds are done in the "),t("code",[e._v("/var/lib/mock")]),e._v(" directory. You can see the built packages in this directory.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/building-packages-guide_results.png",alt:"image"}})]),e._v(" "),t("h2",{attrs:{id:"building-packages-from-git-almalinux-org"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-packages-from-git-almalinux-org"}},[e._v("#")]),e._v(" Building packages from "),t("a",{attrs:{href:"https://git.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git.almalinux.org"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Another way to build packages is to receive sources and .spec files from "),t("a",{attrs:{href:"https://git.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git.almalinux.org"),t("OutboundLink")],1),e._v(". Check this instruction to use this way:")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"#setup-mock"}},[e._v("Install")]),e._v(" "),t("code",[e._v("epel-release")]),e._v(", "),t("code",[e._v("mock")]),e._v(" and "),t("code",[e._v("add a user")]),e._v(" to the mock group.")])]),e._v(" "),t("li",[t("p",[e._v("Clone "),t("a",{attrs:{href:"https://git.almalinux.org/almalinux/almalinux-git-utils",target:"_blank",rel:"noopener noreferrer"}},[e._v("almalinux-git-utils"),t("OutboundLink")],1),e._v(" repo. These are utilities for working with the AlmaLinux OS Git server. Use "),t("code",[e._v("git clone")]),e._v(" and "),t("code",[e._v("HTTPS")]),e._v(" link from "),t("a",{attrs:{href:"https://git.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git.almalinux.org"),t("OutboundLink")],1),e._v(" to clone the repository.")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[t("code",[e._v("SSH")]),e._v(" link for cloning the repo is available only for signed-in users.")])]),e._v(" "),t("ul",[t("li",[e._v("Switch to the almalinux-git-utils directory and run the following commands:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("python3 setup.py build\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pip3 install .\n")])])]),t("ul",[t("li",[t("p",[e._v("Switch to the needed directory and clone a repo with the RPM package project from "),t("a",{attrs:{href:"https://git.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git.almalinux.org"),t("OutboundLink")],1),e._v(". After that, you have the SPECS folder with the .spec file for the cloned project.")])]),e._v(" "),t("li",[t("p",[e._v("Switch to the project directory and run the mentioned command. This script downloads sources and BLOBs from the AlmaLinux sources cache. You can find them in the SOURCES folder.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("alma_get_sources\n")])])]),t("ul",[t("li",[e._v("Run these commands to create a workplace directory structure "),t("code",[e._v("rpmbuild")]),e._v(".")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dnf install -y rpmdevtools\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rpmdev-setuptree\n")])])]),t("ul",[t("li",[t("p",[e._v("Move SOURCES and SPECS files from the project directory to the ~/rpmbuild directory.")])]),e._v(" "),t("li",[t("p",[e._v("Switch to the ~/rpmbuild/SPECS directory and run this command to build a SPEC file:")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rpmbuild -bs packagename.spec\n")])])]),t("ul",[t("li",[t("a",{attrs:{href:"#x86-64"}},[e._v("See what config name you need")]),e._v(" and build the package using the mock tool:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('mock -r "configname" --rebuild fullpackagename.src.rpm\n')])])]),t("h2",{attrs:{id:"config-file-for-i686"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-file-for-i686"}},[e._v("#")]),e._v(" Config file for i686")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("config_opts['root'] = 'almalinux-8-i686'\nconfig_opts['chroot_setup_cmd'] = 'install tar gcc-c++ redhat-rpm-config redhat-release which xz sed make bzip2 gzip gcc coreutils unzip shadow-utils diffutils cpio bash gawk rpm-build info patch util-linux findutils grep scl-utils scl-utils-build git-core'\nconfig_opts['dist'] = 'el8.alma' \nconfig_opts['dnf_common_opts'] = ['--setopt=deltarpm=False', '--allowerasing', '--nobest', '--setopt=install_weak_deps=False']\nconfig_opts['legal_host_arches'] = ['i386', 'i586', 'i686', 'x86_64']\nconfig_opts['releasever'] = '8'\nconfig_opts['package_manager'] = 'dnf'\nconfig_opts['rpmbuild_networking'] = True\nconfig_opts['target_arch'] = 'i686'\nconfig_opts['extra_chroot_dirs'] = [ '/run/lock', ]\nconfig_opts['use_bootstrap'] = False\n\n\nconfig_opts['dnf.conf'] = \"\"\"\n[main]\nkeepcache=1\ncachedir = /var/cache/yum\ndebuglevel=1\nreposdir=/dev/null\nlogfile=/var/log/yum.log\nretries=20\nobsoletes=1\ngpgcheck=0\nassumeyes=1\nrpmverbosity = info\nsyslog_ident=mock\nsyslog_device=\nmetadata_expire=0\nmdpolicy=group:primary\nbest=0\ninstall_weak_deps=0\nprotected_packages=\nmodule_platform_id=platform:el8\nuser_agent={{ user_agent }}\n\n\n[baseos]\nname=AlmaLinux $releasever - BaseOS\nbaseurl=https://repo.almalinux.org/vault/$releasever/BaseOS/i686/os/\nenabled=1\ngpgcheck=1\ngpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux\n\n[appstream]\nname=AlmaLinux $releasever - AppStream\nbaseurl=https://repo.almalinux.org/vault/$releasever/AppStream/i686/os/\nenabled=1\ngpgcheck=1\ngpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux\n\n[powertools]\nname=AlmaLinux $releasever - PowerTools\nbaseurl=https://repo.almalinux.org/vault/$releasever/PowerTools/i686/os/\nenabled=1\ngpgcheck=1\ngpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux\n\n[extras]\nname=AlmaLinux $releasever - Extras\nbaseurl=https://repo.almalinux.org/vault/$releasever/extras/i686/os/\nenabled=1\ngpgcheck=1\ngpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux\n\n[ha]\nname=AlmaLinux $releasever - HighAvailability\nbaseurl = https://repo.almalinux.org/vault/$releasever/HighAvailability/i686/os/\nenabled = 0\ngpgcheck=1\ngpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux\n\n[resilientstorage]\nname=AlmaLinux $releasever - ResilientStorage\nbaseurl=https://repo.almalinux.org/vault/$releasever/ResilientStorage/i686/os/\nenabled=0\ngpgcheck=1\ngpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux\n\n[devel]\nname=AlmaLinux $releasever - Devel (WARNING: UNSUPPORTED - FOR BUILDROOT USE ONLY!)\nbaseurl=https://repo.almalinux.org/vault/$releasever/devel/i686/os/\nenabled=0\ngpgcheck=1\ngpgkey=file:///usr/share/distribution-gpg-keys/alma/RPM-GPG-KEY-AlmaLinux\n\n\"\"\"\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);