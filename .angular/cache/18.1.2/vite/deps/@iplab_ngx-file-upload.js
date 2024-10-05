import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from "./chunk-6SVOABWM.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-MHLK6TFF.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgComponentOutlet,
  NgTemplateOutlet
} from "./chunk-5KV5DZWS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  Optional,
  Renderer2,
  Self,
  ViewChild,
  booleanAttribute,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-SGYLE3HE.js";
import {
  merge
} from "./chunk-FTB5UYSU.js";
import "./chunk-PJLO3BQF.js";
import {
  BehaviorSubject,
  Subject
} from "./chunk-WDHRTQJ7.js";
import "./chunk-TXDUYLVM.js";

// node_modules/@iplab/ngx-file-upload/fesm2022/iplab-ngx-file-upload.mjs
var _c0 = ["*"];
function FileUploadIconComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 0)(1, "g");
    ɵɵelement(2, "path", 1);
    ɵɵelementEnd()();
  }
}
function FileUploadIconComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 0)(1, "g");
    ɵɵelement(2, "path", 2);
    ɵɵelementEnd()();
  }
}
function FileUploadIconComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 0)(1, "g");
    ɵɵelement(2, "path", 3);
    ɵɵelementEnd()();
  }
}
function FileUploadIconComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 0)(1, "g");
    ɵɵelement(2, "path", 4);
    ɵɵelementEnd()();
  }
}
function FileUploadIconComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 0)(1, "g");
    ɵɵelement(2, "path", 5);
    ɵɵelementEnd()();
  }
}
var _c1 = ["placeholder"];
var _c2 = ["item"];
var _c3 = ["inputRef"];
var _c4 = ["labelRef"];
var _c5 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  file: a1,
  index: a2,
  control: a3
});
function FileUploadComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileUploadComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "b");
    ɵɵtext(1, "Drag and drop");
    ɵɵelementEnd();
    ɵɵtext(2, " files");
    ɵɵelement(3, "br");
    ɵɵtext(4, " or click here ");
  }
}
function FileUploadComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "b");
    ɵɵtext(1, "Click here");
    ɵɵelementEnd();
    ɵɵtext(2, " to");
    ɵɵelement(3, "br");
    ɵɵtext(4, " choose a files ");
  }
}
function FileUploadComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "file-upload-drop-zone");
    ɵɵtemplate(1, FileUploadComponent_ng_template_3_Conditional_1_Template, 5, 0)(2, FileUploadComponent_ng_template_3_Conditional_2_Template, 5, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const isFileDragDropAvailable_r2 = ctx.isFileDragDropAvailable;
    ɵɵadvance();
    ɵɵconditional(isFileDragDropAvailable_r2 ? 1 : 2);
  }
}
function FileUploadComponent_Conditional_7_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileUploadComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUploadComponent_Conditional_7_For_2_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const file_r5 = ctx.$implicit;
    const ɵ$index_33_r6 = ctx.$index;
    ɵɵnextContext();
    const defaultItemTemplate_r7 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.listItem ? ctx_r3.listItem : defaultItemTemplate_r7)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c5, file_r5, file_r5, ɵ$index_33_r6, ctx_r3.control));
  }
}
function FileUploadComponent_Conditional_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "file-upload-list-item", 8);
    ɵɵtext(1, "Remove");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const file_r9 = ctx.file;
    const control_r10 = ctx.control;
    ɵɵproperty("index", i_r8)("file", file_r9)("control", control_r10);
  }
}
function FileUploadComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("@insertAnimation.done", function FileUploadComponent_Conditional_7_Template_div_animation_insertAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.animationListFinished($event));
    });
    ɵɵrepeaterCreate(1, FileUploadComponent_Conditional_7_For_2_Template, 1, 7, "ng-container", null, ɵɵcomponentInstance().trackByFn, true);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵtemplate(4, FileUploadComponent_Conditional_7_ng_template_4_Template, 2, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("@insertAnimation", ctx_r3.control.size);
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 1, ctx_r3.control.valueChanges));
  }
}
var _c6 = ["overlay"];
var _c7 = ["file-drop-zone", ""];
function FileUploadAttributeComponent_Conditional_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileUploadAttributeComponent_Conditional_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "file-upload-drop-zone")(1, "b");
    ɵɵtext(2, "Drop");
    ɵɵelementEnd();
    ɵɵtext(3, " it here ");
    ɵɵelementEnd();
  }
}
function FileUploadAttributeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2, 0)(2, "div", 3);
    ɵɵtemplate(3, FileUploadAttributeComponent_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 4)(4, FileUploadAttributeComponent_Conditional_1_ng_template_4_Template, 4, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const defaultTemplate_r1 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.templateRef ? ctx_r1.templateRef : defaultTemplate_r1);
  }
}
var _c8 = ["button"];
var _c9 = ["simple", ""];
var _c10 = (a0) => ({
  control: a0
});
var _c11 = (a0, a1, a2) => ({
  $implicit: a0,
  control: a1,
  files: a2
});
function SimpleFileUploadComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SimpleFileUploadComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SimpleFileUploadComponent_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const defaultPlaceholderTemplate_r3 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.placeholderRef ? ctx_r1.placeholderRef : defaultPlaceholderTemplate_r3)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c11, ctx_r1.control.value, ctx_r1.control, ctx_r1.control.value));
  }
}
function SimpleFileUploadComponent_ng_template_3_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, ", ");
    ɵɵelementEnd();
  }
}
function SimpleFileUploadComponent_ng_template_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SimpleFileUploadComponent_ng_template_3_For_1_Conditional_0_Template, 2, 0, "span");
    ɵɵelementStart(1, "span", 8);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ɵ$index_11_r5 = ctx.$index;
    ɵɵconditional(ɵ$index_11_r5 > 0 ? 0 : -1);
    ɵɵadvance(2);
    ɵɵtextInterpolate(file_r4.name);
  }
}
function SimpleFileUploadComponent_ng_template_3_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, " Select a file... ");
  }
}
function SimpleFileUploadComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, SimpleFileUploadComponent_ng_template_3_For_1_Template, 3, 2, "span", 8, ɵɵcomponentInstance().trackByFn, true, SimpleFileUploadComponent_ng_template_3_ForEmpty_2_Template, 1, 0);
  }
  if (rf & 2) {
    const files_r6 = ctx.files;
    ɵɵrepeater(files_r6);
  }
}
function SimpleFileUploadComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SimpleFileUploadComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "div", 10);
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 11)(3, "g");
    ɵɵelement(4, "path", 12);
    ɵɵelementEnd()()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(5, "span", 13);
    ɵɵtext(6, "Browse");
    ɵɵelementEnd()();
  }
}
var FileAccess;
(function(FileAccess2) {
  FileAccess2[FileAccess2["None"] = 0] = "None";
  FileAccess2[FileAccess2["Read"] = 4] = "Read";
  FileAccess2[FileAccess2["Write"] = 2] = "Write";
  FileAccess2[FileAccess2["ReadWrite"] = 6] = "ReadWrite";
  FileAccess2[FileAccess2["Execute"] = 1] = "Execute";
  FileAccess2[FileAccess2["ReadWriteExecute"] = 7] = "ReadWriteExecute";
  FileAccess2[FileAccess2["ExecuteRead"] = 5] = "ExecuteRead";
  FileAccess2[FileAccess2["r"] = 4] = "r";
  FileAccess2[FileAccess2["w"] = 2] = "w";
  FileAccess2[FileAccess2["x"] = 1] = "x";
  FileAccess2[FileAccess2["rw"] = 6] = "rw";
  FileAccess2[FileAccess2["rwx"] = 7] = "rwx";
  FileAccess2[FileAccess2["xr"] = 5] = "xr";
})(FileAccess || (FileAccess = {}));
var FileUploadTypes;
(function(FileUploadTypes2) {
  FileUploadTypes2["arc"] = "application/octet-stream";
  FileUploadTypes2["midi"] = "audio/midi";
  FileUploadTypes2["ts"] = "application/typescript";
  FileUploadTypes2["woff2"] = "font/woff2";
  FileUploadTypes2["evy"] = "application/envoy";
  FileUploadTypes2["fif"] = "application/fractals";
  FileUploadTypes2["hta"] = "application/hta";
  FileUploadTypes2["acx"] = "application/internet-property-stream";
  FileUploadTypes2["dot"] = "application/msword";
  FileUploadTypes2["dms"] = "application/octet-stream";
  FileUploadTypes2["eps"] = "application/postscript";
  FileUploadTypes2["ps"] = "application/postscript";
  FileUploadTypes2["xla"] = "application/vnd.ms-excel";
  FileUploadTypes2["xlc"] = "application/vnd.ms-excel";
  FileUploadTypes2["xlm"] = "application/vnd.ms-excel";
  FileUploadTypes2["xlt"] = "application/vnd.ms-excel";
  FileUploadTypes2["xlw"] = "application/vnd.ms-excel";
  FileUploadTypes2["msg"] = "application/vnd.ms-outlook";
  FileUploadTypes2["sst"] = "application/vnd.ms-pkicertstore";
  FileUploadTypes2["pot"] = "application/vnd.ms-powerpoint";
  FileUploadTypes2["pps"] = "application/vnd.ms-powerpoint";
  FileUploadTypes2["wcm"] = "application/vnd.ms-works";
  FileUploadTypes2["wdb"] = "application/vnd.ms-works";
  FileUploadTypes2["wks"] = "application/vnd.ms-works";
  FileUploadTypes2["cdf"] = "application/x-cdf";
  FileUploadTypes2["tgz"] = "application/x-compressed";
  FileUploadTypes2["dcr"] = "application/x-director";
  FileUploadTypes2["dxr"] = "application/x-director";
  FileUploadTypes2["gz"] = "application/x-gzip";
  FileUploadTypes2["ins"] = "application/x-internet-signup";
  FileUploadTypes2["isp"] = "application/x-internet-signup";
  FileUploadTypes2["iii"] = "application/x-iphone";
  FileUploadTypes2["dll"] = "application/x-msdownload";
  FileUploadTypes2["m13"] = "application/x-msmediaview";
  FileUploadTypes2["m14"] = "application/x-msmediaview";
  FileUploadTypes2["pma"] = "application/x-perfmon";
  FileUploadTypes2["pmc"] = "application/x-perfmon";
  FileUploadTypes2["pmr"] = "application/x-perfmon";
  FileUploadTypes2["pmw"] = "application/x-perfmon";
  FileUploadTypes2["pfx"] = "application/x-pkcs12";
  FileUploadTypes2["spc"] = "application/x-pkcs7-certificates";
  FileUploadTypes2["p7c"] = "application/x-pkcs7-mime";
  FileUploadTypes2["texi"] = "application/x-texinfo";
  FileUploadTypes2["roff"] = "application/x-troff";
  FileUploadTypes2["tr"] = "application/x-troff";
  FileUploadTypes2["man"] = "application/x-troff-man";
  FileUploadTypes2["me"] = "application/x-troff-me";
  FileUploadTypes2["ms"] = "application/x-troff-ms";
  FileUploadTypes2["crt"] = "application/x-x509-ca-cert";
  FileUploadTypes2["pko"] = "application/ynd.ms-pkipko";
  FileUploadTypes2["snd"] = "audio/basic";
  FileUploadTypes2["rmi"] = "audio/mid";
  FileUploadTypes2["mp3"] = "audio/mpeg";
  FileUploadTypes2["aifc"] = "audio/x-aiff";
  FileUploadTypes2["aiff"] = "audio/x-aiff";
  FileUploadTypes2["ra"] = "audio/x-pn-realaudio";
  FileUploadTypes2["jpe"] = "image/jpeg";
  FileUploadTypes2["jpeg"] = "image/jpeg";
  FileUploadTypes2["jfif"] = "image/pipeg";
  FileUploadTypes2["tif"] = "image/tiff";
  FileUploadTypes2["mht"] = "message/rfc822";
  FileUploadTypes2["mhtml"] = "message/rfc822";
  FileUploadTypes2["nws"] = "message/rfc822";
  FileUploadTypes2["htm"] = "text/html";
  FileUploadTypes2["stm"] = "text/html";
  FileUploadTypes2["uls"] = "text/iuls";
  FileUploadTypes2["sct"] = "text/scriptlet";
  FileUploadTypes2["htt"] = "text/webviewhtml";
  FileUploadTypes2["htc"] = "text/x-component";
  FileUploadTypes2["mp2"] = "video/mpeg";
  FileUploadTypes2["mpa"] = "video/mpeg";
  FileUploadTypes2["mpe"] = "video/mpeg";
  FileUploadTypes2["mpg"] = "video/mpeg";
  FileUploadTypes2["mpv2"] = "video/mpeg";
  FileUploadTypes2["mov"] = "video/quicktime";
  FileUploadTypes2["lsf"] = "video/x-la-asf";
  FileUploadTypes2["lsx"] = "video/x-la-asf";
  FileUploadTypes2["asr"] = "video/x-ms-asf";
  FileUploadTypes2["asx"] = "video/x-ms-asf";
  FileUploadTypes2["flr"] = "x-world/x-vrml";
  FileUploadTypes2["vrml"] = "x-world/x-vrml";
  FileUploadTypes2["wrz"] = "x-world/x-vrml";
  FileUploadTypes2["xaf"] = "x-world/x-vrml";
  FileUploadTypes2["xof"] = "x-world/x-vrml";
  FileUploadTypes2["x3d"] = "application/vnd.hzn-3d-crossword";
  FileUploadTypes2["3gp"] = "video/3gpp";
  FileUploadTypes2["3g2"] = "video/3gpp2";
  FileUploadTypes2["mseq"] = "application/vnd.mseq";
  FileUploadTypes2["pwn"] = "application/vnd.3m.post-it-notes";
  FileUploadTypes2["plb"] = "application/vnd.3gpp.pic-bw-large";
  FileUploadTypes2["psb"] = "application/vnd.3gpp.pic-bw-small";
  FileUploadTypes2["pvb"] = "application/vnd.3gpp.pic-bw-var";
  FileUploadTypes2["tcap"] = "application/vnd.3gpp2.tcap";
  FileUploadTypes2["7z"] = "application/x-7z-compressed";
  FileUploadTypes2["abw"] = "application/x-abiword";
  FileUploadTypes2["ace"] = "application/x-ace-compressed";
  FileUploadTypes2["acc"] = "application/vnd.americandynamics.acc";
  FileUploadTypes2["acu"] = "application/vnd.acucobol";
  FileUploadTypes2["atc"] = "application/vnd.acucorp";
  FileUploadTypes2["adp"] = "audio/adpcm";
  FileUploadTypes2["aab"] = "application/x-authorware-bin";
  FileUploadTypes2["aam"] = "application/x-authorware-map";
  FileUploadTypes2["aas"] = "application/x-authorware-seg";
  FileUploadTypes2["air"] = "application/vnd.adobe.air-application-installer-package+zip";
  FileUploadTypes2["swf"] = "application/x-shockwave-flash";
  FileUploadTypes2["fxp"] = "application/vnd.adobe.fxp";
  FileUploadTypes2["pdf"] = "application/pdf";
  FileUploadTypes2["ppd"] = "application/vnd.cups-ppd";
  FileUploadTypes2["dir"] = "application/x-director";
  FileUploadTypes2["xdp"] = "application/vnd.adobe.xdp+xml";
  FileUploadTypes2["xfdf"] = "application/vnd.adobe.xfdf";
  FileUploadTypes2["aac"] = "audio/x-aac";
  FileUploadTypes2["ahead"] = "application/vnd.ahead.space";
  FileUploadTypes2["azf"] = "application/vnd.airzip.filesecure.azf";
  FileUploadTypes2["azs"] = "application/vnd.airzip.filesecure.azs";
  FileUploadTypes2["azw"] = "application/vnd.amazon.ebook";
  FileUploadTypes2["ami"] = "application/vnd.amiga.ami";
  FileUploadTypes2["apk"] = "application/vnd.android.package-archive";
  FileUploadTypes2["cii"] = "application/vnd.anser-web-certificate-issue-initiation";
  FileUploadTypes2["fti"] = "application/vnd.anser-web-funds-transfer-initiation";
  FileUploadTypes2["atx"] = "application/vnd.antix.game-component";
  FileUploadTypes2["dmg"] = "application/x-apple-diskimage";
  FileUploadTypes2["mpkg"] = "application/vnd.apple.installer+xml";
  FileUploadTypes2["aw"] = "application/applixware";
  FileUploadTypes2["les"] = "application/vnd.hhe.lesson-player";
  FileUploadTypes2["swi"] = "application/vnd.aristanetworks.swi";
  FileUploadTypes2["s"] = "text/x-asm";
  FileUploadTypes2["atomcat"] = "application/atomcat+xml";
  FileUploadTypes2["atomsvc"] = "application/atomsvc+xml";
  FileUploadTypes2["atom"] = "application/atom+xml";
  FileUploadTypes2["ac"] = "application/pkix-attr-cert";
  FileUploadTypes2["aif"] = "audio/x-aiff";
  FileUploadTypes2["avi"] = "video/x-msvideo";
  FileUploadTypes2["aep"] = "application/vnd.audiograph";
  FileUploadTypes2["dxf"] = "image/vnd.dxf";
  FileUploadTypes2["dwf"] = "model/vnd.dwf";
  FileUploadTypes2["par"] = "text/plain-bas";
  FileUploadTypes2["bcpio"] = "application/x-bcpio";
  FileUploadTypes2["bin"] = "application/octet-stream";
  FileUploadTypes2["bmp"] = "image/bmp";
  FileUploadTypes2["torrent"] = "application/x-bittorrent";
  FileUploadTypes2["cod"] = "application/vnd.rim.cod";
  FileUploadTypes2["mpm"] = "application/vnd.blueice.multipass";
  FileUploadTypes2["bmi"] = "application/vnd.bmi";
  FileUploadTypes2["sh"] = "application/x-sh";
  FileUploadTypes2["btif"] = "image/prs.btif";
  FileUploadTypes2["rep"] = "application/vnd.businessobjects";
  FileUploadTypes2["bz"] = "application/x-bzip";
  FileUploadTypes2["bz2"] = "application/x-bzip2";
  FileUploadTypes2["csh"] = "application/x-csh";
  FileUploadTypes2["c"] = "text/x-c";
  FileUploadTypes2["cdxml"] = "application/vnd.chemdraw+xml";
  FileUploadTypes2["css"] = "text/css";
  FileUploadTypes2["cdx"] = "chemical/x-cdx";
  FileUploadTypes2["cml"] = "chemical/x-cml";
  FileUploadTypes2["csml"] = "chemical/x-csml";
  FileUploadTypes2["cdbcmsg"] = "application/vnd.contact.cmsg";
  FileUploadTypes2["cla"] = "application/vnd.claymore";
  FileUploadTypes2["c4g"] = "application/vnd.clonk.c4group";
  FileUploadTypes2["sub"] = "image/vnd.dvb.subtitle";
  FileUploadTypes2["cdmia"] = "application/cdmi-capability";
  FileUploadTypes2["cdmic"] = "application/cdmi-container";
  FileUploadTypes2["cdmid"] = "application/cdmi-domain";
  FileUploadTypes2["cdmio"] = "application/cdmi-object";
  FileUploadTypes2["cdmiq"] = "application/cdmi-queue";
  FileUploadTypes2["c11amc"] = "application/vnd.cluetrust.cartomobile-config";
  FileUploadTypes2["c11amz"] = "application/vnd.cluetrust.cartomobile-config-pkg";
  FileUploadTypes2["ras"] = "image/x-cmu-raster";
  FileUploadTypes2["dae"] = "model/vnd.collada+xml";
  FileUploadTypes2["csv"] = "text/csv";
  FileUploadTypes2["cpt"] = "application/mac-compactpro";
  FileUploadTypes2["wmlc"] = "application/vnd.wap.wmlc";
  FileUploadTypes2["cgm"] = "image/cgm";
  FileUploadTypes2["ice"] = "x-conference/x-cooltalk";
  FileUploadTypes2["cmx"] = "image/x-cmx";
  FileUploadTypes2["xar"] = "application/vnd.xara";
  FileUploadTypes2["cmc"] = "application/vnd.cosmocaller";
  FileUploadTypes2["cpio"] = "application/x-cpio";
  FileUploadTypes2["clkx"] = "application/vnd.crick.clicker";
  FileUploadTypes2["clkk"] = "application/vnd.crick.clicker.keyboard";
  FileUploadTypes2["clkp"] = "application/vnd.crick.clicker.palette";
  FileUploadTypes2["clkt"] = "application/vnd.crick.clicker.template";
  FileUploadTypes2["clkw"] = "application/vnd.crick.clicker.wordbank";
  FileUploadTypes2["wbs"] = "application/vnd.criticaltools.wbs+xml";
  FileUploadTypes2["cryptonote"] = "application/vnd.rig.cryptonote";
  FileUploadTypes2["cif"] = "chemical/x-cif";
  FileUploadTypes2["cmdf"] = "chemical/x-cmdf";
  FileUploadTypes2["cu"] = "application/cu-seeme";
  FileUploadTypes2["cww"] = "application/prs.cww";
  FileUploadTypes2["curl"] = "text/vnd.curl";
  FileUploadTypes2["dcurl"] = "text/vnd.curl.dcurl";
  FileUploadTypes2["mcurl"] = "text/vnd.curl.mcurl";
  FileUploadTypes2["scurl"] = "text/vnd.curl.scurl";
  FileUploadTypes2["car"] = "application/vnd.curl.car";
  FileUploadTypes2["pcurl"] = "application/vnd.curl.pcurl";
  FileUploadTypes2["cmp"] = "application/vnd.yellowriver-custom-menu";
  FileUploadTypes2["dssc"] = "application/dssc+der";
  FileUploadTypes2["xdssc"] = "application/dssc+xml";
  FileUploadTypes2["deb"] = "application/x-debian-package";
  FileUploadTypes2["uva"] = "audio/vnd.dece.audio";
  FileUploadTypes2["uvi"] = "image/vnd.dece.graphic";
  FileUploadTypes2["uvh"] = "video/vnd.dece.hd";
  FileUploadTypes2["uvm"] = "video/vnd.dece.mobile";
  FileUploadTypes2["uvu"] = "video/vnd.uvvu.mp4";
  FileUploadTypes2["uvp"] = "video/vnd.dece.pd";
  FileUploadTypes2["uvs"] = "video/vnd.dece.sd";
  FileUploadTypes2["uvv"] = "video/vnd.dece.video";
  FileUploadTypes2["dvi"] = "application/x-dvi";
  FileUploadTypes2["seed"] = "application/vnd.fdsn.seed";
  FileUploadTypes2["dtb"] = "application/x-dtbook+xml";
  FileUploadTypes2["res"] = "application/x-dtbresource+xml";
  FileUploadTypes2["ait"] = "application/vnd.dvb.ait";
  FileUploadTypes2["svc"] = "application/vnd.dvb.service";
  FileUploadTypes2["eol"] = "audio/vnd.digital-winds";
  FileUploadTypes2["djvu"] = "image/vnd.djvu";
  FileUploadTypes2["dtd"] = "application/xml-dtd";
  FileUploadTypes2["mlp"] = "application/vnd.dolby.mlp";
  FileUploadTypes2["wad"] = "application/x-doom";
  FileUploadTypes2["dpg"] = "application/vnd.dpgraph";
  FileUploadTypes2["dra"] = "audio/vnd.dra";
  FileUploadTypes2["dfac"] = "application/vnd.dreamfactory";
  FileUploadTypes2["dts"] = "audio/vnd.dts";
  FileUploadTypes2["dtshd"] = "audio/vnd.dts.hd";
  FileUploadTypes2["dwg"] = "image/vnd.dwg";
  FileUploadTypes2["geo"] = "application/vnd.dynageo";
  FileUploadTypes2["es"] = "application/ecmascript";
  FileUploadTypes2["mag"] = "application/vnd.ecowin.chart";
  FileUploadTypes2["mmr"] = "image/vnd.fujixerox.edmics-mmr";
  FileUploadTypes2["rlc"] = "image/vnd.fujixerox.edmics-rlc";
  FileUploadTypes2["exi"] = "application/exi";
  FileUploadTypes2["mgz"] = "application/vnd.proteus.magazine";
  FileUploadTypes2["epub"] = "application/epub+zip";
  FileUploadTypes2["eml"] = "message/rfc822";
  FileUploadTypes2["nml"] = "application/vnd.enliven";
  FileUploadTypes2["xpr"] = "application/vnd.is-xpr";
  FileUploadTypes2["xif"] = "image/vnd.xiff";
  FileUploadTypes2["xfdl"] = "application/vnd.xfdl";
  FileUploadTypes2["emma"] = "application/emma+xml";
  FileUploadTypes2["ez2"] = "application/vnd.ezpix-album";
  FileUploadTypes2["ez3"] = "application/vnd.ezpix-package";
  FileUploadTypes2["fst"] = "image/vnd.fst";
  FileUploadTypes2["fvt"] = "video/vnd.fvt";
  FileUploadTypes2["fbs"] = "image/vnd.fastbidsheet";
  FileUploadTypes2["fe_launch"] = "application/vnd.denovo.fcselayout-link";
  FileUploadTypes2["f4v"] = "video/x-f4v";
  FileUploadTypes2["flv"] = "video/x-flv";
  FileUploadTypes2["fpx"] = "image/vnd.fpx";
  FileUploadTypes2["npx"] = "image/vnd.net-fpx";
  FileUploadTypes2["flx"] = "text/vnd.fmi.flexstor";
  FileUploadTypes2["fli"] = "video/x-fli";
  FileUploadTypes2["ftc"] = "application/vnd.fluxtime.clip";
  FileUploadTypes2["fdf"] = "application/vnd.fdf";
  FileUploadTypes2["f"] = "text/x-fortran";
  FileUploadTypes2["mif"] = "application/vnd.mif";
  FileUploadTypes2["fm"] = "application/vnd.framemaker";
  FileUploadTypes2["fh"] = "image/x-freehand";
  FileUploadTypes2["fsc"] = "application/vnd.fsc.weblaunch";
  FileUploadTypes2["fnc"] = "application/vnd.frogans.fnc";
  FileUploadTypes2["ltf"] = "application/vnd.frogans.ltf";
  FileUploadTypes2["ddd"] = "application/vnd.fujixerox.ddd";
  FileUploadTypes2["xdw"] = "application/vnd.fujixerox.docuworks";
  FileUploadTypes2["xbd"] = "application/vnd.fujixerox.docuworks.binder";
  FileUploadTypes2["oas"] = "application/vnd.fujitsu.oasys";
  FileUploadTypes2["oa2"] = "application/vnd.fujitsu.oasys2";
  FileUploadTypes2["oa3"] = "application/vnd.fujitsu.oasys3";
  FileUploadTypes2["fg5"] = "application/vnd.fujitsu.oasysgp";
  FileUploadTypes2["bh2"] = "application/vnd.fujitsu.oasysprs";
  FileUploadTypes2["spl"] = "application/x-futuresplash";
  FileUploadTypes2["fzs"] = "application/vnd.fuzzysheet";
  FileUploadTypes2["g3"] = "image/g3fax";
  FileUploadTypes2["gmx"] = "application/vnd.gmx";
  FileUploadTypes2["gtw"] = "model/vnd.gtw";
  FileUploadTypes2["txd"] = "application/vnd.genomatix.tuxedo";
  FileUploadTypes2["ggb"] = "application/vnd.geogebra.file";
  FileUploadTypes2["ggt"] = "application/vnd.geogebra.tool";
  FileUploadTypes2["gdl"] = "model/vnd.gdl";
  FileUploadTypes2["gex"] = "application/vnd.geometry-explorer";
  FileUploadTypes2["gxt"] = "application/vnd.geonext";
  FileUploadTypes2["g2w"] = "application/vnd.geoplan";
  FileUploadTypes2["g3w"] = "application/vnd.geospace";
  FileUploadTypes2["gsf"] = "application/x-font-ghostscript";
  FileUploadTypes2["bdf"] = "application/x-font-bdf";
  FileUploadTypes2["gtar"] = "application/x-gtar";
  FileUploadTypes2["texinfo"] = "application/x-texinfo";
  FileUploadTypes2["gnumeric"] = "application/x-gnumeric";
  FileUploadTypes2["kml"] = "application/vnd.google-earth.kml+xml";
  FileUploadTypes2["kmz"] = "application/vnd.google-earth.kmz";
  FileUploadTypes2["gqf"] = "application/vnd.grafeq";
  FileUploadTypes2["gif"] = "image/gif";
  FileUploadTypes2["gv"] = "text/vnd.graphviz";
  FileUploadTypes2["gac"] = "application/vnd.groove-account";
  FileUploadTypes2["ghf"] = "application/vnd.groove-help";
  FileUploadTypes2["gim"] = "application/vnd.groove-identity-message";
  FileUploadTypes2["grv"] = "application/vnd.groove-injector";
  FileUploadTypes2["gtm"] = "application/vnd.groove-tool-message";
  FileUploadTypes2["tpl"] = "application/vnd.groove-tool-template";
  FileUploadTypes2["vcg"] = "application/vnd.groove-vcard";
  FileUploadTypes2["h261"] = "video/h261";
  FileUploadTypes2["h263"] = "video/h263";
  FileUploadTypes2["h264"] = "video/h264";
  FileUploadTypes2["hpid"] = "application/vnd.hp-hpid";
  FileUploadTypes2["hps"] = "application/vnd.hp-hps";
  FileUploadTypes2["hdf"] = "application/x-hdf";
  FileUploadTypes2["rip"] = "audio/vnd.rip";
  FileUploadTypes2["hbci"] = "application/vnd.hbci";
  FileUploadTypes2["jlt"] = "application/vnd.hp-jlyt";
  FileUploadTypes2["pcl"] = "application/vnd.hp-pcl";
  FileUploadTypes2["hpgl"] = "application/vnd.hp-hpgl";
  FileUploadTypes2["hvs"] = "application/vnd.yamaha.hv-script";
  FileUploadTypes2["hvd"] = "application/vnd.yamaha.hv-dic";
  FileUploadTypes2["hvp"] = "application/vnd.yamaha.hv-voice";
  FileUploadTypes2["sfd-hdstx"] = "application/vnd.hydrostatix.sof-data";
  FileUploadTypes2["stk"] = "application/hyperstudio";
  FileUploadTypes2["hal"] = "application/vnd.hal+xml";
  FileUploadTypes2["html"] = "text/html";
  FileUploadTypes2["irm"] = "application/vnd.ibm.rights-management";
  FileUploadTypes2["sc"] = "application/vnd.ibm.secure-container";
  FileUploadTypes2["ics"] = "text/calendar";
  FileUploadTypes2["icc"] = "application/vnd.iccprofile";
  FileUploadTypes2["ico"] = "image/x-icon";
  FileUploadTypes2["igl"] = "application/vnd.igloader";
  FileUploadTypes2["ief"] = "image/ief";
  FileUploadTypes2["ivp"] = "application/vnd.immervision-ivp";
  FileUploadTypes2["ivu"] = "application/vnd.immervision-ivu";
  FileUploadTypes2["rif"] = "application/reginfo+xml";
  FileUploadTypes2["3dml"] = "text/vnd.in3d.3dml";
  FileUploadTypes2["spot"] = "text/vnd.in3d.spot";
  FileUploadTypes2["igs"] = "model/iges";
  FileUploadTypes2["i2g"] = "application/vnd.intergeo";
  FileUploadTypes2["cdy"] = "application/vnd.cinderella";
  FileUploadTypes2["xpw"] = "application/vnd.intercon.formnet";
  FileUploadTypes2["fcs"] = "application/vnd.isac.fcs";
  FileUploadTypes2["ipfix"] = "application/ipfix";
  FileUploadTypes2["cer"] = "application/pkix-cert";
  FileUploadTypes2["pki"] = "application/pkixcmp";
  FileUploadTypes2["crl"] = "application/pkix-crl";
  FileUploadTypes2["pkipath"] = "application/pkix-pkipath";
  FileUploadTypes2["igm"] = "application/vnd.insors.igm";
  FileUploadTypes2["rcprofile"] = "application/vnd.ipunplugged.rcprofile";
  FileUploadTypes2["irp"] = "application/vnd.irepository.package+xml";
  FileUploadTypes2["jad"] = "text/vnd.sun.j2me.app-descriptor";
  FileUploadTypes2["jar"] = "application/java-archive";
  FileUploadTypes2["class"] = "application/java-vm";
  FileUploadTypes2["jnlp"] = "application/x-java-jnlp-file";
  FileUploadTypes2["ser"] = "application/java-serialized-object";
  FileUploadTypes2["java"] = "text/x-java-source,java";
  FileUploadTypes2["js"] = "application/javascript";
  FileUploadTypes2["json"] = "application/json";
  FileUploadTypes2["joda"] = "application/vnd.joost.joda-archive";
  FileUploadTypes2["jpm"] = "video/jpm";
  FileUploadTypes2["jpg"] = "image/jpeg";
  FileUploadTypes2["pjpeg"] = "image/pjpeg";
  FileUploadTypes2["jpgv"] = "video/jpeg";
  FileUploadTypes2["ktz"] = "application/vnd.kahootz";
  FileUploadTypes2["mmd"] = "application/vnd.chipnuts.karaoke-mmd";
  FileUploadTypes2["karbon"] = "application/vnd.kde.karbon";
  FileUploadTypes2["chrt"] = "application/vnd.kde.kchart";
  FileUploadTypes2["kfo"] = "application/vnd.kde.kformula";
  FileUploadTypes2["flw"] = "application/vnd.kde.kivio";
  FileUploadTypes2["kon"] = "application/vnd.kde.kontour";
  FileUploadTypes2["kpr"] = "application/vnd.kde.kpresenter";
  FileUploadTypes2["ksp"] = "application/vnd.kde.kspread";
  FileUploadTypes2["kwd"] = "application/vnd.kde.kword";
  FileUploadTypes2["htke"] = "application/vnd.kenameaapp";
  FileUploadTypes2["kia"] = "application/vnd.kidspiration";
  FileUploadTypes2["kne"] = "application/vnd.kinar";
  FileUploadTypes2["sse"] = "application/vnd.kodak-descriptor";
  FileUploadTypes2["lasxml"] = "application/vnd.las.las+xml";
  FileUploadTypes2["latex"] = "application/x-latex";
  FileUploadTypes2["lbd"] = "application/vnd.llamagraphics.life-balance.desktop";
  FileUploadTypes2["lbe"] = "application/vnd.llamagraphics.life-balance.exchange+xml";
  FileUploadTypes2["jam"] = "application/vnd.jam";
  FileUploadTypes2["apr"] = "application/vnd.lotus-approach";
  FileUploadTypes2["pre"] = "application/vnd.lotus-freelance";
  FileUploadTypes2["nsf"] = "application/vnd.lotus-notes";
  FileUploadTypes2["org"] = "application/vnd.lotus-organizer";
  FileUploadTypes2["scm"] = "application/vnd.lotus-screencam";
  FileUploadTypes2["lwp"] = "application/vnd.lotus-wordpro";
  FileUploadTypes2["lvp"] = "audio/vnd.lucent.voice";
  FileUploadTypes2["m3u"] = "audio/x-mpegurl";
  FileUploadTypes2["m4v"] = "video/x-m4v";
  FileUploadTypes2["hqx"] = "application/mac-binhex40";
  FileUploadTypes2["portpkg"] = "application/vnd.macports.portpkg";
  FileUploadTypes2["mgp"] = "application/vnd.osgeo.mapguide.package";
  FileUploadTypes2["mrc"] = "application/marc";
  FileUploadTypes2["mrcx"] = "application/marcxml+xml";
  FileUploadTypes2["mxf"] = "application/mxf";
  FileUploadTypes2["nbp"] = "application/vnd.wolfram.player";
  FileUploadTypes2["ma"] = "application/mathematica";
  FileUploadTypes2["mathml"] = "application/mathml+xml";
  FileUploadTypes2["mbox"] = "application/mbox";
  FileUploadTypes2["mc1"] = "application/vnd.medcalcdata";
  FileUploadTypes2["mscml"] = "application/mediaservercontrol+xml";
  FileUploadTypes2["cdkey"] = "application/vnd.mediastation.cdkey";
  FileUploadTypes2["mwf"] = "application/vnd.mfer";
  FileUploadTypes2["mfm"] = "application/vnd.mfmp";
  FileUploadTypes2["msh"] = "model/mesh";
  FileUploadTypes2["mads"] = "application/mads+xml";
  FileUploadTypes2["mets"] = "application/mets+xml";
  FileUploadTypes2["mods"] = "application/mods+xml";
  FileUploadTypes2["meta4"] = "application/metalink4+xml";
  FileUploadTypes2["mcd"] = "application/vnd.mcd";
  FileUploadTypes2["flo"] = "application/vnd.micrografx.flo";
  FileUploadTypes2["igx"] = "application/vnd.micrografx.igx";
  FileUploadTypes2["es3"] = "application/vnd.eszigno3+xml";
  FileUploadTypes2["mdb"] = "application/x-msaccess";
  FileUploadTypes2["asf"] = "video/x-ms-asf";
  FileUploadTypes2["exe"] = "application/x-msdownload";
  FileUploadTypes2["cil"] = "application/vnd.ms-artgalry";
  FileUploadTypes2["cab"] = "application/vnd.ms-cab-compressed";
  FileUploadTypes2["ims"] = "application/vnd.ms-ims";
  FileUploadTypes2["application"] = "application/x-ms-application";
  FileUploadTypes2["clp"] = "application/x-msclip";
  FileUploadTypes2["mdi"] = "image/vnd.ms-modi";
  FileUploadTypes2["eot"] = "application/vnd.ms-fontobject";
  FileUploadTypes2["xls"] = "application/vnd.ms-excel";
  FileUploadTypes2["xlam"] = "application/vnd.ms-excel.addin.macroenabled.12";
  FileUploadTypes2["xlsb"] = "application/vnd.ms-excel.sheet.binary.macroenabled.12";
  FileUploadTypes2["xltm"] = "application/vnd.ms-excel.template.macroenabled.12";
  FileUploadTypes2["xlsm"] = "application/vnd.ms-excel.sheet.macroenabled.12";
  FileUploadTypes2["chm"] = "application/vnd.ms-htmlhelp";
  FileUploadTypes2["crd"] = "application/x-mscardfile";
  FileUploadTypes2["lrm"] = "application/vnd.ms-lrm";
  FileUploadTypes2["mvb"] = "application/x-msmediaview";
  FileUploadTypes2["mny"] = "application/x-msmoney";
  FileUploadTypes2["pptx"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
  FileUploadTypes2["sldx"] = "application/vnd.openxmlformats-officedocument.presentationml.slide";
  FileUploadTypes2["ppsx"] = "application/vnd.openxmlformats-officedocument.presentationml.slideshow";
  FileUploadTypes2["potx"] = "application/vnd.openxmlformats-officedocument.presentationml.template";
  FileUploadTypes2["xlsx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  FileUploadTypes2["xltx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.template";
  FileUploadTypes2["docx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  FileUploadTypes2["dotx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.template";
  FileUploadTypes2["obd"] = "application/x-msbinder";
  FileUploadTypes2["thmx"] = "application/vnd.ms-officetheme";
  FileUploadTypes2["onetoc"] = "application/onenote";
  FileUploadTypes2["pya"] = "audio/vnd.ms-playready.media.pya";
  FileUploadTypes2["pyv"] = "video/vnd.ms-playready.media.pyv";
  FileUploadTypes2["ppt"] = "application/vnd.ms-powerpoint";
  FileUploadTypes2["ppa"] = "application/vnd.ms-powerpoint";
  FileUploadTypes2["ppam"] = "application/vnd.ms-powerpoint.addin.macroenabled.12";
  FileUploadTypes2["sldm"] = "application/vnd.ms-powerpoint.slide.macroenabled.12";
  FileUploadTypes2["pptm"] = "application/vnd.ms-powerpoint.presentation.macroenabled.12";
  FileUploadTypes2["ppsm"] = "application/vnd.ms-powerpoint.slideshow.macroenabled.12";
  FileUploadTypes2["potm"] = "application/vnd.ms-powerpoint.template.macroenabled.12";
  FileUploadTypes2["mpp"] = "application/vnd.ms-project";
  FileUploadTypes2["pub"] = "application/x-mspublisher";
  FileUploadTypes2["scd"] = "application/x-msschedule";
  FileUploadTypes2["xap"] = "application/x-silverlight-app";
  FileUploadTypes2["stl"] = "application/vnd.ms-pki.stl";
  FileUploadTypes2["cat"] = "application/vnd.ms-pki.seccat";
  FileUploadTypes2["vsd"] = "application/vnd.visio";
  FileUploadTypes2["vsdx"] = "application/vnd.visio2013";
  FileUploadTypes2["wm"] = "video/x-ms-wm";
  FileUploadTypes2["wma"] = "audio/x-ms-wma";
  FileUploadTypes2["wax"] = "audio/x-ms-wax";
  FileUploadTypes2["wmx"] = "video/x-ms-wmx";
  FileUploadTypes2["wmd"] = "application/x-ms-wmd";
  FileUploadTypes2["wpl"] = "application/vnd.ms-wpl";
  FileUploadTypes2["wmz"] = "application/x-ms-wmz";
  FileUploadTypes2["wmv"] = "video/x-ms-wmv";
  FileUploadTypes2["wvx"] = "video/x-ms-wvx";
  FileUploadTypes2["wmf"] = "application/x-msmetafile";
  FileUploadTypes2["trm"] = "application/x-msterminal";
  FileUploadTypes2["doc"] = "application/msword";
  FileUploadTypes2["docm"] = "application/vnd.ms-word.document.macroenabled.12";
  FileUploadTypes2["dotm"] = "application/vnd.ms-word.template.macroenabled.12";
  FileUploadTypes2["wri"] = "application/x-mswrite";
  FileUploadTypes2["wps"] = "application/vnd.ms-works";
  FileUploadTypes2["xbap"] = "application/x-ms-xbap";
  FileUploadTypes2["xps"] = "application/vnd.ms-xpsdocument";
  FileUploadTypes2["mid"] = "audio/midi";
  FileUploadTypes2["mpy"] = "application/vnd.ibm.minipay";
  FileUploadTypes2["afp"] = "application/vnd.ibm.modcap";
  FileUploadTypes2["rms"] = "application/vnd.jcp.javame.midlet-rms";
  FileUploadTypes2["tmo"] = "application/vnd.tmobile-livetv";
  FileUploadTypes2["prc"] = "application/x-mobipocket-ebook";
  FileUploadTypes2["mbk"] = "application/vnd.mobius.mbk";
  FileUploadTypes2["dis"] = "application/vnd.mobius.dis";
  FileUploadTypes2["plc"] = "application/vnd.mobius.plc";
  FileUploadTypes2["mqy"] = "application/vnd.mobius.mqy";
  FileUploadTypes2["msl"] = "application/vnd.mobius.msl";
  FileUploadTypes2["txf"] = "application/vnd.mobius.txf";
  FileUploadTypes2["daf"] = "application/vnd.mobius.daf";
  FileUploadTypes2["fly"] = "text/vnd.fly";
  FileUploadTypes2["mpc"] = "application/vnd.mophun.certificate";
  FileUploadTypes2["mpn"] = "application/vnd.mophun.application";
  FileUploadTypes2["mj2"] = "video/mj2";
  FileUploadTypes2["mpga"] = "audio/mpeg";
  FileUploadTypes2["mxu"] = "video/vnd.mpegurl";
  FileUploadTypes2["mpeg"] = "video/mpeg";
  FileUploadTypes2["m21"] = "application/mp21";
  FileUploadTypes2["mp4a"] = "audio/mp4";
  FileUploadTypes2["mp4"] = "video/mp4";
  FileUploadTypes2["m3u8"] = "application/vnd.apple.mpegurl";
  FileUploadTypes2["mus"] = "application/vnd.musician";
  FileUploadTypes2["msty"] = "application/vnd.muvee.style";
  FileUploadTypes2["mxml"] = "application/xv+xml";
  FileUploadTypes2["ngdat"] = "application/vnd.nokia.n-gage.data";
  FileUploadTypes2["n-gage"] = "application/vnd.nokia.n-gage.symbian.install";
  FileUploadTypes2["ncx"] = "application/x-dtbncx+xml";
  FileUploadTypes2["nc"] = "application/x-netcdf";
  FileUploadTypes2["nlu"] = "application/vnd.neurolanguage.nlu";
  FileUploadTypes2["dna"] = "application/vnd.dna";
  FileUploadTypes2["nnd"] = "application/vnd.noblenet-directory";
  FileUploadTypes2["nns"] = "application/vnd.noblenet-sealer";
  FileUploadTypes2["nnw"] = "application/vnd.noblenet-web";
  FileUploadTypes2["rpst"] = "application/vnd.nokia.radio-preset";
  FileUploadTypes2["rpss"] = "application/vnd.nokia.radio-presets";
  FileUploadTypes2["n3"] = "text/n3";
  FileUploadTypes2["edm"] = "application/vnd.novadigm.edm";
  FileUploadTypes2["edx"] = "application/vnd.novadigm.edx";
  FileUploadTypes2["ext"] = "application/vnd.novadigm.ext";
  FileUploadTypes2["gph"] = "application/vnd.flographit";
  FileUploadTypes2["ecelp4800"] = "audio/vnd.nuera.ecelp4800";
  FileUploadTypes2["ecelp7470"] = "audio/vnd.nuera.ecelp7470";
  FileUploadTypes2["ecelp9600"] = "audio/vnd.nuera.ecelp9600";
  FileUploadTypes2["oda"] = "application/oda";
  FileUploadTypes2["ogx"] = "application/ogg";
  FileUploadTypes2["oga"] = "audio/ogg";
  FileUploadTypes2["ogv"] = "video/ogg";
  FileUploadTypes2["dd2"] = "application/vnd.oma.dd2+xml";
  FileUploadTypes2["oth"] = "application/vnd.oasis.opendocument.text-web";
  FileUploadTypes2["opf"] = "application/oebps-package+xml";
  FileUploadTypes2["qbo"] = "application/vnd.intu.qbo";
  FileUploadTypes2["oxt"] = "application/vnd.openofficeorg.extension";
  FileUploadTypes2["osf"] = "application/vnd.yamaha.openscoreformat";
  FileUploadTypes2["weba"] = "audio/webm";
  FileUploadTypes2["webm"] = "video/webm";
  FileUploadTypes2["odc"] = "application/vnd.oasis.opendocument.chart";
  FileUploadTypes2["otc"] = "application/vnd.oasis.opendocument.chart-template";
  FileUploadTypes2["odb"] = "application/vnd.oasis.opendocument.database";
  FileUploadTypes2["odf"] = "application/vnd.oasis.opendocument.formula";
  FileUploadTypes2["odft"] = "application/vnd.oasis.opendocument.formula-template";
  FileUploadTypes2["odg"] = "application/vnd.oasis.opendocument.graphics";
  FileUploadTypes2["otg"] = "application/vnd.oasis.opendocument.graphics-template";
  FileUploadTypes2["odi"] = "application/vnd.oasis.opendocument.image";
  FileUploadTypes2["oti"] = "application/vnd.oasis.opendocument.image-template";
  FileUploadTypes2["odp"] = "application/vnd.oasis.opendocument.presentation";
  FileUploadTypes2["otp"] = "application/vnd.oasis.opendocument.presentation-template";
  FileUploadTypes2["ods"] = "application/vnd.oasis.opendocument.spreadsheet";
  FileUploadTypes2["ots"] = "application/vnd.oasis.opendocument.spreadsheet-template";
  FileUploadTypes2["odt"] = "application/vnd.oasis.opendocument.text";
  FileUploadTypes2["odm"] = "application/vnd.oasis.opendocument.text-master";
  FileUploadTypes2["ott"] = "application/vnd.oasis.opendocument.text-template";
  FileUploadTypes2["ktx"] = "image/ktx";
  FileUploadTypes2["sxc"] = "application/vnd.sun.xml.calc";
  FileUploadTypes2["stc"] = "application/vnd.sun.xml.calc.template";
  FileUploadTypes2["sxd"] = "application/vnd.sun.xml.draw";
  FileUploadTypes2["std"] = "application/vnd.sun.xml.draw.template";
  FileUploadTypes2["sxi"] = "application/vnd.sun.xml.impress";
  FileUploadTypes2["sti"] = "application/vnd.sun.xml.impress.template";
  FileUploadTypes2["sxm"] = "application/vnd.sun.xml.math";
  FileUploadTypes2["sxw"] = "application/vnd.sun.xml.writer";
  FileUploadTypes2["sxg"] = "application/vnd.sun.xml.writer.global";
  FileUploadTypes2["stw"] = "application/vnd.sun.xml.writer.template";
  FileUploadTypes2["otf"] = "application/x-font-otf";
  FileUploadTypes2["osfpvg"] = "application/vnd.yamaha.openscoreformat.osfpvg+xml";
  FileUploadTypes2["dp"] = "application/vnd.osgi.dp";
  FileUploadTypes2["pdb"] = "application/vnd.palm";
  FileUploadTypes2["p"] = "text/x-pascal";
  FileUploadTypes2["paw"] = "application/vnd.pawaafile";
  FileUploadTypes2["pclxl"] = "application/vnd.hp-pclxl";
  FileUploadTypes2["efif"] = "application/vnd.picsel";
  FileUploadTypes2["pcx"] = "image/x-pcx";
  FileUploadTypes2["psd"] = "image/vnd.adobe.photoshop";
  FileUploadTypes2["prf"] = "application/pics-rules";
  FileUploadTypes2["pic"] = "image/x-pict";
  FileUploadTypes2["chat"] = "application/x-chat";
  FileUploadTypes2["p10"] = "application/pkcs10";
  FileUploadTypes2["p12"] = "application/x-pkcs12";
  FileUploadTypes2["p7m"] = "application/pkcs7-mime";
  FileUploadTypes2["p7s"] = "application/pkcs7-signature";
  FileUploadTypes2["p7r"] = "application/x-pkcs7-certreqresp";
  FileUploadTypes2["p7b"] = "application/x-pkcs7-certificates";
  FileUploadTypes2["p8"] = "application/pkcs8";
  FileUploadTypes2["plf"] = "application/vnd.pocketlearn";
  FileUploadTypes2["pnm"] = "image/x-portable-anymap";
  FileUploadTypes2["pbm"] = "image/x-portable-bitmap";
  FileUploadTypes2["pcf"] = "application/x-font-pcf";
  FileUploadTypes2["pfr"] = "application/font-tdpfr";
  FileUploadTypes2["pgn"] = "application/x-chess-pgn";
  FileUploadTypes2["pgm"] = "image/x-portable-graymap";
  FileUploadTypes2["png"] = "image/png";
  FileUploadTypes2["ppm"] = "image/x-portable-pixmap";
  FileUploadTypes2["pskcxml"] = "application/pskc+xml";
  FileUploadTypes2["pml"] = "application/vnd.ctc-posml";
  FileUploadTypes2["ai"] = "application/postscript";
  FileUploadTypes2["pfa"] = "application/x-font-type1";
  FileUploadTypes2["pbd"] = "application/vnd.powerbuilder6";
  FileUploadTypes2["pgp"] = "application/pgp-encrypted";
  FileUploadTypes2["box"] = "application/vnd.previewsystems.box";
  FileUploadTypes2["ptid"] = "application/vnd.pvi.ptid1";
  FileUploadTypes2["pls"] = "application/pls+xml";
  FileUploadTypes2["str"] = "application/vnd.pg.format";
  FileUploadTypes2["ei6"] = "application/vnd.pg.osasli";
  FileUploadTypes2["dsc"] = "text/prs.lines.tag";
  FileUploadTypes2["psf"] = "application/x-font-linux-psf";
  FileUploadTypes2["qps"] = "application/vnd.publishare-delta-tree";
  FileUploadTypes2["wg"] = "application/vnd.pmi.widget";
  FileUploadTypes2["qxd"] = "application/vnd.quark.quarkxpress";
  FileUploadTypes2["esf"] = "application/vnd.epson.esf";
  FileUploadTypes2["msf"] = "application/vnd.epson.msf";
  FileUploadTypes2["ssf"] = "application/vnd.epson.ssf";
  FileUploadTypes2["qam"] = "application/vnd.epson.quickanime";
  FileUploadTypes2["qfx"] = "application/vnd.intu.qfx";
  FileUploadTypes2["qt"] = "video/quicktime";
  FileUploadTypes2["rar"] = "application/x-rar-compressed";
  FileUploadTypes2["ram"] = "audio/x-pn-realaudio";
  FileUploadTypes2["rmp"] = "audio/x-pn-realaudio-plugin";
  FileUploadTypes2["rsd"] = "application/rsd+xml";
  FileUploadTypes2["rm"] = "application/vnd.rn-realmedia";
  FileUploadTypes2["bed"] = "application/vnd.realvnc.bed";
  FileUploadTypes2["mxl"] = "application/vnd.recordare.musicxml";
  FileUploadTypes2["musicxml"] = "application/vnd.recordare.musicxml+xml";
  FileUploadTypes2["rnc"] = "application/relax-ng-compact-syntax";
  FileUploadTypes2["rdz"] = "application/vnd.data-vision.rdz";
  FileUploadTypes2["rdf"] = "application/rdf+xml";
  FileUploadTypes2["rp9"] = "application/vnd.cloanto.rp9";
  FileUploadTypes2["jisp"] = "application/vnd.jisp";
  FileUploadTypes2["rtf"] = "application/rtf";
  FileUploadTypes2["rtx"] = "text/richtext";
  FileUploadTypes2["link66"] = "application/vnd.route66.link66+xml";
  FileUploadTypes2["rss"] = "application/rss+xml,";
  FileUploadTypes2["shf"] = "application/shf+xml";
  FileUploadTypes2["st"] = "application/vnd.sailingtracker.track";
  FileUploadTypes2["svg"] = "image/svg+xml";
  FileUploadTypes2["sus"] = "application/vnd.sus-calendar";
  FileUploadTypes2["sru"] = "application/sru+xml";
  FileUploadTypes2["setpay"] = "application/set-payment-initiation";
  FileUploadTypes2["setreg"] = "application/set-registration-initiation";
  FileUploadTypes2["sema"] = "application/vnd.sema";
  FileUploadTypes2["semd"] = "application/vnd.semd";
  FileUploadTypes2["semf"] = "application/vnd.semf";
  FileUploadTypes2["see"] = "application/vnd.seemail";
  FileUploadTypes2["snf"] = "application/x-font-snf";
  FileUploadTypes2["spq"] = "application/scvp-vp-request";
  FileUploadTypes2["spp"] = "application/scvp-vp-response";
  FileUploadTypes2["scq"] = "application/scvp-cv-request";
  FileUploadTypes2["scs"] = "application/scvp-cv-response";
  FileUploadTypes2["sdp"] = "application/sdp";
  FileUploadTypes2["etx"] = "text/x-setext";
  FileUploadTypes2["movie"] = "video/x-sgi-movie";
  FileUploadTypes2["ifm"] = "application/vnd.shana.informed.formdata";
  FileUploadTypes2["itp"] = "application/vnd.shana.informed.formtemplate";
  FileUploadTypes2["iif"] = "application/vnd.shana.informed.interchange";
  FileUploadTypes2["ipk"] = "application/vnd.shana.informed.package";
  FileUploadTypes2["tfi"] = "application/thraud+xml";
  FileUploadTypes2["shar"] = "application/x-shar";
  FileUploadTypes2["rgb"] = "image/x-rgb";
  FileUploadTypes2["slt"] = "application/vnd.epson.salt";
  FileUploadTypes2["aso"] = "application/vnd.accpac.simply.aso";
  FileUploadTypes2["imp"] = "application/vnd.accpac.simply.imp";
  FileUploadTypes2["twd"] = "application/vnd.simtech-mindmapper";
  FileUploadTypes2["csp"] = "application/vnd.commonspace";
  FileUploadTypes2["saf"] = "application/vnd.yamaha.smaf-audio";
  FileUploadTypes2["mmf"] = "application/vnd.smaf";
  FileUploadTypes2["spf"] = "application/vnd.yamaha.smaf-phrase";
  FileUploadTypes2["teacher"] = "application/vnd.smart.teacher";
  FileUploadTypes2["svd"] = "application/vnd.svd";
  FileUploadTypes2["rq"] = "application/sparql-query";
  FileUploadTypes2["srx"] = "application/sparql-results+xml";
  FileUploadTypes2["gram"] = "application/srgs";
  FileUploadTypes2["grxml"] = "application/srgs+xml";
  FileUploadTypes2["ssml"] = "application/ssml+xml";
  FileUploadTypes2["skp"] = "application/vnd.koan";
  FileUploadTypes2["sgml"] = "text/sgml";
  FileUploadTypes2["sdc"] = "application/vnd.stardivision.calc";
  FileUploadTypes2["sda"] = "application/vnd.stardivision.draw";
  FileUploadTypes2["sdd"] = "application/vnd.stardivision.impress";
  FileUploadTypes2["smf"] = "application/vnd.stardivision.math";
  FileUploadTypes2["sdw"] = "application/vnd.stardivision.writer";
  FileUploadTypes2["sgl"] = "application/vnd.stardivision.writer-global";
  FileUploadTypes2["sm"] = "application/vnd.stepmania.stepchart";
  FileUploadTypes2["sit"] = "application/x-stuffit";
  FileUploadTypes2["sitx"] = "application/x-stuffitx";
  FileUploadTypes2["sdkm"] = "application/vnd.solent.sdkm+xml";
  FileUploadTypes2["xo"] = "application/vnd.olpc-sugar";
  FileUploadTypes2["au"] = "audio/basic";
  FileUploadTypes2["wqd"] = "application/vnd.wqd";
  FileUploadTypes2["sis"] = "application/vnd.symbian.install";
  FileUploadTypes2["smi"] = "application/smil+xml";
  FileUploadTypes2["xsm"] = "application/vnd.syncml+xml";
  FileUploadTypes2["bdm"] = "application/vnd.syncml.dm+wbxml";
  FileUploadTypes2["xdm"] = "application/vnd.syncml.dm+xml";
  FileUploadTypes2["sv4cpio"] = "application/x-sv4cpio";
  FileUploadTypes2["sv4crc"] = "application/x-sv4crc";
  FileUploadTypes2["sbml"] = "application/sbml+xml";
  FileUploadTypes2["tsv"] = "text/tab-separated-values";
  FileUploadTypes2["tiff"] = "image/tiff";
  FileUploadTypes2["tao"] = "application/vnd.tao.intent-module-archive";
  FileUploadTypes2["tar"] = "application/x-tar";
  FileUploadTypes2["tcl"] = "application/x-tcl";
  FileUploadTypes2["tex"] = "application/x-tex";
  FileUploadTypes2["tfm"] = "application/x-tex-tfm";
  FileUploadTypes2["tei"] = "application/tei+xml";
  FileUploadTypes2["txt"] = "text/plain";
  FileUploadTypes2["dxp"] = "application/vnd.spotfire.dxp";
  FileUploadTypes2["sfs"] = "application/vnd.spotfire.sfs";
  FileUploadTypes2["tsd"] = "application/timestamped-data";
  FileUploadTypes2["tpt"] = "application/vnd.trid.tpt";
  FileUploadTypes2["mxs"] = "application/vnd.triscape.mxs";
  FileUploadTypes2["t"] = "text/troff";
  FileUploadTypes2["tra"] = "application/vnd.trueapp";
  FileUploadTypes2["ttf"] = "application/x-font-ttf";
  FileUploadTypes2["ttl"] = "text/turtle";
  FileUploadTypes2["umj"] = "application/vnd.umajin";
  FileUploadTypes2["uoml"] = "application/vnd.uoml+xml";
  FileUploadTypes2["unityweb"] = "application/vnd.unity";
  FileUploadTypes2["ufd"] = "application/vnd.ufdl";
  FileUploadTypes2["uri"] = "text/uri-list";
  FileUploadTypes2["utz"] = "application/vnd.uiq.theme";
  FileUploadTypes2["ustar"] = "application/x-ustar";
  FileUploadTypes2["uu"] = "text/x-uuencode";
  FileUploadTypes2["vcs"] = "text/x-vcalendar";
  FileUploadTypes2["vcf"] = "text/x-vcard";
  FileUploadTypes2["vcd"] = "application/x-cdlink";
  FileUploadTypes2["vsf"] = "application/vnd.vsf";
  FileUploadTypes2["wrl"] = "model/vrml";
  FileUploadTypes2["vcx"] = "application/vnd.vcx";
  FileUploadTypes2["mts"] = "model/vnd.mts";
  FileUploadTypes2["vtu"] = "model/vnd.vtu";
  FileUploadTypes2["vis"] = "application/vnd.visionary";
  FileUploadTypes2["viv"] = "video/vnd.vivo";
  FileUploadTypes2["ccxml"] = "application/ccxml+xml,";
  FileUploadTypes2["vxml"] = "application/voicexml+xml";
  FileUploadTypes2["src"] = "application/x-wais-source";
  FileUploadTypes2["wbxml"] = "application/vnd.wap.wbxml";
  FileUploadTypes2["wbmp"] = "image/vnd.wap.wbmp";
  FileUploadTypes2["wav"] = "audio/x-wav";
  FileUploadTypes2["davmount"] = "application/davmount+xml";
  FileUploadTypes2["woff"] = "application/x-font-woff";
  FileUploadTypes2["wspolicy"] = "application/wspolicy+xml";
  FileUploadTypes2["webp"] = "image/webp";
  FileUploadTypes2["wtb"] = "application/vnd.webturbo";
  FileUploadTypes2["wgt"] = "application/widget";
  FileUploadTypes2["hlp"] = "application/winhlp";
  FileUploadTypes2["wml"] = "text/vnd.wap.wml";
  FileUploadTypes2["wmls"] = "text/vnd.wap.wmlscript";
  FileUploadTypes2["wmlsc"] = "application/vnd.wap.wmlscriptc";
  FileUploadTypes2["wpd"] = "application/vnd.wordperfect";
  FileUploadTypes2["stf"] = "application/vnd.wt.stf";
  FileUploadTypes2["wsdl"] = "application/wsdl+xml";
  FileUploadTypes2["xbm"] = "image/x-xbitmap";
  FileUploadTypes2["xpm"] = "image/x-xpixmap";
  FileUploadTypes2["xwd"] = "image/x-xwindowdump";
  FileUploadTypes2["der"] = "application/x-x509-ca-cert";
  FileUploadTypes2["fig"] = "application/x-xfig";
  FileUploadTypes2["xhtml"] = "application/xhtml+xml";
  FileUploadTypes2["xml"] = "application/xml";
  FileUploadTypes2["xdf"] = "application/xcap-diff+xml";
  FileUploadTypes2["xenc"] = "application/xenc+xml";
  FileUploadTypes2["xer"] = "application/patch-ops-error+xml";
  FileUploadTypes2["rl"] = "application/resource-lists+xml";
  FileUploadTypes2["rs"] = "application/rls-services+xml";
  FileUploadTypes2["rld"] = "application/resource-lists-diff+xml";
  FileUploadTypes2["xslt"] = "application/xslt+xml";
  FileUploadTypes2["xop"] = "application/xop+xml";
  FileUploadTypes2["xpi"] = "application/x-xpinstall";
  FileUploadTypes2["xspf"] = "application/xspf+xml";
  FileUploadTypes2["xul"] = "application/vnd.mozilla.xul+xml";
  FileUploadTypes2["xyz"] = "chemical/x-xyz";
  FileUploadTypes2["yaml"] = "text/yaml";
  FileUploadTypes2["yang"] = "application/yang";
  FileUploadTypes2["yin"] = "application/yin+xml";
  FileUploadTypes2["zir"] = "application/vnd.zul";
  FileUploadTypes2["zip"] = "application/zip";
})(FileUploadTypes || (FileUploadTypes = {}));
function IsNullOrEmpty(value) {
  return value == null || value.length === 0;
}
var _FileUploadService = class _FileUploadService {
  constructor(renderer) {
    this.renderer = renderer;
    this.extensions = ["B", "KB", "MB", "GB"];
    this.sizeRegex = new RegExp(`^(\\d+)(?:\\s{0,1})(${this.extensions.join("|")})?$`, "i");
  }
  isFileDragDropAvailable() {
    const div = this.renderer.createElement("div");
    return "draggable" in div || "ondragstart" in div && "ondrop" in div;
  }
  parseSize(value) {
    if (IsNullOrEmpty(value)) {
      return 0;
    }
    if (typeof value === "number") {
      return value;
    }
    const [, size, extension] = value.match(this.sizeRegex) || [null, "0", "B"];
    const i = IsNullOrEmpty(extension) ? 0 : this.extensions.indexOf(extension.toUpperCase());
    return parseInt(size, 10) * Math.pow(1024, i < 0 ? 0 : i);
  }
  formatSize(size) {
    return this.calculateSize(size);
  }
  calculateSize(size, extensionIndex = 0) {
    if (isNaN(size)) {
      size = 0;
    }
    if (size < 1024) {
      return `${Math.round(size * 100) / 100} ${this.extensions[extensionIndex]}`;
    }
    return this.calculateSize(size / 1024, extensionIndex + 1);
  }
  getFileType(file) {
    return Object.keys(FileUploadTypes).find((key) => FileUploadTypes[key] === file.type);
  }
};
_FileUploadService.ɵfac = function FileUploadService_Factory(t) {
  return new (t || _FileUploadService)(ɵɵinject(Renderer2));
};
_FileUploadService.ɵprov = ɵɵdefineInjectable({
  token: _FileUploadService,
  factory: _FileUploadService.ɵfac
});
var FileUploadService = _FileUploadService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadService, [{
    type: Injectable
  }], () => [{
    type: Renderer2
  }], null);
})();
var InsertAnimation = trigger("insertAnimation", [transition("* => *", [query(":leave", [stagger(30, [animate(".3s", style({
  opacity: 0
}))])], {
  optional: true
}), query(":enter", [style({
  opacity: 0
}), stagger(30, [animate(".3s", style({
  opacity: 1
}))])], {
  optional: true
})])]);
var ZoomAnimation = trigger("zoomAnimation", [transition("static => zoomOut", [animate(250, style({
  transform: "translate(-50%, -50%) scale(2, 2)",
  opacity: 0
}))]), transition("static => zoomIn", [query(":self", [style({
  transform: "translate(-50%, -50%) scale(.2, .2)",
  opacity: 0,
  top: "50%",
  left: "50%",
  margin: 0
}), stagger(50, [animate(250, style({
  transform: "translate(-50%, -50%) scale(1, 1)",
  opacity: 1
}))])])])]);
var STATUS;
(function(STATUS2) {
  STATUS2[STATUS2["INVALID"] = 0] = "INVALID";
  STATUS2[STATUS2["VALID"] = 1] = "VALID";
  STATUS2[STATUS2["DISABLED"] = 2] = "DISABLED";
})(STATUS || (STATUS = {}));
var FileEvent;
(function(FileEvent2) {
  FileEvent2["click"] = "click";
  FileEvent2["focus"] = "focus";
  FileEvent2["blur"] = "blur";
})(FileEvent || (FileEvent = {}));
var FileUploadControl = class {
  constructor(configuration, validators) {
    this.files = /* @__PURE__ */ new Map();
    this.listVisible = true;
    this.status = STATUS.VALID;
    this.errors = [];
    this.validators = [];
    this.multipleEnabled = true;
    this.nativeBehavior = false;
    this.multipleChanged = new BehaviorSubject(this.multipleEnabled);
    this.statusChanged = new Subject();
    this.eventsChanged = new Subject();
    this.discardedValue = new Subject();
    this.accept = null;
    this.discard = false;
    this.acceptChanged = new BehaviorSubject(this.accept);
    this.statusChanges = this.statusChanged.asObservable();
    this.valueChanges = new BehaviorSubject([]);
    this.listVisibilityChanges = new BehaviorSubject(this.listVisible);
    this.acceptChanges = this.acceptChanged.asObservable();
    this.eventsChanges = this.eventsChanged.asObservable();
    this.multipleChanges = this.multipleChanged.asObservable();
    this.discardedValueChanges = this.discardedValue.asObservable();
    this.initialState(configuration);
    this.defineValidators(validators);
  }
  /**
   * set functions that determines the synchronous validity of this control.
   */
  setValidators(newValidators) {
    this.defineValidators(newValidators);
    this.validate();
    return this;
  }
  addFile(file) {
    return this.addMultipleFiles([file]);
  }
  removeFile(file) {
    if (IsNullOrEmpty(file)) {
      throw Error(`File has not been provided.`);
    }
    if (!this.disabled) {
      this.files.delete(file.name);
      this.validate();
      this.valueChanges.next(Array.from(this.files.values()));
    }
    return this;
  }
  addFiles(files) {
    return this.addMultipleFiles(Array.from(files));
  }
  get valid() {
    return this.errors.length === 0 && this.status !== STATUS.DISABLED;
  }
  get invalid() {
    return this.errors.length > 0;
  }
  getError() {
    return this.errors;
  }
  /**
   * number of uploaded files
   */
  get size() {
    return this.files.size;
  }
  /**
   * return list of Files
   */
  get value() {
    return Array.from(this.files.values());
  }
  setValue(files) {
    this.files.clear();
    if (files instanceof Array) {
      this.addMultipleFiles(files);
    } else {
      throw Error(`FormControl.setValue was provided with wrong argument type, ${files} was provided instead Array<File>`);
    }
    return this;
  }
  /**
   * reset the control
   */
  clear() {
    this.files.clear();
    this.validate();
    this.valueChanges.next(Array.from(this.files.values()));
    return this;
  }
  get isListVisible() {
    return this.listVisible;
  }
  setListVisibility(isVisible = true) {
    this.listVisible = isVisible;
    this.listVisibilityChanges.next(this.listVisible);
    return this;
  }
  get disabled() {
    return this.status === STATUS.DISABLED;
  }
  enable(isEnabled = true) {
    this.status = isEnabled ? STATUS.VALID : STATUS.DISABLED;
    this.validate();
    this.statusChanged.next(this.status);
    return this;
  }
  disable(isDisabled = true) {
    this.status = isDisabled ? STATUS.DISABLED : STATUS.VALID;
    this.validate();
    this.statusChanged.next(this.status);
    return this;
  }
  click() {
    this.eventsChanged.next(FileEvent.click);
    return this;
  }
  focus() {
    this.eventsChanged.next(FileEvent.focus);
    return this;
  }
  blur() {
    this.eventsChanged.next(FileEvent.blur);
    return this;
  }
  /**
   * specifies the types of files that the server accepts
   *
   * ### Example
   *
   * ```
   * acceptFiles("file_extension|audio/*|video/*|image/*|media_type")
   * ```
   *
   * To specify more than one value, separate the values with a comma (e.g. acceptFiles("audio/*,video/*,image/*").
   *
   */
  acceptFiles(accept) {
    this.accept = accept;
    this.acceptChanged.next(this.accept);
    return this;
  }
  acceptAll() {
    this.accept = null;
    this.acceptChanged.next(this.accept);
    return this;
  }
  get isMultiple() {
    return this.multipleEnabled;
  }
  multiple(isEnabled = true) {
    this.multipleEnabled = isEnabled;
    this.multipleChanged.next(this.multipleEnabled);
    return this;
  }
  native(isNativeBehaviorEnabled = true) {
    this.nativeBehavior = isNativeBehaviorEnabled;
    return this;
  }
  discardInvalid(discard = true) {
    this.discard = discard;
    return this;
  }
  initialState(configuration = {}) {
    if (IsNullOrEmpty(configuration)) {
      return;
    }
    this.discard = configuration.discardInvalid || this.discard;
    this.status = !!configuration.disabled ? STATUS.DISABLED : this.status;
    this.nativeBehavior = configuration.native != null ? configuration.native : this.nativeBehavior;
    if (!IsNullOrEmpty(configuration.multiple)) {
      this.multiple(configuration.multiple);
    }
    if (!IsNullOrEmpty(configuration.listVisible)) {
      this.setListVisibility(configuration.listVisible);
    }
    if (!IsNullOrEmpty(configuration.accept)) {
      this.acceptFiles(configuration.accept.join(","));
    }
  }
  defineValidators(validators) {
    if (!IsNullOrEmpty(validators)) {
      this.validators = Array.isArray(validators) ? [...validators] : [validators];
    }
  }
  /**
   * @internal
   * used to prevent valueChanges emit more times
   * when multiple files are uploaded
   */
  addMultipleFiles(files) {
    if (IsNullOrEmpty(files)) {
      this.validate();
      this.valueChanges.next(Array.from(this.files.values()));
      return this;
    }
    if (this.nativeBehavior !== false) {
      this.files.clear();
    }
    if (!this.multipleEnabled) {
      if (this.files.size === 1) {
        this.files.clear();
      }
      this.files.set(files[0].name, files[0]);
    } else {
      files.forEach((file) => this.files.set(file.name, file));
    }
    if (this.discard) {
      this.analyzeToDiscard();
    } else {
      this.validate();
    }
    this.valueChanges.next(Array.from(this.files.values()));
    return this;
  }
  /**
   * method used to discard invalid files
   */
  analyzeToDiscard() {
    const deletedFiles = [];
    const validators = [...this.validators];
    while (validators.length) {
      const validator = validators.shift();
      const error = validator(this);
      if (error) {
        this.discardFile(error, deletedFiles);
      }
    }
    if (deletedFiles.length) {
      this.discardedValue.next(deletedFiles);
    }
  }
  discardFile(error, deletedFiles) {
    const errorsKey = Object.keys(error)[0];
    const errors = error[errorsKey];
    (Array.isArray(errors) ? errors : [errors]).forEach((fileError) => {
      if (fileError.file && this.files.has(fileError.file.name)) {
        deletedFiles.push(fileError);
        this.files.delete(fileError.file.name);
      } else {
        this.errors.push(error);
      }
    });
  }
  validate() {
    if (this.status !== STATUS.DISABLED) {
      const currentState = this.valid;
      this.errors = this.validators.map((validator) => validator(this)).filter((isInvalid) => isInvalid);
      if (currentState !== this.valid) {
        this.statusChanged.next(this.valid ? STATUS.VALID : STATUS.INVALID);
      }
    } else {
      this.errors.length = 0;
    }
  }
};
var HAS_FILES_CLASS_NAME = "has-files";
var IS_INVALID_CLASS_NAME = "ng-invalid";
var _FileUploadAbstract = class _FileUploadAbstract {
  constructor() {
    this.control = null;
    this.isMultiple = null;
    this.hooks = [];
    this.subscriptions = [];
    this.hostElementRef = inject(ElementRef);
    this.renderer = inject(Renderer2);
    this.cdr = inject(ChangeDetectorRef);
    this.onChange = () => {
    };
  }
  ngOnInit() {
    if (IsNullOrEmpty(this.control)) {
      this.control = new FileUploadControl();
    }
    this.setEvents();
    this.checkAndMarkAsDisabled();
    this.checkAndSetMultiple();
    this.connectToForm();
  }
  ngOnDestroy() {
    this.cdr.detach();
    this.hooks.forEach((hook) => hook());
    this.hooks.length = 0;
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.length = 0;
  }
  setEvents() {
    this.subscriptions.push(this.control.statusChanges.subscribe((status) => this.checkAndMarkAsDisabled()));
    this.subscriptions.push(this.control.eventsChanges.subscribe((event) => this.triggerEvent(event)));
    this.subscriptions.push(this.control.acceptChanges.subscribe((accept) => this.updateAcceptAttr(accept)));
    this.subscriptions.push(this.control.multipleChanges.subscribe((isMultiple) => this.toggleMultiple(isMultiple)));
    this.subscriptions.push(merge(this.control.listVisibilityChanges, this.control.valueChanges).subscribe(() => this.checkAndSetFilesClass()));
    this.subscriptions.push(merge(this.control.statusChanges, this.control.valueChanges).subscribe(() => this.checkAndSetInvalidClass()));
  }
  clearInputEl() {
    this.input.nativeElement.value = null;
  }
  /**
   * used to update model once state is changed through @Input
   * or in case of simple-file-upload to override user value
   */
  checkAndSetMultiple() {
    if (!this.control || this.isMultiple == null) {
      return;
    }
    const isMultiple = this.isMultiple === true || this.isMultiple === "true";
    if (isMultiple !== this.control.isMultiple) {
      this.control.multiple(isMultiple);
    }
  }
  hasFiles() {
    return this.control.isListVisible && this.control.size > 0;
  }
  isInvalid() {
    return !this.control.disabled && this.control.invalid;
  }
  checkAndSetFilesClass() {
    if (this.hasFiles() && this.hostElementRef) {
      this.renderer.addClass(this.hostElementRef.nativeElement, HAS_FILES_CLASS_NAME);
    } else {
      this.renderer.removeClass(this.hostElementRef.nativeElement, HAS_FILES_CLASS_NAME);
    }
  }
  checkAndSetInvalidClass() {
    if (this.isInvalid() && this.hostElementRef) {
      this.renderer.addClass(this.hostElementRef.nativeElement, IS_INVALID_CLASS_NAME);
    } else {
      this.renderer.removeClass(this.hostElementRef.nativeElement, IS_INVALID_CLASS_NAME);
    }
  }
  triggerEvent(event) {
    if (typeof this.label.nativeElement[event] === "function") {
      this.label.nativeElement[event]();
    }
  }
  updateAcceptAttr(accept) {
    if (!IsNullOrEmpty(accept)) {
      this.renderer.setAttribute(this.input.nativeElement, "accept", accept);
    } else {
      this.renderer.removeAttribute(this.input.nativeElement, "accept");
    }
  }
  checkAndMarkAsDisabled() {
    if (this.control.disabled) {
      this.renderer.addClass(this.hostElementRef.nativeElement, "disabled");
      this.renderer.setProperty(this.input.nativeElement, "disabled", true);
    } else {
      this.renderer.removeClass(this.hostElementRef.nativeElement, "disabled");
      this.renderer.setProperty(this.input.nativeElement, "disabled", false);
    }
  }
  toggleMultiple(isMultiple) {
    if (isMultiple) {
      this.renderer.setAttribute(this.input.nativeElement, "multiple", "");
    } else {
      this.renderer.removeAttribute(this.input.nativeElement, "multiple");
    }
  }
  /**
   * ControlValueAccessor implementation
   */
  connectToForm() {
    this.subscriptions.push(this.control.valueChanges.subscribe((v) => this.onChange(v)));
  }
};
_FileUploadAbstract.ɵfac = function FileUploadAbstract_Factory(t) {
  return new (t || _FileUploadAbstract)();
};
_FileUploadAbstract.ɵdir = ɵɵdefineDirective({
  type: _FileUploadAbstract
});
var FileUploadAbstract = _FileUploadAbstract;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadAbstract, [{
    type: Directive
  }], null, null);
})();
var _FileUploadDropZoneComponent = class _FileUploadDropZoneComponent {
};
_FileUploadDropZoneComponent.ɵfac = function FileUploadDropZoneComponent_Factory(t) {
  return new (t || _FileUploadDropZoneComponent)();
};
_FileUploadDropZoneComponent.ɵcmp = ɵɵdefineComponent({
  type: _FileUploadDropZoneComponent,
  selectors: [["file-upload-drop-zone"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 6,
  vars: 0,
  consts: [[1, "icon"], ["viewBox", "0 0 96 96"], ["d", "M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"], [1, "upload-text"]],
  template: function FileUploadDropZoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "svg", 1)(2, "g");
      ɵɵelement(3, "path", 2);
      ɵɵelementEnd()()();
      ɵɵnamespaceHTML();
      ɵɵelementStart(4, "div", 3);
      ɵɵprojection(5);
      ɵɵelementEnd();
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{height:35px;width:35px;border:1px solid #eaeaea;border-radius:4px}.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#909293}.upload-text[_ngcontent-%COMP%]{overflow:hidden;width:auto;position:relative;padding-left:20px}.list-visible[_nghost-%COMP%]   .upload-text[_ngcontent-%COMP%], .list-visible   [_nghost-%COMP%]   .upload-text[_ngcontent-%COMP%]{display:none}"],
  changeDetection: 0
});
var FileUploadDropZoneComponent = _FileUploadDropZoneComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadDropZoneComponent, [{
    type: Component,
    args: [{
      selector: `file-upload-drop-zone`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: '<div class="icon">\r\n    <svg viewBox="0 0 96 96">\r\n        <g>\r\n            <path d="M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"/>\r\n        </g>\r\n    </svg>\r\n</div>\r\n\r\n<div class="upload-text">\r\n    <ng-content></ng-content>\r\n</div>',
      styles: [":host{display:block}.icon{height:35px;width:35px;border:1px solid #eaeaea;border-radius:4px}.icon svg{fill:#909293}.upload-text{overflow:hidden;width:auto;position:relative;padding-left:20px}:host-context(.list-visible) .upload-text{display:none}\n"]
    }]
  }], null, null);
})();
var _FileUploadIconComponent = class _FileUploadIconComponent {
  constructor(fileUploadService) {
    this.fileUploadService = fileUploadService;
    this.fileType = "unknown";
  }
  ngOnInit() {
    this.fileType = this.fileUploadService.getFileType(this.file);
  }
  comparationType() {
    if (this.isIcon("image")) {
      return "image";
    } else if (this.isIcon("text")) {
      return "text";
    } else if (this.isIcon("audio")) {
      return "audio";
    } else if (this.isIcon("video")) {
      return "video";
    }
    return null;
  }
  isIcon(type) {
    switch (type) {
      case "text":
        return this.fileType === "html" || this.fileType === "css" || this.fileType === "csv" || this.fileType === "js" || this.fileType === "pdf" || this.fileType === "ppt" || this.fileType === "xls" || this.fileType === "xlsx" || this.fileType === "xml" || this.fileType === "doc" || this.fileType === "txt" || this.fileType === "docx";
      case "audio":
        return this.fileType === "aac" || this.fileType === "midi" || this.fileType === "oga" || this.fileType === "wav" || this.fileType === "weba";
      case "image":
        return this.fileType === "png" || this.fileType === "bmp" || this.fileType === "gif" || this.fileType === "jpg" || this.fileType === "svg" || this.fileType === "webp" || this.fileType === "ico";
      case "video":
        return this.fileType === "avi" || this.fileType === "mpeg" || this.fileType === "ogv" || this.fileType === "webm" || this.fileType === "3gp" || this.fileType === "3g2";
    }
  }
};
_FileUploadIconComponent.ɵfac = function FileUploadIconComponent_Factory(t) {
  return new (t || _FileUploadIconComponent)(ɵɵdirectiveInject(FileUploadService));
};
_FileUploadIconComponent.ɵcmp = ɵɵdefineComponent({
  type: _FileUploadIconComponent,
  selectors: [["file-upload-icon"]],
  inputs: {
    file: "file"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 5,
  vars: 1,
  consts: [["viewBox", "0 0 96 96"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                    M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\n                    c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\n                    C40.6,51.7,39.1,52.3,37.3,52.3z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                    M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\n                    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\n                    C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\n                    c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\n                    c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\n                    c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\n                    c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\n                    C48.9,64.4,49.4,64.6,49.9,64.6z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                    M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\n                    c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\n                    c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\n                    c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\n                    c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\n                    c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\n                    M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\n                    c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\n                    c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\n                    C64.2,43.7,64.3,43.7,64.5,43.8z"], ["d", "M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\n                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\n                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\n                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z"]],
  template: function FileUploadIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, FileUploadIconComponent_Case_0_Template, 3, 0, ":svg:svg", 0)(1, FileUploadIconComponent_Case_1_Template, 3, 0, ":svg:svg", 0)(2, FileUploadIconComponent_Case_2_Template, 3, 0, ":svg:svg", 0)(3, FileUploadIconComponent_Case_3_Template, 3, 0, ":svg:svg", 0)(4, FileUploadIconComponent_Case_4_Template, 3, 0, ":svg:svg", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵconditional((tmp_0_0 = ctx.comparationType()) === "image" ? 0 : tmp_0_0 === "audio" ? 1 : tmp_0_0 === "text" ? 2 : tmp_0_0 === "video" ? 3 : 4);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block;border:1px solid #eaeaea;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{fill:#909293}"],
  changeDetection: 0
});
var FileUploadIconComponent = _FileUploadIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadIconComponent, [{
    type: Component,
    args: [{
      selector: `file-upload-icon`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `@switch (comparationType()) {\r
    @case ('image') {\r
        <svg viewBox="0 0 96 96">\r
            <g>\r
                <path d="M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r
                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r
                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r
                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r
                    M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\r
                    c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\r
                    C40.6,51.7,39.1,52.3,37.3,52.3z"/>\r
            </g>\r
        </svg>\r
    }\r
    @case ('audio') {\r
        <svg viewBox="0 0 96 96">\r
            <g>\r
                <path d="M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r
                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r
                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r
                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r
                    M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\r
                    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\r
                    C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\r
                    c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\r
                    c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\r
                    c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\r
                    c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\r
                    C48.9,64.4,49.4,64.6,49.9,64.6z"/>\r
            </g>\r
        </svg>\r
    }\r
    @case ('text') {\r
        <svg viewBox="0 0 96 96">\r
            <g>\r
                <path d="M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r
                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r
                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r
                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r
                    M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\r
                    c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\r
                    c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r
                    c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\r
                    c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r
                    c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z"/>\r
            </g>\r
        </svg>\r
    }\r
    @case ('video') {\r
        <svg viewBox="0 0 96 96">\r
            <g>\r
                <path d="M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r
                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r
                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r
                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r
                    M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\r
                    c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\r
                    c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\r
                    C64.2,43.7,64.3,43.7,64.5,43.8z"/>\r
            </g>\r
        </svg>\r
    }\r
    @default {\r
        <svg viewBox="0 0 96 96">\r
            <g>\r
                <path d="M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r
                    S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r
                    c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r
                    C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z"/>\r
            </g>\r
        </svg>\r
    }\r
}\r
`,
      styles: [":host{display:block;border:1px solid #eaeaea;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}:host svg{fill:#909293}\n"]
    }]
  }], () => [{
    type: FileUploadService
  }], {
    file: [{
      type: Input
    }]
  });
})();
var _FileUploadListItemComponent = class _FileUploadListItemComponent {
  constructor(fileUploadService) {
    this.fileUploadService = fileUploadService;
  }
  removeFile(file) {
    this.control.removeFile(file);
  }
  calculateSize(size) {
    return this.fileUploadService.formatSize(size);
  }
};
_FileUploadListItemComponent.ɵfac = function FileUploadListItemComponent_Factory(t) {
  return new (t || _FileUploadListItemComponent)(ɵɵdirectiveInject(FileUploadService));
};
_FileUploadListItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _FileUploadListItemComponent,
  selectors: [["file-upload-list-item"]],
  inputs: {
    index: "index",
    file: "file",
    control: "control"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 11,
  vars: 3,
  consts: [[3, "file"], [1, "file-info"], [1, "file-name"], [1, "file-buttons"], [1, "remove-btn", 3, "click"], ["viewBox", "0 0 96 96"], ["d", "M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4\n                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3\n                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4\n                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5\n                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4\n                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5\n                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5\n                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5\n                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z"]],
  template: function FileUploadListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelement(0, "file-upload-icon", 0);
      ɵɵelementStart(1, "div", 1)(2, "span", 2);
      ɵɵtext(3);
      ɵɵelementEnd();
      ɵɵtext(4);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 3)(6, "span", 4);
      ɵɵlistener("click", function FileUploadListItemComponent_Template_span_click_6_listener() {
        return ctx.removeFile(ctx.file);
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(7, "svg", 5)(8, "g");
      ɵɵelement(9, "path", 6);
      ɵɵelementEnd()();
      ɵɵprojection(10);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("file", ctx.file);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.file.name);
      ɵɵadvance();
      ɵɵtextInterpolate1(" (", ctx.calculateSize(ctx.file.size), ") ");
    }
  },
  dependencies: [FileUploadIconComponent],
  styles: ['@charset "UTF-8";[_nghost-%COMP%]{display:block;font-size:14px;color:#646464}[_nghost-%COMP%]:after{clear:both;content:"\\a0";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon[_ngcontent-%COMP%]{float:left;width:30px;height:36px;margin:0 10px 0 0}.file-info[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.remove-btn[_ngcontent-%COMP%]{font-size:12px;cursor:pointer}.remove-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-block;vertical-align:-20%;height:18px;width:18px}']
});
var FileUploadListItemComponent = _FileUploadListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadListItemComponent, [{
    type: Component,
    args: [{
      selector: `file-upload-list-item`,
      template: `
    <file-upload-icon [file]="file"></file-upload-icon>
    <div class="file-info">
        <span class="file-name">{{ file.name }}</span> ({{ calculateSize( file.size ) }})
    </div>
    <div class="file-buttons">
        <span class="remove-btn" (click)="removeFile(file)">
        <svg viewBox="0 0 96 96">
            <g>
                <path d="M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4
                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3
                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4
                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5
                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4
                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5
                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5
                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5
                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z"/>
            </g>
        </svg> <ng-content></ng-content></span>
    </div>
    `,
      standalone: true,
      imports: [FileUploadIconComponent],
      styles: ['@charset "UTF-8";:host{display:block;font-size:14px;color:#646464}:host:after{clear:both;content:"\\a0";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon{float:left;width:30px;height:36px;margin:0 10px 0 0}.file-info{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.remove-btn{font-size:12px;cursor:pointer}.remove-btn svg{display:inline-block;vertical-align:-20%;height:18px;width:18px}\n']
    }]
  }], () => [{
    type: FileUploadService
  }], {
    index: [{
      type: Input
    }],
    file: [{
      type: Input
    }],
    control: [{
      type: Input
    }]
  });
})();
var DRAGOVER_CLASS_NAME = "dragover";
var TOUCHED_CLASS_NAME = "ng-touched";
var _FileUploadComponent = class _FileUploadComponent extends FileUploadAbstract {
  set multiple(isMultiple) {
    this.isMultiple = isMultiple;
    this.checkAndSetMultiple();
  }
  constructor(fileUploadService, document) {
    super();
    this.fileUploadService = fileUploadService;
    this.document = document;
    this.control = null;
    this.animation = true;
    this.templateRef = null;
    this.listItem = null;
    this.templateContext = {
      $implicit: this.fileUploadService.isFileDragDropAvailable(),
      isFileDragDropAvailable: this.fileUploadService.isFileDragDropAvailable()
    };
    this.zoomText = "static";
    this.listVisible = false;
    this.onTouch = () => {
      this.renderer.addClass(this.hostElementRef.nativeElement, TOUCHED_CLASS_NAME);
    };
  }
  get isAnimationDisabled() {
    return this.animation === false;
  }
  trackByFn(index, item) {
    return item.name;
  }
  setEvents() {
    super.setEvents();
    ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach((eventName) => {
      this.hooks.push(this.renderer.listen(this.document, eventName, (event) => this.preventDragEvents(event)));
    });
    ["dragover", "dragenter"].forEach((eventName) => {
      this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => this.onDragOver(event)));
    });
    ["dragleave", "dragend", "drop"].forEach((eventName) => {
      this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => this.onDragLeave(event)));
    });
    this.subscriptions.push(this.control.valueChanges.subscribe((files) => this.renderView()));
    this.subscriptions.push(this.control.listVisibilityChanges.subscribe((status) => this.toggleListVisibility()));
  }
  onKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.control.click();
    }
  }
  preventDragEvents(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  renderView() {
    if (!this.listVisible) {
      this.zoomText = this.control.isListVisible && this.control.size > 0 ? "zoomOut" : "static";
    }
    this.cdr.markForCheck();
  }
  showList() {
    if (this.zoomText !== "static") {
      this.listVisible = true;
    }
  }
  hideList() {
    this.listVisible = false;
  }
  toggleListVisibility() {
    this.listVisible = this.control.isListVisible && this.control.size > 0;
    if (this.listVisible) {
      this.renderer.addClass(this.hostElementRef.nativeElement, "list-visible");
      this.zoomText = "static";
    }
    this.cdr.markForCheck();
  }
  /**
   * on file over add class name
   */
  onDragOver(event) {
    this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER_CLASS_NAME);
  }
  /**
   * on mouse out remove class name
   */
  onDragLeave(event) {
    this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER_CLASS_NAME);
  }
  onDrop(event) {
    if (this.control.disabled) {
      return;
    }
    const files = event.dataTransfer.files;
    this.control.addFiles(files);
    this.onTouch();
  }
  onInputChange(event) {
    const input = event.target;
    if (!this.control.disabled && input.files.length > 0) {
      this.control.addFiles(input.files);
      this.clearInputEl();
    }
    this.onTouch();
  }
  /**
   * model -> view changes
   */
  writeValue(files) {
    if (files != null) {
      this.control.setValue(files);
    }
  }
  /**
   * register function which will be called on UI change
   * to update view -> model
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled) {
    this.control.disable(isDisabled);
  }
  zoomAnimationDone(event) {
    if (this.control.isListVisible && this.control.size > 0) {
      this.showList();
    } else {
      this.hideList();
    }
    if (event.fromState === "static" && event.toState === "zoomOut") {
      this.renderer.addClass(this.hostElementRef.nativeElement, "hide-text");
    } else {
      this.renderer.removeClass(this.hostElementRef.nativeElement, "hide-text");
    }
    if (event.toState === "zoomIn") {
      this.zoomText = "static";
    }
  }
  animationListFinished(event) {
    if (event.toState === "void") {
      this.zoomText = "zoomIn";
      this.renderer.removeClass(this.hostElementRef.nativeElement, "list-visible");
    }
    if (event.fromState === "void") {
      this.zoomText = "static";
      this.renderer.addClass(this.hostElementRef.nativeElement, "list-visible");
    }
  }
};
_FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
  return new (t || _FileUploadComponent)(ɵɵdirectiveInject(FileUploadService), ɵɵdirectiveInject(DOCUMENT));
};
_FileUploadComponent.ɵcmp = ɵɵdefineComponent({
  type: _FileUploadComponent,
  selectors: [["file-upload", 3, "simple", ""]],
  contentQueries: function FileUploadComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c1, 5);
      ɵɵcontentQuery(dirIndex, _c2, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listItem = _t.first);
    }
  },
  viewQuery: function FileUploadComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7);
      ɵɵviewQuery(_c4, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.label = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function FileUploadComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("drop", function FileUploadComponent_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@.disabled", ctx.isAnimationDisabled);
    }
  },
  inputs: {
    control: "control",
    animation: [2, "animation", "animation", booleanAttribute],
    multiple: "multiple"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([FileUploadService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _FileUploadComponent),
    multi: true
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 9,
  vars: 6,
  consts: [["labelRef", ""], ["defaultTemplate", ""], ["inputRef", ""], ["defaultItemTemplate", ""], ["tabindex", "0", 1, "upload-input", 3, "keydown"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "file", "tabindex", "-1", "multiple", "", 1, "files-input", 3, "change"], [1, "upload-list"], [3, "index", "file", "control"]],
  template: function FileUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "label", 4, 0);
      ɵɵlistener("keydown", function FileUploadComponent_Template_label_keydown_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onKeyDown($event));
      })("@zoomAnimation.done", function FileUploadComponent_Template_label_animation_zoomAnimation_done_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.zoomAnimationDone($event));
      });
      ɵɵtemplate(2, FileUploadComponent_ng_container_2_Template, 1, 0, "ng-container", 5)(3, FileUploadComponent_ng_template_3_Template, 3, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementStart(5, "input", 6, 2);
      ɵɵlistener("change", function FileUploadComponent_Template_input_change_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onInputChange($event));
      });
      ɵɵelementEnd()();
      ɵɵtemplate(7, FileUploadComponent_Conditional_7_Template, 6, 3);
      ɵɵpipe(8, "async");
    }
    if (rf & 2) {
      const defaultTemplate_r11 = ɵɵreference(4);
      ɵɵproperty("@zoomAnimation", ctx.zoomText);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.templateRef ? ctx.templateRef : defaultTemplate_r11)("ngTemplateOutletContext", ctx.templateContext);
      ɵɵadvance(5);
      ɵɵconditional(ɵɵpipeBind1(8, 4, ctx.control.listVisibilityChanges) && ctx.control.size > 0 && ctx.listVisible ? 7 : -1);
    }
  },
  dependencies: [AsyncPipe, NgTemplateOutlet, FileUploadDropZoneComponent, FileUploadListItemComponent],
  styles: ['@charset "UTF-8";[_nghost-%COMP%], [_nghost-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{overflow:hidden;display:block;background:#fafafa;padding:20px 66px 20px 20px;min-height:140px;outline:1px dashed #92b0b3;outline-offset:-10px;position:relative}[_nghost-%COMP%]     .icon{float:left}.dragover[_nghost-%COMP%]{outline-width:2px}.disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop}.files-input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.upload-input[_ngcontent-%COMP%]:after{clear:both;content:"\\a0";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;color:#646464;position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%);outline:none}.disabled[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{cursor:not-allowed}.list-visible[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{top:20px;left:100%;margin-left:-20px;transform:translate(-100%);text-align:center}.hide-text[_nghost-%COMP%]   .upload-input[_ngcontent-%COMP%]{opacity:0}.dragover[_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:focus{color:#80a9d2}.dragover[_nghost-%COMP%]:not(.disabled)   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-input[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%]{fill:#80a9d2}file-upload-list-item[_ngcontent-%COMP%]{padding:10px 0 0}file-upload-list-item[_ngcontent-%COMP%]:first-child{padding:0}'],
  data: {
    animation: [ZoomAnimation, InsertAnimation]
  },
  changeDetection: 0
});
var FileUploadComponent = _FileUploadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadComponent, [{
    type: Component,
    args: [{
      selector: `file-upload:not([simple])`,
      providers: [FileUploadService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FileUploadComponent),
        multi: true
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [ZoomAnimation, InsertAnimation],
      standalone: true,
      imports: [AsyncPipe, NgTemplateOutlet, FileUploadDropZoneComponent, FileUploadListItemComponent],
      template: '<label #labelRef class="upload-input" tabindex="0" (keydown)="onKeyDown($event)" [@zoomAnimation]="zoomText" (@zoomAnimation.done)="zoomAnimationDone($event)">\r\n\r\n    <ng-container *ngTemplateOutlet="templateRef ? templateRef : defaultTemplate; context: templateContext" />\r\n\r\n    <ng-template #defaultTemplate let-isFileDragDropAvailable="isFileDragDropAvailable">\r\n        <file-upload-drop-zone>\r\n            @if (isFileDragDropAvailable) {\r\n                <b>Drag and drop</b> files<br> or click here\r\n            } @else {\r\n                <b>Click here</b> to<br> choose a files\r\n            }\r\n        </file-upload-drop-zone>\r\n    </ng-template>\r\n\r\n    <input #inputRef type="file" class="files-input" tabindex="-1" multiple (change)="onInputChange($event)">\r\n</label>\r\n\r\n@if ((control.listVisibilityChanges | async) && control.size > 0 && listVisible) {\r\n    <div class="upload-list" [@insertAnimation]="control.size" (@insertAnimation.done)="animationListFinished($event)">\r\n        @for (file of control.valueChanges | async; track trackByFn(i, file); let i = $index;) {\r\n            <ng-container *ngTemplateOutlet="listItem ? listItem : defaultItemTemplate; context: { $implicit: file, file: file, index: i, control: control }" />\r\n        }\r\n    </div>\r\n\r\n    <ng-template #defaultItemTemplate let-i="index" let-file="file" let-control="control">\r\n        <file-upload-list-item  [index]="i" [file]="file" [control]="control">Remove</file-upload-list-item>\r\n    </ng-template>\r\n}\r\n\r\n',
      styles: ['@charset "UTF-8";:host,:host>*{box-sizing:border-box}:host{overflow:hidden;display:block;background:#fafafa;padding:20px 66px 20px 20px;min-height:140px;outline:1px dashed #92b0b3;outline-offset:-10px;position:relative}:host ::ng-deep .icon{float:left}:host(.dragover){outline-width:2px}:host(.disabled){opacity:.5;cursor:no-drop}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.upload-input:after{clear:both;content:"\\a0";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input{cursor:pointer;display:inline-block;color:#646464;position:absolute;top:50%;left:50%;margin:0;transform:translate(-50%,-50%);outline:none}:host(.disabled) .upload-input{cursor:not-allowed}:host(.list-visible) .upload-input{top:20px;left:100%;margin-left:-20px;transform:translate(-100%);text-align:center}:host(.hide-text) .upload-input{opacity:0}:host(.dragover:not(.disabled)) .upload-input,:host(:not(.disabled)) .upload-input:hover,:host(:not(.disabled)) .upload-input:focus{color:#80a9d2}:host(.dragover:not(.disabled)) .icon svg,:host(:not(.disabled)) .upload-input:hover svg,:host(:not(.disabled)) .upload-input:focus svg{fill:#80a9d2}file-upload-list-item{padding:10px 0 0}file-upload-list-item:first-child{padding:0}\n']
    }]
  }], () => [{
    type: FileUploadService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    control: [{
      type: Input
    }],
    animation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: ["multiple"]
    }],
    templateRef: [{
      type: ContentChild,
      args: ["placeholder"]
    }],
    listItem: [{
      type: ContentChild,
      args: ["item"]
    }],
    input: [{
      type: ViewChild,
      args: ["inputRef", {
        static: true
      }]
    }],
    label: [{
      type: ViewChild,
      args: ["labelRef", {
        static: true
      }]
    }],
    isAnimationDisabled: [{
      type: HostBinding,
      args: ["@.disabled"]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var _FileUploadAttributeComponent = class _FileUploadAttributeComponent {
  constructor(fileUploadService, hostElementRef, renderer, document) {
    this.fileUploadService = fileUploadService;
    this.hostElementRef = hostElementRef;
    this.renderer = renderer;
    this.document = document;
    this.control = null;
    this.templateRef = null;
    this.hooks = [];
    this.subscriptions = [];
    this.onTouch = () => {
      this.renderer.addClass(this.hostElementRef.nativeElement, TOUCHED_CLASS_NAME);
    };
  }
  ngOnInit() {
    if (IsNullOrEmpty(this.control)) {
      this.control = new FileUploadControl();
    }
    this.subscriptions.push(merge(this.control.listVisibilityChanges, this.control.valueChanges).subscribe(() => this.checkAndSetFilesClass()));
    this.subscriptions.push(merge(this.control.statusChanges, this.control.valueChanges).subscribe(() => this.checkAndSetInvalidClass()));
  }
  ngAfterViewInit() {
    if (this.fileUploadService.isFileDragDropAvailable()) {
      this.setEvents();
      this.checkAndMarkAsDisabled();
    }
  }
  ngOnDestroy() {
    this.hooks.forEach((hook) => hook());
    this.hooks.length = 0;
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.length = 0;
  }
  setEvents() {
    ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach((eventName) => {
      this.hooks.push(this.renderer.listen(this.document, eventName, (event) => this.preventDragEvents(event)));
    });
    ["dragover", "dragenter"].forEach((eventName) => {
      this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => this.onDragOver(event)));
    });
    ["dragleave", "dragend", "drop"].forEach((eventName) => {
      this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => {
        if (this.control.disabled && eventName === "dragleave" || eventName !== "dragleave") {
          this.onDragLeave(event);
        }
      }));
    });
    ["dragleave"].forEach((eventName) => {
      this.hooks.push(this.renderer.listen(this.overlay.nativeElement, eventName, (event) => this.onDragLeave(event)));
    });
    this.subscriptions.push(this.control.statusChanges.subscribe((status) => this.checkAndMarkAsDisabled()));
  }
  hasFiles() {
    return this.control.isListVisible && this.control.size > 0;
  }
  isInvalid() {
    return !this.control.disabled && this.control.invalid;
  }
  checkAndSetFilesClass() {
    if (this.hasFiles() && this.hostElementRef) {
      this.renderer.addClass(this.hostElementRef.nativeElement, HAS_FILES_CLASS_NAME);
    } else {
      this.renderer.removeClass(this.hostElementRef.nativeElement, HAS_FILES_CLASS_NAME);
    }
  }
  checkAndSetInvalidClass() {
    if (this.isInvalid() && this.hostElementRef) {
      this.renderer.addClass(this.hostElementRef.nativeElement, IS_INVALID_CLASS_NAME);
    } else {
      this.renderer.removeClass(this.hostElementRef.nativeElement, IS_INVALID_CLASS_NAME);
    }
  }
  checkAndMarkAsDisabled() {
    if (this.control.disabled) {
      this.renderer.addClass(this.hostElementRef.nativeElement, "disabled");
    } else {
      this.renderer.removeClass(this.hostElementRef.nativeElement, "disabled");
    }
  }
  preventDragEvents(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  /**
   * on file over add class name
   */
  onDragOver(event) {
    this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER_CLASS_NAME);
  }
  /**
   * on mouse out remove class name
   */
  onDragLeave(event) {
    this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER_CLASS_NAME);
  }
  onDrop(event) {
    if (this.control.disabled) {
      return;
    }
    const files = event.dataTransfer.files;
    this.control.addFiles(files);
    this.onTouch();
  }
};
_FileUploadAttributeComponent.ɵfac = function FileUploadAttributeComponent_Factory(t) {
  return new (t || _FileUploadAttributeComponent)(ɵɵdirectiveInject(FileUploadService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DOCUMENT));
};
_FileUploadAttributeComponent.ɵcmp = ɵɵdefineComponent({
  type: _FileUploadAttributeComponent,
  selectors: [["", "file-drop-zone", ""]],
  contentQueries: function FileUploadAttributeComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  viewQuery: function FileUploadAttributeComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
    }
  },
  hostBindings: function FileUploadAttributeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("drop", function FileUploadAttributeComponent_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    control: "control"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([FileUploadService]), ɵɵStandaloneFeature],
  attrs: _c7,
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [["overlay", ""], ["defaultTemplate", ""], [1, "overlay"], [1, "upload-input"], [4, "ngTemplateOutlet"]],
  template: function FileUploadAttributeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, FileUploadAttributeComponent_Conditional_1_Template, 6, 1, "div", 2);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(ctx.fileUploadService.isFileDragDropAvailable() ? 1 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, FileUploadDropZoneComponent],
  styles: ["[_nghost-%COMP%]{position:relative;display:block}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{display:none;background:#fffc;outline:2px dashed #92b0b3;outline-offset:-10px;position:absolute;inset:0}.dragover[_nghost-%COMP%]:not(.disabled)   .overlay[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .icon{margin:0 auto 10px}[_nghost-%COMP%]     .icon svg{fill:#80a9d2}.upload-input[_ngcontent-%COMP%]{pointer-events:none;cursor:pointer;display:inline-block;color:#80a9d2;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .15s ease-in-out;-moz-transition:all .15s ease-in-out;transition:all .15s ease-in-out}"]
});
var FileUploadAttributeComponent = _FileUploadAttributeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadAttributeComponent, [{
    type: Component,
    args: [{
      selector: `[file-drop-zone]`,
      template: `
        <ng-content></ng-content>
        @if (fileUploadService.isFileDragDropAvailable()) {
            <div #overlay class="overlay">
                <div class="upload-input">
                    <ng-container *ngTemplateOutlet="templateRef ? templateRef : defaultTemplate"></ng-container>

                    <ng-template #defaultTemplate>
                        <file-upload-drop-zone>
                            <b>Drop</b> it here
                        </file-upload-drop-zone>
                    </ng-template>
                </div>
            </div>
        }
    `,
      providers: [FileUploadService],
      imports: [NgTemplateOutlet, NgComponentOutlet, FileUploadDropZoneComponent],
      standalone: true,
      styles: [":host{position:relative;display:block}:host .overlay{display:none;background:#fffc;outline:2px dashed #92b0b3;outline-offset:-10px;position:absolute;inset:0}:host(.dragover:not(.disabled)) .overlay{display:block}:host ::ng-deep .icon{margin:0 auto 10px}:host ::ng-deep .icon svg{fill:#80a9d2}.upload-input{pointer-events:none;cursor:pointer;display:inline-block;color:#80a9d2;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .15s ease-in-out;-moz-transition:all .15s ease-in-out;transition:all .15s ease-in-out}\n"]
    }]
  }], () => [{
    type: FileUploadService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    control: [{
      type: Input
    }],
    overlay: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    templateRef: [{
      type: ContentChild,
      args: ["placeholder"]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var _SimpleFileUploadComponent = class _SimpleFileUploadComponent extends FileUploadAbstract {
  constructor(fileUploadService) {
    super();
    this.fileUploadService = fileUploadService;
    this.control = null;
    this.buttonRef = null;
    this.placeholderRef = null;
    this.isMultiple = null;
    this.onTouch = () => {
      this.renderer.addClass(this.hostElementRef.nativeElement, TOUCHED_CLASS_NAME);
    };
  }
  onInputChange(event) {
    const input = event.target;
    if (!this.control.disabled && input.files.length > 0) {
      this.control.setValue(Array.from(input.files));
      this.clearInputEl();
    }
    this.onTouch();
  }
  /**
   * model -> view changes
   */
  writeValue(files) {
    if (files != null) {
      this.control.setValue(files);
    }
  }
  trackByFn(index, item) {
    return item.name;
  }
  /**
   * register function which will be called on UI change
   * to update view -> model
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled) {
    this.control.disable(isDisabled);
  }
  onKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.control.click();
    }
  }
};
_SimpleFileUploadComponent.ɵfac = function SimpleFileUploadComponent_Factory(t) {
  return new (t || _SimpleFileUploadComponent)(ɵɵdirectiveInject(FileUploadService));
};
_SimpleFileUploadComponent.ɵcmp = ɵɵdefineComponent({
  type: _SimpleFileUploadComponent,
  selectors: [["file-upload", "simple", ""]],
  contentQueries: function SimpleFileUploadComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c8, 5);
      ɵɵcontentQuery(dirIndex, _c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.placeholderRef = _t.first);
    }
  },
  viewQuery: function SimpleFileUploadComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7);
      ɵɵviewQuery(_c4, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.label = _t.first);
    }
  },
  inputs: {
    control: "control"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([FileUploadService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _SimpleFileUploadComponent),
    multi: true
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c9,
  decls: 12,
  vars: 7,
  consts: [["defaultPlaceholderTemplate", ""], ["labelRef", ""], ["defaultButtonTemplate", ""], ["inputRef", ""], [1, "upload-text"], ["tabindex", "0", 1, "upload-button", 3, "keydown"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "file", "tabindex", "-1", 1, "files-input", 3, "change"], [1, "file-name"], [1, "button"], [1, "icon"], ["viewBox", "0 0 96 96"], ["d", "M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"], [1, "button-text"]],
  template: function SimpleFileUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 4);
      ɵɵtemplate(1, SimpleFileUploadComponent_Conditional_1_Template, 1, 6, "ng-container");
      ɵɵpipe(2, "async");
      ɵɵtemplate(3, SimpleFileUploadComponent_ng_template_3_Template, 3, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
      ɵɵelementStart(5, "label", 5, 1);
      ɵɵlistener("keydown", function SimpleFileUploadComponent_Template_label_keydown_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onKeyDown($event));
      });
      ɵɵtemplate(7, SimpleFileUploadComponent_ng_container_7_Template, 1, 0, "ng-container", 6)(8, SimpleFileUploadComponent_ng_template_8_Template, 7, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementStart(10, "input", 7, 3);
      ɵɵlistener("change", function SimpleFileUploadComponent_Template_input_change_10_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onInputChange($event));
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      const defaultButtonTemplate_r7 = ɵɵreference(9);
      ɵɵadvance();
      ɵɵconditional(ɵɵpipeBind1(2, 3, ctx.control.valueChanges) ? 1 : -1);
      ɵɵadvance(6);
      ɵɵproperty("ngTemplateOutlet", ctx.buttonRef ? ctx.buttonRef : defaultButtonTemplate_r7)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c10, ctx.control));
    }
  },
  dependencies: [AsyncPipe, NgTemplateOutlet],
  styles: ["[_nghost-%COMP%], [_nghost-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{display:flex;line-height:1.5;color:#555;background-color:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:inset 0 4px 7px #0000000d}.disabled[_nghost-%COMP%]{opacity:.5}.files-input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.icon[_ngcontent-%COMP%]{height:24px;width:24px;display:inline-block}.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#555}.upload-button[_ngcontent-%COMP%]{cursor:pointer;display:block;padding:2px 4px;background-color:#eee;border-left:1px solid #ddd;border-radius:0 4px 4px 0;min-width:100px;color:#555;margin:0;position:relative;outline:none}.upload-text[_ngcontent-%COMP%]{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;padding:5px 10px;font-size:14px;height:30px}.button-text[_ngcontent-%COMP%]{vertical-align:middle;padding-left:10px}.disabled[_nghost-%COMP%]   .upload-button[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:hover{color:#80a9d2}[_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.disabled)   .upload-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#80a9d2}"],
  changeDetection: 0
});
var SimpleFileUploadComponent = _SimpleFileUploadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleFileUploadComponent, [{
    type: Component,
    args: [{
      selector: `file-upload[simple]`,
      providers: [FileUploadService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SimpleFileUploadComponent),
        multi: true
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [AsyncPipe, NgTemplateOutlet],
      template: '<div class="upload-text">\r\n    @if (control.valueChanges | async) {\r\n        <ng-container *ngTemplateOutlet="placeholderRef ? placeholderRef : defaultPlaceholderTemplate; context: { $implicit: control.value, control: control, files: control.value }" />\r\n    }\r\n\r\n    <ng-template #defaultPlaceholderTemplate let-files="files">\r\n        @for (file of files; track trackByFn(i, file); let i = $index;) {\r\n            @if (i > 0) { <span>,&nbsp;</span> } <span class="file-name">{{ file.name }}</span>\r\n        } @empty {\r\n            Select a file...\r\n        }\r\n    </ng-template>\r\n</div>\r\n\r\n<label #labelRef class="upload-button" tabindex="0" (keydown)="onKeyDown($event)">\r\n    <ng-container *ngTemplateOutlet="buttonRef ? buttonRef : defaultButtonTemplate; context: { control: control }"></ng-container>\r\n\r\n    <ng-template #defaultButtonTemplate>\r\n        <div class="button">\r\n            <div class="icon">\r\n                <svg viewBox="0 0 96 96">\r\n                    <g>\r\n                        <path d="M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n            \r\n            <span class="button-text">Browse</span>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <input #inputRef type="file" class="files-input" tabindex="-1" (change)="onInputChange($event)">\r\n</label>',
      styles: [":host,:host>*{box-sizing:border-box}:host{display:flex;line-height:1.5;color:#555;background-color:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:inset 0 4px 7px #0000000d}:host(.disabled){opacity:.5}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.icon{height:24px;width:24px;display:inline-block}.icon svg{fill:#555}.upload-button{cursor:pointer;display:block;padding:2px 4px;background-color:#eee;border-left:1px solid #ddd;border-radius:0 4px 4px 0;min-width:100px;color:#555;margin:0;position:relative;outline:none}.upload-text{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;padding:5px 10px;font-size:14px;height:30px}.button-text{vertical-align:middle;padding-left:10px}:host(.disabled) .upload-button{cursor:not-allowed}:host(:not(.disabled)) .upload-button:focus,:host(:not(.disabled)) .upload-button:hover{color:#80a9d2}:host(:not(.disabled)) .upload-button:focus svg,:host(:not(.disabled)) .upload-button:hover svg{fill:#80a9d2}\n"]
    }]
  }], () => [{
    type: FileUploadService
  }], {
    control: [{
      type: Input
    }],
    buttonRef: [{
      type: ContentChild,
      args: ["button"]
    }],
    placeholderRef: [{
      type: ContentChild,
      args: ["placeholder"]
    }],
    input: [{
      type: ViewChild,
      args: ["inputRef", {
        static: true
      }]
    }],
    label: [{
      type: ViewChild,
      args: ["labelRef", {
        static: true
      }]
    }]
  });
})();
var checkFileSize = (actualSize, maxSize, minSize = 0, file) => {
  return !IsNullOrEmpty(maxSize) && actualSize > maxSize || actualSize < minSize ? {
    maxSize,
    minSize,
    actual: actualSize,
    file
  } : null;
};
var getFileType = (file, fileExtension) => {
  const type = file.type;
  if (!IsNullOrEmpty(type)) {
    return type;
  }
  return FileUploadTypes[fileExtension];
};
var CheckType;
(function(CheckType2) {
  CheckType2[CheckType2["ALLOWED"] = 0] = "ALLOWED";
  CheckType2[CheckType2["NOTALLOWED"] = 1] = "NOTALLOWED";
})(CheckType || (CheckType = {}));
var FILE_EXT_REG = /(^[.]\w*)$/m;
var checkFileTypes = (file, types, checkType) => {
  const fileExtension = file.name.split(".").pop().toLowerCase();
  const fileType = getFileType(file, fileExtension);
  for (const type of types) {
    const isFound = FILE_EXT_REG.test(type) ? type === `.${fileExtension}` : new RegExp(type).test(fileType);
    if (isFound) {
      return checkType === CheckType.ALLOWED ? null : {
        notAllowedTypes: types,
        actual: fileType,
        file
      };
    }
  }
  return checkType === CheckType.ALLOWED ? {
    allowedTypes: types,
    actual: fileType,
    file
  } : null;
};
var checkValueType = (value) => {
  if (!Array.isArray(value)) {
    throw Error(`FormControl.setValue was provided with wrong argument type, ${value} was provided instead Array<File>`);
  }
};
var FileUploadValidators = class {
  /**
   * Validator that compare the summary size of all files
   */
  static sizeLimit(maxSize) {
    return (control) => {
      const files = control.value;
      if (IsNullOrEmpty(files)) {
        return null;
      }
      checkValueType(files);
      const sum = files.map((file) => file.size).reduce((a, b) => a + b, 0);
      const toLargeFiles = checkFileSize(sum, maxSize);
      return toLargeFiles ? {
        "sizeLimit": toLargeFiles
      } : null;
    };
  }
  /**
   * Validator that validate individually file maximum size length.
   * Compare the File size in bytes
   * @dynamic
   */
  static fileSize(maxSize) {
    return (control) => {
      const files = control.value;
      if (IsNullOrEmpty(files)) {
        return null;
      }
      checkValueType(files);
      const toLargeFiles = files.map((file) => checkFileSize(file.size, maxSize, 0, file)).filter((error) => error);
      return toLargeFiles.length > 0 ? {
        "fileSize": toLargeFiles
      } : null;
    };
  }
  /**
   * Compare the File size in bytes with max and min size limits
   * @dynamic
   */
  static sizeRange({
    minSize,
    maxSize
  }) {
    return (control) => {
      const files = control.value;
      if (IsNullOrEmpty(files)) {
        return null;
      }
      checkValueType(files);
      const sizeMismatch = files.map((file) => checkFileSize(file.size, maxSize, minSize, file)).filter((error) => error);
      return sizeMismatch.length > 0 ? {
        "sizeRange": sizeMismatch
      } : null;
    };
  }
  /**
   * validator that requires control to have limit on files number
   * @dynamic
   */
  static filesLimit(numFiles) {
    return (control) => {
      const files = control.value;
      if (IsNullOrEmpty(files)) {
        return null;
      }
      checkValueType(files);
      const filesLimit = files.slice(-1 * (files.length - numFiles)).map((file) => ({
        "max": numFiles,
        "actual": files.length,
        file
      }));
      return files.length > numFiles ? {
        "filesLimit": filesLimit
      } : null;
    };
  }
  /**
   * validator that requires control to have limit on media types
   *
   * ##### Allowed media types are
   *
   * - file_extension - a file extension starting with the STOP character,
   * e.g: .gif, .jpg, .png, .doc
   * - audio/* -        All sound files are accepted
   * - video/* -        All video files are accepted
   * - image/* -        All image files are accepted
   * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types]
   *      (https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
   *
   * #### Example
   * `FileUploadValidators.accept([file_extension, audio/*, video/*, image/*, media_type])`
   * @dynamic
   */
  static accept(allowedFileTypes) {
    return (control) => {
      const files = control.value;
      if (IsNullOrEmpty(files)) {
        return null;
      }
      checkValueType(files);
      const notAllowedFiles = files.map((file) => checkFileTypes(file, allowedFileTypes, CheckType.ALLOWED)).filter((error) => error);
      return notAllowedFiles.length > 0 ? {
        "fileTypes": notAllowedFiles
      } : null;
    };
  }
  /**
   * validator that requires control to have limit on media types
   *
   * ##### Not allowed media types are
   *
   * - file_extension - a file extension starting with the STOP character,
   * e.g: .gif, .jpg, .png, .doc
   * - audio/* -        All sound files are accepted
   * - video/* -        All video files are accepted
   * - image/* -        All image files are accepted
   * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types]
   *      (https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
   *
   * #### Example
   * `FileUploadValidators.reject([file_extension, audio/*, video/*, image/*, media_type])`
   * @dynamic
   */
  static reject(rejectFileTypes) {
    return (control) => {
      const files = control.value;
      if (IsNullOrEmpty(files)) {
        return null;
      }
      checkValueType(files);
      const notAllowedFiles = files.map((file) => checkFileTypes(file, rejectFileTypes, CheckType.NOTALLOWED)).filter((error) => error);
      return notAllowedFiles.length > 0 ? {
        "fileTypes": notAllowedFiles
      } : null;
    };
  }
};
var _FileSizeValidator = class _FileSizeValidator {
  constructor(fileUploadService) {
    this.fileUploadService = fileUploadService;
  }
  ngOnChanges(changes) {
    if ("filesize" in changes || "maxsize" in changes || "minsize" in changes) {
      this._createValidator();
      if (this.onChange) {
        this.onChange();
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  _createValidator() {
    let maxSize = null;
    if (!IsNullOrEmpty(this.maxsize)) {
      maxSize = this.fileUploadService.parseSize(this.maxsize);
    } else if (!IsNullOrEmpty(this.filesize)) {
      maxSize = this.fileUploadService.parseSize(this.filesize);
    }
    const minSize = this.fileUploadService.parseSize(this.minsize);
    this.validator = FileUploadValidators.sizeRange({
      maxSize,
      minSize
    });
  }
};
_FileSizeValidator.ɵfac = function FileSizeValidator_Factory(t) {
  return new (t || _FileSizeValidator)(ɵɵdirectiveInject(FileUploadService));
};
_FileSizeValidator.ɵdir = ɵɵdefineDirective({
  type: _FileSizeValidator,
  selectors: [["file-upload", "filesize", "", "formControlName", ""], ["file-upload", "filesize", "", "formControl", ""], ["file-upload", "filesize", "", "ngModel", ""], ["file-upload", "minsize", "", "formControlName", ""], ["file-upload", "minsize", "", "formControl", ""], ["file-upload", "minsize", "", "ngModel", ""], ["file-upload", "maxsize", "", "formControlName", ""], ["file-upload", "maxsize", "", "formControl", ""], ["file-upload", "maxsize", "", "ngModel", ""]],
  hostVars: 3,
  hostBindings: function FileSizeValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("filesize", ctx.filesize ? ctx.filesize : null)("minsize", ctx.minsize ? ctx.minsize : null)("maxsize", ctx.maxsize ? ctx.maxsize : null);
    }
  },
  inputs: {
    filesize: "filesize",
    minsize: "minsize",
    maxsize: "maxsize"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => _FileSizeValidator),
    multi: true
  }]), ɵɵNgOnChangesFeature]
});
var FileSizeValidator = _FileSizeValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileSizeValidator, [{
    type: Directive,
    args: [{
      selector: `file-upload[filesize][formControlName],
    file-upload[filesize][formControl],
    file-upload[filesize][ngModel],
    file-upload[minsize][formControlName],
    file-upload[minsize][formControl],
    file-upload[minsize][ngModel],
    file-upload[maxsize][formControlName],
    file-upload[maxsize][formControl],
    file-upload[maxsize][ngModel]`,
      providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => FileSizeValidator),
        multi: true
      }],
      host: {
        "[attr.filesize]": "filesize ? filesize : null",
        "[attr.minsize]": "minsize ? minsize : null",
        "[attr.maxsize]": "maxsize ? maxsize : null"
      },
      standalone: true
    }]
  }], () => [{
    type: FileUploadService
  }], {
    filesize: [{
      type: Input
    }],
    minsize: [{
      type: Input
    }],
    maxsize: [{
      type: Input
    }]
  });
})();
var _FilesLimitValidator = class _FilesLimitValidator {
  ngOnChanges(changes) {
    if ("fileslimit" in changes) {
      this._createValidator();
      if (this.onChange) {
        this.onChange();
      }
    }
  }
  validate(c) {
    return this.fileslimit != null ? this.validator(c) : null;
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  _createValidator() {
    this.validator = FileUploadValidators.filesLimit(typeof this.fileslimit === "string" ? parseInt(this.fileslimit, 10) : this.fileslimit);
  }
};
_FilesLimitValidator.ɵfac = function FilesLimitValidator_Factory(t) {
  return new (t || _FilesLimitValidator)();
};
_FilesLimitValidator.ɵdir = ɵɵdefineDirective({
  type: _FilesLimitValidator,
  selectors: [["file-upload", "fileslimit", "", "formControlName", ""], ["file-upload", "fileslimit", "", "formControl", ""], ["file-upload", "fileslimit", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function FilesLimitValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("fileslimit", ctx.fileslimit ? ctx.fileslimit : null);
    }
  },
  inputs: {
    fileslimit: "fileslimit"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => _FilesLimitValidator),
    multi: true
  }]), ɵɵNgOnChangesFeature]
});
var FilesLimitValidator = _FilesLimitValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilesLimitValidator, [{
    type: Directive,
    args: [{
      selector: "file-upload[fileslimit][formControlName], file-upload[fileslimit][formControl], file-upload[fileslimit][ngModel]",
      providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => FilesLimitValidator),
        multi: true
      }],
      host: {
        "[attr.fileslimit]": "fileslimit ? fileslimit : null"
      },
      standalone: true
    }]
  }], null, {
    fileslimit: [{
      type: Input
    }]
  });
})();
var _FilesAcceptValidator = class _FilesAcceptValidator {
  ngOnChanges(changes) {
    if ("accept" in changes) {
      this._createValidator();
      if (this.onChange) {
        this.onChange();
      }
    }
  }
  validate(c) {
    return !!this.validator ? this.validator(c) : null;
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  _createValidator() {
    if (IsNullOrEmpty(this.accept)) {
      return;
    }
    this.validator = FileUploadValidators.accept(this.accept.split(","));
  }
};
_FilesAcceptValidator.ɵfac = function FilesAcceptValidator_Factory(t) {
  return new (t || _FilesAcceptValidator)();
};
_FilesAcceptValidator.ɵdir = ɵɵdefineDirective({
  type: _FilesAcceptValidator,
  selectors: [["file-upload", "accept", "", "formControlName", ""], ["file-upload", "accept", "", "formControl", ""], ["file-upload", "accept", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function FilesAcceptValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("accept", ctx.accept ? ctx.accept : null);
    }
  },
  inputs: {
    accept: "accept"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => _FilesAcceptValidator),
    multi: true
  }]), ɵɵNgOnChangesFeature]
});
var FilesAcceptValidator = _FilesAcceptValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilesAcceptValidator, [{
    type: Directive,
    args: [{
      selector: "file-upload[accept][formControlName], file-upload[accept][formControl], file-upload[accept][ngModel]",
      providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => FilesAcceptValidator),
        multi: true
      }],
      host: {
        "[attr.accept]": "accept ? accept : null"
      },
      standalone: true
    }]
  }], null, {
    accept: [{
      type: Input
    }]
  });
})();
var _FilesAcceptDirective = class _FilesAcceptDirective {
  constructor(fileUpload, simpleFileUpload) {
    this.fileUpload = null;
    this.fileUpload = fileUpload || simpleFileUpload;
  }
  ngAfterViewInit() {
    this.setAccept(this.accept);
  }
  ngOnChanges(changes) {
    if ("accept" in changes && changes["accept"].currentValue !== changes["accept"].previousValue) {
      this.setAccept(this.accept);
    }
  }
  setAccept(accept) {
    if (this.fileUpload && this.fileUpload.control) {
      this.fileUpload.control.acceptFiles(accept);
    }
  }
};
_FilesAcceptDirective.ɵfac = function FilesAcceptDirective_Factory(t) {
  return new (t || _FilesAcceptDirective)(ɵɵdirectiveInject(FileUploadComponent, 11), ɵɵdirectiveInject(SimpleFileUploadComponent, 11));
};
_FilesAcceptDirective.ɵdir = ɵɵdefineDirective({
  type: _FilesAcceptDirective,
  selectors: [["file-upload", "accept", ""]],
  hostVars: 1,
  hostBindings: function FilesAcceptDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("accept", ctx.accept ? ctx.accept : null);
    }
  },
  inputs: {
    accept: "accept"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var FilesAcceptDirective = _FilesAcceptDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilesAcceptDirective, [{
    type: Directive,
    args: [{
      selector: "file-upload[accept]",
      host: {
        "[attr.accept]": "accept ? accept : null"
      },
      standalone: true
    }]
  }], () => [{
    type: FileUploadComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: Self
    }]
  }, {
    type: SimpleFileUploadComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: Self
    }]
  }], {
    accept: [{
      type: Input
    }]
  });
})();
var _FilesDiscardDirective = class _FilesDiscardDirective {
  set discard(discard) {
    if (typeof discard === "string" && (discard === "true" || discard === "false")) {
      this.discardValue = JSON.parse(discard.toLowerCase());
    } else if (typeof discard === "boolean") {
      this.discardValue = discard;
    } else {
      throw Error(`Provided value in directive [discard]="${discard}" is not boolean.`);
    }
  }
  constructor(fileUpload, simpleFileUpload) {
    this.discardValue = null;
    this.fileUpload = null;
    this.fileUpload = fileUpload || simpleFileUpload;
  }
  ngAfterViewInit() {
    this.setAccept(this.discardValue);
  }
  ngOnChanges(changes) {
    if ("discard" in changes && changes["discard"].currentValue !== changes["discard"].previousValue) {
      this.setAccept(this.discardValue);
    }
  }
  setAccept(discard) {
    if (this.fileUpload && this.fileUpload.control) {
      this.fileUpload.control.discardInvalid(discard);
    }
  }
};
_FilesDiscardDirective.ɵfac = function FilesDiscardDirective_Factory(t) {
  return new (t || _FilesDiscardDirective)(ɵɵdirectiveInject(FileUploadComponent, 11), ɵɵdirectiveInject(SimpleFileUploadComponent, 11));
};
_FilesDiscardDirective.ɵdir = ɵɵdefineDirective({
  type: _FilesDiscardDirective,
  selectors: [["file-upload", "discard", ""]],
  hostVars: 1,
  hostBindings: function FilesDiscardDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("discard", ctx.discard ? ctx.discard : null);
    }
  },
  inputs: {
    discard: "discard"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var FilesDiscardDirective = _FilesDiscardDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilesDiscardDirective, [{
    type: Directive,
    args: [{
      selector: "file-upload[discard]",
      host: {
        "[attr.discard]": "discard ? discard : null"
      },
      standalone: true
    }]
  }], () => [{
    type: FileUploadComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: Self
    }]
  }, {
    type: SimpleFileUploadComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: Self
    }]
  }], {
    discard: [{
      type: Input
    }]
  });
})();
var _FilesNativeDirective = class _FilesNativeDirective {
  set native(isNative) {
    if (typeof isNative === "string" && (isNative === "true" || isNative === "false")) {
      this.nativeValue = JSON.parse(isNative.toLowerCase());
    } else if (typeof isNative === "boolean") {
      this.nativeValue = isNative;
    } else {
      throw Error(`Provided value in directive [native]="${isNative}" is not boolean.`);
    }
  }
  constructor(fileUpload, simpleFileUpload) {
    this.nativeValue = null;
    this.fileUpload = null;
    this.fileUpload = fileUpload || simpleFileUpload;
  }
  ngAfterViewInit() {
    this.enableNative(this.nativeValue);
  }
  ngOnChanges(changes) {
    if ("native" in changes && changes["native"].currentValue !== changes["native"].previousValue) {
      this.enableNative(this.nativeValue);
    }
  }
  enableNative(isNative) {
    if (this.fileUpload && this.fileUpload.control) {
      this.fileUpload.control.native(isNative);
    }
  }
};
_FilesNativeDirective.ɵfac = function FilesNativeDirective_Factory(t) {
  return new (t || _FilesNativeDirective)(ɵɵdirectiveInject(FileUploadComponent, 11), ɵɵdirectiveInject(SimpleFileUploadComponent, 11));
};
_FilesNativeDirective.ɵdir = ɵɵdefineDirective({
  type: _FilesNativeDirective,
  selectors: [["file-upload", "native", ""]],
  hostVars: 1,
  hostBindings: function FilesNativeDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("native", ctx.native ? ctx.native : null);
    }
  },
  inputs: {
    native: "native"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var FilesNativeDirective = _FilesNativeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilesNativeDirective, [{
    type: Directive,
    args: [{
      selector: "file-upload[native]",
      host: {
        "[attr.native]": "native ? native : null"
      },
      standalone: true
    }]
  }], () => [{
    type: FileUploadComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: Self
    }]
  }, {
    type: SimpleFileUploadComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: Self
    }]
  }], {
    native: [{
      type: Input
    }]
  });
})();
var _FileUploadModule = class _FileUploadModule {
};
_FileUploadModule.ɵfac = function FileUploadModule_Factory(t) {
  return new (t || _FileUploadModule)();
};
_FileUploadModule.ɵmod = ɵɵdefineNgModule({
  type: _FileUploadModule,
  imports: [
    FileUploadComponent,
    FileUploadDropZoneComponent,
    FileUploadListItemComponent,
    FileUploadAttributeComponent,
    SimpleFileUploadComponent,
    FileUploadIconComponent,
    // directives
    FileSizeValidator,
    FilesLimitValidator,
    FilesAcceptValidator,
    FilesAcceptDirective,
    FilesDiscardDirective,
    FilesNativeDirective
  ],
  exports: [
    FileUploadComponent,
    FileUploadDropZoneComponent,
    FileUploadListItemComponent,
    FileUploadAttributeComponent,
    SimpleFileUploadComponent,
    // directives
    FileSizeValidator,
    FilesLimitValidator,
    FilesAcceptValidator,
    FilesAcceptDirective,
    FilesDiscardDirective
  ]
});
_FileUploadModule.ɵinj = ɵɵdefineInjector({});
var FileUploadModule = _FileUploadModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadModule, [{
    type: NgModule,
    args: [{
      imports: [
        FileUploadComponent,
        FileUploadDropZoneComponent,
        FileUploadListItemComponent,
        FileUploadAttributeComponent,
        SimpleFileUploadComponent,
        FileUploadIconComponent,
        // directives
        FileSizeValidator,
        FilesLimitValidator,
        FilesAcceptValidator,
        FilesAcceptDirective,
        FilesDiscardDirective,
        FilesNativeDirective
      ],
      declarations: [],
      exports: [
        FileUploadComponent,
        FileUploadDropZoneComponent,
        FileUploadListItemComponent,
        FileUploadAttributeComponent,
        SimpleFileUploadComponent,
        // directives
        FileSizeValidator,
        FilesLimitValidator,
        FilesAcceptValidator,
        FilesAcceptDirective,
        FilesDiscardDirective
      ]
    }]
  }], null, null);
})();
export {
  FileSizeValidator,
  FileUploadAttributeComponent,
  FileUploadComponent,
  FileUploadControl,
  FileUploadDropZoneComponent,
  FileUploadListItemComponent,
  FileUploadModule,
  FileUploadService,
  FileUploadTypes,
  FileUploadValidators,
  FilesAcceptDirective,
  FilesAcceptValidator,
  FilesDiscardDirective,
  FilesLimitValidator,
  FilesNativeDirective,
  SimpleFileUploadComponent
};
//# sourceMappingURL=@iplab_ngx-file-upload.js.map
