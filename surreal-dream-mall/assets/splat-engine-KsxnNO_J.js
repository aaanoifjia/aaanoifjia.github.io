import{Q as wA,C as Wt,P as it,a as hA,c as zt,G as jt,b as Zt,d as Xt,E as mA,e as rt,V as y,L as De,S as $t,f as Ai,g as ei,M as O,h as ti,i as ii,D as ri,T as j,A as b,F as WA,j as at,R as ai,B as pA,k as T,l as HA,m as oi,n as Ii,o as si,p as ni,q as gi,r as Ci,s as li,t as _i,u as Bi,v as ci,w as hi,x as Ei,y as Qi,z as ot,H as It,I as di,J as fe,K as EA,N as Ae,O as ui,U as Li,W as ve,X as st}from"./playcanvas-hvlYVjTw.js";new Array(45).fill("").map((t,A)=>`f_rest_${A}`);new wA;var nt=["rendering","ssao","bloom","grading","colorLUT","vignette","taa","fringing","colorEnhance","dof","volumetricFog"];function gt(t){return Array.isArray(t)?t.slice():t&&typeof t.clone=="function"&&!("device"in t)?t.clone():t}function pi(t){const A={},e=t;for(const i of nt){const r=e[i];if(!r||typeof r!="object")continue;const a={};for(const s of Object.keys(r))a[s]=gt(r[s]);A[i]=a}return{groups:A,debug:t.debug}}function fi(t,A){const e=t;for(const i of nt){const r=A.groups[i],a=e[i];if(!(!r||!a||typeof a!="object"))for(const s of Object.keys(r))a[s]=gt(r[s])}t.debug=A.debug}var Fi=class{_scene;_passes=[];_installed=[];_frameConfig={};_intermediates=[];_rebuilding=!1;_resizeHandler;constructor(t){this._scene=t,this._resizeHandler=()=>{this._scene.cameraFrame===null&&this._passes.length===0||this._rebuild()}}add(t){return t.configureFrame&&t.configureFrame(this._scene,this._frameConfig),this._passes.push(t),this._ensureResizeHook(),this._rebuild(),t}remove(t){const A=this._passes.indexOf(t);A<0||(this._passes.splice(A,1),this._rebuild())}destroyAll(){this._scene.graphicsDevice.off("resizecanvas",this._resizeHandler),this._uninstallAll(),this._freeIntermediates(),this._passes.length=0}_hookedResize=!1;_ensureResizeHook(){this._hookedResize||(this._scene.graphicsDevice.on("resizecanvas",this._resizeHandler),this._hookedResize=!0)}_restoreLook(t,A){A&&(fi(t,A),t.update())}_needsFrame(){return this._frameConfig.sceneDepthMap===!0||this._frameConfig.requireFrame===!0}_capturingPasses(){return this._passes.filter(t=>t.capturesScene===!0)}_uninstallAll(){if(this._installed.length!==0){for(let t=this._installed.length-1;t>=0;t--)try{this._installed[t].uninstall(this._scene)}catch(A){console.warn("[PostFX] uninstall threw",A)}this._installed=[]}}_freeIntermediates(){for(const t of this._intermediates){const A=t.colorBuffer;try{t.destroy()}catch{}try{A?.destroy()}catch{}}this._intermediates=[]}_allocateIntermediate(t){const A=this._scene.graphicsDevice,e=new j(A,{name:`${t}-color`,width:Math.max(1,A.width),height:Math.max(1,A.height),format:at,mipmaps:!1,minFilter:WA,magFilter:WA,addressU:b,addressV:b}),i=new ai({name:t,colorBuffer:e,depth:!1,stencil:!1,samples:1});return this._intermediates.push(i),i}_rebuild(){if(!this._rebuilding){this._rebuilding=!0;try{this._uninstallAll();const t=this._scene.cameraEntity.camera,A=this._scene.cameraFrame!==null,e=this._scene.cameraFrame?pi(this._scene.cameraFrame):null;if(this._scene.cameraFrame&&(this._scene.cameraFrame.destroy(),this._scene.cameraFrame=null),t&&(t.renderTarget=null),this._freeIntermediates(),this._passes.length===0){A&&this._restoreLook(this._scene.getOrCreateCameraFrame(),e);return}const i=this._capturingPasses(),r=i.map(()=>null);if(i.length>0){const I=i[0].getSceneCaptureRT?.()??null;t&&I&&(t.renderTarget=I);for(let o=0;o<i.length-1;o++)r[o]=this._allocateIntermediate(`postfx-chain-${o}`);r[i.length-1]=null}const a=this._needsFrame()||A?this._scene.getOrCreateCameraFrame():null;a&&this._restoreLook(a,e);let s=0;for(const I of this._passes){const o=I.capturesScene?{frame:a,inputTarget:s===0?null:r[s-1],outputTarget:r[s]}:{frame:a,inputTarget:null,outputTarget:null};try{I.install(this._scene,o),this._installed.push(I)}catch(g){console.error("[PostFX] install threw",g)}I.capturesScene&&s++}}finally{this._rebuilding=!1}}}},mi=["root","pelvis","spine_01","spine_02","spine_03","spine_04","spine_05","neck_01","neck_02","head","clavicle_l","upperarm_l","lowerarm_l","hand_l","pinky_metacarpal_l","pinky_01_l","pinky_02_l","pinky_03_l","ring_metacarpal_l","ring_01_l","ring_02_l","ring_03_l","thumb_01_l","thumb_02_l","thumb_03_l","middle_metacarpal_l","middle_01_l","middle_02_l","middle_03_l","index_metacarpal_l","index_01_l","index_02_l","index_03_l","clavicle_r","upperarm_r","lowerarm_r","hand_r","pinky_metacarpal_r","pinky_01_r","pinky_02_r","pinky_03_r","ring_metacarpal_r","ring_01_r","ring_02_r","ring_03_r","thumb_01_r","thumb_02_r","thumb_03_r","middle_metacarpal_r","middle_01_r","middle_02_r","middle_03_r","index_metacarpal_r","index_01_r","index_02_r","index_03_r","thigh_r","calf_r","foot_r","ball_r","littletoe_01_r","littletoe_02_r","ringtoe_01_r","ringtoe_02_r","middletoe_01_r","middletoe_02_r","bigtoe_01_r","bigtoe_02_r","indextoe_01_r","indextoe_02_r","calf_twist_01_r","thigh_l","calf_l","foot_l","ball_l","indextoe_01_l","indextoe_02_l","bigtoe_01_l","bigtoe_02_l","littletoe_01_l","littletoe_02_l","middletoe_01_l","middletoe_02_l","ringtoe_01_l","ringtoe_02_l","calf_twist_01_l"],wi=["root","pelvis","spine_01","spine_02","spine_03","spine_04","spine_05","neck_01","neck_02","head","clavicle_l","upperarm_l","upperarm_correctiveRoot_l","upperarm_bck_l","upperarm_fwd_l","upperarm_in_l","upperarm_out_l","lowerarm_l","hand_l","pinky_metacarpal_l","pinky_01_l","pinky_02_l","pinky_03_l","pinky_03_bulge_l","pinky_03_half_l","pinky_03_in_l","pinky_02_dip_l","pinky_02_bulge_l","pinky_02_side_out_l","pinky_02_side_inn_l","pinky_02_half_l","pinky_02_in_l","pinky_02_pip_l","pinky_01_palmMid_l","pinky_01_bulge_l","pinky_01_side_out_l","pinky_01_side_inn_l","pinky_01_half_l","pinky_01_mcp_l","pinky_01_palm_l","pinky_metacarpal_slide_l","ring_metacarpal_l","ring_01_l","ring_02_l","ring_03_l","ring_03_bulge_l","ring_03_half_l","ring_02_dip_l","ring_03_in_l","ring_02_bulge_l","ring_02_side_out_l","ring_02_side_inn_l","ring_02_half_l","ring_02_in_l","ring_02_pip_l","ring_01_palmMid_l","ring_01_bulge_l","ring_01_side_out_l","ring_01_side_inn_l","ring_01_half_l","ring_01_mcp_l","ring_01_palm_l","ring_metacarpal_slide_l","thumb_01_l","thumb_02_l","thumb_03_l","thumb_03_bulge_l","thumb_03_side_out_l","thumb_03_side_inn_l","thumb_03_half_l","thumb_03_pip_l","thumb_03_in_l","thumb_02_bulge_l","thumb_02_side_out_l","thumb_02_side_inn_l","thumb_02_half_l","thumb_02_in_l","thumb_02_mcp_l","thumb_01_side_out_l","thumb_01_side_inn_l","middle_metacarpal_l","middle_01_l","middle_02_l","middle_03_l","middle_03_bulge_l","middle_03_half_l","middle_03_in_l","middle_02_dip_l","middle_02_bulge_l","middle_02_side_out_l","middle_02_side_inn_l","middle_02_half_l","middle_02_pip_l","middle_02_in_l","middle_01_palmMid_l","middle_01_bulge_l","middle_01_side_out_l","middle_01_side_inn_l","middle_01_half_l","middle_01_mcp_l","middle_01_palm_l","middle_metacarpal_slide_l","index_metacarpal_l","index_01_l","index_02_l","index_03_l","index_03_bulge_l","index_03_half_l","index_02_dip_l","index_03_in_l","index_02_bulge_l","index_02_side_out_l","index_02_side_inn_l","index_02_half_l","index_02_in_l","index_02_pip_l","index_01_palmMid_l","index_01_bulge_l","index_01_side_out_l","index_01_side_inn_l","index_01_half_l","index_01_mcp_l","index_01_palm_l","index_metacarpal_slide_l","wrist_inner_l","wrist_outer_l","lowerarm_twist_02_l","lowerarm_twist_01_l","lowerarm_correctiveRoot_l","lowerarm_in_l","lowerarm_out_l","lowerarm_fwd_l","lowerarm_bck_l","upperarm_twist_01_l","upperarm_twistCor_01_l","upperarm_twist_02_l","upperarm_tricep_l","upperarm_bicep_l","upperarm_twistCor_02_l","clavicle_out_l","clavicle_scap_l","clavicle_r","upperarm_r","upperarm_correctiveRoot_r","upperarm_bck_r","upperarm_in_r","upperarm_fwd_r","upperarm_out_r","lowerarm_r","hand_r","pinky_metacarpal_r","pinky_01_r","pinky_02_r","pinky_03_r","pinky_03_bulge_r","pinky_03_half_r","pinky_03_in_r","pinky_02_dip_r","pinky_02_bulge_r","pinky_02_side_out_r","pinky_02_side_inn_r","pinky_02_half_r","pinky_02_in_r","pinky_02_pip_r","pinky_01_palmMid_r","pinky_01_bulge_r","pinky_01_side_out_r","pinky_01_side_inn_r","pinky_01_half_r","pinky_01_mcp_r","pinky_01_palm_r","pinky_metacarpal_slide_r","ring_metacarpal_r","ring_01_r","ring_02_r","ring_03_r","ring_03_bulge_r","ring_03_half_r","ring_02_dip_r","ring_03_in_r","ring_02_bulge_r","ring_02_side_out_r","ring_02_side_inn_r","ring_02_half_r","ring_02_in_r","ring_02_pip_r","ring_01_palmMid_r","ring_01_bulge_r","ring_01_side_out_r","ring_01_side_inn_r","ring_01_half_r","ring_01_mcp_r","ring_01_palm_r","ring_metacarpal_slide_r","thumb_01_r","thumb_02_r","thumb_03_r","thumb_03_bulge_r","thumb_03_side_out_r","thumb_03_side_inn_r","thumb_03_half_r","thumb_03_pip_r","thumb_03_in_r","thumb_02_bulge_r","thumb_02_side_out_r","thumb_02_side_inn_r","thumb_02_half_r","thumb_02_in_r","thumb_02_mcp_r","thumb_01_side_out_r","thumb_01_side_inn_r","middle_metacarpal_r","middle_01_r","middle_02_r","middle_03_r","middle_03_bulge_r","middle_03_half_r","middle_03_in_r","middle_02_dip_r","middle_02_bulge_r","middle_02_side_out_r","middle_02_side_inn_r","middle_02_half_r","middle_02_pip_r","middle_02_in_r","middle_01_palmMid_r","middle_01_bulge_r","middle_01_side_out_r","middle_01_side_inn_r","middle_01_half_r","middle_01_mcp_r","middle_01_palm_r","middle_metacarpal_slide_r","index_metacarpal_r","index_01_r","index_02_r","index_03_r","index_03_bulge_r","index_03_half_r","index_02_dip_r","index_03_in_r","index_02_bulge_r","index_02_side_out_r","index_02_side_inn_r","index_02_half_r","index_02_in_r","index_02_pip_r","index_01_palmMid_r","index_01_bulge_r","index_01_side_out_r","index_01_side_inn_r","index_01_half_r","index_01_mcp_r","index_01_palm_r","index_metacarpal_slide_r","wrist_inner_r","wrist_outer_r","lowerarm_twist_02_r","lowerarm_twist_01_r","lowerarm_correctiveRoot_r","lowerarm_out_r","lowerarm_in_r","lowerarm_fwd_r","lowerarm_bck_r","upperarm_twist_01_r","upperarm_twistCor_01_r","upperarm_twist_02_r","upperarm_tricep_r","upperarm_bicep_r","upperarm_twistCor_02_r","clavicle_out_r","clavicle_scap_r","clavicle_pec_r","spine_04_latissimus_l","spine_04_latissimus_r","clavicle_pec_l","thigh_r","calf_r","foot_r","ball_r","littletoe_01_r","littletoe_02_r","ringtoe_01_r","ringtoe_02_r","middletoe_01_r","middletoe_02_r","bigtoe_01_r","bigtoe_02_r","indextoe_01_r","indextoe_02_r","ankle_bck_r","ankle_fwd_r","calf_twist_02_r","calf_twistCor_02_r","calf_twist_01_r","calf_correctiveRoot_r","calf_kneeBack_r","calf_knee_r","thigh_twist_01_r","thigh_twistCor_01_r","thigh_twist_02_r","thigh_twistCor_02_r","thigh_correctiveRoot_r","thigh_fwd_r","thigh_bck_r","thigh_out_r","thigh_in_r","thigh_bck_lwr_r","thigh_fwd_lwr_r","thigh_l","calf_l","foot_l","ball_l","indextoe_01_l","indextoe_02_l","bigtoe_01_l","bigtoe_02_l","littletoe_01_l","littletoe_02_l","middletoe_01_l","middletoe_02_l","ringtoe_01_l","ringtoe_02_l","ankle_bck_l","ankle_fwd_l","calf_twist_02_l","calf_twistCor_02_l","calf_twist_01_l","calf_correctiveRoot_l","calf_kneeBack_l","calf_knee_l","thigh_twist_01_l","thigh_twistCor_01_l","thigh_twist_02_l","thigh_twistCor_02_l","thigh_correctiveRoot_l","thigh_bck_l","thigh_fwd_l","thigh_out_l","thigh_bck_lwr_l","thigh_in_l","thigh_fwd_lwr_l","FACIAL_C_Neck1Root","FACIAL_C_NeckB","FACIAL_L_NeckB1","FACIAL_R_NeckB1","FACIAL_L_NeckB2","FACIAL_R_NeckB2","FACIAL_C_12IPV_NeckB1","FACIAL_C_12IPV_NeckB2","FACIAL_L_12IPV_NeckB3","FACIAL_R_12IPV_NeckB3","FACIAL_L_12IPV_NeckB4","FACIAL_R_12IPV_NeckB4","FACIAL_L_12IPV_NeckB5","FACIAL_R_12IPV_NeckB5","FACIAL_L_12IPV_NeckB6","FACIAL_R_12IPV_NeckB6","FACIAL_L_12IPV_NeckB7","FACIAL_R_12IPV_NeckB7","FACIAL_C_NeckBackB","FACIAL_L_NeckBackB","FACIAL_R_NeckBackB","FACIAL_C_12IPV_NeckBackB1","FACIAL_C_12IPV_NeckBackB2","FACIAL_L_12IPV_NeckBackB1","FACIAL_R_12IPV_NeckBackB1","FACIAL_L_12IPV_NeckBackB2","FACIAL_R_12IPV_NeckBackB2","FACIAL_C_Neck2Root","FACIAL_C_AdamsApple","FACIAL_C_12IPV_AdamsA1","FACIAL_C_12IPV_AdamsA2","FACIAL_L_NeckA1","FACIAL_R_NeckA1","FACIAL_L_NeckA2","FACIAL_R_NeckA2","FACIAL_L_NeckA3","FACIAL_R_NeckA3","FACIAL_L_12IPV_NeckA1","FACIAL_R_12IPV_NeckA1","FACIAL_L_12IPV_NeckA2","FACIAL_R_12IPV_NeckA2","FACIAL_L_12IPV_NeckA3","FACIAL_R_12IPV_NeckA3","FACIAL_L_12IPV_NeckA4","FACIAL_R_12IPV_NeckA4","FACIAL_L_12IPV_NeckA5","FACIAL_R_12IPV_NeckA5","FACIAL_L_12IPV_NeckA6","FACIAL_R_12IPV_NeckA6","FACIAL_C_NeckBackA","FACIAL_L_NeckBackA","FACIAL_R_NeckBackA","FACIAL_C_12IPV_NeckBackA1","FACIAL_C_12IPV_NeckBackA2","FACIAL_L_12IPV_NeckBackA1","FACIAL_R_12IPV_NeckBackA1","FACIAL_L_12IPV_NeckBackA2","FACIAL_R_12IPV_NeckBackA2","FACIAL_C_FacialRoot","FACIAL_C_Hair1","FACIAL_L_12IPV_Hair1","FACIAL_R_12IPV_Hair1","FACIAL_C_Hair2","FACIAL_C_Hair3","FACIAL_C_Hair4","FACIAL_C_Hair5","FACIAL_C_Hair6","FACIAL_L_HairA1","FACIAL_R_HairA1","FACIAL_L_HairA2","FACIAL_R_HairA2","FACIAL_L_HairA3","FACIAL_R_HairA3","FACIAL_L_HairA4","FACIAL_R_HairA4","FACIAL_L_HairA5","FACIAL_R_HairA5","FACIAL_L_HairA6","FACIAL_R_HairA6","FACIAL_L_HairB1","FACIAL_R_HairB1","FACIAL_L_HairB2","FACIAL_R_HairB2","FACIAL_L_HairB3","FACIAL_R_HairB3","FACIAL_L_HairB4","FACIAL_R_HairB4","FACIAL_L_HairB5","FACIAL_R_HairB5","FACIAL_L_Temple","FACIAL_R_Temple","FACIAL_L_12IPV_Temple1","FACIAL_R_12IPV_Temple1","FACIAL_L_12IPV_Temple2","FACIAL_R_12IPV_Temple2","FACIAL_L_12IPV_Temple3","FACIAL_R_12IPV_Temple3","FACIAL_L_12IPV_Temple4","FACIAL_R_12IPV_Temple4","FACIAL_L_HairC1","FACIAL_R_HairC1","FACIAL_L_HairC2","FACIAL_R_HairC2","FACIAL_L_HairC3","FACIAL_R_HairC3","FACIAL_L_HairC4","FACIAL_R_HairC4","FACIAL_L_Sideburn1","FACIAL_R_Sideburn1","FACIAL_L_Sideburn2","FACIAL_R_Sideburn2","FACIAL_L_Sideburn3","FACIAL_R_Sideburn3","FACIAL_L_Sideburn4","FACIAL_R_Sideburn4","FACIAL_L_Sideburn5","FACIAL_R_Sideburn5","FACIAL_L_Sideburn6","FACIAL_R_Sideburn6","FACIAL_C_ForeheadSkin","FACIAL_L_ForeheadInSkin","FACIAL_R_ForeheadInSkin","FACIAL_L_12IPV_ForeheadSkin1","FACIAL_R_12IPV_ForeheadSkin1","FACIAL_L_12IPV_ForeheadSkin2","FACIAL_R_12IPV_ForeheadSkin2","FACIAL_L_12IPV_ForeheadSkin3","FACIAL_R_12IPV_ForeheadSkin3","FACIAL_L_12IPV_ForeheadSkin4","FACIAL_R_12IPV_ForeheadSkin4","FACIAL_L_12IPV_ForeheadSkin5","FACIAL_R_12IPV_ForeheadSkin5","FACIAL_L_12IPV_ForeheadSkin6","FACIAL_R_12IPV_ForeheadSkin6","FACIAL_L_ForeheadMidSkin","FACIAL_R_ForeheadMidSkin","FACIAL_L_ForeheadOutSkin","FACIAL_R_ForeheadOutSkin","FACIAL_C_Skull","FACIAL_C_Forehead","FACIAL_C_Forehead1","FACIAL_L_Forehead1","FACIAL_R_Forehead1","FACIAL_C_Forehead2","FACIAL_L_Forehead2","FACIAL_R_Forehead2","FACIAL_C_Forehead3","FACIAL_L_Forehead3","FACIAL_R_Forehead3","FACIAL_C_12IPV_Forehead1","FACIAL_L_12IPV_Forehead1","FACIAL_R_12IPV_Forehead1","FACIAL_C_12IPV_Forehead2","FACIAL_L_12IPV_Forehead2","FACIAL_R_12IPV_Forehead2","FACIAL_C_12IPV_Forehead3","FACIAL_L_12IPV_Forehead3","FACIAL_R_12IPV_Forehead3","FACIAL_C_12IPV_Forehead4","FACIAL_L_12IPV_Forehead4","FACIAL_R_12IPV_Forehead4","FACIAL_C_12IPV_Forehead5","FACIAL_L_12IPV_Forehead5","FACIAL_R_12IPV_Forehead5","FACIAL_C_12IPV_Forehead6","FACIAL_L_12IPV_Forehead6","FACIAL_R_12IPV_Forehead6","FACIAL_L_ForeheadIn","FACIAL_L_ForeheadInA1","FACIAL_L_ForeheadInA2","FACIAL_L_ForeheadInA3","FACIAL_L_ForeheadInB1","FACIAL_L_ForeheadInB2","FACIAL_L_12IPV_ForeheadIn1","FACIAL_L_12IPV_ForeheadIn2","FACIAL_L_12IPV_ForeheadIn3","FACIAL_L_12IPV_ForeheadIn4","FACIAL_L_12IPV_ForeheadIn5","FACIAL_L_12IPV_ForeheadIn6","FACIAL_L_12IPV_ForeheadIn7","FACIAL_L_12IPV_ForeheadIn8","FACIAL_L_12IPV_ForeheadIn9","FACIAL_L_12IPV_ForeheadIn10","FACIAL_L_12IPV_ForeheadIn11","FACIAL_L_12IPV_ForeheadIn12","FACIAL_L_12IPV_ForeheadIn13","FACIAL_L_12IPV_ForeheadIn14","FACIAL_R_ForeheadIn","FACIAL_R_ForeheadInA1","FACIAL_R_ForeheadInA2","FACIAL_R_ForeheadInA3","FACIAL_R_ForeheadInB1","FACIAL_R_ForeheadInB2","FACIAL_R_12IPV_ForeheadIn1","FACIAL_R_12IPV_ForeheadIn2","FACIAL_R_12IPV_ForeheadIn3","FACIAL_R_12IPV_ForeheadIn5","FACIAL_R_12IPV_ForeheadIn4","FACIAL_R_12IPV_ForeheadIn6","FACIAL_R_12IPV_ForeheadIn7","FACIAL_R_12IPV_ForeheadIn8","FACIAL_R_12IPV_ForeheadIn9","FACIAL_R_12IPV_ForeheadIn10","FACIAL_R_12IPV_ForeheadIn12","FACIAL_R_12IPV_ForeheadIn11","FACIAL_R_12IPV_ForeheadIn13","FACIAL_R_12IPV_ForeheadIn14","FACIAL_L_ForeheadMid","FACIAL_L_ForeheadMid1","FACIAL_L_ForeheadMid2","FACIAL_L_12IPV_ForeheadMid15","FACIAL_L_12IPV_ForeheadMid16","FACIAL_L_12IPV_ForeheadMid17","FACIAL_L_12IPV_ForeheadMid18","FACIAL_L_12IPV_ForeheadMid19","FACIAL_L_12IPV_ForeheadMid20","FACIAL_L_12IPV_ForeheadMid21","FACIAL_L_12IPV_ForeheadMid22","FACIAL_R_ForeheadMid","FACIAL_R_ForeheadMid1","FACIAL_R_ForeheadMid2","FACIAL_R_12IPV_ForeheadMid15","FACIAL_R_12IPV_ForeheadMid16","FACIAL_R_12IPV_ForeheadMid17","FACIAL_R_12IPV_ForeheadMid18","FACIAL_R_12IPV_ForeheadMid19","FACIAL_R_12IPV_ForeheadMid20","FACIAL_R_12IPV_ForeheadMid21","FACIAL_R_12IPV_ForeheadMid22","FACIAL_L_ForeheadOut","FACIAL_L_ForeheadOutA1","FACIAL_L_ForeheadOutA2","FACIAL_L_ForeheadOutB1","FACIAL_L_ForeheadOutB2","FACIAL_L_12IPV_ForeheadOut23","FACIAL_L_12IPV_ForeheadOut24","FACIAL_L_12IPV_ForeheadOut25","FACIAL_L_12IPV_ForeheadOut26","FACIAL_L_12IPV_ForeheadOut27","FACIAL_L_12IPV_ForeheadOut28","FACIAL_L_12IPV_ForeheadOut29","FACIAL_L_12IPV_ForeheadOut30","FACIAL_L_12IPV_ForeheadOut31","FACIAL_L_12IPV_ForeheadOut32","FACIAL_R_ForeheadOut","FACIAL_R_ForeheadOutA1","FACIAL_R_ForeheadOutA2","FACIAL_R_ForeheadOutB1","FACIAL_R_ForeheadOutB2","FACIAL_R_12IPV_ForeheadOut23","FACIAL_R_12IPV_ForeheadOut24","FACIAL_R_12IPV_ForeheadOut25","FACIAL_R_12IPV_ForeheadOut26","FACIAL_R_12IPV_ForeheadOut27","FACIAL_R_12IPV_ForeheadOut28","FACIAL_R_12IPV_ForeheadOut29","FACIAL_R_12IPV_ForeheadOut30","FACIAL_R_12IPV_ForeheadOut31","FACIAL_R_12IPV_ForeheadOut32","FACIAL_L_12IPV_EyesackU0","FACIAL_R_12IPV_EyesackU0","FACIAL_L_EyesackUpper","FACIAL_L_EyesackUpper1","FACIAL_L_EyesackUpper2","FACIAL_L_EyesackUpper3","FACIAL_R_EyesackUpper","FACIAL_R_EyesackUpper1","FACIAL_R_EyesackUpper2","FACIAL_R_EyesackUpper3","FACIAL_L_EyesackUpper4","FACIAL_R_EyesackUpper4","FACIAL_L_EyelidUpperFurrow","FACIAL_L_EyelidUpperFurrow1","FACIAL_L_EyelidUpperFurrow2","FACIAL_L_EyelidUpperFurrow3","FACIAL_R_EyelidUpperFurrow","FACIAL_R_EyelidUpperFurrow1","FACIAL_R_EyelidUpperFurrow2","FACIAL_R_EyelidUpperFurrow3","FACIAL_L_EyelidUpperB","FACIAL_L_EyelidUpperB1","FACIAL_L_EyelidUpperB2","FACIAL_L_EyelidUpperB3","FACIAL_R_EyelidUpperB","FACIAL_R_EyelidUpperB1","FACIAL_R_EyelidUpperB2","FACIAL_R_EyelidUpperB3","FACIAL_L_EyelidUpperA","FACIAL_L_EyelidUpperA1","FACIAL_L_EyelashesUpperA1","FACIAL_L_EyelidUpperA2","FACIAL_L_EyelashesUpperA2","FACIAL_L_EyelidUpperA3","FACIAL_L_EyelashesUpperA3","FACIAL_R_EyelidUpperA","FACIAL_R_EyelidUpperA1","FACIAL_R_EyelashesUpperA1","FACIAL_R_EyelidUpperA2","FACIAL_R_EyelashesUpperA2","FACIAL_R_EyelidUpperA3","FACIAL_R_EyelashesUpperA3","FACIAL_L_Eye","FACIAL_L_EyeParallel","FACIAL_L_Pupil","FACIAL_R_Eye","FACIAL_R_EyeParallel","FACIAL_R_Pupil","FACIAL_L_EyelidLowerA","FACIAL_L_EyelidLowerA1","FACIAL_L_EyelidLowerA2","FACIAL_L_EyelidLowerA3","FACIAL_R_EyelidLowerA","FACIAL_R_EyelidLowerA1","FACIAL_R_EyelidLowerA2","FACIAL_R_EyelidLowerA3","FACIAL_L_EyelidLowerB","FACIAL_L_EyelidLowerB1","FACIAL_L_EyelidLowerB2","FACIAL_L_EyelidLowerB3","FACIAL_R_EyelidLowerB","FACIAL_R_EyelidLowerB1","FACIAL_R_EyelidLowerB2","FACIAL_R_EyelidLowerB3","FACIAL_L_EyeCornerInner","FACIAL_L_EyeCornerInner1","FACIAL_L_EyeCornerInner2","FACIAL_R_EyeCornerInner","FACIAL_R_EyeCornerInner1","FACIAL_R_EyeCornerInner2","FACIAL_L_EyeCornerOuter","FACIAL_L_EyeCornerOuter1","FACIAL_L_EyelashesCornerOuter1","FACIAL_L_EyeCornerOuter2","FACIAL_R_EyeCornerOuter","FACIAL_R_EyeCornerOuter1","FACIAL_R_EyelashesCornerOuter1","FACIAL_R_EyeCornerOuter2","FACIAL_L_12IPV_EyeCornerO1","FACIAL_R_12IPV_EyeCornerO1","FACIAL_L_12IPV_EyeCornerO2","FACIAL_R_12IPV_EyeCornerO2","FACIAL_L_EyesackLower","FACIAL_L_EyesackLower1","FACIAL_L_EyesackLower2","FACIAL_L_12IPV_EyesackL1","FACIAL_L_12IPV_EyesackL2","FACIAL_L_12IPV_EyesackL3","FACIAL_L_12IPV_EyesackL4","FACIAL_L_12IPV_EyesackL5","FACIAL_L_12IPV_EyesackL6","FACIAL_L_12IPV_EyesackL7","FACIAL_L_12IPV_EyesackL8","FACIAL_R_EyesackLower","FACIAL_R_EyesackLower1","FACIAL_R_EyesackLower2","FACIAL_R_12IPV_EyesackL1","FACIAL_R_12IPV_EyesackL2","FACIAL_R_12IPV_EyesackL3","FACIAL_R_12IPV_EyesackL4","FACIAL_R_12IPV_EyesackL5","FACIAL_R_12IPV_EyesackL6","FACIAL_R_12IPV_EyesackL7","FACIAL_R_12IPV_EyesackL8","FACIAL_L_CheekInner","FACIAL_L_CheekInner1","FACIAL_L_CheekInner2","FACIAL_L_CheekInner3","FACIAL_L_CheekInner4","FACIAL_R_CheekInner","FACIAL_R_CheekInner1","FACIAL_R_CheekInner2","FACIAL_R_CheekInner3","FACIAL_R_CheekInner4","FACIAL_L_CheekOuter","FACIAL_L_CheekOuter1","FACIAL_L_CheekOuter2","FACIAL_L_CheekOuter3","FACIAL_R_CheekOuter","FACIAL_R_CheekOuter1","FACIAL_R_CheekOuter2","FACIAL_R_CheekOuter3","FACIAL_L_CheekOuter4","FACIAL_R_CheekOuter4","FACIAL_L_12IPV_CheekOuter1","FACIAL_R_12IPV_CheekOuter1","FACIAL_L_12IPV_CheekOuter2","FACIAL_R_12IPV_CheekOuter2","FACIAL_L_12IPV_CheekOuter3","FACIAL_R_12IPV_CheekOuter3","FACIAL_L_12IPV_CheekOuter4","FACIAL_R_12IPV_CheekOuter4","FACIAL_C_NoseBridge","FACIAL_C_12IPV_NoseBridge1","FACIAL_L_12IPV_NoseBridge1","FACIAL_R_12IPV_NoseBridge1","FACIAL_C_12IPV_NoseBridge2","FACIAL_L_12IPV_NoseBridge2","FACIAL_R_12IPV_NoseBridge2","FACIAL_L_NoseBridge","FACIAL_R_NoseBridge","FACIAL_C_NoseUpper","FACIAL_L_NoseUpper","FACIAL_R_NoseUpper","FACIAL_C_12IPV_NoseUpper1","FACIAL_C_12IPV_NoseUpper2","FACIAL_L_12IPV_NoseUpper1","FACIAL_R_12IPV_NoseUpper1","FACIAL_L_12IPV_NoseUpper2","FACIAL_R_12IPV_NoseUpper2","FACIAL_L_12IPV_NoseUpper3","FACIAL_R_12IPV_NoseUpper3","FACIAL_L_12IPV_NoseUpper4","FACIAL_R_12IPV_NoseUpper4","FACIAL_L_12IPV_NoseUpper5","FACIAL_R_12IPV_NoseUpper5","FACIAL_L_12IPV_NoseUpper6","FACIAL_R_12IPV_NoseUpper6","FACIAL_L_NasolabialBulge1","FACIAL_R_NasolabialBulge1","FACIAL_L_12IPV_NasolabialB13","FACIAL_R_12IPV_NasolabialB13","FACIAL_L_12IPV_NasolabialB14","FACIAL_R_12IPV_NasolabialB14","FACIAL_L_12IPV_NasolabialB15","FACIAL_R_12IPV_NasolabialB15","FACIAL_L_NasolabialBulge","FACIAL_L_NasolabialBulge2","FACIAL_L_NasolabialBulge3","FACIAL_L_12IPV_NasolabialB1","FACIAL_L_12IPV_NasolabialB2","FACIAL_L_12IPV_NasolabialB3","FACIAL_L_12IPV_NasolabialB4","FACIAL_L_12IPV_NasolabialB5","FACIAL_L_12IPV_NasolabialB6","FACIAL_L_12IPV_NasolabialB7","FACIAL_L_12IPV_NasolabialB8","FACIAL_L_12IPV_NasolabialB9","FACIAL_L_12IPV_NasolabialB10","FACIAL_L_12IPV_NasolabialB11","FACIAL_L_12IPV_NasolabialB12","FACIAL_R_NasolabialBulge","FACIAL_R_NasolabialBulge2","FACIAL_R_NasolabialBulge3","FACIAL_R_12IPV_NasolabialB1","FACIAL_R_12IPV_NasolabialB2","FACIAL_R_12IPV_NasolabialB3","FACIAL_R_12IPV_NasolabialB4","FACIAL_R_12IPV_NasolabialB5","FACIAL_R_12IPV_NasolabialB6","FACIAL_R_12IPV_NasolabialB7","FACIAL_R_12IPV_NasolabialB8","FACIAL_R_12IPV_NasolabialB9","FACIAL_R_12IPV_NasolabialB10","FACIAL_R_12IPV_NasolabialB11","FACIAL_R_12IPV_NasolabialB12","FACIAL_L_NasolabialFurrow","FACIAL_R_NasolabialFurrow","FACIAL_L_12IPV_NasolabialF1","FACIAL_R_12IPV_NasolabialF1","FACIAL_L_12IPV_NasolabialF2","FACIAL_R_12IPV_NasolabialF2","FACIAL_L_12IPV_NasolabialF3","FACIAL_R_12IPV_NasolabialF3","FACIAL_L_12IPV_NasolabialF4","FACIAL_R_12IPV_NasolabialF4","FACIAL_L_12IPV_NasolabialF5","FACIAL_R_12IPV_NasolabialF5","FACIAL_L_12IPV_NasolabialF6","FACIAL_R_12IPV_NasolabialF6","FACIAL_L_12IPV_NasolabialF7","FACIAL_R_12IPV_NasolabialF7","FACIAL_L_12IPV_NasolabialF8","FACIAL_R_12IPV_NasolabialF8","FACIAL_L_12IPV_NasolabialF9","FACIAL_R_12IPV_NasolabialF9","FACIAL_L_CheekLower","FACIAL_L_CheekLower1","FACIAL_L_CheekLower2","FACIAL_L_12IPV_CheekL1","FACIAL_L_12IPV_CheekL2","FACIAL_L_12IPV_CheekL3","FACIAL_L_12IPV_CheekL4","FACIAL_R_CheekLower","FACIAL_R_CheekLower1","FACIAL_R_CheekLower2","FACIAL_R_12IPV_CheekL1","FACIAL_R_12IPV_CheekL2","FACIAL_R_12IPV_CheekL3","FACIAL_R_12IPV_CheekL4","FACIAL_L_Ear","FACIAL_L_Ear1","FACIAL_L_Ear2","FACIAL_L_Ear3","FACIAL_L_Ear4","FACIAL_R_Ear","FACIAL_R_Ear1","FACIAL_R_Ear2","FACIAL_R_Ear3","FACIAL_R_Ear4","FACIAL_C_Nose","FACIAL_C_NoseLower","FACIAL_L_NostrilThickness3","FACIAL_R_NostrilThickness3","FACIAL_C_12IPV_NoseL1","FACIAL_C_12IPV_NoseL2","FACIAL_C_NoseTip","FACIAL_C_12IPV_NoseTip1","FACIAL_C_12IPV_NoseTip2","FACIAL_C_12IPV_NoseTip3","FACIAL_L_12IPV_NoseTip1","FACIAL_R_12IPV_NoseTip1","FACIAL_L_12IPV_NoseTip2","FACIAL_R_12IPV_NoseTip2","FACIAL_L_12IPV_NoseTip3","FACIAL_R_12IPV_NoseTip3","FACIAL_L_Nostril","FACIAL_L_NostrilThickness1","FACIAL_L_NostrilThickness2","FACIAL_L_12IPV_Nostril1","FACIAL_L_12IPV_Nostril2","FACIAL_L_12IPV_Nostril3","FACIAL_L_12IPV_Nostril4","FACIAL_L_12IPV_Nostril5","FACIAL_L_12IPV_Nostril6","FACIAL_L_12IPV_Nostril7","FACIAL_L_12IPV_Nostril8","FACIAL_L_12IPV_Nostril9","FACIAL_L_12IPV_Nostril10","FACIAL_L_12IPV_Nostril11","FACIAL_L_12IPV_Nostril12","FACIAL_L_12IPV_Nostril13","FACIAL_L_12IPV_Nostril14","FACIAL_R_Nostril","FACIAL_R_NostrilThickness1","FACIAL_R_NostrilThickness2","FACIAL_R_12IPV_Nostril1","FACIAL_R_12IPV_Nostril2","FACIAL_R_12IPV_Nostril3","FACIAL_R_12IPV_Nostril4","FACIAL_R_12IPV_Nostril5","FACIAL_R_12IPV_Nostril6","FACIAL_R_12IPV_Nostril7","FACIAL_R_12IPV_Nostril8","FACIAL_R_12IPV_Nostril9","FACIAL_R_12IPV_Nostril10","FACIAL_R_12IPV_Nostril11","FACIAL_R_12IPV_Nostril12","FACIAL_R_12IPV_Nostril13","FACIAL_R_12IPV_Nostril14","FACIAL_C_LipUpperSkin","FACIAL_L_LipUpperSkin","FACIAL_R_LipUpperSkin","FACIAL_L_LipUpperOuterSkin","FACIAL_R_LipUpperOuterSkin","FACIAL_C_12IPV_LipUpperSkin1","FACIAL_C_12IPV_LipUpperSkin2","FACIAL_L_12IPV_LipUpperSkin","FACIAL_R_12IPV_LipUpperSkin","FACIAL_L_12IPV_LipUpperOuterSkin1","FACIAL_R_12IPV_LipUpperOuterSkin1","FACIAL_L_12IPV_LipUpperOuterSkin2","FACIAL_R_12IPV_LipUpperOuterSkin2","FACIAL_L_12IPV_MouthInteriorUpper1","FACIAL_R_12IPV_MouthInteriorUpper1","FACIAL_L_12IPV_MouthInteriorUpper2","FACIAL_R_12IPV_MouthInteriorUpper2","FACIAL_C_MouthUpper","FACIAL_C_LipUpper","FACIAL_C_LipUpper1","FACIAL_C_LipUpper2","FACIAL_C_LipUpper3","FACIAL_L_12IPV_LipUpper1","FACIAL_R_12IPV_LipUpper1","FACIAL_L_12IPV_LipUpper2","FACIAL_R_12IPV_LipUpper2","FACIAL_L_12IPV_LipUpper3","FACIAL_R_12IPV_LipUpper3","FACIAL_L_12IPV_LipUpper4","FACIAL_R_12IPV_LipUpper4","FACIAL_L_12IPV_LipUpper5","FACIAL_R_12IPV_LipUpper5","FACIAL_L_LipUpper","FACIAL_L_LipUpper1","FACIAL_L_LipUpper2","FACIAL_L_LipUpper3","FACIAL_L_12IPV_LipUpper6","FACIAL_L_12IPV_LipUpper7","FACIAL_L_12IPV_LipUpper8","FACIAL_L_12IPV_LipUpper9","FACIAL_L_12IPV_LipUpper10","FACIAL_L_12IPV_LipUpper11","FACIAL_L_12IPV_LipUpper12","FACIAL_L_12IPV_LipUpper13","FACIAL_L_12IPV_LipUpper14","FACIAL_L_12IPV_LipUpper15","FACIAL_R_LipUpper","FACIAL_R_LipUpper1","FACIAL_R_LipUpper2","FACIAL_R_LipUpper3","FACIAL_R_12IPV_LipUpper6","FACIAL_R_12IPV_LipUpper7","FACIAL_R_12IPV_LipUpper8","FACIAL_R_12IPV_LipUpper9","FACIAL_R_12IPV_LipUpper10","FACIAL_R_12IPV_LipUpper11","FACIAL_R_12IPV_LipUpper12","FACIAL_R_12IPV_LipUpper13","FACIAL_R_12IPV_LipUpper14","FACIAL_R_12IPV_LipUpper15","FACIAL_L_LipUpperOuter","FACIAL_L_LipUpperOuter1","FACIAL_L_LipUpperOuter2","FACIAL_L_LipUpperOuter3","FACIAL_L_12IPV_LipUpper16","FACIAL_L_12IPV_LipUpper17","FACIAL_L_12IPV_LipUpper18","FACIAL_L_12IPV_LipUpper19","FACIAL_L_12IPV_LipUpper20","FACIAL_L_12IPV_LipUpper21","FACIAL_L_12IPV_LipUpper22","FACIAL_L_12IPV_LipUpper23","FACIAL_L_12IPV_LipUpper24","FACIAL_R_LipUpperOuter","FACIAL_R_LipUpperOuter1","FACIAL_R_LipUpperOuter2","FACIAL_R_LipUpperOuter3","FACIAL_R_12IPV_LipUpper16","FACIAL_R_12IPV_LipUpper17","FACIAL_R_12IPV_LipUpper18","FACIAL_R_12IPV_LipUpper19","FACIAL_R_12IPV_LipUpper20","FACIAL_R_12IPV_LipUpper21","FACIAL_R_12IPV_LipUpper22","FACIAL_R_12IPV_LipUpper23","FACIAL_R_12IPV_LipUpper24","FACIAL_L_LipCorner","FACIAL_L_LipCorner1","FACIAL_L_LipCorner2","FACIAL_L_LipCorner3","FACIAL_L_12IPV_LipCorner1","FACIAL_L_12IPV_LipCorner2","FACIAL_L_12IPV_LipCorner3","FACIAL_R_LipCorner","FACIAL_R_LipCorner1","FACIAL_R_LipCorner2","FACIAL_R_LipCorner3","FACIAL_R_12IPV_LipCorner1","FACIAL_R_12IPV_LipCorner2","FACIAL_R_12IPV_LipCorner3","FACIAL_L_JawBulge","FACIAL_R_JawBulge","FACIAL_L_JawRecess","FACIAL_R_JawRecess","FACIAL_L_Masseter","FACIAL_R_Masseter","FACIAL_C_UnderChin","FACIAL_L_12IPV_UnderChin1","FACIAL_R_12IPV_UnderChin1","FACIAL_L_12IPV_UnderChin2","FACIAL_R_12IPV_UnderChin2","FACIAL_L_UnderChin","FACIAL_R_UnderChin","FACIAL_L_12IPV_UnderChin3","FACIAL_R_12IPV_UnderChin3","FACIAL_L_12IPV_UnderChin4","FACIAL_R_12IPV_UnderChin4","FACIAL_L_12IPV_UnderChin5","FACIAL_R_12IPV_UnderChin5","FACIAL_L_12IPV_UnderChin6","FACIAL_R_12IPV_UnderChin6","FACIAL_C_TeethUpper","FACIAL_C_LowerLipRotation","FACIAL_C_LipLowerSkin","FACIAL_L_LipLowerSkin","FACIAL_R_LipLowerSkin","FACIAL_L_LipLowerOuterSkin","FACIAL_R_LipLowerOuterSkin","FACIAL_C_12IPV_LipLowerSkin1","FACIAL_C_12IPV_LipLowerSkin2","FACIAL_L_12IPV_LipLowerSkin","FACIAL_R_12IPV_LipLowerSkin","FACIAL_L_12IPV_LipLowerOuterSkin1","FACIAL_R_12IPV_LipLowerOuterSkin1","FACIAL_L_12IPV_LipLowerOuterSkin2","FACIAL_R_12IPV_LipLowerOuterSkin2","FACIAL_L_12IPV_LipLowerOuterSkin3","FACIAL_R_12IPV_LipLowerOuterSkin3","FACIAL_L_12IPV_MouthInteriorLower1","FACIAL_R_12IPV_MouthInteriorLower1","FACIAL_L_12IPV_MouthInteriorLower2","FACIAL_R_12IPV_MouthInteriorLower2","FACIAL_C_MouthLower","FACIAL_C_LipLower","FACIAL_C_LipLower1","FACIAL_C_LipLower2","FACIAL_C_LipLower3","FACIAL_L_12IPV_LipLower1","FACIAL_R_12IPV_LipLower1","FACIAL_L_12IPV_LipLower2","FACIAL_R_12IPV_LipLower2","FACIAL_L_12IPV_LipLower3","FACIAL_R_12IPV_LipLower3","FACIAL_L_12IPV_LipLower4","FACIAL_R_12IPV_LipLower4","FACIAL_L_12IPV_LipLower5","FACIAL_R_12IPV_LipLower5","FACIAL_L_LipLower","FACIAL_L_LipLower1","FACIAL_L_LipLower2","FACIAL_L_LipLower3","FACIAL_L_12IPV_LipLower6","FACIAL_L_12IPV_LipLower7","FACIAL_L_12IPV_LipLower8","FACIAL_L_12IPV_LipLower9","FACIAL_L_12IPV_LipLower10","FACIAL_L_12IPV_LipLower11","FACIAL_L_12IPV_LipLower12","FACIAL_L_12IPV_LipLower13","FACIAL_L_12IPV_LipLower14","FACIAL_L_12IPV_LipLower15","FACIAL_R_LipLower","FACIAL_R_LipLower1","FACIAL_R_LipLower2","FACIAL_R_LipLower3","FACIAL_R_12IPV_LipLower6","FACIAL_R_12IPV_LipLower7","FACIAL_R_12IPV_LipLower8","FACIAL_R_12IPV_LipLower9","FACIAL_R_12IPV_LipLower10","FACIAL_R_12IPV_LipLower11","FACIAL_R_12IPV_LipLower12","FACIAL_R_12IPV_LipLower13","FACIAL_R_12IPV_LipLower14","FACIAL_R_12IPV_LipLower15","FACIAL_L_LipLowerOuter","FACIAL_L_LipLowerOuter1","FACIAL_L_LipLowerOuter2","FACIAL_L_LipLowerOuter3","FACIAL_L_12IPV_LipLower16","FACIAL_L_12IPV_LipLower17","FACIAL_L_12IPV_LipLower18","FACIAL_L_12IPV_LipLower19","FACIAL_L_12IPV_LipLower20","FACIAL_L_12IPV_LipLower21","FACIAL_L_12IPV_LipLower22","FACIAL_L_12IPV_LipLower23","FACIAL_L_12IPV_LipLower24","FACIAL_R_LipLowerOuter","FACIAL_R_LipLowerOuter1","FACIAL_R_LipLowerOuter2","FACIAL_R_LipLowerOuter3","FACIAL_R_12IPV_LipLower16","FACIAL_R_12IPV_LipLower17","FACIAL_R_12IPV_LipLower18","FACIAL_R_12IPV_LipLower19","FACIAL_R_12IPV_LipLower20","FACIAL_R_12IPV_LipLower21","FACIAL_R_12IPV_LipLower22","FACIAL_R_12IPV_LipLower23","FACIAL_R_12IPV_LipLower24","FACIAL_C_TeethLower","FACIAL_C_Tongue1","FACIAL_C_TongueUpper1","FACIAL_L_TongueSide1","FACIAL_R_TongueSide1","FACIAL_C_Tongue2","FACIAL_C_TongueUpper2","FACIAL_L_TongueSide2","FACIAL_R_TongueSide2","FACIAL_C_Tongue3","FACIAL_C_TongueUpper3","FACIAL_C_TongueLower3","FACIAL_L_TongueSide3","FACIAL_R_TongueSide3","FACIAL_C_Tongue4","FACIAL_L_TongueSide4","FACIAL_R_TongueSide4","FACIAL_C_Jaw","FACIAL_C_Jawline","FACIAL_L_12IPV_Jawline1","FACIAL_R_12IPV_Jawline1","FACIAL_L_12IPV_Jawline2","FACIAL_R_12IPV_Jawline2","FACIAL_L_Jawline","FACIAL_L_Jawline1","FACIAL_L_Jawline2","FACIAL_L_12IPV_Jawline3","FACIAL_L_12IPV_Jawline4","FACIAL_L_12IPV_Jawline5","FACIAL_L_12IPV_Jawline6","FACIAL_R_Jawline","FACIAL_R_Jawline1","FACIAL_R_Jawline2","FACIAL_R_12IPV_Jawline3","FACIAL_R_12IPV_Jawline4","FACIAL_R_12IPV_Jawline5","FACIAL_R_12IPV_Jawline6","FACIAL_L_ChinSide","FACIAL_R_ChinSide","FACIAL_L_12IPV_ChinS1","FACIAL_R_12IPV_ChinS1","FACIAL_L_12IPV_ChinS2","FACIAL_R_12IPV_ChinS2","FACIAL_L_12IPV_ChinS3","FACIAL_R_12IPV_ChinS3","FACIAL_L_12IPV_ChinS4","FACIAL_R_12IPV_ChinS4","FACIAL_C_Chin1","FACIAL_L_Chin1","FACIAL_R_Chin1","FACIAL_C_Chin2","FACIAL_L_Chin2","FACIAL_R_Chin2","FACIAL_C_Chin3","FACIAL_L_Chin3","FACIAL_R_Chin3","FACIAL_L_12IPV_Chin1","FACIAL_R_12IPV_Chin1","FACIAL_L_12IPV_Chin2","FACIAL_R_12IPV_Chin2","FACIAL_C_12IPV_Chin3","FACIAL_C_12IPV_Chin4","FACIAL_L_12IPV_Chin5","FACIAL_R_12IPV_Chin5","FACIAL_L_12IPV_Chin6","FACIAL_R_12IPV_Chin6","FACIAL_L_12IPV_Chin7","FACIAL_R_12IPV_Chin7","FACIAL_L_12IPV_Chin8","FACIAL_R_12IPV_Chin8","FACIAL_L_12IPV_Chin9","FACIAL_R_12IPV_Chin9","FACIAL_L_12IPV_Chin10","FACIAL_R_12IPV_Chin10","FACIAL_L_12IPV_Chin11","FACIAL_R_12IPV_Chin11","FACIAL_L_12IPV_Chin12","FACIAL_R_12IPV_Chin12","FACIAL_L_12IPV_Chin13","FACIAL_R_12IPV_Chin13","FACIAL_L_12IPV_Chin14","FACIAL_R_12IPV_Chin14","FACIAL_C_Chin"],Ri=[0,0,0,.0233437,.9007828,0,-.0015207,0,-.0356119,0,2e-7,-.063712,0,3e-7,-.0712212,0,9e-7,-.0904171,0,12e-7,-.1286658,.0057265,15e-7,-.1590279,0,5e-7,-.052265,-358e-7,5e-7,-.0541058,-.0093304,-.0114715,-.1015913,12e-7,-.0012262,-.1655814,2e-7,0,-.2716819,1e-7,-3e-7,-.2593559,-.0044057,.0185658,-.0276724,1e-7,0,-.0463796,0,0,-.0292089,0,0,-.0187035,-.0025285,.0069261,-.0286998,-1e-7,0,-.0493868,0,0,-.0407549,0,0,-.0313077,-.0135881,-.0229554,-.0166282,0,-1e-7,-.04589,0,0,-.0280468,-.0013554,-.003889,-.0289802,0,0,-.054799,-1e-7,-1e-7,-.0465886,-1e-7,-1e-7,-.0294016,-.0021233,-.0205175,-.0314949,0,0,-.0518244,0,0,-.042275,0,0,-.0229874,-.0093304,.0114733,-.101591,13e-7,.0012213,.1655815,3e-7,0,.271682,3e-7,-2e-7,.2593558,.0044056,-.0185658,.0276723,0,0,.0463795,0,0,.0292088,0,0,.0187035,.0025285,-.0069261,.0286997,0,0,.0493868,0,0,.040755,0,0,.0313077,.013588,.0229554,.0166282,0,-2e-7,.04589,0,0,.0280468,.0013553,.003889,.0289802,0,0,.054799,1e-7,0,.0465887,0,1e-7,.0294016,.0021231,.0205174,.0314949,-2e-7,0,.0518244,0,0,.042275,-1e-7,0,.0229876,.0018911,.0949354,.0108068,13e-7,0,-.4183219,-1e-7,0,-.392278,-.1390173,.0029359,-.0656343,.005855,.0473655,-.0110311,.0016728,6973e-7,.0154311,.0110356,.0320973,-.0011842,3611e-7,.0039117,.0209273,.0133392,.0163956,.0058485,-.0010228,.0035978,.0242602,.0118184,-.0286874,.0098808,-.0015024,7765e-7,.0313131,.0150648,-.00248,.0074855,-.0016026,.0029361,.0303304,-21e-7,-7e-7,-.2618881,.0018912,-.0949353,.0108068,-13e-7,0,.4183218,1e-7,0,.392278,.1390174,-.0029358,.0656343,-.0150648,.00248,-.0074855,.0016026,-.0029361,-.0303304,-.0118184,.0286874,-.0098808,.0015024,-7765e-7,-.0313131,-.005855,-.0473656,.0110311,-.0016728,-6973e-7,-.0154311,-.0133392,-.0163956,-.0058485,.0010228,-.0035978,-.0242602,-.0110356,-.0320974,.0011842,-3611e-7,-.0039117,-.0209273,21e-7,7e-7,.261888],yi=[0,0,0,-1,-.7069933,.012667,.0126671,-.7069933,19e-7,.0954121,4e-7,-.9954379,0,-.0638428,0,-.99796,31e-7,-.0828618,-3e-7,-.9965611,0,-.0743946,0,-.9972289,-1e-7,.0133748,2e-7,-.9999105,-1e-7,.2006889,-1e-7,-.979655,0,-.0078937,0,-.9999688,0,-.099543,0,-.9950333,.7475424,.0537591,.078301,-.6573883,.3846423,.0111753,-.0260349,-.9226308,2e-7,.3143818,-1e-7,-.9492966,1e-7,-1e-7,-.7071068,-.7071068,-.1810116,-.0874972,-.0672794,-.9772679,0,-.1045285,0,-.9945219,0,-.1736482,0,-.9848077,0,-.0348995,0,-.9993908,-.1045125,.0018243,-.0173568,-.9943704,0,-.1564345,0,-.9876884,0,-.2164396,0,-.976296,0,-.0436194,0,-.9990482,.3371452,.0446987,.5606716,-.7549719,0,-.1736482,0,-.9848077,0,-.0871558,0,-.9961947,-.0090226,.0435558,.0065938,-.9989885,0,-.2079117,0,-.9781476,0,-.1736482,0,-.9848077,0,-.0348995,0,-.9993908,.0522085,.0036507,.0696609,-.9961969,0,-.1736481,0,-.9848078,0,-.1045285,0,-.9945219,0,-.0348995,0,-.9993908,.0782987,-.6573692,-.7475592,-.0537623,.3846281,.0111704,-.0260382,-.9226367,-2e-7,.3143817,2e-7,-.9492967,-1e-7,0,-.7071068,-.7071068,-.1810116,-.0874972,-.0672793,-.9772679,0,-.1045284,0,-.9945219,0,-.1736482,0,-.9848077,0,-.0348995,0,-.9993908,-.1045125,.0018243,-.0173568,-.9943704,0,-.1564345,0,-.9876884,0,-.2164396,0,-.976296,0,-.0436194,0,-.9990482,.3371452,.0446988,.5606716,-.7549718,0,-.1736482,0,-.9848077,0,-.0871557,0,-.9961947,-.0090226,.0435558,.006594,-.9989885,0,-.2079117,0,-.9781476,0,-.1736482,0,-.9848077,0,-.0348995,0,-.9993908,.0522085,.0036508,.069661,-.9961969,0,-.1736482,0,-.9848077,0,-.1045285,0,-.9945219,0,-.0348995,0,-.9993908,-.0740464,.9969521,-.0227449,-.0092877,1e-7,.0090163,2e-7,-.9999593,.0246332,0,2e-7,-.9996966,0,.7071068,-2e-7,-.7071068,.0067881,.11322,-.03924,-.9927716,1e-7,.0871557,2e-7,-.9961947,.0067881,.11322,-.03924,-.9927716,1e-7,.0871557,2e-7,-.9961947,.0067881,.11322,-.03924,-.9927716,1e-7,.0871557,2e-7,-.9961947,.0372693,.0284231,-.0022392,-.9988984,0,0,0,-1,.0319268,.0741281,-.0043309,-.9967281,-1e-7,.1045285,-1e-7,-.9945219,0,0,0,-1,-.0227449,-.0092877,.0740464,-.9969521,1e-7,.0090163,2e-7,-.9999593,.0246332,0,3e-7,-.9996966,0,.7071068,-2e-7,-.7071068,.0319268,.0741281,-.0043309,-.9967281,-1e-7,.1045285,-1e-7,-.9945219,.0372693,.0284231,-.0022392,-.9988984,0,0,0,-1,.0067881,.11322,-.03924,-.9927716,1e-7,.0871557,2e-7,-.9961947,.0067881,.11322,-.03924,-.9927716,1e-7,.0871557,2e-7,-.9961947,.0067881,.11322,-.03924,-.9927716,1e-7,.0871557,2e-7,-.9961947,0,0,0,-1],Si=[-1,0,1,2,3,4,5,6,7,8,6,10,11,12,13,14,15,16,13,18,19,20,13,22,23,13,25,26,27,13,29,30,31,6,33,34,35,36,37,38,39,36,41,42,43,36,45,46,36,48,49,50,36,52,53,54,1,56,57,58,59,60,59,62,59,64,59,66,59,68,57,1,71,72,73,74,75,74,77,74,79,74,81,74,83,72],Di=["root","pelvis","spine_01","spine_02","spine_03","spine_04","spine_05","neck_01","neck_02","head","clavicle_l","upperarm_l","lowerarm_l","hand_l","pinky_metacarpal_l","pinky_01_l","pinky_02_l","pinky_03_l","ring_metacarpal_l","ring_01_l","ring_02_l","ring_03_l","thumb_01_l","thumb_02_l","thumb_03_l","middle_metacarpal_l","middle_01_l","middle_02_l","middle_03_l","index_metacarpal_l","index_01_l","index_02_l","index_03_l","clavicle_r","upperarm_r","lowerarm_r","hand_r","pinky_metacarpal_r","pinky_01_r","pinky_02_r","pinky_03_r","ring_metacarpal_r","ring_01_r","ring_02_r","ring_03_r","thumb_01_r","thumb_02_r","thumb_03_r","middle_metacarpal_r","middle_01_r","middle_02_r","middle_03_r","index_metacarpal_r","index_01_r","index_02_r","index_03_r","thigh_r","calf_r","foot_r","ball_r","littletoe_01_r","littletoe_02_r","ringtoe_01_r","ringtoe_02_r","middletoe_01_r","middletoe_02_r","bigtoe_01_r","bigtoe_02_r","indextoe_01_r","indextoe_02_r","calf_twist_01_r","thigh_l","calf_l","foot_l","ball_l","indextoe_01_l","indextoe_02_l","bigtoe_01_l","bigtoe_02_l","littletoe_01_l","littletoe_02_l","middletoe_01_l","middletoe_02_l","ringtoe_01_l","ringtoe_02_l","calf_twist_01_l","FACIAL_C_Neck2Root","FACIAL_L_12IPV_NeckA1","FACIAL_R_12IPV_NeckA1","FACIAL_L_12IPV_NeckA3","FACIAL_R_12IPV_NeckA3","FACIAL_C_FacialRoot","FACIAL_C_Hair3","FACIAL_C_Hair4","FACIAL_C_Hair5","FACIAL_C_Hair6","FACIAL_L_12IPV_Temple1","FACIAL_R_12IPV_Temple1","FACIAL_L_12IPV_Temple2","FACIAL_R_12IPV_Temple2","FACIAL_L_HairC1","FACIAL_R_HairC1","FACIAL_L_Sideburn2","FACIAL_R_Sideburn2","FACIAL_L_Sideburn3","FACIAL_R_Sideburn3","FACIAL_L_Sideburn4","FACIAL_R_Sideburn4","FACIAL_L_Sideburn5","FACIAL_R_Sideburn5","FACIAL_L_Sideburn6","FACIAL_R_Sideburn6","FACIAL_C_Forehead","FACIAL_L_12IPV_Forehead4","FACIAL_R_12IPV_Forehead4","FACIAL_L_12IPV_Forehead5","FACIAL_R_12IPV_Forehead5","FACIAL_L_12IPV_Forehead6","FACIAL_R_12IPV_Forehead6","FACIAL_L_ForeheadIn","FACIAL_L_12IPV_ForeheadIn2","FACIAL_L_12IPV_ForeheadIn3","FACIAL_L_12IPV_ForeheadIn4","FACIAL_L_12IPV_ForeheadIn6","FACIAL_L_12IPV_ForeheadIn7","FACIAL_L_12IPV_ForeheadIn8","FACIAL_L_12IPV_ForeheadIn10","FACIAL_L_12IPV_ForeheadIn11","FACIAL_L_12IPV_ForeheadIn12","FACIAL_L_12IPV_ForeheadIn13","FACIAL_L_12IPV_ForeheadIn14","FACIAL_R_ForeheadIn","FACIAL_R_12IPV_ForeheadIn2","FACIAL_R_12IPV_ForeheadIn3","FACIAL_R_12IPV_ForeheadIn4","FACIAL_R_12IPV_ForeheadIn6","FACIAL_R_12IPV_ForeheadIn7","FACIAL_R_12IPV_ForeheadIn8","FACIAL_R_12IPV_ForeheadIn10","FACIAL_R_12IPV_ForeheadIn12","FACIAL_R_12IPV_ForeheadIn11","FACIAL_R_12IPV_ForeheadIn13","FACIAL_R_12IPV_ForeheadIn14","FACIAL_L_ForeheadMid","FACIAL_L_12IPV_ForeheadMid16","FACIAL_L_12IPV_ForeheadMid17","FACIAL_L_12IPV_ForeheadMid18","FACIAL_L_12IPV_ForeheadMid20","FACIAL_L_12IPV_ForeheadMid21","FACIAL_L_12IPV_ForeheadMid22","FACIAL_R_ForeheadMid","FACIAL_R_12IPV_ForeheadMid16","FACIAL_R_12IPV_ForeheadMid17","FACIAL_R_12IPV_ForeheadMid18","FACIAL_R_12IPV_ForeheadMid20","FACIAL_R_12IPV_ForeheadMid21","FACIAL_R_12IPV_ForeheadMid22","FACIAL_L_ForeheadOut","FACIAL_L_12IPV_ForeheadOut23","FACIAL_L_12IPV_ForeheadOut24","FACIAL_L_12IPV_ForeheadOut25","FACIAL_L_12IPV_ForeheadOut28","FACIAL_L_12IPV_ForeheadOut29","FACIAL_L_12IPV_ForeheadOut31","FACIAL_R_ForeheadOut","FACIAL_R_12IPV_ForeheadOut23","FACIAL_R_12IPV_ForeheadOut24","FACIAL_R_12IPV_ForeheadOut25","FACIAL_R_12IPV_ForeheadOut28","FACIAL_R_12IPV_ForeheadOut29","FACIAL_R_12IPV_ForeheadOut31","FACIAL_L_12IPV_EyesackU0","FACIAL_R_12IPV_EyesackU0","FACIAL_L_EyesackUpper","FACIAL_L_EyesackUpper1","FACIAL_L_EyesackUpper2","FACIAL_L_EyesackUpper3","FACIAL_R_EyesackUpper","FACIAL_R_EyesackUpper1","FACIAL_R_EyesackUpper2","FACIAL_R_EyesackUpper3","FACIAL_L_EyelidUpperFurrow","FACIAL_L_EyelidUpperFurrow2","FACIAL_L_EyelidUpperFurrow3","FACIAL_R_EyelidUpperFurrow","FACIAL_R_EyelidUpperFurrow3","FACIAL_L_EyelidUpperB","FACIAL_L_EyelidUpperB2","FACIAL_L_EyelidUpperB3","FACIAL_R_EyelidUpperB","FACIAL_R_EyelidUpperB3","FACIAL_L_EyelidUpperA","FACIAL_L_EyelidUpperA1","FACIAL_L_EyelidUpperA2","FACIAL_L_EyelidUpperA3","FACIAL_R_EyelidUpperA","FACIAL_R_EyelidUpperA1","FACIAL_R_EyelidUpperA2","FACIAL_R_EyelidUpperA3","FACIAL_L_Eye","FACIAL_L_EyeParallel","FACIAL_L_Pupil","FACIAL_R_Eye","FACIAL_R_EyeParallel","FACIAL_R_Pupil","FACIAL_L_EyelidLowerA","FACIAL_L_EyelidLowerA1","FACIAL_L_EyelidLowerA2","FACIAL_L_EyelidLowerA3","FACIAL_R_EyelidLowerA","FACIAL_R_EyelidLowerA1","FACIAL_R_EyelidLowerA2","FACIAL_R_EyelidLowerA3","FACIAL_L_EyelidLowerB","FACIAL_L_EyelidLowerB3","FACIAL_R_EyelidLowerB","FACIAL_R_EyelidLowerB1","FACIAL_R_EyelidLowerB2","FACIAL_L_EyeCornerInner","FACIAL_L_EyeCornerInner1","FACIAL_L_EyeCornerInner2","FACIAL_R_EyeCornerInner","FACIAL_R_EyeCornerInner1","FACIAL_R_EyeCornerInner2","FACIAL_L_EyeCornerOuter","FACIAL_L_EyeCornerOuter1","FACIAL_L_EyeCornerOuter2","FACIAL_R_EyeCornerOuter","FACIAL_R_EyeCornerOuter1","FACIAL_R_EyeCornerOuter2","FACIAL_L_12IPV_EyeCornerO1","FACIAL_R_12IPV_EyeCornerO1","FACIAL_L_EyesackLower","FACIAL_L_12IPV_EyesackL5","FACIAL_L_12IPV_CheekOuter3","FACIAL_R_12IPV_CheekOuter3","FACIAL_L_12IPV_NoseBridge1","FACIAL_R_12IPV_NoseBridge1","FACIAL_C_12IPV_NoseBridge2","FACIAL_L_12IPV_NoseBridge2","FACIAL_R_12IPV_NoseBridge2","FACIAL_L_NoseBridge","FACIAL_R_NoseBridge","FACIAL_C_12IPV_NoseUpper1","FACIAL_C_12IPV_NoseUpper2","FACIAL_L_12IPV_NoseUpper1","FACIAL_R_12IPV_NoseUpper1","FACIAL_L_12IPV_NoseUpper2","FACIAL_R_12IPV_NoseUpper2","FACIAL_L_12IPV_NoseUpper3","FACIAL_R_12IPV_NoseUpper3","FACIAL_L_12IPV_NoseUpper4","FACIAL_R_12IPV_NoseUpper4","FACIAL_L_NasolabialBulge","FACIAL_L_12IPV_NasolabialB6","FACIAL_L_12IPV_NasolabialB9","FACIAL_L_12IPV_NasolabialB10","FACIAL_R_NasolabialBulge","FACIAL_R_12IPV_NasolabialB6","FACIAL_R_12IPV_NasolabialB9","FACIAL_R_12IPV_NasolabialB10","FACIAL_L_12IPV_NasolabialF3","FACIAL_R_12IPV_NasolabialF3","FACIAL_L_CheekLower","FACIAL_L_12IPV_CheekL2","FACIAL_L_12IPV_CheekL4","FACIAL_R_CheekLower","FACIAL_R_12IPV_CheekL2","FACIAL_R_12IPV_CheekL4","FACIAL_L_Ear","FACIAL_L_Ear1","FACIAL_L_Ear4","FACIAL_R_Ear","FACIAL_R_Ear1","FACIAL_R_Ear4","FACIAL_C_Nose","FACIAL_C_NoseLower","FACIAL_L_NostrilThickness3","FACIAL_R_NostrilThickness3","FACIAL_C_12IPV_NoseL1","FACIAL_C_12IPV_NoseL2","FACIAL_C_NoseTip","FACIAL_C_12IPV_NoseTip1","FACIAL_C_12IPV_NoseTip2","FACIAL_C_12IPV_NoseTip3","FACIAL_R_12IPV_NoseTip1","FACIAL_R_12IPV_NoseTip2","FACIAL_R_12IPV_NoseTip3","FACIAL_L_Nostril","FACIAL_L_12IPV_Nostril8","FACIAL_L_12IPV_Nostril10","FACIAL_L_12IPV_Nostril11","FACIAL_L_12IPV_Nostril12","FACIAL_L_12IPV_Nostril14","FACIAL_R_Nostril","FACIAL_R_12IPV_Nostril4","FACIAL_R_12IPV_Nostril6","FACIAL_R_12IPV_Nostril8","FACIAL_R_12IPV_Nostril10","FACIAL_R_12IPV_Nostril11","FACIAL_R_12IPV_Nostril12","FACIAL_R_12IPV_Nostril14","FACIAL_C_12IPV_LipUpperSkin1","FACIAL_C_12IPV_LipUpperSkin2","FACIAL_L_12IPV_LipUpperSkin","FACIAL_R_12IPV_LipUpperSkin","FACIAL_C_MouthUpper","FACIAL_C_LipUpper","FACIAL_L_12IPV_LipUpper1","FACIAL_R_12IPV_LipUpper1","FACIAL_L_12IPV_LipUpper2","FACIAL_R_12IPV_LipUpper2","FACIAL_L_12IPV_LipUpper3","FACIAL_R_12IPV_LipUpper3","FACIAL_L_12IPV_LipUpper4","FACIAL_R_12IPV_LipUpper4","FACIAL_L_LipUpper","FACIAL_L_12IPV_LipUpper6","FACIAL_L_12IPV_LipUpper7","FACIAL_L_12IPV_LipUpper8","FACIAL_L_12IPV_LipUpper9","FACIAL_L_12IPV_LipUpper10","FACIAL_L_12IPV_LipUpper11","FACIAL_L_12IPV_LipUpper12","FACIAL_L_12IPV_LipUpper14","FACIAL_R_LipUpper","FACIAL_R_12IPV_LipUpper6","FACIAL_R_12IPV_LipUpper7","FACIAL_R_12IPV_LipUpper8","FACIAL_R_12IPV_LipUpper9","FACIAL_R_12IPV_LipUpper10","FACIAL_R_12IPV_LipUpper11","FACIAL_R_12IPV_LipUpper12","FACIAL_R_12IPV_LipUpper14","FACIAL_L_LipUpperOuter","FACIAL_L_12IPV_LipUpper16","FACIAL_L_12IPV_LipUpper17","FACIAL_L_12IPV_LipUpper18","FACIAL_L_12IPV_LipUpper19","FACIAL_L_12IPV_LipUpper20","FACIAL_R_LipUpperOuter","FACIAL_R_12IPV_LipUpper16","FACIAL_R_12IPV_LipUpper17","FACIAL_R_12IPV_LipUpper18","FACIAL_R_12IPV_LipUpper19","FACIAL_R_12IPV_LipUpper20","FACIAL_L_LipCorner","FACIAL_L_LipCorner1","FACIAL_L_LipCorner2","FACIAL_L_LipCorner3","FACIAL_L_12IPV_LipCorner1","FACIAL_L_12IPV_LipCorner2","FACIAL_L_12IPV_LipCorner3","FACIAL_R_LipCorner","FACIAL_R_LipCorner1","FACIAL_R_LipCorner2","FACIAL_R_LipCorner3","FACIAL_R_12IPV_LipCorner1","FACIAL_R_12IPV_LipCorner2","FACIAL_R_12IPV_LipCorner3","FACIAL_L_JawBulge","FACIAL_R_JawBulge","FACIAL_L_JawRecess","FACIAL_R_JawRecess","FACIAL_L_Masseter","FACIAL_R_Masseter","FACIAL_L_12IPV_UnderChin3","FACIAL_R_12IPV_UnderChin3","FACIAL_L_12IPV_UnderChin5","FACIAL_R_12IPV_UnderChin5","FACIAL_L_12IPV_UnderChin6","FACIAL_R_12IPV_UnderChin6","FACIAL_C_LowerLipRotation","FACIAL_C_12IPV_LipLowerSkin1","FACIAL_L_12IPV_LipLowerSkin","FACIAL_R_12IPV_LipLowerSkin","FACIAL_L_12IPV_LipLowerOuterSkin1","FACIAL_R_12IPV_LipLowerOuterSkin1","FACIAL_C_MouthLower","FACIAL_C_LipLower","FACIAL_L_12IPV_LipLower1","FACIAL_R_12IPV_LipLower1","FACIAL_L_12IPV_LipLower2","FACIAL_R_12IPV_LipLower2","FACIAL_L_12IPV_LipLower3","FACIAL_R_12IPV_LipLower3","FACIAL_L_12IPV_LipLower4","FACIAL_R_12IPV_LipLower4","FACIAL_L_LipLower","FACIAL_L_12IPV_LipLower6","FACIAL_L_12IPV_LipLower7","FACIAL_L_12IPV_LipLower8","FACIAL_L_12IPV_LipLower9","FACIAL_L_12IPV_LipLower10","FACIAL_L_12IPV_LipLower11","FACIAL_L_12IPV_LipLower12","FACIAL_R_LipLower","FACIAL_R_12IPV_LipLower6","FACIAL_R_12IPV_LipLower7","FACIAL_R_12IPV_LipLower8","FACIAL_R_12IPV_LipLower9","FACIAL_R_12IPV_LipLower10","FACIAL_R_12IPV_LipLower11","FACIAL_R_12IPV_LipLower12","FACIAL_L_LipLowerOuter","FACIAL_L_12IPV_LipLower16","FACIAL_L_12IPV_LipLower17","FACIAL_L_12IPV_LipLower18","FACIAL_L_12IPV_LipLower19","FACIAL_L_12IPV_LipLower20","FACIAL_R_LipLowerOuter","FACIAL_R_12IPV_LipLower16","FACIAL_R_12IPV_LipLower17","FACIAL_R_12IPV_LipLower18","FACIAL_R_12IPV_LipLower19","FACIAL_R_12IPV_LipLower20","FACIAL_C_Jaw","FACIAL_L_12IPV_Jawline1","FACIAL_R_12IPV_Jawline1","FACIAL_L_12IPV_Jawline2","FACIAL_R_12IPV_Jawline2","FACIAL_L_Jawline","FACIAL_L_12IPV_Jawline3","FACIAL_L_12IPV_Jawline4","FACIAL_L_12IPV_Jawline5","FACIAL_L_12IPV_Jawline6","FACIAL_R_Jawline","FACIAL_R_12IPV_Jawline3","FACIAL_R_12IPV_Jawline4","FACIAL_R_12IPV_Jawline5","FACIAL_R_12IPV_Jawline6","FACIAL_L_12IPV_ChinS4","FACIAL_R_12IPV_ChinS4","FACIAL_L_12IPV_Chin2","FACIAL_R_12IPV_Chin2","FACIAL_C_12IPV_Chin3","FACIAL_C_12IPV_Chin4","FACIAL_L_12IPV_Chin8","FACIAL_L_12IPV_Chin13","FACIAL_L_12IPV_Chin14","FACIAL_R_12IPV_Chin14"],vi=[-1,0,1,2,3,4,5,6,7,8,6,10,11,12,13,14,15,16,13,18,19,20,13,22,23,13,25,26,27,13,29,30,31,6,33,34,35,36,37,38,39,36,41,42,43,36,45,46,36,48,49,50,36,52,53,54,1,56,57,58,59,60,59,62,59,64,59,66,59,68,57,1,71,72,73,74,75,74,77,74,79,74,81,74,83,72,8,86,86,86,86,9,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,112,112,112,112,112,112,91,119,119,119,119,119,119,119,119,119,119,119,91,131,131,131,131,131,131,131,131,131,131,131,91,143,143,143,143,143,143,91,150,150,150,150,150,150,91,157,157,157,157,157,157,91,164,164,164,164,164,164,91,91,91,173,173,173,91,177,177,177,91,181,181,91,184,91,186,186,91,189,91,191,191,191,91,195,195,195,91,199,200,91,202,203,91,205,205,205,91,209,209,209,91,213,91,215,215,91,218,218,91,221,221,91,224,224,91,227,227,91,91,91,232,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,253,253,253,91,257,257,257,91,91,91,263,263,91,266,266,91,269,269,91,272,272,91,275,276,276,276,276,275,281,281,281,281,281,281,275,288,288,288,288,288,275,294,294,294,294,294,294,294,91,91,91,91,91,306,307,307,307,307,307,307,307,307,306,316,316,316,316,316,316,316,316,306,325,325,325,325,325,325,325,325,306,334,334,334,334,334,306,340,340,340,340,340,306,346,346,346,346,346,346,306,353,353,353,353,353,353,91,91,91,91,91,91,91,91,91,91,91,91,91,372,372,372,372,372,372,378,379,379,379,379,379,379,379,379,378,388,388,388,388,388,388,388,378,396,396,396,396,396,396,396,378,404,404,404,404,404,378,410,410,410,410,410,91,416,416,416,416,416,421,421,421,421,416,426,426,426,426,416,416,416,416,416,416,416,416,416,416],ki=[0,-0,-0,.023344,.900783,-0,-.001521,-0,-.035612,-0,0,-.063712,-0,0,-.071221,-0,1e-6,-.090417,-0,1e-6,-.128666,.005727,1e-6,-.159028,0,1e-6,-.052265,-36e-6,1e-6,-.054106,-.00933,-.011471,-.101591,1e-6,-.001226,-.165581,0,0,-.271682,0,-0,-.259356,-.004406,.018566,-.027672,0,-0,-.04638,0,0,-.029209,0,0,-.018704,-.002529,.006926,-.0287,-0,-0,-.049387,-0,-0,-.040755,-0,-0,-.031308,-.013588,-.022955,-.016628,0,-0,-.04589,0,0,-.028047,-.001355,-.003889,-.02898,0,-0,-.054799,-0,-0,-.046589,-0,-0,-.029402,-.002123,-.020517,-.031495,-0,-0,-.051824,0,-0,-.042275,0,0,-.022987,-.00933,.011473,-.101591,1e-6,.001221,.165582,0,0,.271682,0,-0,.259356,.004406,-.018566,.027672,0,-0,.04638,-0,0,.029209,-0,0,.018704,.002529,-.006926,.0287,-0,-0,.049387,0,-0,.040755,-0,0,.031308,.013588,.022955,.016628,-0,-0,.04589,0,0,.028047,.001355,.003889,.02898,0,-0,.054799,0,0,.046589,-0,0,.029402,.002123,.020517,.031495,-0,0,.051824,-0,-0,.042275,-0,-0,.022988,.001891,.094935,.010807,1e-6,-0,-.418322,-0,-0,-.392278,-.139017,.002936,-.065634,.005855,.047366,-.011031,.001673,697e-6,.015431,.011036,.032097,-.001184,361e-6,.003912,.020927,.013339,.016396,.005849,-.001023,.003598,.02426,.011818,-.028687,.009881,-.001502,777e-6,.031313,.015065,-.00248,.007485,-.001603,.002936,.03033,-2e-6,-1e-6,-.261888,.001891,-.094935,.010807,-1e-6,-0,.418322,0,0,.392278,.139017,-.002936,.065634,-.015065,.00248,-.007485,.001603,-.002936,-.03033,-.011818,.028687,-.009881,.001502,-776e-6,-.031313,-.005855,-.047366,.011031,-.001673,-697e-6,-.015431,-.013339,-.016396,-.005849,.001023,-.003598,-.02426,-.011036,-.032097,.001184,-361e-6,-.003912,-.020927,2e-6,1e-6,.261888,.026874,4e-6,-.002962,.006313,.03091,-.025065,.006275,.030867,.025048,-.011196,.011833,-.048657,-.011328,.011698,.048782,-.009899,5e-6,-.040012,-.11661,.077932,-59e-6,-.128862,.048206,-13e-6,-.133137,.008422,21e-6,-.121244,-.034068,46e-6,-.044079,.083333,-.061966,-.044096,.083246,.061837,-.036218,.074804,-.066002,-.036234,.074759,.065998,-.051973,.051465,-.073208,-.051888,.051468,.073015,-.027945,.046024,-.073847,-.027937,.046006,.073747,-.027355,.025024,-.076776,-.027373,.025055,.076999,-.004736,.066318,-.071697,-.00474,.066323,.071715,-.005354,.049423,-.074053,-.005383,.049457,.073901,-.005335,.032464,-.073732,-.005363,.032514,.073961,-.043356,.110559,237e-6,.004231,.010024,-.006377,.004226,.010127,.005855,.00675,.009423,-.006186,.00674,.009518,.005672,.013076,.007203,-.005153,.013151,.007556,.004735,-.044192,.108085,-.017441,-.003452,.011842,.010352,-266e-6,.01179,.010523,.008139,.009798,.010885,-.003851,.012237,.003465,-716e-6,.012148,.003706,.008262,.010239,.003889,-.004805,.011573,-.005662,-.001797,.011831,-.005203,.006271,.010252,-.004264,.014911,.004617,.00637,.009354,.007038,-.003791,-.04397,.108374,.016549,-.003713,.011772,-.009511,-514e-6,.011736,-.009667,.007859,.009628,-.010002,-.004119,.012189,-.002592,-955e-6,.012082,-.002827,.007851,.009851,-.003011,-.005058,.011504,.006596,.005891,.010106,.005131,-.002037,.011622,.006109,.014837,.004686,-.005407,.009275,.007089,.004746,-.048965,.10091,-.032655,251e-6,.012773,.004337,.00309,.013531,.004935,.010382,.012194,.005993,96e-6,.010819,-.005956,.002537,.011894,-.005308,.009384,.012217,-.003328,-.048747,.100187,.031474,171e-6,.013687,-.003488,.002985,.014316,-.004104,.010257,.013387,-.005181,104e-6,.011533,.006665,.00246,.012713,.006078,.009311,.01343,.00419,-.044651,.092698,-.046338,-.005197,.009368,.00158,.002266,.01155,.003174,.004541,.012468,.003594,.004306,.006555,-.00914,.007815,.009752,-.004401,.010869,.002709,-.015058,-.04404,.092692,.045906,-.005769,.009416,-.001444,.001665,.011667,-.003034,.003866,.012614,-.003427,.003689,.006894,.009322,.007206,.010271,.004653,.010248,.002999,.015227,-.027106,.110394,-.016668,-.027101,.110471,.016676,-.034431,.110252,-.034322,.003868,686e-6,.010512,958e-6,.001653,-62e-6,.002419,-.001088,-.012043,-.034395,.110258,.03446,.003862,688e-6,-.010731,904e-6,.001637,-88e-6,.002359,-.001079,.011928,-.031782,.108184,-.033039,439e-6,866e-6,219e-6,.001221,-103e-6,-.011184,-.031718,.108238,.033032,.001105,-86e-6,.011223,-.022654,.095825,-.031836,4e-4,.016401,-.001299,704e-6,.012668,-.010221,-.022663,.095706,.031881,747e-6,.012799,.010162,-.022663,.095822,-.03184,.001837,.01395,.006634,557e-6,.01641,-.001307,.001427,.012514,-.0097,-.022665,.095704,.031888,.001905,.013957,-.006721,589e-6,.016487,.001178,.001377,.012651,.009637,-.022666,.095837,-.031841,2e-6,7e-6,-3e-6,437e-6,.012141,-701e-6,-.022654,.095745,.031905,-0,0,-0,388e-6,.012188,712e-6,-.022656,.095826,-.031846,-.001933,.013811,.006137,-.001165,.015033,-.001647,-441e-6,.011692,-.009329,-.022665,.095704,.031888,-.001924,.013866,-.006169,-.001165,.015101,.001601,-481e-6,.011823,.009337,-.022666,.095821,-.031839,.002146,.013233,-.010271,-.022671,.095709,.031884,-661e-6,.015993,-.005946,59e-5,.016511,.002057,-.018861,.106402,-.018159,-.002238,348e-6,-.001337,.001457,548e-6,-.00246,-.018642,.10623,.018044,-.002387,508e-6,.001454,.001282,665e-6,.002586,-.020522,.100477,-.045451,-.001583,.00183,.001373,.001202,479e-6,282e-6,-.020661,.099826,.045568,-.001567,.002217,-.001886,.001299,947e-6,-752e-6,-.020172,.098095,-.048848,-.020234,.098049,.048835,-.008836,.1028,-.035528,-.001019,.00386,-.002949,-.02807,.08347,-.062583,-.028069,.083439,.062601,-.032975,.119318,-.005309,-.032931,.119656,.005339,-.024691,.120183,-49e-6,-.024071,.119121,-.004049,-.024084,.119358,.004075,-.020829,.109562,-.012152,-.020936,.109426,.012017,-.019389,.122187,-49e-6,-.007826,.129767,-82e-6,-.018297,.120549,-.00516,-.018311,.120608,.00511,-.007032,.128249,-.005421,-.007051,.128274,.005305,-.015172,.116382,-.009218,-.015198,.116425,.009224,-.004615,.12374,-.009834,-.004617,.123792,.009808,.049129,.096631,-.03713,-.001243,.0073,.014302,.003829,.005895,.013934,.018528,.00491,.00115,.050119,.097303,.036212,-.002115,.007359,-.01315,.002932,.005914,-.012756,.017608,.004995,-8e-6,.026135,.114987,-.02213,.026266,.115159,.021986,.043391,.082007,-.048853,.015543,.005661,.006178,.013463,.003991,-.009665,.04574,.083647,.047902,.013434,.005413,-.004009,.011294,.003505,.011859,.004762,.009472,-.071052,0,-0,-0,.021144,.011921,-.007121,.004829,.009528,.071128,0,-0,-0,.021066,.011921,.007004,-.005446,.120997,-19e-6,.031558,-.002201,108e-6,-.003152,-407e-6,-.005733,-.003213,-45e-5,.005652,-.001177,.006603,-23e-6,.004874,-493e-6,-61e-6,.022215,.007442,502e-6,-.010205,.004842,-501e-6,-.002376,.008496,-482e-6,.005429,.007026,-443e-6,-.010055,288e-6,.007985,-.002922,.002642,.009997,.00312,.001051,.010678,.022921,-.002186,-.014186,-107e-6,-.010578,-.002407,.003769,219e-6,-.003097,.005797,-.008801,77e-6,.008395,-.002484,.004991,.013831,-.005613,.001558,.022617,-.001818,.013771,-.009532,.007031,-416e-6,-.002937,.009141,.001418,283e-6,-.010902,.002779,.003949,-336e-6,.003508,.006058,-.009189,396e-6,.008584,-.003016,-.004644,.014072,-.006087,-.001283,.032767,.126467,36e-6,.03778,.127802,17e-6,.034508,.123885,-.013513,.034433,.123875,.013516,.048252,.093357,94e-6,-.005301,.030169,-94e-6,-.006138,.005803,-.004074,-.006183,.005836,.004095,.002511,.005655,-.004223,.002502,.005664,.004211,.006877,84e-6,-.003463,.00685,71e-6,.003445,.003084,-.005263,-.002925,.003081,-.005258,.002973,-.004195,.026608,-.012188,-.006598,.006588,.005386,.001817,.006497,.004839,-.005083,.005141,-.004678,.003424,.004013,-.003428,.00621,.00123,.0045,.00592,-336e-6,-.002252,.002751,-.003917,.004196,.00228,-.004713,-.001789,-.004668,.027018,.011648,-.006267,.006279,-.004874,.002183,.006117,-.004352,-.004711,.004705,.005106,.003772,.003623,.003893,.006519,851e-6,-.00401,.00623,-693e-6,.002734,.003119,-.004207,-.003643,.002614,-.005007,.00231,-.002163,.021478,-.019756,-.003344,.00596,-.002601,.003905,.003813,.001287,.003988,731e-6,-.003433,.005359,-105e-6,.002383,.004522,-.00226,-.001601,-.002783,.021683,.019446,-.002681,.005692,.002794,.004446,.003559,-962e-6,.004601,476e-6,.003796,.005858,-341e-6,-.002057,.00509,-.002497,.001951,.002965,.014554,-.025806,-47e-6,.005676,-.003435,-.003501,-.007577,-567e-6,.004246,-.007402,.001802,253e-6,.002557,.002701,-.001198,.006051,126e-6,.003126,.004012,4e-6,.003103,.014129,.02575,-138e-6,.005992,.003102,-.003694,-.007314,207e-6,.004052,-.007102,-.002161,274e-6,.002886,-.002942,-.001253,.006279,-463e-6,.003095,.004334,-224e-6,.037145,.045724,-.068915,.037196,.045755,.068858,.00945,.036355,-.073302,.009485,.036511,.073432,.015698,.057461,-.07068,.015661,.057466,.070567,.093906,.076728,-.024185,.094238,.076679,.024255,.077759,.067926,-.048138,.077681,.06788,.048149,.081184,.047982,-.04592,.081197,.047893,.046068,.022711,.035839,937e-6,-.022568,.092507,-899e-6,-.018216,.091304,-.015145,-.018222,.091469,.013357,-.021996,.086003,-.022726,-.021872,.086086,.020952,-.016141,.061257,-92e-5,.007685,.027902,-215e-6,.00724,.001064,-.004565,.007285,.001074,.005022,-.001345,.0064,-.004536,-.001377,.00644,.005003,-.007508,.001178,-.00344,-.007551,.001175,.003879,-.004332,-.005021,-.002724,-.004355,-.005042,.003195,.006884,.025082,-.009973,.007759,.003419,4e-5,-.001495,.007266,.001074,.007003,.003011,-.006975,-.001828,.004741,-.005203,-.007355,.00228,.001951,-.006548,798e-6,-.003499,-.003938,-.003661,.002166,.006949,.025205,.01041,.007776,.003108,-422e-6,-.001621,.007127,-.001481,.007071,.002688,.006611,-.001908,.004557,.00473,-.007454,.002042,-.002372,-.006633,548e-6,.003046,-.004044,-.003945,-.002523,.005915,.021084,-.017959,.004628,.003873,-.003218,-.002172,.004193,784e-6,-.002806,.00152,-.004243,-.005573,.001325,.001984,-.004517,-888e-6,-.002442,.006402,.020331,.018205,.00412,.004362,.002758,-.002794,.00468,-.001365,-.003378,.00198,.003679,-.00619,.001779,-.00256,-.005099,-441e-6,.001884,.022711,.035839,937e-6,.009503,.099572,-.015498,.009578,.0997,.013607,.023235,.08711,-.0176,.023355,.087235,.015672,.008208,.050305,-.053218,-.001654,.007963,-.005192,.011921,.012655,-82e-6,-.00597,-.020915,-.007104,.012227,-.018867,-.001766,.00867,.050943,.049277,-.002363,.006762,.006923,.011216,.011498,.001889,-.006728,-.022019,.008591,.011292,-.020094,.003079,.005563,.091083,-.029372,.005616,.091094,.027552,-.008111,.102913,-.007436,-.008178,.103057,.005551,-.002789,.104789,-974e-6,.00472,.104023,-986e-6,-.004408,.103616,-.010336,-.002448,.103151,-.013064,.00528,.101868,-.014763,.005266,.101768,.012807],Ni=[0,-0,-0,-1,-.706993,.012667,.012667,-.706993,2e-6,.095412,0,-.995438,0,-.063843,0,-.99796,3e-6,-.082862,-0,-.996561,0,-.074395,0,-.997229,-0,.013375,0,-.999911,-0,.200689,-0,-.979655,-0,-.007894,-0,-.999969,0,-.099543,-0,-.995033,.747542,.053759,.078301,-.657388,.384642,.011175,-.026035,-.922631,0,.314382,-0,-.949297,0,-0,-.707107,-.707107,-.181012,-.087497,-.067279,-.977268,-0,-.104528,0,-.994522,0,-.173648,-0,-.984808,-0,-.034899,0,-.999391,-.104513,.001824,-.017357,-.99437,0,-.156434,-0,-.987688,-0,-.21644,-0,-.976296,-0,-.043619,-0,-.999048,.337145,.044699,.560672,-.754972,0,-.173648,-0,-.984808,0,-.087156,0,-.996195,-.009023,.043556,.006594,-.998989,-0,-.207912,0,-.978148,-0,-.173648,0,-.984808,-0,-.034899,-0,-.999391,.052208,.003651,.069661,-.996197,0,-.173648,0,-.984808,0,-.104528,-0,-.994522,-0,-.034899,-0,-.999391,.078299,-.657369,-.747559,-.053762,.384628,.01117,-.026038,-.922637,-0,.314382,0,-.949297,-0,0,-.707107,-.707107,-.181012,-.087497,-.067279,-.977268,0,-.104528,0,-.994522,-0,-.173648,0,-.984808,0,-.034899,0,-.999391,-.104513,.001824,-.017357,-.99437,0,-.156434,-0,-.987688,-0,-.21644,-0,-.976296,0,-.043619,-0,-.999048,.337145,.044699,.560672,-.754972,-0,-.173648,0,-.984808,0,-.087156,-0,-.996195,-.009023,.043556,.006594,-.998989,0,-.207912,-0,-.978148,0,-.173648,-0,-.984808,0,-.034899,0,-.999391,.052209,.003651,.069661,-.996197,0,-.173648,0,-.984808,-0,-.104528,0,-.994522,0,-.034899,-0,-.999391,-.074046,.996952,-.022745,-.009288,0,.009016,0,-.999959,.024633,0,0,-.999697,0,.707107,-0,-.707107,.006788,.11322,-.03924,-.992772,0,.087156,0,-.996195,.006788,.11322,-.03924,-.992772,0,.087156,0,-.996195,.006788,.11322,-.03924,-.992772,0,.087156,0,-.996195,.037269,.028423,-.002239,-.998898,0,-0,-0,-1,.031927,.074128,-.004331,-.996728,-0,.104528,-0,-.994522,0,-0,-0,-1,-.022745,-.009288,.074046,-.996952,0,.009016,0,-.999959,.024633,0,0,-.999697,0,.707107,-0,-.707107,.031927,.074128,-.004331,-.996728,-0,.104528,-0,-.994522,.037269,.028423,-.002239,-.998898,-0,-0,0,-1,.006788,.11322,-.03924,-.992772,0,.087156,0,-.996195,.006788,.11322,-.03924,-.992772,0,.087156,0,-.996195,.006788,.11322,-.03924,-.992772,0,.087156,0,-.996195,0,-0,0,-1,.547286,.447743,.447747,-.547291,.242088,-.09698,.128375,-.956822,-.242088,.09698,.128375,-.956822,.40361,-.117599,.128959,-.898131,-.40361,.117599,.128959,-.898131,.499997,.499998,.500002,-.500003,0,-0,.382683,-.92388,0,-0,.258819,-.965926,0,-0,.087156,-.996195,-0,-0,-.087156,-.996195,-.086551,-.072775,.303122,-.946219,.086551,.072775,.303122,-.946219,-.094233,-.062509,.194059,-.974451,.094233,.062509,.194059,-.974451,-.094233,-.062509,.194059,-.974451,.094233,.062509,.194059,-.974451,-.079983,.007709,.120116,-.989503,.079983,-.007709,.120116,-.989503,-.034866,-.001522,.043593,-.99844,.034866,.001522,.043593,-.99844,-.087126,-.002281,.026077,-.995853,.087126,.002281,.026077,-.995853,0,-0,.026177,-.999657,0,-0,.026177,-.999657,0,-0,.043619,-.999048,0,-0,.043619,-.999048,-0,-0,-.043619,-.999048,-0,-0,.043619,-.999048,-0,-0,.043619,-.999048,0,-0,.087156,-.996195,0,-0,.087156,-.996195,0,-0,.087156,-.996195,0,-0,.087156,-.996195,.069626,-.004259,-.0609,-.995703,-0,-0,.026177,-.999657,-.036644,.01338,.112512,-.992884,-.036644,.01338,.112512,-.992884,-0,-0,.026177,-.999657,-.036644,.01338,.112512,-.992884,-.036644,.01338,.112512,-.992884,.121753,.005316,.043294,-.991601,0,-0,.052336,-.99863,0,0,.207912,-.978148,-.081275,-.266854,.266854,-.922482,-.033411,-.073002,.277817,-.957273,-.069626,.004259,-.0609,-.995703,0,0,.026177,-.999657,.036644,-.01338,.112512,-.992884,.036644,-.01338,.112512,-.992884,0,0,.026177,-.999657,.036644,-.01338,.112512,-.992884,.036644,-.01338,.112512,-.992884,-.121753,-.005316,.043294,-.991601,0,-0,.207912,-.978148,-0,-0,.052336,-.99863,.081275,.266854,.266854,-.922482,.033411,.073002,.277818,-.957273,.175704,.020647,-.071179,-.981649,.061368,.043004,-.006039,-.99717,.061368,.043004,-.006039,-.99717,.050121,.055707,.21843,-.972971,.061368,.043004,-.006039,-.99717,.061368,.043004,-.006039,-.99717,.050121,.055707,.21843,-.972971,-.175704,-.020647,-.071179,-.981649,-.061368,-.043004,-.006039,-.99717,-.061368,-.043004,-.006039,-.99717,-.050121,-.055707,.21843,-.972971,-.061368,-.043004,-.006039,-.99717,-.061368,-.043004,-.006039,-.99717,-.050121,-.055707,.21843,-.972971,.255661,.079231,-.121536,-.955818,.04564,.03214,-.059434,-.99667,.04564,.03214,-.059434,-.99667,.102602,.0264,.088483,-.990428,.091963,.081362,-.053003,-.991017,.09618,.095424,.095424,-.986173,.09618,.095424,.095424,-.986173,-.255661,-.079231,-.121536,-.955819,-.04564,-.03214,-.059434,-.99667,-.04564,-.03214,-.059434,-.99667,-.102602,-.0264,.088482,-.990428,-.091963,-.081362,-.053003,-.991017,-.09618,-.095424,.095424,-.986173,-.09618,-.095424,.095424,-.986173,-.008996,-.14974,.115766,-.981884,.008996,.14974,.115766,-.981884,.084258,.064553,.048688,-.993158,-.078936,-.103521,-451e-6,-.99149,-0,-0,0,-1,.086993,.060816,.005321,-.994337,-.084258,-.064553,.048688,-.993158,.078936,.103521,-451e-6,-.99149,-0,0,-0,-1,-.086993,-.060816,.005321,-.994337,.150867,.079694,-.030106,-.984877,-.087488,-.00412,-.051375,-.994831,.071004,.022428,-.050367,-.995951,-.150867,-.079694,-.030106,-.984877,-.071004,-.022428,-.050367,-.995951,-0,-0,-.224951,-.97437,-0,-0,-0,-1,.165697,.048734,-.008553,-.984935,-0,-0,-.224951,-.97437,-.165697,-.048734,-.008553,-.984935,-0,-0,-.147809,-.989016,-.121406,-.086506,.010622,-.988769,0,-0,-0,-1,.165697,.048734,-.008553,-.984935,-0,-0,-.147809,-.989016,.121406,.086506,.010622,-.988769,0,-0,-0,-1,-.165697,-.048734,-.008553,-.984935,0,-0,-0,-1,0,-0,-0,-1,-0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,-0,-0,-0,-1,0,-0,.284015,-.95882,-.078459,-0,0,-.996917,0,-0,0,-1,.182236,0,0,-.983255,0,-0,.284015,-.95882,.078459,-0,-0,-.996917,0,-0,0,-1,-.182236,0,-0,-.983255,0,-0,.317305,-.948324,.182236,0,0,-.983255,0,-0,.317305,-.948324,.078459,0,0,-.996917,-0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,.382683,-0,-0,-.92388,0,-0,-0,-1,0,-0,-0,-1,-.382683,-0,-0,-.92388,0,-0,-0,-1,0,-0,-0,-1,.252684,.209065,.056019,-.94303,-.252684,-.209065,.056019,-.94303,.139756,.022271,-.022271,-.989685,.088482,-.102602,.008182,-.990746,-.215028,-.035072,.263565,-.939716,.215028,.035072,.263565,-.939716,0,-0,.043619,-.999048,0,-0,.043619,-.999048,0,-0,.043619,-.999048,0,-0,.043619,-.999048,0,-0,.043619,-.999048,.293995,.122907,.007616,-.947841,-.293995,-.122906,.007616,-.947841,-0,-0,-.21644,-.976296,-0,-0,-.21644,-.976296,.300095,.066686,-.206707,-.928853,-.300095,-.066686,-.206707,-.928853,.300095,.066686,-.206707,-.928853,-.300095,-.066686,-.206707,-.928853,.311524,.099017,-.217569,-.91968,-.311524,-.099017,-.217569,-.91968,.311524,.099017,-.217569,-.91968,-.311524,-.099017,-.217569,-.91968,.377418,-.0238,.057877,-.923926,-.041021,-.057036,-.102151,-.992285,-.017217,.113333,-.009179,-.993365,-.016801,.069895,-.009921,-.997364,-.377418,.0238,.057876,-.923926,.041021,.057036,-.102151,-.992285,.017217,-.113333,-.009179,-.993365,.016801,-.069895,-.009921,-.997364,.125849,.363802,-.033311,-.922334,-.125849,-.363802,-.033311,-.922334,.42696,-.057743,.03455,-.901763,-.087156,-0,0,-.996195,.087156,-0,-0,-.996195,-.42696,.057743,.03455,-.901763,.087156,-0,-0,-.996195,-.087156,0,-0,-.996195,685e-6,.026168,-.026168,-.999315,-0,-0,-0,-1,-0,-0,-0,-1,-685e-6,-.026168,-.026168,-.999315,0,-0,-0,-1,0,-0,-0,-1,-0,-0,-.130526,-.991445,0,-0,.130526,-.991445,-.172987,.015134,-.085832,-.98106,.172987,-.015134,-.085832,-.98106,0,-0,-0,-1,0,-0,-0,-1,0,-0,.087156,-.996195,0,-0,-.173648,-.984808,0,-0,-0,-1,-0,0,.173648,-.984808,-.292801,-.053279,-.16461,-.94039,-.367254,-.038092,.037577,-.92858,-.361912,-.073116,.126405,-.920704,-.130506,-.002278,.017303,-.991294,.156381,.004095,.025855,-.98735,.094592,-.062428,-.02319,-.993286,.29633,-.082024,.027557,-.951158,.29633,-.082024,.027557,-.951158,.29633,-.082024,.027557,-.951158,.130506,.002278,.017303,-.991294,.069661,-.003651,-.052208,-.996197,.069661,-.003651,-.052208,-.996197,-.156381,-.004095,.025855,-.98735,-.094592,.062428,-.02319,-.993286,-.29633,.082024,.027557,-.951158,-.29633,.082024,.027557,-.951158,-.29633,.082024,.027557,-.951158,-0,-0,-.043619,-.999048,-0,-0,-.043619,-.999048,.117487,.061262,-.061262,-.989288,-.117487,-.061262,-.061262,-.989288,0,-0,-0,-1,0,-0,-.087156,-.996195,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,.160131,.037879,-.077809,-.983295,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,-.160131,-.037879,-.077809,-.983295,-0,-0,-0,-1,-0,-0,-0,-1,-0,-0,-0,-1,-0,-0,-0,-1,-0,-0,-0,-1,-0,-0,-0,-1,-0,-0,-0,-1,-0,-0,-0,-1,.229385,.098333,-.098333,-.96335,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,-.229385,-.098333,-.098333,-.96335,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,.207912,-0,0,-.978148,-.087156,-0,-0,-.996195,-.258819,0,-0,-.965926,-.258819,0,-0,-.965926,-.258819,0,-0,-.965926,-.258819,0,-0,-.965926,-.258819,0,-0,-.965926,-.207912,-0,-0,-.978148,.087156,0,0,-.996195,.258819,-0,-0,-.965926,.258819,-0,-0,-.965926,.258819,-0,-0,-.965926,.258819,-0,-0,-.965926,.258819,-0,-0,-.965926,-.086824,-.007596,.086824,-.992404,.086824,.007596,.086824,-.992404,.017442,.034894,609e-6,-.999239,-.017442,-.034894,609e-6,-.999239,-.112927,-.007897,.069308,-.991152,.112928,.007897,.069308,-.991152,.256508,-.029158,.417475,-.871245,-.256508,.029158,.417474,-.871245,.354972,-.082338,.402471,-.839781,-.354972,.082338,.402471,-.839781,.354972,-.082338,.402471,-.839781,-.354972,.082338,.402471,-.839781,0,-0,.34202,-.939693,0,-0,-.21644,-.976296,.134957,-34e-5,-.252048,-.958258,-.134957,34e-5,-.252048,-.958258,.252897,-.002125,-.280862,-.925827,-.252897,.002125,-.280862,-.925827,-0,-0,-.34202,-.939693,0,-0,.087156,-.996195,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,.129488,-.027254,.092741,-.986858,-0,-0,0,-1,-0,-0,0,-1,-0,-0,0,-1,-0,-0,0,-1,-0,-0,0,-1,-0,-0,0,-1,-0,-0,0,-1,-.129488,.027254,.092741,-.986858,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,.232208,-.03184,.091272,-.967851,-0,0,-0,-1,-0,0,-0,-1,-0,0,-0,-1,-0,0,-0,-1,-0,0,-0,-1,-.232208,.03184,.091272,-.967851,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,.34202,-.939693,.095352,-.019437,.253917,-.962318,-.095353,.019437,.253917,-.962318,.056937,-.023584,.380197,-.92285,-.056937,.023584,.380197,-.92285,-.166979,-.002604,-.132939,-.976954,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,0,-0,-0,-1,.166979,.002604,-.132939,-.976954,-0,0,-0,-1,-0,0,-0,-1,-0,0,-0,-1,-0,0,-0,-1,.373906,-.049951,-.220707,-.899438,-.373905,.049951,-.220707,-.899438,-0,-0,-.300706,-.953717,-0,-0,-.300706,-.953717,-0,-0,.043619,-.999048,-0,-0,.043619,-.999048,.15634,.004979,-.289618,-.944275,.145646,.04954,.04954,-.986853,.145646,.04954,.04954,-.986853,-.145646,-.04954,.04954,-.986853];function bi(){return{boneNames:mi,skeleton1185Names:wi,stdMaleRestTranslations:new Float32Array(Ri),stdMaleRestRotations:new Float32Array(yi),stdMaleParents:new Int32Array(Si),boneNames441:Di,restTranslations441:new Float32Array(ki),restRotations441:new Float32Array(Ni),parents441:new Int32Array(vi)}}var ke=new WeakMap;function Ct(t){const A=ke.get(t);if(A)return A;const e=new j(t,{name:"relightPlaceholder",width:1,height:1,format:it,mipmaps:!1,minFilter:WA,magFilter:WA,addressU:b,addressV:b}),i=e.lock();for(let r=0;r<i.length;r++)i[r]=0;return e.unlock(),ke.set(t,e),e}var lt=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),_t=new Float32Array([0,0,1,0]),Bt=new Float32Array([1,1,1]);function ct(t,A){if(!t)return;const e=Ct(A);t.setParameter("uRelightTex",e),t.setParameter("uRelightShadowTex",e),t.setParameter("uRelightVP",lt),t.setParameter("uRelightParams",_t),t.setParameter("uRelightStrength",0),t.setParameter("uRelightTint",Bt),t.setParameter("uRelightAmbient",0),t.setParameter("uRelightShadowStrength",0),t.setParameter("uRelightFlipY",0),t.setParameter("uRelightDebug",0)}function xi(t){const A=t.scope,e=Ct(t);A.resolve("uRelightTex").setValue(e),A.resolve("uRelightShadowTex").setValue(e),A.resolve("uRelightVP").setValue(lt),A.resolve("uRelightParams").setValue(_t),A.resolve("uRelightStrength").setValue(0),A.resolve("uRelightTint").setValue(Bt),A.resolve("uRelightAmbient").setValue(0),A.resolve("uRelightShadowStrength").setValue(0),A.resolve("uRelightFlipY").setValue(0),A.resolve("uRelightDebug").setValue(0)}var Ui="camera_params.w != 1.0 && centerView.z > 0.0",Gi="(camera_params.w != 1.0 ? centerView.z > 0.0 : -centerView.z < camera_params.z)",Pi="uniform.camera_params.w != 1.0 && centerView.z > 0.0",Mi="select(-centerView.z < uniform.camera_params.z, centerView.z > 0.0, uniform.camera_params.w != 1.0)";function Ti(t){const A=[[ot,Ui,Gi],[It,Pi,Mi]];for(const[e,i,r]of A){const a=di.get(t,e),s=a.get("gsplatCenterVS");if(!s?.includes(i)){console.warn(`[SplatEngine] ortho near cull not installed (${e})`);continue}a.set("gsplatCenterVS",s.replace(i,r))}}var Vi=(t,A)=>(0,globalThis.fetch)(t,A);function bA(t,A){return Vi(t,A)}var Yi="viggle-asset-cache",ae=3600*1e3,ht="X-Viggle-Cache-Expires",Hi=new Set([]),Et=new Set([".anim",".bin",".glb",".gltf",".jpg",".jpeg",".mp3",".ogg",".opus",".ply",".png",".spz",".vsplat",".webp"]),oe=null;function Ji(t){return!1}function Ki(){return oe||(oe=typeof caches<"u"?caches.open(Yi).catch(()=>null):Promise.resolve(null)),oe}function Qt(t){return(()=>{try{return new URL(t,globalThis.location?.href).pathname}catch{return t.split(/[?#]/,1)[0]??t}})().toLowerCase()}function Fe(t,A){const e=Qt(t);for(const i of A)if(e.endsWith(i))return!0;return!1}function Oi(t){return Fe(t,Hi)}function qi(t){const A=t.indexOf("?");if(A===-1)return!1;const e=t.slice(A+1).toLowerCase();return e.includes("verify=")||e.includes("x-amz-")||e.includes("keyname=")&&e.includes("signature=")}function me(t){const A=Qt(t);return qi(t)&&Fe(A,Et)&&typeof globalThis.location<"u"?new URL(`/__viggle_asset_cache__${A}`,globalThis.location.href).href:t}function Wi(t){const A=new Headers(t?.headers);return A.delete("If-None-Match"),A.delete("If-Modified-Since"),A.set("Cache-Control","no-store"),A.set("Pragma","no-cache"),A}function dt(t){const A=t.headers.get("cache-control")??"";if(A.toLowerCase().includes("no-store"))return 0;const i=/(?:^|,)\s*max-age\s*=\s*(\d+)/i.exec(A);if(i){const a=Number(i[1])*1e3;if(a>0)return Date.now()+Math.min(a,ae)}const r=t.headers.get("expires");if(r){const a=Date.parse(r);if(Number.isFinite(a)){const s=a-Date.now();return s<=0?0:Date.now()+Math.min(s,ae)}}return Date.now()+ae}async function zi(t,A){const e=new Headers(t.headers);e.set(ht,String(A));const i=await t.arrayBuffer();return()=>new Response(i,{status:t.status,statusText:t.statusText,headers:e})}var PA=new Map;function Ne(t,A){const e=A.then(async i=>{const r=i.ok?dt(i):0;if(r<=0)throw new Error("[bin-cache] response is not storable");return{reissue:await zi(i.clone(),r),expiry:r}});return PA.set(t,e),e.catch(()=>Ee(t,e)),A}var MA=new Map;function Ee(t,A){PA.get(t)===A&&PA.delete(t)}function be(t,A){const e=PA.get(A);if(e){if(!t){Ee(A,e);return}e.then(({reissue:i,expiry:r})=>t.put(A,i()).then(()=>void 0)).catch(()=>{}).finally(()=>Ee(A,e))}}function ji(t){return Number(t.headers.get(ht)??0)}function Zi(t){const A=ji(t);return A?Date.now()>=A:!0}async function Xi(t,A){if(Oi(t))return bA(t,{...A,cache:"no-store",headers:Wi(A)});if(!Fe(t,Et))return bA(t,A);const e=me(t),i=PA.get(e);if(i)try{return(await i).reissue()}catch{}const r=Ji()?Ne(e,bA(t,A)):null,a=await Ki();if(!a)return r&&be(null,e),r??bA(t,A);let s,I=()=>{};if(!r){const g=MA.get(e);if(g)return await g,zA(t,A);let n;const _=new Promise(C=>{n=C});MA.set(e,_),I=()=>{MA.get(e)===_&&MA.delete(e),n()};try{s=await a.match(e)}catch(C){throw I(),C}}if(s&&!Zi(s))return I(),s;let o;try{const g=r??Ne(e,bA(t,A));I(),o=await g}catch(g){const n=s??await a.match(e);if(n)return n;throw g}return o.ok&&(dt(o)>0?be(a,e):s&&a.delete(e).catch(()=>{})),o}function zA(t,A){return Xi(t,A)}var $i=class{readBytes;totalBytes;pull;constructor(t,A){this.readBytes=0,this.totalBytes=t,this.pull=async e=>{const i=await A(e);return this.readBytes+=i,i}}},Ie=(t,A)=>{const e=[];let i=0;const r=A.getReader(),a=async s=>{for(;i<s.byteLength;){const{done:o,value:g}=await r.read();if(o)break;e.push(g),i+=g.byteLength}let I=0;for(;I<s.byteLength&&e.length>0;){const o=e[0],g=Math.min(o.byteLength,s.byteLength-I);s.set(o.subarray(0,g),I),I+=g,i-=g,g<o.byteLength?e[0]=o.subarray(g):e.shift()}return I};return new $i(t,a)},Ar=t=>{let e=0;return new ReadableStream({pull(i){if(e<t.byteLength){const r=Math.min(e+65536,t.byteLength),a=new Uint8Array(t,e,r-e);i.enqueue(a),e=r}else i.close()}})},er=class{source;constructor(t){this.source=t}async getReadStream(){const{source:t}=this;if(t instanceof ArrayBuffer)return Ie(t.byteLength,Ar(t));if(t instanceof Blob)return Ie(t.size,t.stream());const A=t instanceof Response?t:await zA(t instanceof Request?t.url:t);if(!A.ok)throw new Error(`Failed to fetch asset: ${A.status} ${A.statusText}`);if(!A.body)throw new Error("Response has no body");const e=A.headers.get("Content-Length");return Ie(e?Number.parseInt(e,10):0,A.body)}async arrayBuffer(){const{source:t}=this;if(t instanceof ArrayBuffer)return t;if(t instanceof Blob)return await t.arrayBuffer();const A=t instanceof Response?t:await zA(t instanceof Request?t.url:t);if(!A.ok)throw new Error(`Failed to fetch asset: ${A.status} ${A.statusText}`);return await A.arrayBuffer()}},tr=async(t,A,e)=>{let i;{const r=t.contents??t.url??t.filename;if(!r)throw new Error("AssetSource has no contents / url / filename");i=r}return new er(i)},ut=new Float32Array(1),ir=new Int32Array(ut.buffer);function V(t){ut[0]=t;const A=ir[0];let e=A>>16&32768,i=A>>12&2047;const r=A>>23&255;return r<103?(r===102&&A&8388607&&(e|=1),e):r>142?(e|=31744,r===255&&A&8388607&&(e|=512),e):r<113?(i|=2048,e|=(i>>114-r)+(i>>113-r&1),e):(e|=r-112<<10|i>>1,e+=i&1,e)}function Lt(t,A,e,i,r,a,s){let I=Math.sqrt(t*t+A*A+e*e+i*i);I===0?(t=A=e=0,i=1):(I=1/I,t*=I,A*=I,e*=I,i*=I),i<0&&(t*=-1,A*=-1,e*=-1),r[s+3]=V(t)|V(A)<<16,a[s+3]=V(e)}var pt=EA.prototype.updateTransformData,ft=EA.prototype.updateColorData,rr=Ae.prototype.createIter,ar=["x","y","z","rot_0","rot_1","rot_2","rot_3","scale_0","scale_1","scale_2"],Ft=t=>t.packed;function FA(t,A){t&&(t.lock().set(A),t.unlock())}function or(t){const A=Ft(t);if(!A?.color)return ft.call(this,t);FA(this.streams.getTexture("splatColor"),A.color),A.color=void 0}function Ir(t){const A=this.streams.getTexture("transformA");if(!A)return;const e=Ft(t);if(e?.transformA&&e.transformB){FA(A,e.transformA),FA(this.streams.getTexture("transformB"),e.transformB),e.transformA=e.transformB=void 0;return}if(t.createIter!==rr)return pt.call(this,t);const[i,r,a,s,I,o,g,n,_,C]=ar.map(c=>t.getProp(c)),l=t.activated,B=this.streams.getTexture("transformB"),h=A.lock(),u=new Float32Array(h.buffer),d=B.lock();for(let c=0,Q=this.numSplats;c<Q;c++){const p=c*4;u[p]=i[c],u[p+1]=r[c],u[p+2]=a[c],Lt(I[c],o[c],g[c],s[c],h,d,p),d[p]=V(l?n[c]:Math.exp(n[c])),d[p+1]=V(l?_[c]:Math.exp(_[c])),d[p+2]=V(l?C[c]:Math.exp(C[c]))}A.unlock(),B.unlock()}function sr(){return EA.prototype.updateTransformData=Ir,EA.prototype.updateColorData=or,{updateTransformData:pt,updateColorData:ft}}function se(t){let A=t[0],e=t[0];for(let i=1;i<t.length;i++)t[i]<A&&(A=t[i]),t[i]>e&&(e=t[i]);return[A,e]}function ne(t){return t&=1023,t=(t^t<<16)&4278190335,t=(t^t<<8)&50393103,t=(t^t<<4)&51130563,t=(t^t<<2)&153391689,t}var Qe=15,JA=1<<Qe,xe=JA-1;function mt(t,A,e){const i=t.length,[r,a]=se(t),[s,I]=se(A),[o,g]=se(e),n=r===a?0:1024/(a-r),_=s===I?0:1024/(I-s),C=o===g?0:1024/(g-o),l=new Uint32Array(i);for(let d=0;d<i;d++){const c=Math.min(1023,Math.floor((t[d]-r)*n)),Q=Math.min(1023,Math.floor((A[d]-s)*_)),p=Math.min(1023,Math.floor((e[d]-o)*C));l[d]=(ne(p)<<2)+(ne(Q)<<1)+ne(c)}const B=new Uint32Array(JA),h=new Uint32Array(i);for(let d=0;d<i;d++)B[l[d]&xe]++;for(let d=0,c=0;d<JA;d++){const Q=B[d];B[d]=c,c+=Q}for(let d=0;d<i;d++)h[B[l[d]&xe]++]=d;const u=new Uint32Array(i);B.fill(0);for(let d=0;d<i;d++)B[l[d]>>>Qe]++;for(let d=0,c=0;d<JA;d++){const Q=B[d];B[d]=c,c+=Q}for(let d=0;d<i;d++){const c=h[d];u[B[l[c]>>>Qe]++]=c}return u}var nr=t=>"fractionalBits"in t;function gr(t,A,e){return{count:t,shDim:A,fractionalBits:e,order:new Uint32Array(0),packed:new Uint32Array(t*4),color:new Uint8Array(t*4),sh:[],centers:new Float32Array(0),aabb:null,floats:new Map}}function Cr(t,A){const{count:e,packed:i}=t,r=1/(1<<t.fractionalBits),a=new Float32Array(e),s=new Float32Array(e),I=new Float32Array(e);for(let l=0,B=0;l<e;l++,B+=9){let h=A[B]|A[B+1]<<8|A[B+2]<<16;a[l]=(h|(h&8388608?4278190080:0))*r,h=A[B+3]|A[B+4]<<8|A[B+5]<<16,s[l]=(h|(h&8388608?4278190080:0))*r,h=A[B+6]|A[B+7]<<8|A[B+8]<<16,I[l]=(h|(h&8388608?4278190080:0))*r}const o=t.order=mt(a,s,I),g=t.centers=new Float32Array(e*3),n=new Float32Array(e),_=new Float32Array(e),C=new Float32Array(e);for(let l=0;l<e;l++){const B=o[l],h=B*9,u=l*4;i[u]=A[h]|A[h+1]<<8|A[h+2]<<16,i[u+1]=A[h+3]|A[h+4]<<8|A[h+5]<<16,i[u+2]=A[h+6]|A[h+7]<<8|A[h+8]<<16;const d=a[B],c=s[B],Q=I[B];n[l]=d,_[l]=c,C[l]=Q,g[l*3]=d,g[l*3+1]=c,g[l*3+2]=Q}t.floats.set("x",n).set("y",_).set("z",C)}function lr(t,A){const{count:e,order:i,color:r}=t,a=new Float32Array(e),s=KA(I=>Math.log(I/255/(1-I/255)));for(let I=0;I<e;I++){const o=A[i[I]];r[I*4+3]=o,a[I]=s[o]}t.floats.set("opacity",a)}function _r(t,A){const{count:e,order:i,color:r}=t;for(let a=0;a<e;a++){const s=i[a]*3,I=a*4;r[I]=A[s],r[I+1]=A[s+1],r[I+2]=A[s+2]}}function Br(t,A){const{count:e,order:i,packed:r,centers:a}=t,s=new Float64Array(256);for(let l=0;l<256;l++)s[l]=2*Math.exp(l/16-10);let I=1/0,o=1/0,g=1/0,n=-1/0,_=-1/0,C=-1/0;for(let l=0;l<e;l++){const B=i[l]*3,h=l*4,u=A[B],d=A[B+1],c=A[B+2];r[h]|=u<<24,r[h+1]|=d<<24,r[h+2]|=c<<24;const Q=s[Math.max(u,d,c)],p=a[l*3],E=a[l*3+1],L=a[l*3+2];I=Math.min(I,p-Q),o=Math.min(o,E-Q),g=Math.min(g,L-Q),n=Math.max(n,p+Q),_=Math.max(_,E+Q),C=Math.max(C,L+Q)}e>0&&(t.aabb=[(I+n)*.5,(o+_)*.5,(g+C)*.5,(n-I)*.5,(_-o)*.5,(C-g)*.5])}function cr(t,A){const{count:e,order:i,packed:r}=t;for(let a=0;a<e;a++){const s=i[a]*4;r[a*4+3]=A[s]|A[s+1]<<8|A[s+2]<<16|A[s+3]<<24}}function hr(t,A){const{count:e,order:i,shDim:r}=t,a=r*3;for(let s=0;s*16<a;s++){const I=new Uint32Array(e*4);for(let o=0;o<e;o++){const g=i[o]*a+s*16;for(let n=0;n<4;n++){let _=0;for(let C=0;C<4;C++){const l=s*16+n*4+C;_|=(l<a?A[g+n*4+C]:128)<<C*8}I[o*4+n]=_}}t.sh.push(I)}}function Er({order:t,...A}){return A}var Qr=[Cr,lr,_r,Br,cr,hr];function KA(t){const A=new Float32Array(256);for(let e=0;e<256;e++)A[e]=t(e);return A}function dr(t,A){const e=t.count,i=new Float32Array(e),r=["f_dc_0","f_dc_1","f_dc_2"].indexOf(A);if(r>=0){const I=KA(o=>(o/255-.5)/.15);for(let o=0;o<e;o++)i[o]=I[t.color[o*4+r]];return i}const a=["scale_0","scale_1","scale_2"].indexOf(A);if(a>=0){const I=KA(o=>o/16-10);for(let o=0;o<e;o++)i[o]=I[t.packed[o*4+a]>>>24];return i}if(A.startsWith("rot_"))return ur(t).forEach((I,o)=>t.floats.set(o,I)),t.floats.get(A);const s=/^f_rest_(\d+)$/.exec(A);if(s&&Number(s[1])<t.shDim*3){const I=Number(s[1]),o=Math.floor(I/t.shDim),n=I%t.shDim*3+o,_=t.sh[n>>4],C=n>>2&3,l=(n&3)*8,B=KA(h=>(h-128)/128);for(let h=0;h<e;h++)i[h]=B[_[h*4+C]>>>l&255];return i}throw new Error(`[spz] no splat property ${A}`)}function ur(t){const A=t.count,e=new Float32Array(A),i=new Float32Array(A),r=new Float32Array(A),a=new Float32Array(A),s=new Float64Array(512);for(let o=0;o<512;o++)s[o]=o/511*Math.SQRT1_2;const I=new Float64Array(4);for(let o=0;o<A;o++){const g=t.packed[o*4+3],n=g>>>30&3;let _=0,C=20;for(let l=0;l<4;l++){if(l===n)continue;const B=g>>>C&1023,h=B&512?-s[B&511]:s[B&511];I[l]=h,_+=h*h,C-=10}I[n]=Math.sqrt(Math.max(0,1-_)),i[o]=I[0],r[o]=I[1],a[o]=I[2],e[o]=I[3]}return new Map([["rot_0",e],["rot_1",i],["rot_2",r],["rot_3",a]])}var H=class extends Error{name="NotAnSpz"},Lr=1347635022,wt=32,Rt=16,yt=[0,3,8,15,24],pr=.15,fr=1,de=["positions","alphas","colors","scales","rotations","sh"];function ue(t){if(t.byteLength<Rt)return null;const A=new DataView(t.buffer,t.byteOffset,t.byteLength);if(A.getUint32(0,!0)!==Lr)return null;const e=A.getUint32(4,!0),i=A.getUint32(8,!0),r=t[12],a=t[13],s=t[14];return{version:e,numPoints:i,shDegree:r,fractionalBits:a,antialiased:(s&fr)!==0,numStreams:t[15],tocByteOffset:e>=4&&t.byteLength>=wt?A.getUint32(16,!0):0}}function Fr(t){const A=(t&32768)!==0?-1:1,e=t>>10&31,i=t&1023;return e===0?A*i*2**-24:e===31?i!==0?NaN:A*(1/0):A*(i+1024)*2**(e-25)}function Ue(t){if(t.shDegree>4)throw new H(`spherical-harmonic degree ${t.shDegree} is not a degree`);if(!(t.numPoints>0)||t.numPoints>1e7)throw new H(`${t.numPoints} points is not a plausible cloud`)}function St(t){return{positions:t.version>=2?9:6,alphas:1,colors:3,scales:3,rotations:t.version>=3?4:3,sh:yt[t.shDegree]*3}}async function mr(t,A,e){const i=new DataView(t.buffer,t.byteOffset,t.byteLength),r=St(A),a=de.filter(g=>r[g]>0);if(a.length!==A.numStreams)throw new H(`the header says ${A.numStreams} streams; a cloud of ${A.numPoints} points with SH degree ${A.shDegree} has ${a.length}`);const s=A.tocByteOffset;if(s<wt||s+a.length*16>t.byteLength)throw new H(`the table of contents is not inside the file (at ${s})`);const I={};let o=s+a.length*16;for(const[g,n]of a.entries()){const _=Number(i.getBigUint64(s+g*16,!0)),C=Number(i.getBigUint64(s+g*16+8,!0)),l=r[n]*A.numPoints;if(C!==l)throw new H(`the ${n} stream says ${C} bytes, which is not the ${l} that ${A.numPoints} points need`);if(o+_>t.byteLength)throw new H(`the ${n} stream runs past the end of the file`);try{I[n]=await e.zstd(t.subarray(o,o+_),C)}catch(B){throw new H(`the ${n} stream does not decompress: ${B.message}`)}if(I[n].byteLength!==C)throw new H(`the ${n} stream inflated to ${I[n].byteLength} bytes, not ${C}`);o+=_}for(const g of de)I[g]??=new Uint8Array(0);return I}function wr(t,A){const e=St(A),i={};let r=Rt;for(const a of de){const s=e[a]*A.numPoints;if(r+s>t.byteLength)throw new H(`this file ends inside its ${a}: ${t.byteLength} bytes for a cloud of ${A.numPoints}`);i[a]=t.subarray(r,r+s),r+=s}return i}function Rr(t,A){const e=A.numPoints,i=new Float32Array(e*4);if(A.version>=3){const r=new DataView(t.buffer,t.byteOffset,t.byteLength),a=Math.SQRT1_2;for(let s=0;s<e;s++){const I=r.getUint32(s*4,!0),o=I>>>30&3;let g=0,n=20;for(let _=0;_<4;_++){if(_===o)continue;const C=I>>>n&1023,l=(C&511)/511*a,B=(C&512)!==0?-l:l;i[s*4+_]=B,g+=B*B,n-=10}i[s*4+o]=Math.sqrt(Math.max(0,1-g))}return i}for(let r=0;r<e;r++){const a=t[r*3]/127.5-1,s=t[r*3+1]/127.5-1,I=t[r*3+2]/127.5-1;i[r*4]=a,i[r*4+1]=s,i[r*4+2]=I,i[r*4+3]=Math.sqrt(Math.max(0,1-(a*a+s*s+I*I)))}return i}function Ge(t,A){const e=A.numPoints,i=new Float32Array(e*3),r=t.positions;if(A.version>=2){const n=1/(1<<A.fractionalBits);for(let _=0;_<e*3;_++){let C=r[_*3]|r[_*3+1]<<8|r[_*3+2]<<16;C&8388608&&(C|=-16777216),i[_]=C*n}}else for(let n=0;n<e*3;n++)i[n]=Fr(r[n*2]|r[n*2+1]<<8);const a=new Float32Array(e*3);for(let n=0;n<e*3;n++)a[n]=t.scales[n]/16-10;const s=new Float32Array(e);for(let n=0;n<e;n++){const _=t.alphas[n]/255;s[n]=Math.log(_/(1-_))}const I=new Float32Array(e*3);for(let n=0;n<e*3;n++)I[n]=(t.colors[n]/255-.5)/pr;const o=yt[A.shDegree],g=new Float32Array(e*o*3);for(let n=0;n<g.length;n++)g[n]=(t.sh[n]-128)/128;return{numPoints:e,shDegree:A.shDegree,antialiased:A.antialiased,positions:i,scales:a,rotations:Rr(t.rotations,A),alphas:s,colors:I,sh:g}}async function yr(t,A){let e=ue(t);if(e&&e.version>4)throw new H(`this is an SPZ version ${e.version}; this decoder reads 1 to 4`);if(e&&e.version===4)return Ue(e),Ge(await mr(t,e,A),e);let i=t;if(!e){if(t.byteLength<2||t[0]!==31||t[1]!==139)throw new H(`these ${t.byteLength} bytes are not an SPZ: no "NGSP" header and no gzip wrapper`);try{i=await A.gzip(t,0)}catch(r){throw new H(`this file is gzipped but does not decompress: ${r.message}`)}if(e=ue(i),!e)throw new H("these bytes gunzip to something that is not an SPZ");if(e.version>=4)throw new H("a version 4 file should not be gzipped; its streams carry their own")}if(Ue(e),e.version<1)throw new H(`version ${e.version} predates the format this reads`);return Ge(wr(i,e),e)}var xA,aA,Le,ge={env:{emscripten_notify_memory_growth:t=>{Le=new Uint8Array(aA.exports.memory.buffer)}}},Sr=class{init(){return xA||(typeof fetch<"u"?xA=fetch(`data:application/wasm;base64,${Pe}`).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,ge)).then(this._init):xA=WebAssembly.instantiate(Buffer.from(Pe,"base64"),ge).then(this._init),xA)}_init(t){aA=t.instance,ge.env.emscripten_notify_memory_growth(0)}decode(t,A=0){if(!aA)throw new Error("ZSTDDecoder: Await .init() before decoding.");const e=t.byteLength,i=aA.exports.malloc(e);Le.set(t,i),A=A||Number(aA.exports.ZSTD_findDecompressedSize(i,e));const r=aA.exports.malloc(A),a=aA.exports.ZSTD_decompress(r,A,i,e),s=Le.slice(r,r+a);return aA.exports.free(i),aA.exports.free(r),s}},Pe="AGFzbQEAAAABoAEUYAF/AGADf39/AGACf38AYAF/AX9gBX9/f39/AX9gA39/fwF/YAR/f39/AX9gAn9/AX9gAAF/YAd/f39/f39/AX9gB39/f39/f38AYAR/f39/AX5gAn9/AX5gBn9/f39/fwBgDn9/f39/f39/f39/f39/AX9gCH9/f39/f39/AX9gCX9/f39/f39/fwF/YAN+f38BfmAFf39/f38AYAAAAicBA2Vudh9lbXNjcmlwdGVuX25vdGlmeV9tZW1vcnlfZ3Jvd3RoAAADJyYDAAMACAQJBQEHBwADBgoLBAQDBAEABgUMBQ0OAQEBDxAREgYAEwQFAXABAgIFBwEBggKAgAIGCAF/AUGgnwQLB9MBCgZtZW1vcnkCAAxaU1REX2lzRXJyb3IADRlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplABkPWlNURF9kZWNvbXByZXNzACQGbWFsbG9jAAEEZnJlZQACGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBABlfZW1zY3JpcHRlbl9zdGFja19yZXN0b3JlAAQcZW1zY3JpcHRlbl9zdGFja19nZXRfY3VycmVudAAFIl9fY3hhX2luY3JlbWVudF9leGNlcHRpb25fcmVmY291bnQAJQkHAQBBAQsBJgwBCgqtkgMm1ScBC38jAEEQayIKJAACQAJAAkACQAJAAkACQAJAAkACQCAAQfQBTQRAQagbKAIAIgRBECAAQQtqQfgDcSAAQQtJGyIGQQN2IgB2IgFBA3EEQAJAIAFBf3NBAXEgAGoiAkEDdCIBQdAbaiIAIAFB2BtqKAIAIgEoAggiBUYEQEGoGyAEQX4gAndxNgIADAELIAUgADYCDCAAIAU2AggLIAFBCGohACABIAJBA3QiAkEDcjYCBCABIAJqIgEgASgCBEEBcjYCBAwLCyAGQbAbKAIAIghNDQEgAQRAAkBBAiAAdCICQQAgAmtyIAEgAHRxaCIBQQN0IgBB0BtqIgIgAEHYG2ooAgAiACgCCCIFRgRAQagbIARBfiABd3EiBDYCAAwBCyAFIAI2AgwgAiAFNgIICyAAIAZBA3I2AgQgACAGaiIHIAFBA3QiASAGayIFQQFyNgIEIAAgAWogBTYCACAIBEAgCEF4cUHQG2ohAUG8GygCACECAn8gBEEBIAhBA3Z0IgNxRQRAQagbIAMgBHI2AgAgAQwBCyABKAIICyEDIAEgAjYCCCADIAI2AgwgAiABNgIMIAIgAzYCCAsgAEEIaiEAQbwbIAc2AgBBsBsgBTYCAAwLC0GsGygCACILRQ0BIAtoQQJ0QdgdaigCACICKAIEQXhxIAZrIQMgAiEBA0ACQCABKAIQIgBFBEAgASgCFCIARQ0BCyAAKAIEQXhxIAZrIgEgAyABIANJIgEbIQMgACACIAEbIQIgACEBDAELCyACKAIYIQkgAiACKAIMIgBHBEAgAigCCCIBIAA2AgwgACABNgIIDAoLIAIoAhQiAQR/IAJBFGoFIAIoAhAiAUUNAyACQRBqCyEFA0AgBSEHIAEiAEEUaiEFIAAoAhQiAQ0AIABBEGohBSAAKAIQIgENAAsgB0EANgIADAkLQX8hBiAAQb9/Sw0AIABBC2oiAUF4cSEGQawbKAIAIgdFDQBBHyEIQQAgBmshAyAAQfT//wdNBEAgBkEmIAFBCHZnIgBrdkEBcSAAQQF0a0E+aiEICwJAAkACQCAIQQJ0QdgdaigCACIBRQRAQQAhAAwBC0EAIQAgBkEZIAhBAXZrQQAgCEEfRxt0IQIDQAJAIAEoAgRBeHEgBmsiBCADTw0AIAEhBSAEIgMNAEEAIQMgASEADAMLIAAgASgCFCIEIAQgASACQR12QQRxaigCECIBRhsgACAEGyEAIAJBAXQhAiABDQALCyAAIAVyRQRAQQAhBUECIAh0IgBBACAAa3IgB3EiAEUNAyAAaEECdEHYHWooAgAhAAsgAEUNAQsDQCAAKAIEQXhxIAZrIgIgA0khASACIAMgARshAyAAIAUgARshBSAAKAIQIgEEfyABBSAAKAIUCyIADQALCyAFRQ0AIANBsBsoAgAgBmtPDQAgBSgCGCEIIAUgBSgCDCIARwRAIAUoAggiASAANgIMIAAgATYCCAwICyAFKAIUIgEEfyAFQRRqBSAFKAIQIgFFDQMgBUEQagshAgNAIAIhBCABIgBBFGohAiAAKAIUIgENACAAQRBqIQIgACgCECIBDQALIARBADYCAAwHCyAGQbAbKAIAIgVNBEBBvBsoAgAhAAJAIAUgBmsiAUEQTwRAIAAgBmoiAiABQQFyNgIEIAAgBWogATYCACAAIAZBA3I2AgQMAQsgACAFQQNyNgIEIAAgBWoiASABKAIEQQFyNgIEQQAhAkEAIQELQbAbIAE2AgBBvBsgAjYCACAAQQhqIQAMCQsgBkG0GygCACICSQRAQbQbIAIgBmsiATYCAEHAG0HAGygCACIAIAZqIgI2AgAgAiABQQFyNgIEIAAgBkEDcjYCBCAAQQhqIQAMCQtBACEAIAZBL2oiAwJ/QYAfKAIABEBBiB8oAgAMAQtBjB9CfzcCAEGEH0KAoICAgIAENwIAQYAfIApBDGpBcHFB2KrVqgVzNgIAQZQfQQA2AgBB5B5BADYCAEGAIAsiAWoiBEEAIAFrIgdxIgEgBk0NCEHgHigCACIFBEBB2B4oAgAiCCABaiIJIAhNIAUgCUlyDQkLAkBB5B4tAABBBHFFBEACQAJAAkACQEHAGygCACIFBEBB6B4hAANAIAAoAgAiCCAFTQRAIAUgCCAAKAIEakkNAwsgACgCCCIADQALC0EAEAMiAkF/Rg0DIAEhBEGEHygCACIAQQFrIgUgAnEEQCABIAJrIAIgBWpBACAAa3FqIQQLIAQgBk0NA0HgHigCACIABEBB2B4oAgAiBSAEaiIHIAVNIAAgB0lyDQQLIAQQAyIAIAJHDQEMBQsgBCACayAHcSIEEAMiAiAAKAIAIAAoAgRqRg0BIAIhAAsgAEF/Rg0BIAZBMGogBE0EQCAAIQIMBAtBiB8oAgAiAiADIARrakEAIAJrcSICEANBf0YNASACIARqIQQgACECDAMLIAJBf0cNAgtB5B5B5B4oAgBBBHI2AgALIAEQAyICQX9GQQAQAyIAQX9GciAAIAJNcg0FIAAgAmsiBCAGQShqTQ0FC0HYHkHYHigCACAEaiIANgIAQdweKAIAIABJBEBB3B4gADYCAAsCQEHAGygCACIDBEBB6B4hAANAIAIgACgCACIBIAAoAgQiBWpGDQIgACgCCCIADQALDAQLQbgbKAIAIgBBACAAIAJNG0UEQEG4GyACNgIAC0EAIQBB7B4gBDYCAEHoHiACNgIAQcgbQX82AgBBzBtBgB8oAgA2AgBB9B5BADYCAANAIABBA3QiAUHYG2ogAUHQG2oiBTYCACABQdwbaiAFNgIAIABBAWoiAEEgRw0AC0G0GyAEQShrIgBBeCACa0EHcSIBayIFNgIAQcAbIAEgAmoiATYCACABIAVBAXI2AgQgACACakEoNgIEQcQbQZAfKAIANgIADAQLIAIgA00gASADS3INAiAAKAIMQQhxDQIgACAEIAVqNgIEQcAbIANBeCADa0EHcSIAaiIBNgIAQbQbQbQbKAIAIARqIgIgAGsiADYCACABIABBAXI2AgQgAiADakEoNgIEQcQbQZAfKAIANgIADAMLQQAhAAwGC0EAIQAMBAtBuBsoAgAgAksEQEG4GyACNgIACyACIARqIQVB6B4hAAJAA0AgBSAAKAIAIgFHBEAgACgCCCIADQEMAgsLIAAtAAxBCHFFDQMLQegeIQADQAJAIAAoAgAiASADTQRAIAMgASAAKAIEaiIFSQ0BCyAAKAIIIQAMAQsLQbQbIARBKGsiAEF4IAJrQQdxIgFrIgc2AgBBwBsgASACaiIBNgIAIAEgB0EBcjYCBCAAIAJqQSg2AgRBxBtBkB8oAgA2AgAgAyAFQScgBWtBB3FqQS9rIgAgACADQRBqSRsiAUEbNgIEIAFB8B4pAgA3AhAgAUHoHikCADcCCEHwHiABQQhqNgIAQeweIAQ2AgBB6B4gAjYCAEH0HkEANgIAIAFBGGohAANAIABBBzYCBCAAQQhqIQIgAEEEaiEAIAIgBUkNAAsgASADRg0AIAEgASgCBEF+cTYCBCADIAEgA2siAkEBcjYCBCABIAI2AgACfyACQf8BTQRAIAJBeHFB0BtqIQACf0GoGygCACIBQQEgAkEDdnQiAnFFBEBBqBsgASACcjYCACAADAELIAAoAggLIQEgACADNgIIIAEgAzYCDEEMIQJBCAwBC0EfIQAgAkH///8HTQRAIAJBJiACQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgAyAANgIcIANCADcCECAAQQJ0QdgdaiEBAkACQEGsGygCACIFQQEgAHQiBHFFBEBBrBsgBCAFcjYCACABIAM2AgAMAQsgAkEZIABBAXZrQQAgAEEfRxt0IQAgASgCACEFA0AgBSIBKAIEQXhxIAJGDQIgAEEddiEFIABBAXQhACABIAVBBHFqIgQoAhAiBQ0ACyAEIAM2AhALIAMgATYCGEEIIQIgAyIBIQBBDAwBCyABKAIIIgAgAzYCDCABIAM2AgggAyAANgIIQQAhAEEYIQJBDAsgA2ogATYCACACIANqIAA2AgALQbQbKAIAIgAgBk0NAEG0GyAAIAZrIgE2AgBBwBtBwBsoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAQLQaQbQTA2AgBBACEADAMLIAAgAjYCACAAIAAoAgQgBGo2AgQgAkF4IAJrQQdxaiIIIAZBA3I2AgQgAUF4IAFrQQdxaiIEIAYgCGoiA2shBwJAQcAbKAIAIARGBEBBwBsgAzYCAEG0G0G0GygCACAHaiIANgIAIAMgAEEBcjYCBAwBC0G8GygCACAERgRAQbwbIAM2AgBBsBtBsBsoAgAgB2oiADYCACADIABBAXI2AgQgACADaiAANgIADAELIAQoAgQiAEEDcUEBRgRAIABBeHEhCSAEKAIMIQICQCAAQf8BTQRAIAQoAggiASACRgRAQagbQagbKAIAQX4gAEEDdndxNgIADAILIAEgAjYCDCACIAE2AggMAQsgBCgCGCEGAkAgAiAERwRAIAQoAggiACACNgIMIAIgADYCCAwBCwJAIAQoAhQiAAR/IARBFGoFIAQoAhAiAEUNASAEQRBqCyEBA0AgASEFIAAiAkEUaiEBIAAoAhQiAA0AIAJBEGohASACKAIQIgANAAsgBUEANgIADAELQQAhAgsgBkUNAAJAIAQoAhwiAEECdEHYHWoiASgCACAERgRAIAEgAjYCACACDQFBrBtBrBsoAgBBfiAAd3E2AgAMAgsCQCAEIAYoAhBGBEAgBiACNgIQDAELIAYgAjYCFAsgAkUNAQsgAiAGNgIYIAQoAhAiAARAIAIgADYCECAAIAI2AhgLIAQoAhQiAEUNACACIAA2AhQgACACNgIYCyAHIAlqIQcgBCAJaiIEKAIEIQALIAQgAEF+cTYCBCADIAdBAXI2AgQgAyAHaiAHNgIAIAdB/wFNBEAgB0F4cUHQG2ohAAJ/QagbKAIAIgFBASAHQQN2dCICcUUEQEGoGyABIAJyNgIAIAAMAQsgACgCCAshASAAIAM2AgggASADNgIMIAMgADYCDCADIAE2AggMAQtBHyECIAdB////B00EQCAHQSYgB0EIdmciAGt2QQFxIABBAXRrQT5qIQILIAMgAjYCHCADQgA3AhAgAkECdEHYHWohAAJAAkBBrBsoAgAiAUEBIAJ0IgVxRQRAQawbIAEgBXI2AgAgACADNgIADAELIAdBGSACQQF2a0EAIAJBH0cbdCECIAAoAgAhAQNAIAEiACgCBEF4cSAHRg0CIAJBHXYhASACQQF0IQIgACABQQRxaiIFKAIQIgENAAsgBSADNgIQCyADIAA2AhggAyADNgIMIAMgAzYCCAwBCyAAKAIIIgEgAzYCDCAAIAM2AgggA0EANgIYIAMgADYCDCADIAE2AggLIAhBCGohAAwCCwJAIAhFDQACQCAFKAIcIgFBAnRB2B1qIgIoAgAgBUYEQCACIAA2AgAgAA0BQawbIAdBfiABd3EiBzYCAAwCCwJAIAUgCCgCEEYEQCAIIAA2AhAMAQsgCCAANgIUCyAARQ0BCyAAIAg2AhggBSgCECIBBEAgACABNgIQIAEgADYCGAsgBSgCFCIBRQ0AIAAgATYCFCABIAA2AhgLAkAgA0EPTQRAIAUgAyAGaiIAQQNyNgIEIAAgBWoiACAAKAIEQQFyNgIEDAELIAUgBkEDcjYCBCAFIAZqIgQgA0EBcjYCBCADIARqIAM2AgAgA0H/AU0EQCADQXhxQdAbaiEAAn9BqBsoAgAiAUEBIANBA3Z0IgJxRQRAQagbIAEgAnI2AgAgAAwBCyAAKAIICyEBIAAgBDYCCCABIAQ2AgwgBCAANgIMIAQgATYCCAwBC0EfIQAgA0H///8HTQRAIANBJiADQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgBCAANgIcIARCADcCECAAQQJ0QdgdaiEBAkACQCAHQQEgAHQiAnFFBEBBrBsgAiAHcjYCACABIAQ2AgAgBCABNgIYDAELIANBGSAAQQF2a0EAIABBH0cbdCEAIAEoAgAhAQNAIAEiAigCBEF4cSADRg0CIABBHXYhASAAQQF0IQAgAiABQQRxaiIHKAIQIgENAAsgByAENgIQIAQgAjYCGAsgBCAENgIMIAQgBDYCCAwBCyACKAIIIgAgBDYCDCACIAQ2AgggBEEANgIYIAQgAjYCDCAEIAA2AggLIAVBCGohAAwBCwJAIAlFDQACQCACKAIcIgFBAnRB2B1qIgUoAgAgAkYEQCAFIAA2AgAgAA0BQawbIAtBfiABd3E2AgAMAgsCQCACIAkoAhBGBEAgCSAANgIQDAELIAkgADYCFAsgAEUNAQsgACAJNgIYIAIoAhAiAQRAIAAgATYCECABIAA2AhgLIAIoAhQiAUUNACAAIAE2AhQgASAANgIYCwJAIANBD00EQCACIAMgBmoiAEEDcjYCBCAAIAJqIgAgACgCBEEBcjYCBAwBCyACIAZBA3I2AgQgAiAGaiIFIANBAXI2AgQgAyAFaiADNgIAIAgEQCAIQXhxQdAbaiEAQbwbKAIAIQECf0EBIAhBA3Z0IgcgBHFFBEBBqBsgBCAHcjYCACAADAELIAAoAggLIQQgACABNgIIIAQgATYCDCABIAA2AgwgASAENgIIC0G8GyAFNgIAQbAbIAM2AgALIAJBCGohAAsgCkEQaiQAIAAL3AsBCH8CQCAARQ0AIABBCGsiAyAAQQRrKAIAIgJBeHEiAGohBQJAIAJBAXENACACQQJxRQ0BIAMgAygCACIEayIDQbgbKAIASQ0BIAAgBGohAAJAAkACQEG8GygCACADRwRAIAMoAgwhASAEQf8BTQRAIAEgAygCCCICRw0CQagbQagbKAIAQX4gBEEDdndxNgIADAULIAMoAhghByABIANHBEAgAygCCCICIAE2AgwgASACNgIIDAQLIAMoAhQiAgR/IANBFGoFIAMoAhAiAkUNAyADQRBqCyEEA0AgBCEGIAIiAUEUaiEEIAEoAhQiAg0AIAFBEGohBCABKAIQIgINAAsgBkEANgIADAMLIAUoAgQiAkEDcUEDRw0DQbAbIAA2AgAgBSACQX5xNgIEIAMgAEEBcjYCBCAFIAA2AgAPCyACIAE2AgwgASACNgIIDAILQQAhAQsgB0UNAAJAIAMoAhwiBEECdEHYHWoiAigCACADRgRAIAIgATYCACABDQFBrBtBrBsoAgBBfiAEd3E2AgAMAgsCQCADIAcoAhBGBEAgByABNgIQDAELIAcgATYCFAsgAUUNAQsgASAHNgIYIAMoAhAiAgRAIAEgAjYCECACIAE2AhgLIAMoAhQiAkUNACABIAI2AhQgAiABNgIYCyADIAVPDQAgBSgCBCIEQQFxRQ0AAkACQAJAAkAgBEECcUUEQEHAGygCACAFRgRAQcAbIAM2AgBBtBtBtBsoAgAgAGoiADYCACADIABBAXI2AgQgA0G8GygCAEcNBkGwG0EANgIAQbwbQQA2AgAPC0G8GygCACIHIAVGBEBBvBsgAzYCAEGwG0GwGygCACAAaiIANgIAIAMgAEEBcjYCBCAAIANqIAA2AgAPCyAEQXhxIABqIQAgBSgCDCEBIARB/wFNBEAgBSgCCCICIAFGBEBBqBtBqBsoAgBBfiAEQQN2d3E2AgAMBQsgAiABNgIMIAEgAjYCCAwECyAFKAIYIQggASAFRwRAIAUoAggiAiABNgIMIAEgAjYCCAwDCyAFKAIUIgIEfyAFQRRqBSAFKAIQIgJFDQIgBUEQagshBANAIAQhBiACIgFBFGohBCABKAIUIgINACABQRBqIQQgASgCECICDQALIAZBADYCAAwCCyAFIARBfnE2AgQgAyAAQQFyNgIEIAAgA2ogADYCAAwDC0EAIQELIAhFDQACQCAFKAIcIgRBAnRB2B1qIgIoAgAgBUYEQCACIAE2AgAgAQ0BQawbQawbKAIAQX4gBHdxNgIADAILAkAgBSAIKAIQRgRAIAggATYCEAwBCyAIIAE2AhQLIAFFDQELIAEgCDYCGCAFKAIQIgIEQCABIAI2AhAgAiABNgIYCyAFKAIUIgJFDQAgASACNgIUIAIgATYCGAsgAyAAQQFyNgIEIAAgA2ogADYCACADIAdHDQBBsBsgADYCAA8LIABB/wFNBEAgAEF4cUHQG2ohAgJ/QagbKAIAIgRBASAAQQN2dCIAcUUEQEGoGyAAIARyNgIAIAIMAQsgAigCCAshACACIAM2AgggACADNgIMIAMgAjYCDCADIAA2AggPC0EfIQEgAEH///8HTQRAIABBJiAAQQh2ZyICa3ZBAXEgAkEBdGtBPmohAQsgAyABNgIcIANCADcCECABQQJ0QdgdaiEEAn8CQAJ/QawbKAIAIgZBASABdCICcUUEQEGsGyACIAZyNgIAIAQgAzYCAEEYIQFBCAwBCyAAQRkgAUEBdmtBACABQR9HG3QhASAEKAIAIQQDQCAEIgIoAgRBeHEgAEYNAiABQR12IQQgAUEBdCEBIAIgBEEEcWoiBigCECIEDQALIAYgAzYCEEEYIQEgAiEEQQgLIQAgAyICDAELIAIoAggiBCADNgIMIAIgAzYCCEEYIQBBCCEBQQALIQYgASADaiAENgIAIAMgAjYCDCAAIANqIAY2AgBByBtByBsoAgBBAWsiAEF/IAAbNgIACwtsAQJ/QaAbKAIAIgEgAEEHakF4cSICaiEAAkAgAkEAIAAgAU0bRQRAIAA/AEEQdE0NASAAPwBBEHRrQf//A2pBEHZAAEF/RgR/QQAFQQAQAEEBCw0BC0GkG0EwNgIAQX8PC0GgGyAANgIAIAELBgAgACQACwQAIwALuQUBDH8jAEEQayIMJAACQCAEQQdNBEAgDEIANwMIIAQEQCAMQQhqIAMgBPwKAAALQWwgACABIAIgDEEIakEIEAYiACAAIARLGyAAIABBiX9JGyEFDAELIAEoAgBBAWoiDkEBdCIIBEAgAEEAIAj8CwALIAMoAAAiBUEPcSIHQQpLBEBBVCEFDAELIAIgB0EFajYCACADIARqIgJBBGshCCACQQdrIQ0gB0EGaiEPQQQhBiAFQQR2IQVBICAHdCIJQQFyIQpBACECQQEhByADIQQDQAJAIAdBAXFFBEADQCAFQX9zQYCAgIB4cmgiB0EYSUUEQCACQSRqIQIgBCANTQR/IARBA2oFIAQgDWtBA3QgBmpBH3EhBiAICyIEKAAAIAZ2IQUMAQsLIAYgB0EecSILakECaiEGIAdBAXZBA2wgAmogBSALdkEDcWoiAiAOTw0BAn8gBCANSyAGQQN2IARqIgUgCEtxRQRAIAZBB3EhBiAFDAELIAQgCGtBA3QgBmpBH3EhBiAICyIEKAAAIAZ2IQULIAUgCUEBa3EiByAJQQF0QQFrIgsgCmsiEEkEfyAPQQFrBSAFIAtxIgUgEEEAIAUgCU4bayEHIA8LIQUgACACQQF0aiAHQQFrIgs7AQAgAkEBaiECIAUgBmohBiAJQQEgB2sgCyAHQQBKGyAKaiIKSgRAIApBAkgNAUEgIApnIgVrIQ9BASAFQR9zdCEJCyACIA5PDQAgC0EARyEHAn8gBCANSyAGQQN1IARqIgUgCEtxRQRAIAZBB3EhBiAFDAELIAYgBCAIa0EDdGpBH3EhBiAICyIEKAAAIAZ2IQUMAQsLQWwhBSAKQQFHDQAgAiAOSwRAQVAhBQwBCyAGQSBKDQAgASACQQFrNgIAIAQgBkEHakEDdWogA2shBQsgDEEQaiQAIAULrRkCEX8BfiMAQTBrIgckAEG4fyEIAkAgBUUNACAELAAAIglB/wFxIQ0CQAJAIAlBAEgEQCANQf4Aa0EBdiIGIAVPDQMgDUH/AGsiCEH/AUsNAiAEQQFqIQRBACEFA0AgBSAITwRAIAYhDQwDBSAAIAVqIg0gBCAFQQF2aiIJLQAAQQR2OgAAIA0gCS0AAEEPcToAASAFQQJqIQUMAQsACwALIAUgDU0NAiAHQf8BNgIEIAYgB0EEaiAHQQhqIARBAWoiCiANEAYiBEGIf0sEQCAEIQgMAwtBVCEIIAcoAggiC0EGSw0CIAcoAgQiBUEBdCIMQQJqrUIBIAuthiIYQQQgC3QiCUEIaq18fEILfEL8//////////8Ag0LoAlYNAkFSIQggBUH/AUsNAkHoAiAJa60gBUEBaiIQQQF0rSAYfEIIfFQNAiANIARrIRQgBCAKaiEVIAwgBkGABGoiDCAJakEEaiIWakECaiERIAZBhARqIRcgBkGGBGohE0GAgAIgC3RBEHYhCEEAIQVBASEOQQEgC3QiCkEBayISIQQDQCAFIBBGRQRAAkAgBiAFQQF0Ig9qLwEAIglB//8DRgRAIBMgBEECdGogBToAACAEQQFrIQRBASEJDAELIA5BACAIIAnBShshDgsgDyAWaiAJOwEAIAVBAWohBQwBCwsgBiAOOwGCBCAGIAs7AYAEAkAgBCASRgRAQgAhGEEAIQlBACEIA0AgCSAQRgRAIApBA3YgCkEBdmpBA2oiBkEBdCEJQQAhBEEAIQgDQCAIIApPDQQgCCARaiEQQQAhBQNAIAVBAkZFBEAgEyAFIAZsIARqIBJxQQJ0aiAFIBBqLQAAOgAAIAVBAWohBQwBCwsgCEECaiEIIAQgCWogEnEhBAwACwAFIAYgCUEBdGouAQAhBCAIIBFqIg8gGDcAAEEIIQUDQCAEIAVMRQRAIAUgD2ogGDcAACAFQQhqIQUMAQsLIBhCgYKEiJCgwIABfCEYIAlBAWohCSAEIAhqIQgMAQsACwALIApBA3YgCkEBdmpBA2ohEUEAIQhBACEFA0AgCCAQRkUEQEEAIQkgBiAIQQF0ai4BACIPQQAgD0EAShshDwNAIAkgD0ZFBEAgEyAFQQJ0aiAIOgAAA0AgBSARaiAScSIFIARLDQALIAlBAWohCQwBCwsgCEEBaiEIDAELC0F/IQggBQ0DCyALQR9rIQhBACEFA0AgBSAKRkUEQCAWIBcgBUECdGoiBC0AAkEBdGoiBiAGLwEAIgZBAWo7AQAgBCAIIAZnaiIJOgADIAQgBiAJdCAKazsBACAFQQFqIQUMAQsLAkACQCAOQf//A3EEQCAHQRxqIgQgFSAUEAgiCEGIf0sNAiAHQRRqIAQgDBAJIAdBDGogBCAMEAkgBygCICIIQSBLDQECQCAHAn8gBygCJCIEIAcoAixPBEAgByAEIAhBA3ZrIgU2AiQgCEEHcQwBCyAEIAcoAigiBUYNASAHIAQgBCAFayAIQQN2IgYgBCAGayAFSRsiBGsiBTYCJCAIIARBA3RrCyIINgIgIAcgBSgAADYCHAtBACEFA0ACQAJAIAhBIU8EQCAHQbAaNgIkDAELIAcCfyAHKAIkIgQgBygCLE8EQCAHIAQgCEEDdmsiBDYCJEEBIQkgCEEHcQwBCyAEIAcoAigiBkYNASAHIAQgCEEDdiIJIAQgBmsgBCAJayAGTyIJGyIGayIENgIkIAggBkEDdGsLNgIgIAcgBCgAADYCHCAJRSAFQfsBS3INACAAIAVqIgggB0EUaiAHQRxqIgQQCjoAACAIIAdBDGogBBAKOgABAkAgBygCICIGQSFPBEAgB0GwGjYCJAwBCyAHKAIkIgQgBygCLE8EQCAHIAZBB3E2AiAgByAEIAZBA3ZrIgQ2AiQgByAEKAAANgIcDAMLIAQgBygCKCIJRg0AIAcgBiAEIAlrIAZBA3YiBiAEIAZrIgYgCUkbIgpBA3RrNgIgIAcgBCAKayIENgIkIAcgBCgAADYCHCAGIAlPDQILIAVBAnIhBQsgAEEBaiEMAn8CQANAQbp/IQggBUH9AUsNByAAIAVqIgogB0EUaiAHQRxqEAo6AAAgBSAMaiELIAcoAiAiBkEgSw0BAkAgBwJ/IAcoAiQiBCAHKAIsTwRAIAcgBCAGQQN2ayIENgIkIAZBB3EMAQsgBCAHKAIoIglGDQEgByAEIAQgCWsgBkEDdiIOIAQgDmsgCUkbIglrIgQ2AiQgBiAJQQN0aws2AiAgByAEKAAANgIcCyAFQf0BRg0HIAsgB0EMaiAHQRxqEAo6AAAgBUECaiEFIAcoAiAiBkEgTQRAIAcCfyAHKAIkIgQgBygCLE8EQCAHIAQgBkEDdmsiCDYCJCAGQQdxDAELIAQgBygCKCIIRg0CIAcgBCAEIAhrIAZBA3YiCSAEIAlrIAhJGyIEayIINgIkIAYgBEEDdGsLNgIgIAcgCCgAADYCHAwBCwsgB0GwGjYCJCAAIAVqIAdBFGogB0EcahAKOgAAIApBA2oMAQsgB0GwGjYCJCALIAdBDGogB0EcahAKOgAAIApBAmoLIABrIQgMBAsgCCAHQRRqIAdBHGoiBBAKOgACIAggB0EMaiAEEAo6AAMgBUEEaiEFIAcoAiAhCAwACwALIAdBHGoiBCAVIBQQCCIIQYh/Sw0BIAdBFGogBCAMEAkgB0EMaiAEIAwQCSAHKAIgIghBIEsNAAJAIAcCfyAHKAIkIgQgBygCLE8EQCAHIAQgCEEDdmsiBTYCJCAIQQdxDAELIAQgBygCKCIFRg0BIAcgBCAEIAVrIAhBA3YiBiAEIAZrIAVJGyIEayIFNgIkIAggBEEDdGsLIgg2AiAgByAFKAAANgIcC0EAIQUDQAJAAkAgCEEhTwRAIAdBsBo2AiQMAQsgBwJ/IAcoAiQiBCAHKAIsTwRAIAcgBCAIQQN2ayIENgIkQQEhCSAIQQdxDAELIAQgBygCKCIGRg0BIAcgBCAIQQN2IgkgBCAGayAEIAlrIAZPIgkbIgZrIgQ2AiQgCCAGQQN0aws2AiAgByAEKAAANgIcIAlFIAVB+wFLcg0AIAAgBWoiCCAHQRRqIAdBHGoiBBALOgAAIAggB0EMaiAEEAs6AAECQCAHKAIgIgZBIU8EQCAHQbAaNgIkDAELIAcoAiQiBCAHKAIsTwRAIAcgBkEHcTYCICAHIAQgBkEDdmsiBDYCJCAHIAQoAAA2AhwMAwsgBCAHKAIoIglGDQAgByAGIAQgCWsgBkEDdiIGIAQgBmsiBiAJSRsiCkEDdGs2AiAgByAEIAprIgQ2AiQgByAEKAAANgIcIAYgCU8NAgsgBUECciEFCyAAQQFqIQwCfwJAA0BBun8hCCAFQf0BSw0GIAAgBWoiCiAHQRRqIAdBHGoQCzoAACAFIAxqIQsgBygCICIGQSBLDQECQCAHAn8gBygCJCIEIAcoAixPBEAgByAEIAZBA3ZrIgQ2AiQgBkEHcQwBCyAEIAcoAigiCUYNASAHIAQgBCAJayAGQQN2Ig4gBCAOayAJSRsiCWsiBDYCJCAGIAlBA3RrCzYCICAHIAQoAAA2AhwLIAVB/QFGDQYgCyAHQQxqIAdBHGoQCzoAACAFQQJqIQUgBygCICIGQSBNBEAgBwJ/IAcoAiQiBCAHKAIsTwRAIAcgBCAGQQN2ayIINgIkIAZBB3EMAQsgBCAHKAIoIghGDQIgByAEIAQgCGsgBkEDdiIJIAQgCWsgCEkbIgRrIgg2AiQgBiAEQQN0aws2AiAgByAIKAAANgIcDAELCyAHQbAaNgIkIAAgBWogB0EUaiAHQRxqEAs6AAAgCkEDagwBCyAHQbAaNgIkIAsgB0EMaiAHQRxqEAs6AAAgCkECagsgAGshCAwDCyAIIAdBFGogB0EcaiIEEAs6AAIgCCAHQQxqIAQQCzoAAyAFQQRqIQUgBygCICEIDAALAAtBbCEICyAIQYh/Sw0CC0EAIQUgAUEAQTT8CwAgCCEGQQAhBANAIAUgBkcEQCAAIAVqIggtAAAiCUEMSw0CIAEgCUECdGoiCSAJKAIAQQFqNgIAIAVBAWohBUEBIAgtAAB0QQF1IARqIQQMAQsLQWwhCCAERQ0BIARnIgVBHHNBC0sNASADQSAgBWsiAzYCAEGAgICAeEEBIAN0IARrIgNnIgR2IANHDQEgACAGakEgIARrIgA6AAAgASAAQQJ0aiIAIAAoAgBBAWo2AgAgASgCBCIAQQJJIABBAXFyDQEgAiAGQQFqNgIAIA1BAWohCAwBC0FsIQgLIAdBMGokACAIC/UBAQF/IAJFBEAgAEIANwIAIABBADYCECAAQgA3AghBuH8PCyAAIAE2AgwgACABQQRqNgIQIAJBBE8EQCAAIAEgAmoiAUEEayIDNgIIIAAgAygAADYCACABQQFrLQAAIgEEQCAAQQggAWdBH3NrNgIEIAIPCyAAQQA2AgRBfw8LIAAgATYCCCAAIAEtAAAiAzYCAAJAAkACQCACQQJrDgIBAAILIAAgAS0AAkEQdCADciIDNgIACyAAIAEtAAFBCHQgA2o2AgALIAEgAmpBAWstAAAiAUUEQCAAQQA2AgRBbA8LIAAgAWcgAkEDdGtBCWo2AgQgAguuAQEEfyABIAIvAQAiAyABKAIEaiIENgIEIAAgA0ECdEGwGWooAgAgASgCAEEAIARrdnE2AgACQCAEQSFPBEAgAUGwGjYCCAwBCyABKAIIIgMgASgCEE8EQCABEAwMAQsgAyABKAIMIgVGDQAgASADIAMgBWsgBEEDdiIGIAMgBmsgBUkbIgNrIgU2AgggASAEIANBA3RrNgIEIAEgBSgAADYCAAsgACACQQRqNgIEC0wBBH8gACgCBCAAKAIAQQJ0aiICLQACIQMgAi8BACEEIAEgASgCBCIFIAItAAMiAmo2AgQgACAEIAEoAgAgBXRBACACa3ZqNgIAIAMLVgEEfyAAKAIEIAAoAgBBAnRqIgItAAIhAyACLwEAIQQgASACLQADIgIgASgCBGoiBTYCBCAAIAQgAkECdEGwGWooAgAgASgCAEEAIAVrdnFqNgIAIAMLLwEBfyAAIAAoAgQiAUEHcTYCBCAAIAAoAgggAUEDdmsiATYCCCAAIAEoAAA2AgALCAAgAEGIf0sLxQkCDX8CfiMAQRBrIgskACALQQA2AgwgC0EANgIIAn8CQCADQdQJaiIFIAMgC0EIaiALQQxqIAEgAiADQegAahAHIhBBiH9LDQAgCygCCCEIQQogACgCACIJQf8BcSIHIAdBCk8bQQFqIgQgCygCDCIBTwRAAkAgASAETw0AIAQgAWshAkEAIQEDQCABIAhGBEAgBCEBA0AgASACTQRAA0AgAkUNBSADIAJBAnRqQQA2AgAgAkEBayECDAALAAUgAyABQQJ0aiADIAEgAmtBAnRqKAIANgIAIAFBAWshAQwBCwALAAUgASAFaiIKIAJBACAKLQAAIgobIApqOgAAIAFBAWohAQwBCwALAAsgBCEBC0FUIAEgB0EBaksNARogAEEEaiEKIAAgCUH/gYB4cSABQRB0QYCA/AdxcjYCACABQQFqIQ4gA0E0aiEEQQAhAUEAIQIDQCACIA5GRQRAIAMgAkECdCIAaigCACEHIAAgBGogATYCACACQQFqIQIgASAHaiEBDAELCyADQdQHaiEHIAhBA2shAUEAIQADQAJAQQAhAiAAIAFOBEADQCAAIAhODQIgBCAAIAVqLQAAQQJ0aiIBIAEoAgAiAUEBajYCACABIAdqIAA6AAAgAEEBaiEADAALAAUDQCACQQRGRQRAIAQgBSAAIAJyIglqLQAAQQJ0aiIMIAwoAgAiDEEBajYCACAHIAxqIAk6AAAgAkEBaiECDAELCyAAQQRqIQAMAgsACwsgAygCACEIQQAhAEEBIQkDQCAJIA5GDQEgDiAJayEEIAMgCUECdGooAgAhBQJAAkACQAJAAkACQEEBIAl0QQF1IgxBAWsOCAABBAIEBAQDBAtBACECIAVBACAFQQBKGyEGIAAhAQNAIAIgBkYNBSAKIAFBAXRqIg0gByACIAhqai0AADoAASANIAQ6AAAgAkEBaiECIAFBAWohAQwACwALQQAhAiAFQQAgBUEAShshDSAAIQEDQCACIA1GDQQgCiABQQF0aiIGIAcgAiAIamotAAAiDzoAAyAGIAQ6AAIgBiAPOgABIAYgBDoAACACQQFqIQIgAUECaiEBDAALAAtBACECIAVBACAFQQBKGyEGIARB/wFxrSERIAAhAQNAIAIgBkYNAyAKIAFBAXRqIAcgAiAIamoxAABCCIYgEYRCgYCEgJCAwAB+NwAAIAJBAWohAiABQQRqIQEMAAsAC0EAIQIgBUEAIAVBAEobIQYgBEH/AXGtIREgACEBA0AgAiAGRg0CIAogAUEBdGoiBCAHIAIgCGpqMQAAQgiGIBGEQoGAhICQgMAAfiISNwAIIAQgEjcAACACQQFqIQIgAUEIaiEBDAALAAtBACEBIAVBACAFQQBKGyENIARB/wFxrSESIAAhBANAIAEgDUYNASAKIARBAXRqIQ8gByABIAhqajEAAEIIhiAShEKBgISAkIDAAH4hEUEAIQIDQCACIAxORQRAIA8gAkEBdGoiBiARNwAYIAYgETcAECAGIBE3AAggBiARNwAAIAJBEGohAgwBCwsgAUEBaiEBIAQgDGohBAwACwALIAlBAWohCSAFIAhqIQggBSAMbCAAaiEADAALAAsgEAshAiALQRBqJAAgAgufAwIBfgF/AkACQAJAAkACQAJAQQEgBCADa3QiCEEBaw4IAAEEAgQEBAMECyAGQRh0IANBEHRqIQMDQCABIAJGDQUgACABLQAAIgQgBEEIdCAFciAGQQFGGyADcjYBACABQQFqIQEgAEEEaiEADAALAAsgBkEYdCADQRB0aiEDA0AgASACRg0EIAAgAS0AACIEIARBCHQgBXIgBkEBRhsgA3IiBDYBBCAAIAQ2AQAgAUEBaiEBIABBCGohAAwACwALA0AgASACRg0DIAAgAS0AACADIAUgBhAQIgc3AQggACAHNwEAIAFBAWohASAAQRBqIQAMAAsACwNAIAEgAkYNAiAAIAEtAAAgAyAFIAYQECIHNwEYIAAgBzcBECAAIAc3AQggACAHNwEAIAFBAWohASAAQSBqIQAMAAsACwNAIAEgAkYNASAAIAhBAnRqIQQgAS0AACADIAUgBhAQIQcDQCAAIARGRQRAIAAgBzcBGCAAIAc3ARAgACAHNwEIIAAgBzcBACAAQSBqIQAMAQsLIAFBAWohASAEIQAMAAsACwsmACADQRh0IAFBEHRqIAAgAEEIdCACciADQQFGG3KtQoGAgIAQfgu7BgEKfyMAQSBrIgUkACAELwECIQsgBUEMaiACIAMQCCIDQYh/TQRAIARBBGohCCAAIAFqIQkCQAJAAkAgAUEETwRAIAlBA2shDUEAIAtrQR9xIQwgBSgCFCEDIAUoAhghByAFKAIcIQ4gBSgCDCEGIAUoAhAhBANAIARBIEsEQEGwGiEDDAQLAkAgAyAOTwRAIARBB3EhAiAEQQN2IQZBASEEDAELIAMgB0YNBCAEIARBA3YiAiADIAdrIAMgAmsgB08iBBsiBkEDdGshAgsgAyAGayIDKAAAIQYgBEUgACANT3INAiAIIAYgAnQgDHZBAXRqIgQtAAAhCiAAIAQtAAE6AAAgCCAGIAIgCmoiAnQgDHZBAXRqIgQtAAAhCiAAIAQtAAE6AAEgAiAKaiEEIABBAmohAAwACwALIAUoAhAiBEEhTwRAIAVBsBo2AhQMAwsgBSgCFCIDIAUoAhxPBEAgBSAEQQdxIgI2AhAgBSADIARBA3ZrIgM2AhQgBSADKAAANgIMIAIhBAwDCyADIAUoAhgiAkYNAiAFIAQgAyACayAEQQN2IgQgAyAEayACSRsiAkEDdGsiBDYCECAFIAMgAmsiAjYCFCAFIAIoAAA2AgwMAgsgAiEECyAFIAQ2AhAgBSADNgIUIAUgBjYCDAtBACALa0EfcSEHA0ACQCAEQSFPBEAgBUGwGjYCFAwBCyAFAn8gBSgCFCICIAUoAhxPBEAgBSACIARBA3ZrIgM2AhRBASEGIARBB3EMAQsgAiAFKAIYIgNGDQEgBSACIARBA3YiBiACIANrIAIgBmsgA08iBhsiAmsiAzYCFCAEIAJBA3RrCyIENgIQIAUgAygAACICNgIMIAZFIAAgCU9yDQAgCCACIAR0IAd2QQF0aiICLQABIQMgBSAEIAItAABqNgIQIAAgAzoAACAAQQFqIQAgBSgCECEEDAELCwNAIAAgCU9FBEAgCCAFKAIMIAUoAhAiAnQgB3ZBAXRqIgMtAAEhBCAFIAIgAy0AAGo2AhAgACAEOgAAIABBAWohAAwBCwtBbEFsIAEgBSgCEEEgRxsgBSgCFCAFKAIYRxshAwsgBUEgaiQAIAML/SEBGX8jAEHQAGsiBSQAQWwhBgJAIAFBBkkgA0EKSXINAAJAIAMgAi8ABCIHIAIvAAAiCiACLwACIglqakEGaiILSQ0AIAAgAUEDakECdiIMaiIIIAxqIg0gDGoiDCAAIAFqIhFLDQAgBC8BAiEOIAVBPGogAkEGaiICIAoQCCIGQYh/Sw0BIAVBKGogAiAKaiICIAkQCCIGQYh/Sw0BIAVBFGogAiAJaiICIAcQCCIGQYh/Sw0BIAUgAiAHaiADIAtrEAgiBkGIf0sNASAEQQRqIQogEUEDayESAkAgESAMa0EESQRAIAwhAyANIQIgCCEEDAELQQAgDmtBH3EhBkEAIQkgDCEDIA0hAiAIIQQDQCAJQQFxIAMgEk9yDQEgACAKIAUoAjwiCSAFKAJAIgt0IAZ2QQJ0aiIHLwEAOwAAIActAAIhECAHLQADIQ8gBCAKIAUoAigiEyAFKAIsIhR0IAZ2QQJ0aiIHLwEAOwAAIActAAIhFSAHLQADIRYgAiAKIAUoAhQiFyAFKAIYIhh0IAZ2QQJ0aiIHLwEAOwAAIActAAIhGSAHLQADIRogAyAKIAUoAgAiGyAFKAIEIhx0IAZ2QQJ0aiIHLwEAOwAAIActAAIhHSAHLQADIQcgACAPaiIPIAogCSALIBBqIgl0IAZ2QQJ0aiIALwEAOwAAIAUgCSAALQACajYCQCAALQADIQkgBCAWaiIEIAogEyAUIBVqIgt0IAZ2QQJ0aiIALwEAOwAAIAUgCyAALQACajYCLCAALQADIQsgAiAaaiICIAogFyAYIBlqIhB0IAZ2QQJ0aiIALwEAOwAAIAUgECAALQACajYCGCAALQADIRAgAyAHaiIHIAogGyAcIB1qIgB0IAZ2QQJ0aiIDLwEAOwAAIAUgACADLQACajYCBCAJIA9qIQAgBCALaiEEIAIgEGohAiAHIAMtAANqIQMgBUE8ahATIAVBKGoQE3IgBUEUahATciAFEBNyQQBHIQkMAAsACyAAIAhLIAQgDUtyDQBBbCEGIAIgDEsNAQJAAkAgCCAAayIJQQRPBEAgCEEDayEQQQAgDmtBH3EhCyAFKAJAIQYDQCAGQSFPBEAgBUGwGjYCRAwDCyAFAn8gBSgCRCIHIAUoAkxPBEAgBSAHIAZBA3ZrIgk2AkRBASEHIAZBB3EMAQsgByAFKAJIIglGDQMgBSAHIAZBA3YiDyAHIAlrIAcgD2sgCU8iBxsiD2siCTYCRCAGIA9BA3RrCyIGNgJAIAUgCSgAACIJNgI8IAdFIAAgEE9yDQIgACAKIAkgBnQgC3ZBAnRqIgYvAQA7AAAgBSAFKAJAIAYtAAJqIgc2AkAgACAGLQADaiIJIAogBSgCPCAHdCALdkECdGoiAC8BADsAACAFIAUoAkAgAC0AAmoiBjYCQCAJIAAtAANqIQAMAAsACyAFKAJAIgZBIU8EQCAFQbAaNgJEDAILIAUoAkQiCyAFKAJMTwRAIAUgBkEHcSIHNgJAIAUgCyAGQQN2ayIGNgJEIAUgBigAADYCPCAHIQYMAgsgCyAFKAJIIgdGDQEgBSAGIAsgB2sgBkEDdiIGIAsgBmsgB0kbIgdBA3RrIgY2AkAgBSALIAdrIgc2AkQgBSAHKAAANgI8DAELIAggAGshCQsCQCAJQQJJDQAgCEECayELQQAgDmtBH3EhEANAAkAgBkEhTwRAIAVBsBo2AkQMAQsgBQJ/IAUoAkQiByAFKAJMTwRAIAUgByAGQQN2ayIJNgJEQQEhByAGQQdxDAELIAcgBSgCSCIJRg0BIAUgByAGQQN2Ig8gByAJayAHIA9rIAlPIgcbIg9rIgk2AkQgBiAPQQN0awsiBjYCQCAFIAkoAAAiCTYCPCAHRSAAIAtLcg0AIAAgCiAJIAZ0IBB2QQJ0aiIHLwEAOwAAIAUgBSgCQCAHLQACaiIGNgJAIAAgBy0AA2ohAAwBCwsDQCAAIAtLDQEgACAKIAUoAjwgBnQgEHZBAnRqIgcvAQA7AAAgBSAFKAJAIActAAJqIgY2AkAgACAHLQADaiEADAALAAsCQCAAIAhPDQAgACAKIAUoAjwgBnRBACAOa3ZBAnRqIgAtAAA6AAAgBQJ/IAAtAANBAUYEQCAFKAJAIAAtAAJqDAELIAUoAkAiCEEfSw0BQSAgCCAALQACaiIAIABBIE8bCzYCQAsCQAJAIA0gBGsiBkEETwRAIA1BA2shCUEAIA5rQR9xIQcgBSgCLCEAA0AgAEEhTwRAIAVBsBo2AjAMAwsgBQJ/IAUoAjAiCCAFKAI4TwRAIAUgCCAAQQN2ayIGNgIwQQEhCCAAQQdxDAELIAggBSgCNCIGRg0DIAUgCCAAQQN2IgsgCCAGayAIIAtrIAZPIggbIgtrIgY2AjAgACALQQN0awsiADYCLCAFIAYoAAAiBjYCKCAIRSAEIAlPcg0CIAQgCiAGIAB0IAd2QQJ0aiIALwEAOwAAIAUgBSgCLCAALQACaiIINgIsIAQgAC0AA2oiBiAKIAUoAiggCHQgB3ZBAnRqIgQvAQA7AAAgBSAFKAIsIAQtAAJqIgA2AiwgBiAELQADaiEEDAALAAsgBSgCLCIAQSFPBEAgBUGwGjYCMAwCCyAFKAIwIgcgBSgCOE8EQCAFIABBB3EiCDYCLCAFIAcgAEEDdmsiADYCMCAFIAAoAAA2AiggCCEADAILIAcgBSgCNCIIRg0BIAUgACAHIAhrIABBA3YiACAHIABrIAhJGyIIQQN0ayIANgIsIAUgByAIayIINgIwIAUgCCgAADYCKAwBCyANIARrIQYLAkAgBkECSQ0AIA1BAmshCUEAIA5rQR9xIQsDQAJAIABBIU8EQCAFQbAaNgIwDAELIAUCfyAFKAIwIgggBSgCOE8EQCAFIAggAEEDdmsiBjYCMEEBIQcgAEEHcQwBCyAIIAUoAjQiBkYNASAFIAggAEEDdiIHIAggBmsgCCAHayAGTyIHGyIIayIGNgIwIAAgCEEDdGsLIgA2AiwgBSAGKAAAIgg2AiggB0UgBCAJS3INACAEIAogCCAAdCALdkECdGoiCC8BADsAACAFIAUoAiwgCC0AAmoiADYCLCAEIAgtAANqIQQMAQsLA0AgBCAJSw0BIAQgCiAFKAIoIAB0IAt2QQJ0aiIILwEAOwAAIAUgBSgCLCAILQACaiIANgIsIAQgCC0AA2ohBAwACwALAkAgBCANTw0AIAQgCiAFKAIoIAB0QQAgDmt2QQJ0aiIALQAAOgAAIAUCfyAALQADQQFGBEAgBSgCLCAALQACagwBCyAFKAIsIgRBH0sNAUEgIAQgAC0AAmoiACAAQSBPGws2AiwLAkACQCAMIAJrIgZBBE8EQCAMQQNrIQdBACAOa0EfcSEIIAUoAhghAANAIABBIU8EQCAFQbAaNgIcDAMLIAUCfyAFKAIcIgQgBSgCJE8EQCAFIAQgAEEDdmsiBjYCHEEBIQkgAEEHcQwBCyAEIAUoAiAiDUYNAyAFIAQgAEEDdiIGIAQgDWsgBCAGayANTyIJGyIEayIGNgIcIAAgBEEDdGsLIgA2AhggBSAGKAAAIgQ2AhQgCUUgAiAHT3INAiACIAogBCAAdCAIdkECdGoiAC8BADsAACAFIAUoAhggAC0AAmoiBDYCGCACIAAtAANqIg0gCiAFKAIUIAR0IAh2QQJ0aiICLwEAOwAAIAUgBSgCGCACLQACaiIANgIYIA0gAi0AA2ohAgwACwALIAUoAhgiAEEhTwRAIAVBsBo2AhwMAgsgBSgCHCIIIAUoAiRPBEAgBSAAQQdxIgQ2AhggBSAIIABBA3ZrIgA2AhwgBSAAKAAANgIUIAQhAAwCCyAIIAUoAiAiBEYNASAFIAAgCCAEayAAQQN2IgAgCCAAayAESRsiBEEDdGsiADYCGCAFIAggBGsiBDYCHCAFIAQoAAA2AhQMAQsgDCACayEGCwJAIAZBAkkNACAMQQJrIQ1BACAOa0EfcSEHA0ACQCAAQSFPBEAgBUGwGjYCHAwBCyAFAn8gBSgCHCIEIAUoAiRPBEAgBSAEIABBA3ZrIgY2AhxBASEIIABBB3EMAQsgBCAFKAIgIghGDQEgBSAEIABBA3YiBiAEIAhrIAQgBmsgCE8iCBsiBGsiBjYCHCAAIARBA3RrCyIANgIYIAUgBigAACIENgIUIAhFIAIgDUtyDQAgAiAKIAQgAHQgB3ZBAnRqIgQvAQA7AAAgBSAFKAIYIAQtAAJqIgA2AhggAiAELQADaiECDAELCwNAIAIgDUsNASACIAogBSgCFCAAdCAHdkECdGoiBC8BADsAACAFIAUoAhggBC0AAmoiADYCGCACIAQtAANqIQIMAAsACwJAIAIgDE8NACACIAogBSgCFCAAdEEAIA5rdkECdGoiAC0AADoAACAFAn8gAC0AA0EBRgRAIAUoAhggAC0AAmoMAQsgBSgCGCICQR9LDQFBICACIAAtAAJqIgAgAEEgTxsLNgIYCwJAIBEgA2tBBE8EQEEAIA5rQR9xIQQgBSgCBCEAA0AgAEEhTwRAIAVBsBo2AggMAwsgBQJ/IAUoAggiAiAFKAIQTwRAIAUgAiAAQQN2ayIGNgIIQQEhAiAAQQdxDAELIAIgBSgCDCIMRg0DIAUgAiAAQQN2IgggAiAMayACIAhrIAxPIgIbIgxrIgY2AgggACAMQQN0awsiADYCBCAFIAYoAAAiDDYCACACRSADIBJPcg0CIAMgCiAMIAB0IAR2QQJ0aiIALwEAOwAAIAUgBSgCBCAALQACaiICNgIEIAMgAC0AA2oiAyAKIAUoAgAgAnQgBHZBAnRqIgIvAQA7AAAgBSAFKAIEIAItAAJqIgA2AgQgAyACLQADaiEDDAALAAsgBSgCBCIAQSFPBEAgBUGwGjYCCAwBCyAFKAIIIgQgBSgCEE8EQCAFIABBB3EiAjYCBCAFIAQgAEEDdmsiADYCCCAFIAAoAAA2AgAgAiEADAELIAQgBSgCDCICRg0AIAUgACAEIAJrIABBA3YiACAEIABrIAJJGyICQQN0ayIANgIEIAUgBCACayICNgIIIAUgAigAADYCAAsCQCARIANrQQJJDQAgEUECayEEQQAgDmtBH3EhDANAAkAgAEEhTwRAIAVBsBo2AggMAQsgBQJ/IAUoAggiAiAFKAIQTwRAIAUgAiAAQQN2ayIGNgIIQQEhCSAAQQdxDAELIAIgBSgCDCIIRg0BIAUgAiAAQQN2Ig0gAiAIayACIA1rIAhPIgkbIgJrIgY2AgggACACQQN0awsiADYCBCAFIAYoAAAiAjYCACAJRSADIARLcg0AIAMgCiACIAB0IAx2QQJ0aiICLwEAOwAAIAUgBSgCBCACLQACaiIANgIEIAMgAi0AA2ohAwwBCwsDQCADIARLDQEgAyAKIAUoAgAgAHQgDHZBAnRqIgIvAQA7AAAgBSAFKAIEIAItAAJqIgA2AgQgAyACLQADaiEDDAALAAsCQCADIBFPDQAgAyAKIAUoAgAgAHRBACAOa3ZBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAUoAgQgAi0AAmohAAwBCyAFKAIEIgBBH0sNAEEgIAAgAi0AAmoiACAAQSBPGyEAC0FsQWxBbEFsQWxBbEFsQWwgASAAQSBHGyAFKAIIIAUoAgxHGyAFKAIYQSBHGyAFKAIcIAUoAiBHGyAFKAIsQSBHGyAFKAIwIAUoAjRHGyAFKAJAQSBHGyAFKAJEIAUoAkhHGyEGDAELQWwhBgsgBUHQAGokACAGCxkAIAAoAgggACgCEEkEQEEDDwsgABAMQQAL8xwBFn8jAEHQAGsiBSQAQWwhCAJAIAFBBkkgA0EKSXINAAJAIAMgAi8ABCIGIAIvAAAiCiACLwACIglqakEGaiISSQ0AIAAgAUEDakECdiILaiIHIAtqIg4gC2oiCyAAIAFqIg9LDQAgBC8BAiEMIAVBPGogAkEGaiICIAoQCCIIQYh/Sw0BIAVBKGogAiAKaiICIAkQCCIIQYh/Sw0BIAVBFGogAiAJaiICIAYQCCIIQYh/Sw0BIAUgAiAGaiADIBJrEAgiCEGIf0sNASAEQQRqIQogD0EDayESAkAgDyALa0EESQRAIAshAyAOIQIgByEEDAELQQAgDGtBH3EhCEEAIQYgCyEDIA4hAiAHIQQDQCAGQQFxIAMgEk9yDQEgCiAFKAI8IgYgBSgCQCIJdCAIdkEBdGoiDS0AACEQIAAgDS0AAToAACAKIAUoAigiDSAFKAIsIhF0IAh2QQF0aiITLQAAIRUgBCATLQABOgAAIAogBSgCFCITIAUoAhgiFnQgCHZBAXRqIhQtAAAhFyACIBQtAAE6AAAgCiAFKAIAIhQgBSgCBCIYdCAIdkEBdGoiGS0AACEaIAMgGS0AAToAACAKIAYgCSAQaiIGdCAIdkEBdGoiCS0AASEQIAUgBiAJLQAAajYCQCAAIBA6AAEgCiANIBEgFWoiBnQgCHZBAXRqIgktAAEhDSAFIAYgCS0AAGo2AiwgBCANOgABIAogEyAWIBdqIgZ0IAh2QQF0aiIJLQABIQ0gBSAGIAktAABqNgIYIAIgDToAASAKIBQgGCAaaiIGdCAIdkEBdGoiCS0AASENIAUgBiAJLQAAajYCBCADIA06AAEgA0ECaiEDIAJBAmohAiAEQQJqIQQgAEECaiEAIAVBPGoQEyAFQShqEBNyIAVBFGoQE3IgBRATckEARyEGDAALAAsgACAHSyAEIA5Lcg0AQWwhCCACIAtLDQECQCAHIABrQQROBEAgB0EDayEQQQAgDGtBH3EhDQNAIAUoAkAiBkEhTwRAIAVBsBo2AkQMAwsgBQJ/IAUoAkQiCCAFKAJMTwRAIAUgCCAGQQN2ayIINgJEQQEhCSAGQQdxDAELIAggBSgCSCIJRg0DIAUgCCAGQQN2IhEgCCAJayAIIBFrIAlPIgkbIhFrIgg2AkQgBiARQQN0awsiBjYCQCAFIAgoAAAiCDYCPCAJRSAAIBBPcg0CIAogCCAGdCANdkEBdGoiCC0AASEJIAUgBiAILQAAajYCQCAAIAk6AAAgCiAFKAI8IAUoAkAiBnQgDXZBAXRqIggtAAEhCSAFIAYgCC0AAGo2AkAgACAJOgABIABBAmohAAwACwALIAUoAkAiBkEhTwRAIAVBsBo2AkQMAQsgBSgCRCIJIAUoAkxPBEAgBSAGQQdxIgg2AkAgBSAJIAZBA3ZrIgY2AkQgBSAGKAAANgI8IAghBgwBCyAJIAUoAkgiCEYNACAFIAYgCSAIayAGQQN2IgYgCSAGayAISRsiCEEDdGsiBjYCQCAFIAkgCGsiCDYCRCAFIAgoAAA2AjwLQQAgDGtBH3EhCANAAkAgBkEhTwRAIAVBsBo2AkQMAQsgBQJ/IAUoAkQiCSAFKAJMTwRAIAUgCSAGQQN2ayIMNgJEQQEhCSAGQQdxDAELIAkgBSgCSCIMRg0BIAUgCSAGQQN2Ig0gCSAMayAJIA1rIAxPIgkbIg1rIgw2AkQgBiANQQN0awsiBjYCQCAFIAwoAAAiDDYCPCAJRSAAIAdPcg0AIAogDCAGdCAIdkEBdGoiCS0AASEMIAUgBiAJLQAAajYCQCAAIAw6AAAgAEEBaiEAIAUoAkAhBgwBCwsDQCAAIAdPRQRAIAogBSgCPCAFKAJAIgZ0IAh2QQF0aiIJLQABIQwgBSAGIAktAABqNgJAIAAgDDoAACAAQQFqIQAMAQsLAkAgDiAEa0EETgRAIA5BA2shCQNAIAUoAiwiAEEhTwRAIAVBsBo2AjAMAwsgBQJ/IAUoAjAiByAFKAI4TwRAIAUgByAAQQN2ayIGNgIwQQEhByAAQQdxDAELIAcgBSgCNCIGRg0DIAUgByAAQQN2IgwgByAGayAHIAxrIAZPIgcbIgxrIgY2AjAgACAMQQN0awsiADYCLCAFIAYoAAAiBjYCKCAHRSAEIAlPcg0CIAogBiAAdCAIdkEBdGoiBy0AASEGIAUgACAHLQAAajYCLCAEIAY6AAAgCiAFKAIoIAUoAiwiAHQgCHZBAXRqIgctAAEhBiAFIAAgBy0AAGo2AiwgBCAGOgABIARBAmohBAwACwALIAUoAiwiAEEhTwRAIAVBsBo2AjAMAQsgBSgCMCIGIAUoAjhPBEAgBSAAQQdxIgc2AiwgBSAGIABBA3ZrIgA2AjAgBSAAKAAANgIoIAchAAwBCyAGIAUoAjQiB0YNACAFIAAgBiAHayAAQQN2IgAgBiAAayAHSRsiB0EDdGsiADYCLCAFIAYgB2siBzYCMCAFIAcoAAA2AigLA0ACQCAAQSFPBEAgBUGwGjYCMAwBCyAFAn8gBSgCMCIHIAUoAjhPBEAgBSAHIABBA3ZrIgY2AjBBASEHIABBB3EMAQsgByAFKAI0IgZGDQEgBSAHIABBA3YiCSAHIAZrIAcgCWsgBk8iBxsiCWsiBjYCMCAAIAlBA3RrCyIANgIsIAUgBigAACIGNgIoIAdFIAQgDk9yDQAgCiAGIAB0IAh2QQF0aiIHLQABIQYgBSAAIActAABqNgIsIAQgBjoAACAEQQFqIQQgBSgCLCEADAELCwNAIAQgDk9FBEAgCiAFKAIoIAUoAiwiAHQgCHZBAXRqIgctAAEhBiAFIAAgBy0AAGo2AiwgBCAGOgAAIARBAWohBAwBCwsCQCALIAJrQQROBEAgC0EDayEOA0AgBSgCGCIAQSFPBEAgBUGwGjYCHAwDCyAFAn8gBSgCHCIEIAUoAiRPBEAgBSAEIABBA3ZrIgQ2AhxBASEGIABBB3EMAQsgBCAFKAIgIgdGDQMgBSAEIABBA3YiBiAEIAdrIAQgBmsgB08iBhsiB2siBDYCHCAAIAdBA3RrCyIANgIYIAUgBCgAACIENgIUIAZFIAIgDk9yDQIgCiAEIAB0IAh2QQF0aiIELQABIQcgBSAAIAQtAABqNgIYIAIgBzoAACAKIAUoAhQgBSgCGCIAdCAIdkEBdGoiBC0AASEHIAUgACAELQAAajYCGCACIAc6AAEgAkECaiECDAALAAsgBSgCGCIAQSFPBEAgBUGwGjYCHAwBCyAFKAIcIgcgBSgCJE8EQCAFIABBB3EiBDYCGCAFIAcgAEEDdmsiADYCHCAFIAAoAAA2AhQgBCEADAELIAcgBSgCICIERg0AIAUgACAHIARrIABBA3YiACAHIABrIARJGyIEQQN0ayIANgIYIAUgByAEayIENgIcIAUgBCgAADYCFAsDQAJAIABBIU8EQCAFQbAaNgIcDAELIAUCfyAFKAIcIgQgBSgCJE8EQCAFIAQgAEEDdmsiBDYCHEEBIQYgAEEHcQwBCyAEIAUoAiAiB0YNASAFIAQgAEEDdiIOIAQgB2sgBCAOayAHTyIGGyIHayIENgIcIAAgB0EDdGsLIgA2AhggBSAEKAAAIgQ2AhQgBkUgAiALT3INACAKIAQgAHQgCHZBAXRqIgQtAAEhByAFIAAgBC0AAGo2AhggAiAHOgAAIAJBAWohAiAFKAIYIQAMAQsLA0AgAiALT0UEQCAKIAUoAhQgBSgCGCIAdCAIdkEBdGoiBC0AASEHIAUgACAELQAAajYCGCACIAc6AAAgAkEBaiECDAELCwJAIA8gA2tBBE4EQANAIAUoAgQiAEEhTwRAIAVBsBo2AggMAwsgBQJ/IAUoAggiAiAFKAIQTwRAIAUgAiAAQQN2ayIENgIIQQEhAiAAQQdxDAELIAIgBSgCDCIERg0DIAUgAiAAQQN2IgsgAiAEayACIAtrIARPIgIbIgtrIgQ2AgggACALQQN0awsiADYCBCAFIAQoAAAiBDYCACACRSADIBJPcg0CIAogBCAAdCAIdkEBdGoiAi0AASEEIAUgACACLQAAajYCBCADIAQ6AAAgCiAFKAIAIAUoAgQiAHQgCHZBAXRqIgItAAEhBCAFIAAgAi0AAGo2AgQgAyAEOgABIANBAmohAwwACwALIAUoAgQiAEEhTwRAIAVBsBo2AggMAQsgBSgCCCIEIAUoAhBPBEAgBSAAQQdxIgI2AgQgBSAEIABBA3ZrIgA2AgggBSAAKAAANgIAIAIhAAwBCyAEIAUoAgwiAkYNACAFIAAgBCACayAAQQN2IgAgBCAAayACSRsiAkEDdGsiADYCBCAFIAQgAmsiAjYCCCAFIAIoAAA2AgALA0ACQCAAQSFPBEAgBUGwGjYCCAwBCyAFAn8gBSgCCCICIAUoAhBPBEAgBSACIABBA3ZrIgQ2AghBASECIABBB3EMAQsgAiAFKAIMIgRGDQEgBSACIABBA3YiCyACIARrIAIgC2sgBE8iAhsiC2siBDYCCCAAIAtBA3RrCyIANgIEIAUgBCgAACIENgIAIAJFIAMgD09yDQAgCiAEIAB0IAh2QQF0aiICLQABIQQgBSAAIAItAABqNgIEIAMgBDoAACADQQFqIQMgBSgCBCEADAELCwNAIAMgD09FBEAgCiAFKAIAIAUoAgQiAHQgCHZBAXRqIgItAAEhBCAFIAAgAi0AAGo2AgQgAyAEOgAAIANBAWohAwwBCwtBbEFsQWxBbEFsQWxBbEFsIAEgBSgCBEEgRxsgBSgCCCAFKAIMRxsgBSgCGEEgRxsgBSgCHCAFKAIgRxsgBSgCLEEgRxsgBSgCMCAFKAI0RxsgBSgCQEEgRxsgBSgCRCAFKAJIRxshCAwBC0FsIQgLIAVB0ABqJAAgCAsaACAABEAgAQRAIAIgACABEQIADwsgABACCwtSAQN/AkAgACgCmOsBIgFFDQAgASgCACABKAK01QEiAiABKAK41QEiAxAVIAIEQCADIAEgAhECAAwBCyABEAILIABBADYCqOsBIABCADcDmOsBC5QFAgR/An4jAEEQayIGJAACQCABIAJFckUEQEF/IQQMAQsCQEEBQQUgAxsiBCACSwRAIAJFIANBAUZyDQIgBkGo6r5pNgIMIAJFIgBFBEAgBkEMaiABIAL8CgAACyAGKAIMQajqvmlGDQIgBkHQ1LTCATYCDCAARQRAIAZBDGogASAC/AoAAAsgBigCDEFwcUHQ1LTCAUYNAgwBCyAAQQBBMPwLAEEBIQUCQCADQQFGDQAgAyEFIAEoAAAiA0Go6r5pRg0AIANBcHFB0NS0wgFHDQFBCCEEIAJBCEkNAiAAQQE2AhQgASgAACECIABBCDYCGCAAIAJB0NS0wgFrNgIcIAAgATUABDcDAEEAIQQMAgsgAiABIAIgBRAYIgJJBEAgAiEEDAILIAAgAjYCGCABIARqIgVBAWstAAAiAkEIcQRAQXIhBAwCCyACQSBxIgNFBEAgBS0AACIFQacBSwRAQXAhBAwDCyAFQQdxrUIBIAVBA3ZBCmqthiIIQgOIfiAIfCEJIARBAWohBAsgAkEGdiEFIAJBAnYhBwJAAkACQAJAIAJBA3EiAkEBaw4DAAECAwsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAdBAXEhBwJ+AkACQAJAAkAgBUEBaw4DAQIDAAtCfyADRQ0DGiABIARqMQAADAMLIAEgBGozAABCgAJ8DAILIAEgBGo1AAAMAQsgASAEaikAAAshCCAAIAc2AiAgACACNgIcIAAgCDcDAEEAIQQgAEEANgIUIAAgCCAJIAMbIgg3AwggAEKAgAggCCAIQoCACFobPgIQDAELQXYhBAsgBkEQaiQAIAQLXwEBf0G4fyEDIAFBAUEFIAIbIgFPBH8gACABakEBay0AACIAQQNxQQJ0QcAaaigCACABaiAAQQR2QQxxQdAaaigCAGogAEEgcSIBRWogAUEFdiAAQcAASXFqBUG4fwsLxAICBH8CfiMAQUBqIgQkAAJAA0AgAUEFTwRAAkAgACgAAEFwcUHQ1LTCAUYEQEJ+IQYgAUEISQ0EIAAoAAQiA0F3Sw0EIANBCGoiAiABSw0EIANBgX9JDQEMBAsgBEEQaiIDIAAgAUEAEBchAkJ+IAQpAxBCACAEKAIkQQFHGyACGyIGQn1WDQMgBiAHfCIHIAZUIQJCfiEGIAINAyADIAAgAUEAEBciAkGIf0sgAnINAyABIAQoAigiA2shAiAAIANqIQMDQCADIAIgBEEEahAaIgVBiH9LDQQgAiAFQQNqIgVJDQQgAiAFayECIAMgBWohAyAEKAIIRQ0ACyAEKAIwBH8gAkEESQ0EIANBBGoFIAMLIABrIgJBiH9LDQMLIAEgAmshASAAIAJqIQAMAQsLQn4gByABGyEGCyAEQUBrJAAgBgtkAQF/Qbh/IQMCQCABQQNJDQAgAC0AAiEBIAIgAC8AACIAQQFxNgIEIAIgAEEBdkEDcSIDNgIAIAIgACABQRB0ckEDdiIANgIIAkACQCADQQFrDgMCAQABC0FsDwsgACEDCyADC7ABAAJ/IAIgACgClOsBBH8gACgC0OkBBUGAgAgLIgIgA2pBQGtLBEAgACABIAJqQSBqIgE2AvzrAUEBIQIgASADagwBCyADQYCABE0EQCAAIABBiOwBaiIBNgL86wFBACECIAEgA2oMAQsgACABIARqIgEgA2siAkHg/wNqIgQgAiAFGzYC/OsBQQIhAiADIARqQYCABGsgASAFGwshAyAAIAI2AoTsASAAIAM2AoDsAQuyBwIEfwF+IwBBgAFrIg4kACAOIAM2AnwCQAJAAkACQAJAAkAgAkEBaw4DAAMCAQsgBkUEQEG4fyEKDAULIAMgBS0AACICSQ0DIAIgCGotAAAhAyAHIAJBAnRqKAIAIQIgAEEAOgALIABCADcCACAAIAI2AgwgACADOgAKIABBADsBCCABIAA2AgBBASEKDAQLIAEgCTYCAEEAIQoMAwsgCkUNAUEAIQogC0UgDEEZSXINAkEIIAR0QQhyIQBBACEDA0AgACADTQ0DIANBQGshAwwACwALQWwhCiAOIA5B/ABqIA5B+ABqIAUgBhAGIgNBiH9LDQEgDigCeCICIARLDQEgAEEMaiEMIA4oAnxBAWohEUGAgAIgAnRBEHYhEEEAIQRBASEFQQEgAnQiCkEBayILIQkDQCAEIBFHBEACQCAOIARBAXQiD2ovAQAiBkH//wNGBEAgDCAJQQN0aiAENgIAIAlBAWshCUEBIQYMAQsgBUEAIBAgBsFKGyEFCyANIA9qIAY7AQAgBEEBaiEEDAELCyAAIAI2AgQgACAFNgIAAkAgCSALRgRAIA1B6gBqIRBBACEJQQAhBQNAIAkgEUYEQCAKQQN2IApBAXZqQQNqIglBAXQhEUEAIQZBACEFA0AgBSAKTw0EIAUgEGohD0EAIQQDQCAEQQJHBEAgDCAEIAlsIAZqIAtxQQN0aiAEIA9qLQAANgIAIARBAWohBAwBCwsgBUECaiEFIAYgEWogC3EhBgwACwAFIA4gCUEBdGouAQAhBiAFIBBqIg8gEjcAAEEIIQQDQCAEIAZIBEAgBCAPaiASNwAAIARBCGohBAwBCwsgEkKBgoSIkKDAgAF8IRIgCUEBaiEJIAUgBmohBQwBCwALAAsgCkEDdiAKQQF2akEDaiEQQQAhBUEAIQYDQCAFIBFGDQFBACEEIA4gBUEBdGouAQAiD0EAIA9BAEobIQ8DQCAEIA9HBEAgDCAGQQN0aiAFNgIAA0AgBiAQaiALcSIGIAlLDQALIARBAWohBAwBCwsgBUEBaiEFDAALAAsgAEEIaiEJIAJBH2shC0EAIQYDQCAGIApHBEAgDSAJIAZBA3RqIgIoAgQiBEEBdGoiBSAFLwEAIgVBAWo7AQAgAiALIAVnaiIMOgADIAIgBSAMdCAKazsBACACIAQgCGotAAA6AAIgAiAHIARBAnRqKAIANgIEIAZBAWohBgwBCwsgASAANgIAIAMhCgwBC0FsIQoLIA5BgAFqJAAgCgtwAQR/IABCADcCACACBEAgAUEKaiEGIAEoAgQhBEEAIQJBACEBA0AgASAEdkUEQCACIAYgAUEDdGotAAAiBSACIAVLGyECIAFBAWohASADIAVBFktqIQMMAQsLIAAgAjYCBCAAIANBCCAEa3Q2AgALC64BAQR/IAEgAigCBCIDIAEoAgRqIgQ2AgQgACADQQJ0QbAZaigCACABKAIAQQAgBGt2cTYCAAJAIARBIU8EQCABQbAaNgIIDAELIAEoAggiAyABKAIQTwRAIAEQDAwBCyADIAEoAgwiBUYNACABIAMgAyAFayAEQQN2IgYgAyAGayAFSRsiA2siBTYCCCABIAQgA0EDdGs2AgQgASAFKAAANgIACyAAIAJBCGo2AgQLjQICA38BfiAAIAJqIQQCQAJAIAJBCE4EQCAAIAFrIgJBeUgNAQsDQCAAIARPDQIgACABLQAAOgAAIABBAWohACABQQFqIQEMAAsACwJAAkAgAkFvSw0AIAAgBEEgayICSw0AIAEpAAAhBiAAIAEpAAg3AAggACAGNwAAIAIgAGsiBUERTgRAIABBEGohACABIQMDQCADKQAQIQYgACADKQAYNwAIIAAgBjcAACADKQAgIQYgACADKQAoNwAYIAAgBjcAECADQSBqIQMgAEEgaiIAIAJJDQALCyABIAVqIQEMAQsgACECCwNAIAIgBE8NASACIAEtAAA6AAAgAkEBaiECIAFBAWohAQwACwALC98BAQZ/Qbp/IQoCQCACKAIEIgggAigCACIJaiINIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQIgACABQSBrIgEgCyAJQQAQIyADIAkgC2o2AgACQAJAIAQgBWsgDE8EQCACIQUMAQsgDCAEIAZrSw0CIAcgByACIAVrIgNqIgIgCGpPBEAgCEUNAiAEIAIgCPwKAAAMAgtBACADayIABEAgBCACIAD8CgAACyADIAhqIQggBCADayEECyAEIAEgBSAIQQEQIwsgDSEKCyAKC+sBAQZ/Qbp/IQsCQCADKAIEIgkgAygCACIKaiINIAEgAGtLDQAgBSAEKAIAIgVrIApJBEBBbA8LIAMoAgghDCAAIAVLIAUgCmoiDiAAS3ENACAAIApqIgMgDGshASAAIAUgChAfIAQgDjYCAAJAAkAgAyAGayAMTwRAIAEhBgwBC0FsIQsgDCADIAdrSw0CIAggCCABIAZrIgBqIgEgCWpPBEAgCUUNAiADIAEgCfwKAAAMAgtBACAAayIEBEAgAyABIAT8CgAACyAAIAlqIQkgAyAAayEDCyADIAIgBiAJQQEQIwsgDSELCyALC6sCAQJ/IAJBH3EhAyABIQQDQCADQQhJRQRAIANBCGshAyAEKQAAQs/W077Sx6vZQn5CH4lCh5Wvr5i23puef34gAIVCG4lCh5Wvr5i23puef35CnaO16oOxjYr6AH0hACAEQQhqIQQMAQsLIAEgAkEYcWohASACQQdxIgNBBEkEfyABBSADQQRrIQMgATUAAEKHla+vmLbem55/fiAAhUIXiULP1tO+0ser2UJ+Qvnz3fGZ9pmrFnwhACABQQRqCyEEA0AgAwRAIANBAWshAyAEMQAAQsXP2bLx5brqJ34gAIVCC4lCh5Wvr5i23puef34hACAEQQFqIQQMAQsLIABCIYggAIVCz9bTvtLHq9lCfiIAQh2IIACFQvnz3fGZ9pmrFn4iAEIgiCAAhQvhBAIBfgJ/IAAgA2ohBwJAIANBB0wEQANAIAAgB08NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwACwALIAQEQAJAIAAgAmsiBkEHTQRAIAAgAi0AADoAACAAIAItAAE6AAEgACACLQACOgACIAAgAi0AAzoAAyAAIAIgBkECdCIGQeAaaigCAGoiAigAADYABCACIAZBgBtqKAIAayECDAELIAAgAikAADcAAAsgA0EIayEDIAJBCGohAiAAQQhqIQALIAEgB08EQCAAIANqIQEgBEUgACACa0EPSnJFBEADQCAAIAIpAAA3AAAgAkEIaiECIABBCGoiACABSQ0ADAMLAAsgAikAACEFIAAgAikACDcACCAAIAU3AAAgA0ERSQ0BIABBEGohAANAIAIpABAhBSAAIAIpABg3AAggACAFNwAAIAIpACAhBSAAIAIpACg3ABggACAFNwAQIAJBIGohAiAAQSBqIgAgAUkNAAsMAQsCQCAAIAFLBEAgACEBDAELIAEgAGshBgJAIARFIAAgAmtBD0pyRQRAIAIhAwNAIAAgAykAADcAACADQQhqIQMgAEEIaiIAIAFJDQALDAELIAIpAAAhBSAAIAIpAAg3AAggACAFNwAAIAZBEUgNACAAQRBqIQAgAiEDA0AgAykAECEFIAAgAykAGDcACCAAIAU3AAAgAykAICEFIAAgAykAKDcAGCAAIAU3ABAgA0EgaiEDIABBIGoiACABSQ0ACwsgAiAGaiECCwNAIAEgB08NASABIAItAAA6AAAgAUEBaiEBIAJBAWohAgwACwALC6HFAQI2fwV+IwBBEGsiMSQAAkBBwOwFEAEiCEUEQEFAIQYMAQsgCEIANwL86gEgCEEANgKc6wEgCEEANgKQ6wEgCEEANgLU6wEgCEEANgLE6wEgCEIANwKk6wEgCEEANgK46QEgCEEANgK87AUgCEIANwK86wEgCEEANgKs6wEgCEIBNwKU6wEgCEIANwPo6wEgCEGBgIDAADYCzOsBIAhCADcC7OoBIAhCADcDsOsBIAhBADYCuOsBIAhBhOsBakEANgIAIAgQFiAIQbjqAWohNCAIQcDpAWohNiAIQZDqAWohNyAAISwCQAJAAkACQANAQQFBBSAIKALs6gEiCxshEwJAA0AgAyATSQ0BAkAgA0EESSALcg0AIAIoAABBcHFB0NS0wgFHDQBBuH8hBiADQQhJDQcgAigABCIHQXdLBEBBciEGDAgLIAMgB0EIaiIESQ0HIAdBgH9LBEAgBCEGDAgLIAMgBGshAyACIARqIQIMAQsLIAhCADcCrOkBIAhCADcD8OkBIAhBjICA4AA2AqhQIAhBADYCoOsBIAhCADcDiOoBIAhBATYClOsBIAhCAzcDgOoBIAhBtOkBakIANwIAIAhB+OkBakIANwMAIAhB9A4pAgA3AqzQASAIQbTQAWpB/A4oAgA2AgAgCCAIQRBqNgIAIAggCEGgMGo2AgQgCCAIQZggajYCCCAIIAhBqNAAajYCDCAIQQFBBSAIKALs6gEbNgK86QECQCABRQ0AICwgCCgCrOkBIgZGDQAgCCAGNgK46QEgCCAsNgKs6QEgCCgCsOkBIQQgCCAsNgKw6QEgCCAsIAQgBmtqNgK06QELQbh/IQYgA0EFQQkgCCgC7OoBIhMbSQ0FIAJBAUEFIBMbIBMQGCIEQYh/Sw0EIAMgBEEDakkNBSA2IAIgBCATEBciBkGIf0sEQCAGIQQMBQsgBg0DAkACQCAIKAKw6wFBAUcNACAIKAKs6wEiC0UNACAIKAKc6wFFDQAgCygCBCEGIDEgCCgC3OkBIgo2AgQgBkEBayIHQsnP2bLx5brqJyAxQQRqQQQQIqdxIRMgCygCACELA0AgCiALIBNBAnRqKAIAIgwEfyAMKAKo1QEFQQALIgZHBEAgByATcUEBaiETIAYNAQsLIAxFDQAgCBAWIAhBfzYCqOsBIAggDDYCnOsBIAggCCgC3OkBIhM2AqDrAQwBCyAIKALc6QEhEwsCQCATRQ0AIAgoAqDrASATRg0AQWAhBAwFCwJAIAgoAuDpAQRAIAggCCgC8OoBIgZFNgL06gEgBg0BIDdBAEHYAPwLACAIQvnq0NDnyaHk4QA3A7DqASAIQs/W077Sx6vZQjcDoOoBIAhC1uuC7ur9ifXgADcDmOoBDAELIAhBADYC9OoBCyAIIAgpA/DpASAErXw3A/DpASAIKAK46wEiEwRAIAggCCgC0OkBIgYgEyAGIBNJGzYC0OkBCyABICxqITUgAyAEayEDIAIgBGohAiAsIRMDQCACIAMgMUEEahAaIiBBiH9LBEAgICEEDAYLIANBA2siOCAgSQ0EIAJBA2oiHSA1IB0gNUkbIDUgEyAdTRshAkFsIQQCQAJAAkACQAJAAkACQAJAIDEoAgQOAwECAA0LIAIgE2shFEEAITMjAEHQAmsiBSQAAkACQCAIKAKU6wEiAgR/IAgoAtDpAQVBgIAICyAgSQ0AAkAgIEECSQ0AIB0tAAAiA0EDcSEaIAIEfyAIKALQ6QEFQYCACAshBgJAAkACQAJAAkACQAJAAkACQAJAIBpBAWsOAwMBAAILIAgoAojqAQ0AQWIhAwwLCyAgQQVJDQhBAyEMIB0oAAAhBAJ/An8CQAJAAkAgA0ECdkEDcSICQQJrDgIBAgALIARBDnZB/wdxIQ0gBEEEdkH/B3EhECACQQBHDAMLIARBEnYhDSAEQQR2Qf//AHEhEEEEDAELIB0tAARBCnQgBEEWdnIhDSAEQQR2Qf//D3EhEEEFCyEMQQELIQRBun8hAyATQQEgEBtFDQogBiAQSQ0IIBBBBkkgBHEEQEFoIQMMCwsgDCANaiIKICBLDQggBiAUIAYgFEkbIgIgEEkNCiAIIBMgFCAQIAJBABAbAkAgCCgCpOsBRSAQQYEGSXINAEEAIQMDQCADQYOAAUsNASADQUBrIQMMAAsACyAaQQNGBEAgDCAdaiEGIAgoAgwiCy0AAUEIdCECIAgoAvzrASEDIARFBEAgAgRAIAVB4AFqIAYgDRAIIg5BiH9LDQkgC0EEaiEZIAMgEGohESALLwECIQkgEEEETwRAIBFBA2shBkEAIAlrQR9xIQcgBSgC6AEhDCAFKALsASEPIAUoAvABIQQgBSgC4AEhDSAFKALkASEOA0AgDkEgSwRAQbAaIQwMCgsCQCAEIAxNBEAgDkEHcSESIA5BA3YhDUEBIQ4MAQsgDCAPRg0KIA4gDkEDdiICIAwgD2sgDCACayAPTyIOGyINQQN0ayESCyAMIA1rIgwoAAAhDSAORSADIAZPcg0IIAMgGSANIBJ0IAd2QQJ0aiICLwEAOwAAIAMgAi0AA2oiAyAZIA0gEiACLQACaiICdCAHdkECdGoiCy8BADsAACADIAstAANqIQMgAiALLQACaiEODAALAAsgBSgC5AEiDkEhTwRAIAVBsBo2AugBDAkLIAUoAugBIgYgBSgC8AFPBEAgBSAOQQdxIgI2AuQBIAUgBiAOQQN2ayIENgLoASAFIAQoAAA2AuABIAIhDgwJCyAGIAUoAuwBIgRGDQggBSAOIAYgBGsgDkEDdiICIAYgAmsgBEkbIgJBA3RrIg42AuQBIAUgBiACayICNgLoASAFIAIoAAA2AuABDAgLIAMgECAGIA0gCxARIQ4MCAsgAgRAIAMgECAGIA0gCxASIQ4MCAsgAyAQIAYgDSALEBQhDgwHCyAIQazVAWohFyAMIB1qISEgCEGo0ABqIQcgCCgC/OsBIRYgBEUEQCAHICEgDSAXEA4iDkGIf0sNByANIA5NDQMgFiAQIA4gIWogDSAOayAHEBEhDgwHCyAQRQRAQbp/IQ4MBwsgDUUEQEFsIQ4MBwsgEEEIdiIDIA0gEEkEfyANQQR0IBBuBUEPC0EEdCIEQYwIaigCAGwgBEGICGooAgBqIgJBBXYgAmogBEGACGooAgAgBEGECGooAgAgA2xqSQRAIwBBEGsiLSQAIAcoAgAhESAXQfAEaiIeQQBB8AD8CwBBVCEDAkAgEUH/AXEiL0EMSw0AIBdB4AdqIgkgHiAtQQhqIC1BDGogISANIBdB4AlqEAciBEGIf00EQCAtKAIMIgsgL0sNASAXQagFaiEZIBdBpAVqITAgB0EEaiEbIBFBgICAeHEhJCALQQFqIjIhAyALIQYDQCADIgJBAWshAyAGIgxBAWshBiAeIAxBAnRqKAIARQ0AC0EBIAIgAkEBTRshDkEAIQZBASEDA0AgAyAORwRAIB4gA0ECdCIPaigCACECIA8gGWogBjYCACADQQFqIQMgAiAGaiEGDAELCyAXIAY2AqgFIBkgDEEBaiIfQQJ0aiAGNgIAIBdB4AVqISZBACEDIC0oAgghBgNAIAMgBkcEQCAZIAMgCWotAABBAnRqIgIgAigCACICQQFqNgIAIAIgJmogAzoAACADQQFqIQMMAQsLQQAhBiAZQQA2AgBBCyAvIBFB/wFxQQxGGyAvIAtBDEkbIikgC0F/c2ohD0EBIQMDQCADIA5HBEAgHiADQQJ0IgtqKAIAIQIgCyAXaiAGNgIAIAIgAyAPanQgBmohBiADQQFqIQMMAQsLICkgMiAMayILa0EBaiEJIAshBgNAIAYgCUkEQCAXIAZBNGxqIQ9BASEDA0AgAyAORwRAIA8gA0ECdCICaiACIBdqKAIAIAZ2NgIAIANBAWohAwwBCwsgBkEBaiEGDAELCyAyIClrIRUgDEEAIAxBAEobQQFqISdBASEuA0AgJyAuRwRAIDIgLmshBiAXIC5BAnQiAmooAgAhJSACIDBqKAIAISogMCAuQQFqIi5BAnRqKAIAIRggCyApIAZrIgNNBEAgHyAGIBVqIgJBASACQQFKIhIbIgIgAiAfSBshHCAXIAZBNGxqIh4gAkECdGohGSAGIDJqIREgBkEQdEGAgIAIaiEOQQEgA3QiCUECayEPA0AgGCAqRg0DIBsgJUECdGohKCAmICpqLQAAISsgAiEDIBIEQCAOICtyrUKBgICAEH4hOiAZKAIAIQZBACEDAkACQAJAAkAgDw4DAQIAAgsgKCA6NwEICyAoIDo3AQAMAQsDQCADIAZODQEgKCADQQJ0aiIMIDo3ARggDCA6NwEQIAwgOjcBCCAMIDo3AQAgA0EIaiEDDAALAAsgAiEDCwNAIAMgHEcEQCARIANrIQwgKCAeIANBAnQiBmooAgBBAnRqICYgBiAwaigCAGogJiAwIANBAWoiA0ECdGooAgBqIAwgKSArQQIQDwwBCwsgKkEBaiEqIAkgJWohJQwACwAFIBsgJUECdGogJiAqaiAYICZqIAYgKUEAQQEQDwwCCwALCyAHIClBEHQgJHIgL3JBgAJyNgIACyAEIQMLIC1BEGokACADIg5BiH9LDQcgAyANTw0DIBYgECADICFqIA0gA2sgBxASIQ4MBwsgByAhIA0gFxAOIg5BiH9LDQYgDSAOTQ0CIBYgECAOICFqIA0gDmsgBxAUIQ4MBgtBAiEQAn8CQAJAAkAgA0ECdkEDcUEBaw4DAQACAAtBASEQIANBA3YMAgsgHS8AAEEEdgwBCyAgQQJGDQhBAyEQIB0vAAAgHS0AAkEQdHJBBHYLIQtBun8hAyATQQEgCxtFDQkgBiALSQ0HIAsgFEsNCSAIIBMgFCALIAYgFCAGIBRJG0EBEBsgICALIBBqIgpBIGpJBEAgCiAgSw0IIBAgHWohBCAIKAL86wEhAwJAIAgoAoTsAUECRgRAIAtBgIAEayICBEAgAyAEIAL8CgAACyAIQYjsAWogAiAEakGAgAT8CgAADAELIAtFDQAgAyAEIAv8CgAACyAIIAs2AojrASAIIAgoAvzrATYC+OoBDAcLIAhBADYChOwBIAggCzYCiOsBIAggECAdaiICNgL46gEgCCACIAtqNgKA7AEMBgsCfwJAAkACQCADQQJ2QQNxQQFrDgMBAAIAC0EBIRAgA0EDdgwCCyAgQQJGDQhBAiEQIB0vAABBBHYMAQsgIEEESQ0HQQMhECAdLwAAIB0tAAJBEHRyQQR2CyELQbp/IQMgE0EBIAsbRQ0IIAYgC0kNBiALIBRLDQggCCATIBQgCyAGIBQgBiAUSRtBARAbIBAgHWoiAy0AACEGIAgoAvzrASEEAkAgCCgChOwBQQJGBEAgC0GAgARrIgIEQCAEIAYgAvwLAAsgCEGI7AFqIAMtAABBgIAE/AsADAELIAtFDQAgBCAGIAv8CwALIAggCzYCiOsBIAggCCgC/OsBNgL46gEgEEEBaiEKDAULQbh/IQ4MAwsgEiEOCyAFIA42AuQBIAUgDDYC6AEgBSANNgLgAQsCQCARIANrQQJJDQAgEUECayELQQAgCWtBH3EhBgNAAkAgDkEhTwRAIAVBsBo2AugBDAELIAUCfyAFKALoASIHIAUoAvABTwRAIAUgByAOQQN2ayIMNgLoAUEBISUgDkEHcQwBCyAHIAUoAuwBIgRGDQEgBSAHIA5BA3YiAiAHIARrIAcgAmsgBE8iJRsiAmsiDDYC6AEgDiACQQN0awsiDjYC5AEgBSAMKAAAIgI2AuABICVFIAMgC0tyDQAgAyAZIAIgDnQgBnZBAnRqIgIvAQA7AAAgBSAFKALkASACLQACaiIONgLkASADIAItAANqIQMMAQsLA0AgAyALSw0BIAMgGSAFKALgASAOdCAGdkECdGoiAi8BADsAACAFIAUoAuQBIAItAAJqIg42AuQBIAMgAi0AA2ohAwwACwALAkAgAyARTw0AIAMgGSAFKALgASAOdEEAIAlrdkECdGoiAi0AADoAACACLQADQQFGBEAgBSgC5AEgAi0AAmohDgwBCyAFKALkASIOQR9LDQBBICAOIAItAAJqIgIgAkEgTxshDgtBbEFsIBAgDkEgRxsgBSgC6AEgBSgC7AFHGyEOCyAIKAKE7AFBAkYEQCAIQYjsAWogCCgCgOwBQYCABGtBgIAE/AoAACAQQYCABGsiAwRAIAgoAvzrASICQeD/A2ogAiAD/AoAAAsgCCAIKAL86wFB4P8DajYC/OsBIAggCCgCgOwBQSBrNgKA7AELIA5BiH9LDQEgCCAQNgKI6wEgCEEBNgKI6gEgCCAIKAL86wE2AvjqASAaQQJGBEAgCCAIQajQAGo2AgwLIAoiA0GIf0sNAwsgCCgClOsBBH8gCCgC0OkBBUGAgAgLIQwgCiAgRg0BICAgCmshCSAIKAK06QEhCyAdICBqIQ0gCCgCpOsBIQYCfwJAAn8gCiAdaiIRLQAAIg7AIgJBAE4EQCARQQFqDAELIAJBf0YEQCAJQQNJDQUgEUEDaiEEIBEvAAFBgP4BaiEODAILIAlBAUYNBCARLQABIA5BCHRyQYCAAmshDiARQQJqCyEEIA4NAEFsIQMgBCANRw0EQQAhDiAJDAELQbh/IQMgBEEBaiIPIA1LDQMgBC0AACIKQQNxDQEgCEEQaiAIIApBBnZBI0EJIA8gDSAPa0HADUHQDkGADyAIKAKM6gEgBiAOIAhBrNUBaiIHEBwiAkGIf0sNASAIQZggaiAIQQhqIApBBHZBA3FBH0EIIAIgD2oiBCANIARrQYAKQYALQZATIAgoAozqASAIKAKk6wEgDiAHEBwiAkGIf0sNAUFsIQMgCEGgMGogCEEEaiAKQQJ2QQNxQTRBCSACIARqIgQgDSAEa0GgC0GADUGgFSAIKAKM6gEgCCgCpOsBIA4gBxAcIgJBiH9LDQMgAiAEaiARawsiA0GIf0sNAgJAIBNBAEcgFEEAR3FFIA5BAEpxDQACQAJAIBMgFCAMIAwgFEsbIgJBACACQQBKG2ogC2siAkH8//8fTQRAIAYgAkGBgIAISXIgDkEJSHINAiAFQeABaiAIKAIIIA4QHQwBCyAFQeABaiAIKAIIIA4QHSAFKALkAUEZSyEzIAYNAQsgBSgC4AFBE0shBgsgCSADayEHIAMgEWohBCAIQQA2AqTrASAIKAKE7AEhAgJAIAYEQAJ/IAJBAUYEQCAIKAL86wEMAQsgEyAUQQAgFEEAShtqCyEUIAUgCCgC+OoBIgM2AswCIAgoAoDsASEcIA5FBEAgEyEJDAILIAgoArjpASEiIAgoArTpASEXIAgoArDpASELIAhBATYCjOoBIAhBrNABaiEyIAVB1AFqISZBACECA0AgAkEDRwRAICYgAkECdCIDaiADIDJqKAIANgIAIAJBAWohAgwBCwtBbCEDIAVBqAFqIgIgBCAHEAhBiH9LDQUgBUG8AWogAiAIKAIAEB4gBUHEAWogAiAIKAIIEB4gBUHMAWogAiAIKAIEEB5BCCAOIA5BCE4bIihBACAoQQBKGyElIA5BAWshGiATIAtrIS0gBSgCsAEhAiAFKALYASEGIAUoAtQBIRIgBSgCrAEhBCAFKAK0ASEjIAUoArgBISkgBSgCyAEhGCAFKALQASErIAUoAsABISQgBSgCqAEhCSAFKALEASEhIAUoAswBISogBSgCvAEhMCAzRSEVQQAhEANAIBIhESAQICVGBEAgBSAqNgLMASAFIDA2ArwBIAUgAjYCsAEgBSAhNgLEASAFIAk2AqgBIAhBmOwBaiEeIAhBiOwFaiEZIAhBiOwBaiEWIBRBIGshGyAzRSEnIBMhCQNAIA4gJUcEQCAFKALAASAFKAK8AUEDdGoiBi0AAiEfIAUoAtABIAUoAswBQQN0aiIELQACIRggBSgCyAEgBSgCxAFBA3RqIgItAAMhKyAELQADISQgBi0AAyEVIAIvAQAhEiAELwEAIREgBi8BACEKIAIoAgQhByAGKAIEIRAgBCgCBCEMAkAgAi0AAiINQQJPBEACQCAnIA1BGUlyRQRAIAcgBSgCqAEiDyAFKAKsASICdEEFIA1rdkEFdGohBwJAIAIgDWpBBWsiAkEhTwRAIAVBsBo2ArABDAELIAUoArABIgYgBSgCuAFPBEAgBSACQQdxIgQ2AqwBIAUgBiACQQN2ayICNgKwASAFIAIoAAAiDzYCqAEgBCECDAELIAYgBSgCtAEiBEYNACAFIAIgBiAEayACQQN2IgIgBiACayAESRsiBEEDdGsiAjYCrAEgBSAGIARrIgQ2ArABIAUgBCgAACIPNgKoAQsgBSACQQVqIgY2AqwBIAcgDyACdEEbdmohDQwBCyAFIAUoAqwBIgIgDWoiBjYCrAEgBSgCqAEgAnRBACANa3YgB2ohDSAGQSFPBEAgBUGwGjYCsAEMAQsgBSgCsAEiByAFKAK4AU8EQCAFIAZBB3EiAjYCrAEgBSAHIAZBA3ZrIgQ2ArABIAUgBCgAADYCqAEgAiEGDAELIAcgBSgCtAEiBEYNACAFIAYgByAEayAGQQN2IgIgByACayAESRsiAkEDdGsiBjYCrAEgBSAHIAJrIgI2ArABIAUgAigAADYCqAELIAUpAtQBITogBSANNgLUASAFIDo3AtgBDAELIBBFIQQgDUUEQCAmIBBBAEdBAnRqKAIAIQIgBSAmIARBAnRqKAIAIg02AtQBIAUgAjYC2AEgBSgCrAEhBgwBCyAFIAUoAqwBIgJBAWoiBjYCrAECQAJAIAQgB2ogBSgCqAEgAnRBH3ZqIgRBA0YEQCAFKALUAUEBayICQX8gAhshDQwBCyAmIARBAnRqKAIAIgJBfyACGyENIARBAUYNAQsgBSAFKALYATYC3AELIAUgBSgC1AE2AtgBIAUgDTYC1AELIBggH2ohBAJAIBhFBEAgBiECDAELIAUgBiAYaiICNgKsASAFKAKoASAGdEEAIBhrdiAMaiEMCwJAIARBFEkNACACQSFPBEAgBUGwGjYCsAEMAQsgBSgCsAEiBiAFKAK4AU8EQCAFIAJBB3EiBDYCrAEgBSAGIAJBA3ZrIgI2ArABIAUgAigAADYCqAEgBCECDAELIAYgBSgCtAEiBEYNACAFIAIgBiAEayACQQN2IgIgBiACayAESRsiBEEDdGsiAjYCrAEgBSAGIARrIgQ2ArABIAUgBCgAADYCqAELAkAgH0UEQCACIQQMAQsgBSACIB9qIgQ2AqwBIAUoAqgBIAJ0QQAgH2t2IBBqIRALAkAgBEEhTwRAQbAaIQIgBUGwGjYCsAEMAQsgBSgCsAEiAiAFKAK4AU8EQCAFIARBB3EiBjYCrAEgBSACIARBA3ZrIgI2ArABIAUgAigAADYCqAEgBiEEDAELIAIgBSgCtAEiB0YNACAFIAIgAiAHayAEQQN2IgYgAiAGayAHSRsiBmsiAjYCsAEgBSAEIAZBA3RrIgQ2AqwBIAUgAigAADYCqAELAkAgGiAlRg0AIAUgFUECdEGwGWooAgAgBSgCqAEiB0EAIAQgFWoiBGt2cSAKajYCvAEgBSAkQQJ0QbAZaigCACAHQQAgBCAkaiIEa3ZxIBFqNgLMAQJAIARBIU8EQEGwGiECIAVBsBo2ArABDAELIAUoArgBIAJNBEAgBSAEQQdxIgY2AqwBIAUgAiAEQQN2ayICNgKwASAFIAIoAAAiBzYCqAEgBiEEDAELIAIgBSgCtAEiCkYNACAFIAIgAiAKayAEQQN2IgYgAiAGayAKSRsiBmsiAjYCsAEgBSAEIAZBA3RrIgQ2AqwBIAUgAigAACIHNgKoAQsgBSAEICtqIgQ2AqwBIAUgK0ECdEGwGWooAgAgB0EAIARrdnEgEmo2AsQBIARBIU8EQCAFQbAaNgKwAQwBCyAFKAK4ASACTQRAIAUgBEEHcTYCrAEgBSACIARBA3ZrIgI2ArABIAUgAigAADYCqAEMAQsgAiAFKAK0ASIGRg0AIAUgBCACIAZrIARBA3YiBCACIARrIAZJGyIEQQN0azYCrAEgBSACIARrIgI2ArABIAUgAigAADYCqAELAkACQCAIKAKE7AFBAkYEQCAFKALMAiIHIAVB4AFqICVBB3FBDGxqIhUoAgAiAmoiCiAIKAKA7AEiBEsEQCAEIAdHBEAgBCAHayIEIBQgCWtLDQsgCSAHIAQQHyAVIAIgBGsiAjYCACAEIAlqIQkLIAUgFjYCzAIgCEEANgKE7AECQAJAAkAgAkGAgARKDQAgCSAVKAIEIhIgAmoiBmogG0sNACAGQSBqIBQgCWtNDQELIAUgFSgCCDYCgAEgBSAVKQIANwN4IAkgFCAFQfgAaiAFQcwCaiAZIAsgFyAiECAhBgwBCyACIBZqIQcgAiAJaiEEIBUoAgghESAWKQAAITogCSAWKQAINwAIIAkgOjcAAAJAIAJBEUkNACAeKQAAITogCSAeKQAINwAYIAkgOjcAECACQRBrQRFIDQAgCUEgaiECIB4hDwNAIA8pABAhOiACIA8pABg3AAggAiA6NwAAIA8pACAhOiACIA8pACg3ABggAiA6NwAQIA9BIGohDyACQSBqIgIgBEkNAAsLIAQgEWshAiAFIAc2AswCIAQgC2sgEUkEQCARIAQgF2tLDQ8gIiAiIAIgC2siCmoiByASak8EQCASRQ0CIAQgByAS/AoAAAwCC0EAIAprIgIEQCAEIAcgAvwKAAALIAogEmohEiAEIAprIQQgCyECCyARQRBPBEAgAikAACE6IAQgAikACDcACCAEIDo3AAAgEkERSA0BIAQgEmohByAEQRBqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIAdJDQALDAELAkAgEUEHTQRAIAQgAi0AADoAACAEIAItAAE6AAEgBCACLQACOgACIAQgAi0AAzoAAyAEIAIgEUECdCIHQeAaaigCAGoiAigAADYABCACIAdBgBtqKAIAayECDAELIAQgAikAADcAAAsgEkEJSQ0AIAQgEmohCiAEQQhqIgcgAkEIaiICa0EPTARAA0AgByACKQAANwAAIAJBCGohAiAHQQhqIgcgCkkNAAwCCwALIAIpAAAhOiAHIAIpAAg3AAggByA6NwAAIBJBGUgNACAEQRhqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIApJDQALCyAGQYh/SwRAIAYhAwwOCyAVIA02AgggFSAMNgIEIBUgEDYCACAZIRwMAwsgCkEgayEEAkACQCAKIBxLDQAgCSAVKAIEIhEgAmoiBmogBEsNACAGQSBqIBQgCWtNDQELIAUgFSgCCDYCkAEgBSAVKQIANwOIASAJIBQgBCAFQYgBaiAFQcwCaiAcIAsgFyAiECEhBgwCCyACIAlqIQQgFSgCCCEPIAcpAAAhOiAJIAcpAAg3AAggCSA6NwAAAkAgAkERSQ0AIAcpABAhOiAJIAcpABg3ABggCSA6NwAQIAJBEGtBEUgNACAHQRBqIQIgCUEgaiEHA0AgAikAECE6IAcgAikAGDcACCAHIDo3AAAgAikAICE6IAcgAikAKDcAGCAHIDo3ABAgAkEgaiECIAdBIGoiByAESQ0ACwsgBCAPayECIAUgCjYCzAIgBCALayAPSQRAIA8gBCAXa0sNDSAiICIgAiALayIKaiIHIBFqTwRAIBFFDQMgBCAHIBH8CgAADAMLQQAgCmsiAgRAIAQgByAC/AoAAAsgCiARaiERIAQgCmshBCALIQILIA9BEE8EQCACKQAAITogBCACKQAINwAIIAQgOjcAACARQRFIDQIgBCARaiEHIARBEGohBANAIAIpABAhOiAEIAIpABg3AAggBCA6NwAAIAIpACAhOiAEIAIpACg3ABggBCA6NwAQIAJBIGohAiAEQSBqIgQgB0kNAAsMAgsCQCAPQQdNBEAgBCACLQAAOgAAIAQgAi0AAToAASAEIAItAAI6AAIgBCACLQADOgADIAQgAiAPQQJ0IgdB4BpqKAIAaiICKAAANgAEIAIgB0GAG2ooAgBrIQIMAQsgBCACKQAANwAACyARQQlJDQEgBCARaiEKIARBCGoiByACQQhqIgJrQQ9MBEADQCAHIAIpAAA3AAAgAkEIaiECIAdBCGoiByAKSQ0ADAMLAAsgAikAACE6IAcgAikACDcACCAHIDo3AAAgEUEZSA0BIARBGGohBANAIAIpABAhOiAEIAIpABg3AAggBCA6NwAAIAIpACAhOiAEIAIpACg3ABggBCA6NwAQIAJBIGohAiAEQSBqIgQgCkkNAAsMAQsCQAJAIAUoAswCIhEgBUHgAWogJUEHcUEMbGoiDygCACICaiIHIBxLDQAgCSAPKAIEIgogAmoiBmogG0sNACAGQSBqIBQgCWtNDQELIAUgDygCCDYCoAEgBSAPKQIANwOYASAJIBQgBUGYAWogBUHMAmogHCALIBcgIhAgIQYMAQsgAiAJaiEEIA8oAgghFSARKQAAITogCSARKQAINwAIIAkgOjcAAAJAIAJBEUkNACARKQAQITogCSARKQAYNwAYIAkgOjcAECACQRBrQRFIDQAgEUEQaiECIAlBIGohEgNAIAIpABAhOiASIAIpABg3AAggEiA6NwAAIAIpACAhOiASIAIpACg3ABggEiA6NwAQIAJBIGohAiASQSBqIhIgBEkNAAsLIAQgFWshAiAFIAc2AswCIAQgC2sgFUkEQCAVIAQgF2tLDQwgIiAiIAIgC2siD2oiByAKak8EQCAKRQ0CIAQgByAK/AoAAAwCC0EAIA9rIgIEQCAEIAcgAvwKAAALIAogD2ohCiAEIA9rIQQgCyECCyAVQRBPBEAgAikAACE6IAQgAikACDcACCAEIDo3AAAgCkERSA0BIAQgCmohByAEQRBqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIAdJDQALDAELAkAgFUEHTQRAIAQgAi0AADoAACAEIAItAAE6AAEgBCACLQACOgACIAQgAi0AAzoAAyAEIAIgFUECdCIHQeAaaigCAGoiAigAADYABCACIAdBgBtqKAIAayECDAELIAQgAikAADcAAAsgCkEJSQ0AIAQgCmohDyAEQQhqIgcgAkEIaiICa0EPTARAA0AgByACKQAANwAAIAJBCGohAiAHQQhqIgcgD0kNAAwCCwALIAIpAAAhOiAHIAIpAAg3AAggByA6NwAAIApBGUgNACAEQRhqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIA9JDQALCyAGQYh/SwRAIAYhAwwLCyAFQeABaiAlQQdxQQxsaiICIA02AgggAiAMNgIEIAIgEDYCAAsgBiAJaiEJICVBAWohJSAQIC1qIAxqIS0MAQsLIAUoArABIAUoArQBRw0HIAUoAqwBQSBHDQcgDiAoayEQA0ACQCAOIBBMBEBBACECA0AgAkEDRg0CIDIgAkECdCIDaiADICZqKAIANgIAIAJBAWohAgwACwALIAVB4AFqIBBBB3FBDGxqIQoCfwJAIAgoAoTsAUECRgRAIAUoAswCIg8gCigCACIEaiIHIAgoAoDsASICSwRAIAIgD0cEQCACIA9rIgIgFCAJa0sNCyAJIA8gAhAfIAogBCACayIENgIAIAIgCWohCQsgBSAWNgLMAiAIQQA2AoTsAQJAAkACQCAEQYCABEoNACAJIAooAgQiDSAEaiIGaiAbSw0AIAZBIGogFCAJa00NAQsgBSAKKAIINgJQIAUgCikCADcDSCAJIBQgBUHIAGogBUHMAmogGSALIBcgIhAgIQYMAQsgBCAWaiEHIAQgCWohDCAKKAIIIQogFikAACE6IAkgFikACDcACCAJIDo3AAACQCAEQRFJDQAgHikAACE6IAkgHikACDcAGCAJIDo3ABAgBEEQa0ERSA0AIAlBIGohAiAeIQQDQCAEKQAQITogAiAEKQAYNwAIIAIgOjcAACAEKQAgITogAiAEKQAoNwAYIAIgOjcAECAEQSBqIQQgAkEgaiICIAxJDQALCyAMIAprIQIgBSAHNgLMAiAMIAtrIApJBEAgCiAMIBdrSw0PICIgIiACIAtrIgdqIgQgDWpPBEAgDUUNAiAMIAQgDfwKAAAMAgtBACAHayICBEAgDCAEIAL8CgAACyAHIA1qIQ0gDCAHayEMIAshAgsgCkEQTwRAIAIpAAAhOiAMIAIpAAg3AAggDCA6NwAAIA1BEUgNASAMIA1qIQcgDEEQaiEEA0AgAikAECE6IAQgAikAGDcACCAEIDo3AAAgAikAICE6IAQgAikAKDcAGCAEIDo3ABAgAkEgaiECIARBIGoiBCAHSQ0ACwwBCwJAIApBB00EQCAMIAItAAA6AAAgDCACLQABOgABIAwgAi0AAjoAAiAMIAItAAM6AAMgDCACIApBAnQiBEHgGmooAgBqIgIoAAA2AAQgAiAEQYAbaigCAGshAgwBCyAMIAIpAAA3AAALIA1BCUkNACAMIA1qIQcgDEEIaiIEIAJBCGoiAmtBD0wEQANAIAQgAikAADcAACACQQhqIQIgBEEIaiIEIAdJDQAMAgsACyACKQAAITogBCACKQAINwAIIAQgOjcAACANQRlIDQAgDEEYaiEEA0AgAikAECE6IAQgAikAGDcACCAEIDo3AAAgAikAICE6IAQgAikAKDcAGCAEIDo3ABAgAkEgaiECIARBIGoiBCAHSQ0ACwsgBkGJf08EQCAGIQMMDgsgGSEcIAYgCWoMAwsgB0EgayECAkACQCAHIBxLDQAgCSAKKAIEIhIgBGoiDGogAksNACAMQSBqIBQgCWtNDQELIAUgCigCCDYCYCAFIAopAgA3A1ggCSAUIAIgBUHYAGogBUHMAmogHCALIBcgIhAhIQwMAgsgBCAJaiEGIAooAgghCiAPKQAAITogCSAPKQAINwAIIAkgOjcAAAJAIARBEUkNACAPKQAQITogCSAPKQAYNwAYIAkgOjcAECAEQRBrQRFIDQAgD0EQaiECIAlBIGohBANAIAIpABAhOiAEIAIpABg3AAggBCA6NwAAIAIpACAhOiAEIAIpACg3ABggBCA6NwAQIAJBIGohAiAEQSBqIgQgBkkNAAsLIAYgCmshAiAFIAc2AswCIAYgC2sgCkkEQCAKIAYgF2tLDQ0gIiAiIAIgC2siB2oiBCASak8EQCASRQ0DIAYgBCAS/AoAAAwDC0EAIAdrIgIEQCAGIAQgAvwKAAALIAcgEmohEiAGIAdrIQYgCyECCyAKQRBPBEAgAikAACE6IAYgAikACDcACCAGIDo3AAAgEkERSA0CIAYgEmohByAGQRBqIQQDQCACKQAQITogBCACKQAYNwAIIAQgOjcAACACKQAgITogBCACKQAoNwAYIAQgOjcAECACQSBqIQIgBEEgaiIEIAdJDQALDAILAkAgCkEHTQRAIAYgAi0AADoAACAGIAItAAE6AAEgBiACLQACOgACIAYgAi0AAzoAAyAGIAIgCkECdCIEQeAaaigCAGoiAigAADYABCACIARBgBtqKAIAayECDAELIAYgAikAADcAAAsgEkEJSQ0BIAYgEmohByAGQQhqIgQgAkEIaiICa0EPTARAA0AgBCACKQAANwAAIAJBCGohAiAE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";async function Dr(t){const A=new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip"));return new Uint8Array(await new Response(A).arrayBuffer())}var UA=null;function vr(){if(!UA){const t=new Sr;UA=t.init().then(()=>t),UA.catch(()=>{UA=null})}return UA}var Dt={zstd:async(t,A)=>(await vr()).decode(t,A),gzip:async t=>Dr(t)};async function Me(t){return yr(t,Dt)}function J(t,A){return{type:"float",name:t,storage:A,byteSize:4}}function kr(t){const A=t.numPoints,e=A>0?Math.floor(t.sh.length/A/3):0,i=new Float32Array(A),r=new Float32Array(A),a=new Float32Array(A),s=new Float32Array(A),I=new Float32Array(A),o=new Float32Array(A),g=new Float32Array(A),n=new Float32Array(A),_=new Float32Array(A),C=new Float32Array(A),l=new Float32Array(A),B=new Float32Array(A),h=new Float32Array(A),{positions:u,scales:d,colors:c,rotations:Q}=t;for(let E=0,L=0;E<A;E++,L+=3)i[E]=u[L],r[E]=u[L+1],a[E]=u[L+2];for(let E=0,L=0;E<A;E++,L+=3)s[E]=d[L],I[E]=d[L+1],o[E]=d[L+2];for(let E=0,L=0;E<A;E++,L+=3)g[E]=c[L],n[E]=c[L+1],_[E]=c[L+2];for(let E=0,L=0;E<A;E++,L+=4)C[E]=Q[L+3],l[E]=Q[L],B[E]=Q[L+1],h[E]=Q[L+2];const p=[J("x",i),J("y",r),J("z",a),J("f_dc_0",g),J("f_dc_1",n),J("f_dc_2",_)];for(let E=0;E<3;E++)for(let L=0;L<e;L++){const R=new Float32Array(A);for(let F=0;F<A;F++)R[F]=t.sh[(F*e+L)*3+E];p.push(J(`f_rest_${E*e+L}`,R))}return p.push(J("opacity",t.alphas)),p.push(J("scale_0",s)),p.push(J("scale_1",I)),p.push(J("scale_2",o)),p.push(J("rot_0",C)),p.push(J("rot_1",l)),p.push(J("rot_2",B)),p.push(J("rot_3",h)),p}async function Nr(t){const[A,e]=await Gr(t,8);if(br(A))return Te(await Me(await xr(e)));const i=new DataView(A.buffer,A.byteOffset,A.byteLength);if(A.length<8||i.getUint32(0,!0)!==vt||i.getUint32(4,!0)!==4)throw await e.cancel().catch(()=>{}),new H(Ur(A));const{decoded:r,bytes:a}=await Mr(e);return r??Te(await Me(a))}function br(t){return t[0]===31&&t[1]===139}async function xr(t){return new Uint8Array(await new Response(t).arrayBuffer())}var vt=1347635022;function Ur(t){return t.length>=8&&new DataView(t.buffer,t.byteOffset,8).getUint32(0,!0)===vt?`this is an SPZ version ${new DataView(t.buffer,t.byteOffset,8).getUint32(4,!0)}; only version 4 and the gzipped versions before it are read`:"these bytes are not an SPZ"}async function Gr(t,A){const e=t.getReader(),i=[];let r=0,a=!1;for(;r<A;){const I=await e.read();if(I.done){a=!0;break}i.push(I.value),r+=I.value.length}const s=new ReadableStream({start(I){for(const o of i)I.enqueue(o);a&&I.close()},async pull(I){const o=await e.read();o.done?I.close():I.enqueue(o.value)},cancel:I=>e.cancel(I)});return[OA(i),s]}function OA(t){const A=new Uint8Array(t.reduce((e,i)=>e+i.length,0));return t.reduce((e,i)=>(A.set(i,e),e+i.length),0),A}function Pr(t,A){const e=[9,1,3,3,4,A*3];return(A?e:e.slice(0,5)).map(i=>i*t)}async function Mr(t){const A=t.getReader();let e=[],i=0;const r=async()=>{const E=await A.read();return E.done?!1:(e.push(E.value),i+=E.value.length,!0)},a=async()=>{for(;await r(););return{decoded:null,bytes:OA(e)}};for(;i<32&&await r(););let s=OA(e);const I=ue(s);if(!I||I.version!==4||I.numPoints>1e7||I.shDegree>3)return a();const o=I.numPoints,g=[0,3,8,15][I.shDegree],n=Pr(o,g),_=I.tocByteOffset;if(n.length!==I.numStreams||_<32)return a();const C=_+n.length*16;for(;i<C&&await r(););if(i<C)return a();s=OA(e);const l=new DataView(s.buffer,s.byteOffset,s.byteLength),B=[];let h=C;for(let E=0;E<n.length;E++){const L=Number(l.getBigUint64(_+E*16,!0));if(Number(l.getBigUint64(_+E*16+8,!0))!==n[E]||L>n[E]+(n[E]>>8)+1024)return a();B.push([h,h+=L])}if(i>h)return a();const u=new Uint8Array(h);u.set(s);const d=gr(o,g,I.fractionalBits);let c=!0,Q=0;const p=async()=>{for(;c&&Q<B.length&&B[Q][1]<=i;Q++)try{const E=await Dt.zstd(u.subarray(...B[Q]),n[Q]);E.byteLength!==n[Q]?c=!1:Qr[Q](d,E)}catch{c=!1}};for(;;){await p();const E=await A.read();if(E.done)break;if(i+E.value.length>h)return e=[u.subarray(0,i),E.value],i+=E.value.length,a();u.set(E.value,i),i+=E.value.length}return{decoded:c&&i===h?Er(d):null,bytes:u.subarray(0,i)}}function Te(t){const A=kr(t),e=r=>A.find(a=>a.name===r).storage,i=mt(e("x"),e("y"),e("z"));for(const r of A){const a=r.storage,s=new Float32Array(a.length);for(let I=0;I<i.length;I++)s[I]=a[i[I]];r.storage=s}return{count:t.numPoints,properties:A,packed:Tr(e,t.numPoints)}}var Ce=.28209479177387814;function Tr(t,A){const[e,i,r]=[t("x"),t("y"),t("z")],[a,s,I]=[t("scale_0"),t("scale_1"),t("scale_2")],[o,g,n,_]=[t("rot_0"),t("rot_1"),t("rot_2"),t("rot_3")],[C,l,B,h]=[t("f_dc_0"),t("f_dc_1"),t("f_dc_2"),t("opacity")],u=new Uint16Array(A*4),d=new Uint32Array(A*4),c=new Float32Array(d.buffer),Q=new Uint16Array(A*4),p=new Float32Array(A*3);let E=!0,L=0,R=0,F=0,D=0,S=0,v=0;for(let f=0;f<A;f++){const k=e[f],U=i[f],Y=r[f],G=f*4;u[G]=V(C[f]*Ce+.5),u[G+1]=V(l[f]*Ce+.5),u[G+2]=V(B[f]*Ce+.5),u[G+3]=V(1/(1+Math.exp(-h[f]))),c[G]=k,c[G+1]=U,c[G+2]=Y,Lt(g[f],n[f],_[f],o[f],d,Q,G),Q[G]=V(Math.exp(a[f])),Q[G+1]=V(Math.exp(s[f])),Q[G+2]=V(Math.exp(I[f])),p[f*3]=k,p[f*3+1]=U,p[f*3+2]=Y;const M=Math.max(a[f],s[f],I[f]);if(!isFinite(k)||!isFinite(U)||!isFinite(Y)||!isFinite(M))continue;const N=2*Math.exp(M);E?(E=!1,L=k-N,R=U-N,F=Y-N,D=k+N,S=U+N,v=Y+N):(L=Math.min(L,k-N),R=Math.min(R,U-N),F=Math.min(F,Y-N),D=Math.max(D,k+N),S=Math.max(S,U+N),v=Math.max(v,Y+N))}const P=E?null:[(L+D)*.5,(R+S)*.5,(F+v)*.5,(D-L)*.5,(S-R)*.5,(v-F)*.5];return{color:u,transformA:d,transformB:Q,centers:p,aabb:P}}var Vr=`
uniform float spzPositionScale;

// work values
uvec4 packedData;   // xyz: 24-bit position + 8-bit scale per component, w: rotation bits

vec3 getCenter() {
    packedData = loadPackedTexture();

    // sign-extend the 24-bit fixed point position
    ivec3 p = ivec3(packedData.xyz << 8u) >> 8;
    return vec3(p) * spzPositionScale;
}

vec4 getColor() {
    vec4 c = loadColorTexture();

    // rgb stores SH DC coefficients as c * 0.15 + 0.5, convert to color as 0.5 + SH_C0 * dc,
    // alpha is stored with sigmoid already applied
    const float scale = 0.28209479177387814 / 0.15;
    return vec4((c.rgb - 0.5) * scale + 0.5, c.a);
}

vec4 getRotation() {
    // smallest-three encoding: bits 30-31 store the index of the largest component, the
    // remaining three components are stored as 9-bit magnitude + sign bit, 10 bits each,
    // starting from the lowest bits for the highest component index
    uint comp = packedData.w;
    uint largest = comp >> 30u;
    float q[4];
    float sumSquares = 0.0;
    for (int i = 3; i >= 0; i--) {
        if (uint(i) != largest) {
            float v = float(comp & 0x1ffu) * (0.7071067811865476 / 511.0);
            if ((comp & 0x200u) != 0u) v = -v;
            comp = comp >> 10u;
            q[i] = v;
            sumSquares += v * v;
        }
    }
    q[largest] = sqrt(max(0.0, 1.0 - sumSquares));

    // spz stores the quaternion as (x, y, z, w), the engine expects (w, x, y, z)
    return vec4(q[3], q[0], q[1], q[2]);
}

vec3 getScale() {
    // 8-bit log encoded scale in the top byte of each position word
    vec3 s = vec3(packedData.xyz >> 24u);
    return exp(s / 16.0 - 10.0);
}

#if SH_BANDS > 0

// quantized SH bytes of the current splat, packed 4 to a word
uint shWords[12];

float unpackSH(int i) {
    uint b = (shWords[i >> 2] >> uint(8 * (i & 3))) & 0xffu;
    return (float(b) - 128.0) / 128.0;
}

void readSHData(out vec3 sh[SH_COEFFS], out float scale) {
    uvec4 d0 = loadShTexture0();
    shWords[0] = d0.x; shWords[1] = d0.y; shWords[2] = d0.z; shWords[3] = d0.w;
    #if SH_BANDS > 1
        uvec4 d1 = loadShTexture1();
        shWords[4] = d1.x; shWords[5] = d1.y; shWords[6] = d1.z; shWords[7] = d1.w;
    #endif
    #if SH_BANDS > 2
        uvec4 d2 = loadShTexture2();
        shWords[8] = d2.x; shWords[9] = d2.y; shWords[10] = d2.z; shWords[11] = d2.w;
    #endif

    for (int i = 0; i < SH_COEFFS; i++) {
        sh[i] = vec3(unpackSH(i * 3), unpackSH(i * 3 + 1), unpackSH(i * 3 + 2));
    }

    scale = 1.0;
}

#endif
`,Yr=`
uniform spzPositionScale: f32;

// work values
var<private> packedData: vec4u;    // xyz: 24-bit position + 8-bit scale per component, w: rotation bits

fn getCenter() -> vec3f {
    packedData = loadPackedTexture();

    // sign-extend the 24-bit fixed point position
    let p = bitcast<vec3i>(packedData.xyz << vec3u(8u)) >> vec3u(8u);
    return vec3f(p) * uniform.spzPositionScale;
}

fn getColor() -> vec4f {
    let c = loadColorTexture();

    // rgb stores SH DC coefficients as c * 0.15 + 0.5, convert to color as 0.5 + SH_C0 * dc,
    // alpha is stored with sigmoid already applied
    const scale: f32 = 0.28209479177387814 / 0.15;
    return vec4f((c.rgb - 0.5) * scale + 0.5, c.a);
}

fn getRotation() -> vec4f {
    // smallest-three encoding: bits 30-31 store the index of the largest component, the
    // remaining three components are stored as 9-bit magnitude + sign bit, 10 bits each,
    // starting from the lowest bits for the highest component index
    var comp: u32 = packedData.w;
    let largest: u32 = comp >> 30u;
    var q = array<f32, 4>(0.0, 0.0, 0.0, 0.0);
    var sumSquares: f32 = 0.0;
    for (var i: i32 = 3; i >= 0; i--) {
        if (u32(i) != largest) {
            var v: f32 = f32(comp & 0x1ffu) * (0.7071067811865476 / 511.0);
            if ((comp & 0x200u) != 0u) { v = -v; }
            comp = comp >> 10u;
            q[i] = v;
            sumSquares += v * v;
        }
    }
    q[largest] = sqrt(max(0.0, 1.0 - sumSquares));

    // spz stores the quaternion as (x, y, z, w), the engine expects (w, x, y, z)
    return vec4f(q[3], q[0], q[1], q[2]);
}

fn getScale() -> vec3f {
    // 8-bit log encoded scale in the top byte of each position word
    let s = vec3f(packedData.xyz >> vec3u(24u));
    return exp(s / 16.0 - 10.0);
}

#if SH_BANDS > 0

// quantized SH bytes of the current splat, packed 4 to a word
var<private> shWords: array<u32, 12>;

fn unpackSH(i: i32) -> f32 {
    let b = (shWords[i >> 2] >> u32(8 * (i & 3))) & 0xffu;
    return (f32(b) - 128.0) / 128.0;
}

fn readSHData(sh: ptr<function, array<half3, SH_COEFFS>>, scale: ptr<function, f32>) {
    let d0 = loadShTexture0();
    shWords[0] = d0.x; shWords[1] = d0.y; shWords[2] = d0.z; shWords[3] = d0.w;
    #if SH_BANDS > 1
        let d1 = loadShTexture1();
        shWords[4] = d1.x; shWords[5] = d1.y; shWords[6] = d1.z; shWords[7] = d1.w;
    #endif
    #if SH_BANDS > 2
        let d2 = loadShTexture2();
        shWords[8] = d2.x; shWords[9] = d2.y; shWords[10] = d2.z; shWords[11] = d2.w;
    #endif

    for (var i: i32 = 0; i < SH_COEFFS; i++) {
        sh[i] = half3(vec3f(unpackSH(i * 3), unpackSH(i * 3 + 1), unpackSH(i * 3 + 2)));
    }

    *scale = 1.0;
}

#endif
`,jA=null,Hr=0,uA=new Map;function Jr(){const t=new Worker(new URL(""+new URL("spz-worker-PmuArfoy.js",import.meta.url).href,import.meta.url),{type:"module",name:"spz-decode"});return t.onmessage=A=>{const e=uA.get(A.data.id);e&&(uA.delete(A.data.id),A.data.ok?e.resolve(A.data.decoded):e.reject(new Error(A.data.error)))},t.onerror=A=>{t.terminate(),jA===t&&(jA=null);const e=A?.message,i=new Error(`SPZ decode worker failed${e?`: ${e}`:""}`),r=[...uA.values()];uA.clear(),r.forEach(a=>a.reject(i))},t}function Ve(t){if(typeof Worker>"u")return Nr(t);jA??=Jr();const A=jA,e=Hr++,i=new Promise((r,a)=>uA.set(e,{resolve:r,reject:a}));return(async()=>{try{for(const r=t.getReader();;){const{done:a,value:s}=await r.read();if(a)break;const I=s.slice();A.postMessage({id:e,chunk:I},[I.buffer])}A.postMessage({id:e,done:!0})}catch(r){const a=r instanceof Error?r.message:String(r);A.postMessage({id:e,error:a});const s=uA.get(e);uA.delete(e),s?.reject(r)}})(),i}var kt=class extends Ae{packed;constructor({count:t,properties:A,packed:e}){super([{name:"vertex",count:t,properties:A}]),this.packed=e}getCenters(){const{centers:t}=this.packed;return t?(this.packed.centers=void 0,t):super.getCenters()}calcAabb(t,A){const{aabb:e}=this.packed;return A||!e?super.calcAabb(t,A):(this.packed.aabb=void 0,t.center.set(e[0],e[1],e[2]),t.halfExtents.set(e[3],e[4],e[5]),!0)}};async function Kr(t){const{contents:A,url:e}=t;if(A||!e){const r=await(await tr(t)).arrayBuffer();return Ve(new Blob([r]).stream())}const i=await zA(e);if(!i.ok)throw new Error(`Failed to fetch asset: ${i.status} ${i.statusText}`);if(!i.body)throw new Error("Response has no body");return Ve(i.body)}var Ye=null;async function Or(t){!t.contents&&t.url&&(Ye?.key,me(t.url));const A=await Kr(t);return nr(A)?new Nt(A):new kt(A)}function qr(t,A){return A instanceof Nt?new zr(t,A):new EA(t,A)}var Wr={0:0,3:1,8:2,15:3},Nt=class extends Ae{quantized;centersTaken=!1;constructor(t){const{floats:A}=t,i=["x","y","z","f_dc_0","f_dc_1","f_dc_2",...Array.from({length:t.shDim*3},(r,a)=>`f_rest_${a}`),"opacity","scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3"].map(r=>({type:"float",name:r,byteSize:4,get storage(){let a=A.get(r);return a||(a=dr(t,r),A.set(r,a)),a},set storage(a){A.set(r,a)}}));super([{name:"vertex",count:t.count,properties:i}]),this.quantized=t}get shBands(){return Wr[this.quantized.shDim]}getCenters(){return this.centersTaken?super.getCenters():(this.centersTaken=!0,this.quantized.centers)}calcAabb(t,A){const{aabb:e}=this.quantized;return A||!e?super.calcAabb(t,A):(t.center.set(e[0],e[1],e[2]),t.halfExtents.set(e[3],e[4],e[5]),!0)}},zr=class extends ui{constructor(t,A){super(t,A);const e=A.quantized;this._format=new Li(t,[{name:"packedTexture",format:ve},{name:"colorTexture",format:at},...e.sh.map((i,r)=>({name:`shTexture${r}`,format:ve}))],{readGLSL:Vr,readWGSL:Yr}),this.streams.init(this.format,e.count),this.parameters.set("spzPositionScale",1/(1<<e.fractionalBits)),this.refillStreams()}refillStreams(){const t=this.gsplatData.quantized;FA(this.streams.getTexture("packedTexture"),t.packed),FA(this.streams.getTexture("colorTexture"),t.color),t.sh.forEach((A,e)=>FA(this.streams.getTexture(`shTexture${e}`),A))}configureMaterialDefines(t){t.set("SH_BANDS",this.gsplatData.shBands)}},le=.28209479177387814,GA=(t,A,e)=>t*(1-e)+A*e;function jr(t){const A=t.version===2,{scales:e,sh0:i}=t,r=new Float32Array(768),a=new Uint16Array(768),s=new Float32Array(768),I=new Uint16Array(768),o=new Float32Array(256),g=new Uint16Array(256);for(let n=0;n<3;n++)for(let _=0;_<256;_++){const C=n*256+_;r[C]=A?e.codebook[_]:GA(e.mins[n],e.maxs[n],_/255),a[C]=V(Math.exp(r[C]));const l=.5+(A?i.codebook[_]:GA(i.mins[n],i.maxs[n],_/255))*le;s[C]=(l-.5)/le,I[C]=V(s[C]*le+.5)}for(let n=0;n<256;n++){const _=A?n/255:1/(1+Math.exp(-GA(i.mins[3],i.maxs[3],n/255)));o[n]=_<=0?-40:_>=1?40:-Math.log(1/_-1),g[n]=V(1/(1+Math.exp(-o[n])))}return{scaleF:r,scaleH:a,colorF:s,colorH:I,opacityF:o,alphaH:g}}function Zr(t,A){const e=new Float32Array(65536);for(let i=0;i<65536;i++){const r=GA(t,A,i/65535);e[i]=Math.sign(r)*(Math.exp(Math.abs(r))-1)}return e}function Xr(t){const A=["x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3"],{shBands:e,meta:i,count:r}=t;e>0&&A.splice(A.indexOf("f_dc_0")+1,0,...Array.from({length:45},(m,w)=>`f_rest_${w}`));const a={};for(const m of A)a[m]=new Float32Array(r);const{x:s,y:I,z:o,f_dc_0:g,f_dc_1:n,f_dc_2:_,opacity:C,scale_0:l,scale_1:B,scale_2:h,rot_0:u,rot_1:d,rot_2:c,rot_3:Q}=a,[p,E,L]=[0,1,2].map(m=>Zr(i.means.mins[m],i.means.maxs[m])),{means_l:R,means_u:F,quats:D,scales:S,sh0:v}=t,{scaleF:P,scaleH:f,colorF:k,colorH:U,opacityF:Y,alphaH:G}=jr(i),M=new Uint16Array(r*4),N=new Uint32Array(r*4),Z=new Float32Array(N.buffer),QA=new Uint16Array(r*4),LA=new Float32Array(r*3);let RA=!0,IA=0,sA=0,nA=0,gA=0,yA=0,SA=0,DA=0,vA=0,kA=0,NA=1;for(let m=0;m<r;m++){const w=m*4,X=s[m]=p[(F[w]<<8)+R[w]],iA=I[m]=E[(F[w+1]<<8)+R[w+1]],AA=o[m]=L[(F[w+2]<<8)+R[w+2]];Z[w]=X,Z[w+1]=iA,Z[w+2]=AA,LA[m*3]=X,LA[m*3+1]=iA,LA[m*3+2]=AA;const CA=(D[w]/255-.5)*Math.SQRT2,lA=(D[w+1]/255-.5)*Math.SQRT2,W=(D[w+2]/255-.5)*Math.SQRT2,rA=Math.sqrt(Math.max(0,1-(CA*CA+lA*lA+W*W)));switch(D[w+3]-252){case 0:DA=CA,vA=lA,kA=W,NA=rA;break;case 1:DA=rA,vA=lA,kA=W,NA=CA;break;case 2:DA=lA,vA=rA,kA=W,NA=CA;break;case 3:DA=lA,vA=W,kA=rA,NA=CA;break}d[m]=DA,c[m]=vA,Q[m]=kA,u[m]=NA;let _A=d[m],BA=c[m],$=Q[m],eA=u[m],tA=Math.sqrt(_A*_A+BA*BA+$*$+eA*eA);tA===0?(_A=BA=$=0,eA=1):(tA=1/tA,_A*=tA,BA*=tA,$*=tA,eA*=tA),eA<0&&(_A*=-1,BA*=-1,$*=-1),N[w+3]=V(_A)|V(BA)<<16,QA[w+3]=V($);const te=S[w],ie=256+S[w+1],re=512+S[w+2];l[m]=P[te],B[m]=P[ie],h[m]=P[re],QA[w]=f[te],QA[w+1]=f[ie],QA[w+2]=f[re];const we=v[w],Re=256+v[w+1],ye=512+v[w+2];g[m]=k[we],n[m]=k[Re],_[m]=k[ye],C[m]=Y[v[w+3]],M[w]=U[we],M[w+1]=U[Re],M[w+2]=U[ye],M[w+3]=G[v[w+3]];const Se=Math.max(P[te],P[ie],P[re]);if(!isFinite(X)||!isFinite(iA)||!isFinite(AA)||!isFinite(Se))continue;const z=2*Math.exp(Se);RA?(RA=!1,IA=X-z,sA=iA-z,nA=AA-z,gA=X+z,yA=iA+z,SA=AA+z):(IA=Math.min(IA,X-z),sA=Math.min(sA,iA-z),nA=Math.min(nA,AA-z),gA=Math.max(gA,X+z),yA=Math.max(yA,iA+z),SA=Math.max(SA,AA+z))}const Ot=RA?null:[(IA+gA)*.5,(sA+yA)*.5,(nA+SA)*.5,(gA-IA)*.5,(yA-sA)*.5,(SA-nA)*.5];if(e>0){const m=t.sh_labels,w=t.sh_centroids,X=i.shN,iA=i.version===2,AA=[0,3,8,15][e],CA=t.centroidsWidth*4,lA=Array.from({length:45},(W,rA)=>a[`f_rest_${rA}`]);for(let W=0;W<r;W++){const rA=m[W*4]+(m[W*4+1]<<8),_A=rA%64*AA,BA=Math.floor(rA/64)*CA;for(let $=0;$<3;++$)for(let eA=0;eA<AA;++eA){const tA=w[(_A+eA)*4+$+BA];lA[$*15+eA][W]=iA?X.codebook[tA]:GA(X.mins,X.maxs,tA/255)}}}const qt=A.map(m=>({type:"float",name:m,storage:a[m],byteSize:4}));return{count:r,properties:qt,packed:{color:M,transformA:N,transformB:QA,centers:LA,aabb:Ot}}}function $r(t){return t.device.isNull?Promise.resolve(new Uint8Array(t.width*t.height*4)):t.read(0,0,t.width,t.height,{mipLevel:0,face:0,immediate:!0})}var ZA=null,Aa=0,fA=new Map;function ea(){const t=new Worker(new URL(""+new URL("sog-worker-CNSJwpq3.js",import.meta.url).href,import.meta.url),{type:"module",name:"sog-decode"});t.onmessage=e=>{const i=fA.get(e.data.id);i&&(fA.delete(e.data.id),e.data.ok?i.resolve(e.data.decoded):i.reject(new Error(e.data.error)))};const A=e=>{t.terminate(),ZA===t&&(ZA=null);const i=new Error(`SOG decode worker failed${e?`: ${e}`:""}`),r=[...fA.values()];fA.clear(),r.forEach(a=>a.reject(i))};return t.onerror=e=>A(e?.message),t.onmessageerror=()=>A("a reply could not be read"),t}function ta(t){if(typeof Worker>"u")return Promise.resolve(Xr(t));ZA??=ea();const A=Aa++,e=new Promise((a,s)=>fA.set(A,{resolve:a,reject:s})),r=[t.means_l,t.means_u,t.quats,t.scales,t.sh0,t.sh_labels,t.sh_centroids].flatMap(a=>a&&a.byteLength===a.buffer.byteLength?[a.buffer]:[]);try{ZA.postMessage({id:A,input:t},r)}catch(a){throw fA.delete(A),a}return e}async function ia(){this._patchCodebooks();const{shBands:t,meta:A,numSplats:e}=this,{means_l:i,means_u:r,quats:a,scales:s,sh0:I,sh_labels:o,sh_centroids:g}=this,n=t>0?[i,r,a,s,I,o,g]:[i,r,a,s,I],[_,C,l,B,h,u,d]=await Promise.all(n.map($r));try{return new kt(await ta({meta:A,count:e,shBands:t,means_l:_,means_u:C,quats:l,scales:B,sh0:h,sh_labels:u,sh_centroids:d,centroidsWidth:g?.width??0}))}catch{return bt.call(this)}}var bt=st.prototype.decompress;function ra(){return st.prototype.decompress=ia,bt}var aa=`
uniform float uOverlayMode;
uniform float uOverlayAlpha;
void modifySplatColor(vec2 gaussianUV, inout vec4 color) {
    if (uOverlayMode < 0.5) return;
    vec2 fc = floor(gl_FragCoord.xy);
    if (uOverlayMode > 1.5) {
        // Screen-door: keep one 2px cell in four (both cell coords even).
        vec2 cell = floor(fc * 0.5);
        if (mod(cell.x, 2.0) > 0.5 || mod(cell.y, 2.0) > 0.5) discard;
    } else {
        // Ghost: 4×4 Bayer, keep the fraction uOverlayAlpha.
        float b2 = fract(fc.x * 0.5 + fc.y * fc.y * 0.75);
        vec2 h = floor(fc * 0.5);
        float b4 = fract(h.x * 0.5 + h.y * h.y * 0.75) * 0.25 + b2;
        if (b4 >= uOverlayAlpha) discard;
    }
}
`,oa=`
uniform uOverlayMode: f32;
uniform uOverlayAlpha: f32;
fn modifySplatColor(gaussianUV: vec2f, color: ptr<function, vec4f>) {
    if (uniform.uOverlayMode < 0.5) { return; }
    let fc = floor(pcPosition.xy);
    if (uniform.uOverlayMode > 1.5) {
        let cell = floor(fc * 0.5);
        if ((cell.x % 2.0) > 0.5 || (cell.y % 2.0) > 0.5) { discard; }
    } else {
        let b2 = fract(fc.x * 0.5 + fc.y * fc.y * 0.75);
        let h = floor(fc * 0.5);
        let b4 = fract(h.x * 0.5 + h.y * h.y * 0.75) * 0.25 + b2;
        if (b4 >= uniform.uOverlayAlpha) { discard; }
    }
}
`;function Ia(t){const A=t.scene.gsplat.material;A.getShaderChunks(ot).set("gsplatModifyPS",aa),A.getShaderChunks(It).set("gsplatModifyPS",oa),A.setParameter("uOverlayMode",0),A.setParameter("uOverlayAlpha",1),A.update()}function sa(t,A,e,i,r){const a=new Float32Array(A*4),s=new Float32Array(A*4),I=new Float32Array(A*4);for(let o=0;o<A;o++){const g=o*4;a[g]=t[o*3],a[g+1]=t[o*3+1],a[g+2]=t[o*3+2],a[g+3]=r?r[o]:1,e&&(s[g]=e[o*3],s[g+1]=e[o*3+1],s[g+2]=e[o*3+2]),I[g]=i?i[o*4]:0,I[g+1]=i?i[o*4+1]:1,I[g+2]=i?i[o*4+2]:0,I[g+3]=i?i[o*4+3]:0}return{offsets:a,pivots:s,rotations:I}}var ee="2026-07-22-derive-from-matrix-model-v9+tint-v2mul+variant-v2+grade-v2+camcull-v1+relight-v3+env-relight-only-v1+no-legacy-lighting-v1+reveal-v1+envclipdist-v1+env-tint-v1+env-reveal-v1+env-shock-v1+env-reveal-inverse-v1+groupoffset-v4-rigidrot",xt=`
// rev: ${ee}
// ── Relight: screen-space lighting sampled from a proxy mesh ───────────────
//
// Produced by RelightPass (engine/src/relight/): a proxy mesh of the same
// subject is rendered with PlayCanvas's real lights into a half-resolution
// texture, and every splat samples the texel it projects to. Every splat along
// a view ray therefore reads the SAME lighting, which is what keeps overlapping
// semi-transparent splats in agreement - a per-splat N.L instead makes the
// bright back and the dark front of a head disagree, and the per-frame depth
// re-sort reshuffles that mix into visible flicker.
//
// mediump on the samplers, not highp: PlayCanvas's GLSL processor
// classifies a highp sampler as unfilterable-float, and this read has to be
// BILINEAR. An animated splat's screen position drifts across the half-res
// texture every frame and a point load pops to a new texel each time it crosses
// a boundary - visible as flicker wherever neighbouring texels differ, which is
// exactly the shadow edges.
uniform mediump sampler2D uRelightTex;        // rgb = lighting, a = proxy coverage
uniform mediump sampler2D uRelightShadowTex;  // r = shadow visibility, g = coverage
uniform mat4 uRelightVP;    // the view-projection the texture was rendered with
uniform vec4 uRelightParams; // xy = 1/size, z = 1/referenceLuminance, w = 1 when valid
uniform float uRelightStrength;
uniform vec3 uRelightTint;
uniform float uRelightAmbient;
uniform float uRelightShadowStrength;
uniform float uRelightFlipY;
uniform float uRelightDebug;

void applyRelight(vec3 worldCenter, inout vec4 color) {
    float strength = clamp(uRelightStrength, 0.0, 1.0);
    float shadowStrength = clamp(uRelightShadowStrength, 0.0, 1.0);
    // 1 = paint the lighting sample, 2 = paint the shadow-visibility sample.
    bool debug = uRelightDebug > 0.5;
    bool debugVis = uRelightDebug > 1.5;
    // Strength 0 skips the texture fetch entirely, so the effect costs nothing
    // until it is dialled up.
    if (!debug && strength <= 0.0 && shadowStrength <= 0.0) return;

    // No texture published this frame (pass disabled, or its first frame).
    if (uRelightParams.w <= 0.0) {
        if (debug) { color.rgb = vec3(1.0, 0.0, 1.0); color.a = 1.0; }
        return;
    }

    vec4 clipPos = uRelightVP * vec4(worldCenter, 1.0);
    // Reject behind-camera splats BEFORE the divide: a negative w flips the
    // sign of both NDC components, which can land a splat that is behind the
    // viewer squarely inside [0,1] and have it steal an unrelated pixel's
    // lighting.
    if (clipPos.w <= 0.0) {
        if (debug) { color.rgb = vec3(1.0, 1.0, 0.0); color.a = 1.0; }
        return;
    }

    vec2 uv = clipPos.xy / clipPos.w * 0.5 + 0.5;
    // Render-target y orientation. PlayCanvas 2.18 round-trips
    // render-to-texture the same way on both backends, so the producer leaves
    // this at 0; it is here because the moment that stops being true this is
    // the one-line fix, and the debug paint's orange case is how you find out.
    if (uRelightFlipY > 0.5) uv.y = 1.0 - uv.y;

    // Off-screen splats have no proxy pixel to read. Keep the baked colour -
    // clamping to an edge texel would smear it across the border.
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        if (debug) { color.rgb = vec3(1.0, 0.0, 0.0); color.a = 1.0; }
        return;
    }

    if (debugVis) {
        // Greys = the visibility ratio at this splat; magenta = the texel has
        // no proxy coverage, so the shadow term is a no-op there by design.
        vec2 dv = texture2DLod(uRelightShadowTex, uv, 0.0).rg;
        color.rgb = dv.g > 0.0 ? vec3(clamp(dv.r, 0.0, 1.0)) : vec3(1.0, 0.0, 1.0);
        color.a = 1.0;
        return;
    }

    vec4 s = texture2DLod(uRelightTex, uv, 0.0);

    if (debug) {
        if (s.a > 0.0) {
            // Greys: exactly what the real path multiplies in.
            color.rgb = s.rgb;
        } else {
            // No coverage at the computed texel - check the vertically
            // mirrored one. Coverage THERE (orange) convicts the y-flip
            // specifically; coverage nowhere (blue) says the alpha channel is
            // never written, or the proxy is not aligned with the splats.
            vec2 mirrored = vec2(uv.x, 1.0 - uv.y);
            color.rgb = texture2DLod(uRelightTex, mirrored, 0.0).a > 0.0
                ? vec3(1.0, 0.5, 0.0)
                : vec3(0.0, 0.0, 1.0);
        }
        color.a = 1.0;
        return;
    }

    if (strength > 0.0) {
        // .a is the proxy coverage mask. Splats outside the proxy silhouette
        // (stray hair, the edge of a skirt) fall back to their baked colour
        // rather than to black, which is what keeps the character from getting
        // a hard lit/unlit seam at its outline.
        float mask = clamp(s.a, 0.0, 1.0);
        // Normalize against the reference luminance so "correctly lit" comes
        // out near 1 and the blend below changes lighting CONTRAST rather than
        // overall brightness.
        vec3 lighting = max(s.rgb * uRelightParams.z, vec3(uRelightAmbient)) * uRelightTint;
        color.rgb = mix(color.rgb, color.rgb * lighting, strength * mask);
    }

    // Cast shadow, AFTER relighting: occlusion multiplies whatever surface
    // colour came out above, lit or baked. There is deliberately no ambient
    // floor here - the slider IS the floor, since strength s leaves a fully
    // shadowed splat at (1 - s) of its colour.
    if (shadowStrength > 0.0) {
        vec2 v = texture2DLod(uRelightShadowTex, uv, 0.0).rg;
        color.rgb *= mix(1.0, clamp(v.r, 0.0, 1.0), shadowStrength * clamp(v.g, 0.0, 1.0));
    }
}
`,Ut=`
// rev: ${ee}
// See the GLSL twin for the full contract. The sampler declaration must follow
// its texture immediately - PlayCanvas's WGSL processor pairs them by position.
var uRelightTex: texture_2d<f32>;
var uRelightTexSampler: sampler;
var uRelightShadowTex: texture_2d<f32>;
var uRelightShadowTexSampler: sampler;
uniform uRelightVP: mat4x4f;
uniform uRelightParams: vec4f;
uniform uRelightStrength: f32;
uniform uRelightTint: vec3f;
uniform uRelightAmbient: f32;
uniform uRelightShadowStrength: f32;
uniform uRelightFlipY: f32;
uniform uRelightDebug: f32;

fn applyRelight(worldCenter: vec3f, color: ptr<function, vec4f>) {
    let strength = clamp(uniform.uRelightStrength, 0.0, 1.0);
    let shadowStrength = clamp(uniform.uRelightShadowStrength, 0.0, 1.0);
    let debug = uniform.uRelightDebug > 0.5;
    let debugVis = uniform.uRelightDebug > 1.5;
    if (!debug && strength <= 0.0 && shadowStrength <= 0.0) { return; }

    if (uniform.uRelightParams.w <= 0.0) {
        if (debug) { *color = vec4f(1.0, 0.0, 1.0, 1.0); }
        return;
    }

    let clipPos = uniform.uRelightVP * vec4f(worldCenter, 1.0);
    if (clipPos.w <= 0.0) {
        if (debug) { *color = vec4f(1.0, 1.0, 0.0, 1.0); }
        return;
    }

    var uv = clipPos.xy / clipPos.w * 0.5 + vec2f(0.5);
    if (uniform.uRelightFlipY > 0.5) { uv.y = 1.0 - uv.y; }

    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        if (debug) { *color = vec4f(1.0, 0.0, 0.0, 1.0); }
        return;
    }

    if (debugVis) {
        // See the GLSL twin.
        let dv = textureSampleLevel(uRelightShadowTex, uRelightShadowTexSampler, uv, 0.0).rg;
        if (dv.g > 0.0) {
            *color = vec4f(vec3f(clamp(dv.r, 0.0, 1.0)), 1.0);
        } else {
            *color = vec4f(1.0, 0.0, 1.0, 1.0);
        }
        return;
    }

    let s = textureSampleLevel(uRelightTex, uRelightTexSampler, uv, 0.0);

    if (debug) {
        if (s.a > 0.0) {
            *color = vec4f(s.rgb, 1.0);
        } else {
            let mirrored = vec2f(uv.x, 1.0 - uv.y);
            let mirroredCoverage = textureSampleLevel(uRelightTex, uRelightTexSampler, mirrored, 0.0).a;
            if (mirroredCoverage > 0.0) {
                *color = vec4f(1.0, 0.5, 0.0, 1.0);
            } else {
                *color = vec4f(0.0, 0.0, 1.0, 1.0);
            }
        }
        return;
    }

    var rgb = (*color).rgb;
    if (strength > 0.0) {
        let mask = clamp(s.a, 0.0, 1.0);
        let lighting = max(s.rgb * uniform.uRelightParams.z, vec3f(uniform.uRelightAmbient)) * uniform.uRelightTint;
        rgb = mix(rgb, rgb * lighting, strength * mask);
    }
    if (shadowStrength > 0.0) {
        let v = textureSampleLevel(uRelightShadowTex, uRelightShadowTexSampler, uv, 0.0).rg;
        rgb = rgb * mix(1.0, clamp(v.r, 0.0, 1.0), shadowStrength * clamp(v.g, 0.0, 1.0));
    }
    *color = vec4f(rgb, (*color).a);
}
`,na=`
${xt}

// iOS WebGL2 (GLSL ES 3.00) is strict:
//   - references must be declaration-first (fails on "undeclared identifier"
//     if we use a uniform declared later in the outer shader)
//   - and rejects any duplicate uniform declaration ("redefinition")
//
// model_rotation and model_scale are declared AFTER the modifier include
// site in gsplatCopyToWorkbuffer.frag, so BOTH paths fail on iOS (forward-
// decl -> redefinition; no decl -> undeclared). Sidestep by not referencing
// them at all - matrix_model IS declared before the modifier (via
// gsplatCenterVS), so we can derive the world-space skinning rotation by
// multiplying matrix_model * palette and extracting the rotation.

uniform highp sampler2D transformPalette;
uniform highp sampler2D splatTintTex;
uniform highp sampler2D splatGradeTex;

#ifdef USE_BONE_BLENDING
uniform highp sampler2D boneIndices;
uniform highp sampler2D boneWeights;
#endif

// Reveal - opted into per-Splat on first use (Splat.setReveal /
// Armature.prepareReveal), so a splat that is never revealed compiles none of
// it. Look uniforms, from RevealLook (see Splat.setRevealLook):
//   uRevealBand   x = width, y = hold, z = max stretch
//   uRevealSketch x = lead, y = density, z = dot scale
//   uRevealTint   rgb = tint, a = luminance floor
#ifdef USE_REVEAL
#ifdef USE_BONE_BLENDING
uniform highp sampler2D splatRevealDistanceTex;
#endif
uniform vec4 uRevealBand;
uniform vec4 uRevealSketch;
uniform vec4 uRevealTint;
#endif

// Variant mask - per-splat group ID + per-group visibility texture. Splats
// whose group bit is <0.5 are collapsed (scale → 0) in the work-buffer
// shader. Opted into per-Splat via setSplatGroups; off by default so the
// non-variant rendering path pays zero (no samplers bound, no per-pixel
// texelFetch). See Splat.setSplatGroups + DamageVariant preset.
#ifdef USE_VARIANT_MASK
uniform highp sampler2D splatGroupIds;
uniform highp sampler2D splatVariantMask;

bool isSplatHiddenByVariantMask() {
    float gidF = texelFetch(splatGroupIds, splat.uv, 0).r;
    int gid = int(gidF + 0.5);
    float bit = texelFetch(splatVariantMask, ivec2(gid, 0), 0).r;
    return bit < 0.5;
}
#endif

// Per-group displacement: "cut" the splat into pieces that part by
// splatCutAmount (0 whole, 1 fully apart). Opted into by Splat.setCutGroups,
// which also turns on USE_VARIANT_MASK, so splatGroupIds is declared above.
#ifdef USE_GROUP_OFFSET
uniform highp sampler2D splatGroupOffsets; // xyz = model-space offset, w = piece scale
uniform highp sampler2D splatGroupPivots;  // xyz = pivot (model space)
uniform highp sampler2D splatGroupRots;    // xyz = unit axis, w = angle (rad) at cut 1
uniform float splatCutAmount;

int getGroupId() { return int(texelFetch(splatGroupIds, splat.uv, 0).r + 0.5); }

// Rotate p about pivot by angle around a unit axis (Rodrigues); p at angle 0.
vec3 cutRotate(vec3 p, vec3 pivot, vec3 axis, float angle) {
    vec3 v = p - pivot;
    float c = cos(angle), s = sin(angle);
    return pivot + v * c + cross(axis, v) * s + axis * dot(axis, v) * (1.0 - c);
}

// Each piece turns and scales about its pivot, then slides by its offset, all
// eased by splatCutAmount. Mirrors applyGroupCutCpu (cut-groups.ts).
vec3 applyGroupCut(vec3 center) {
    int gid = getGroupId();
    vec4 offS = texelFetch(splatGroupOffsets, ivec2(gid, 0), 0);
    vec3 pivot = texelFetch(splatGroupPivots, ivec2(gid, 0), 0).xyz;
    vec4 rot = texelFetch(splatGroupRots, ivec2(gid, 0), 0);
    vec3 rel = cutRotate(center, pivot, rot.xyz, rot.w * splatCutAmount) - pivot;
    rel *= mix(1.0, offS.w, splatCutAmount);
    return pivot + rel + offS.xyz * splatCutAmount;
}

// The same turn as a quaternion (xyzw), applied to each gaussian's own
// orientation so a piece turns rigidly rather than just moving its centers.
vec4 getGroupRotQuat() {
    vec4 rot = texelFetch(splatGroupRots, ivec2(getGroupId(), 0), 0);
    float a = rot.w * splatCutAmount * 0.5;
    return vec4(rot.xyz * sin(a), cos(a));
}
#endif

bool isReasonablePaletteTransform(mat4 t) {
    mat3 linear = mat3(t);
    vec3 s = vec3(
        length(linear[0]),
        length(linear[1]),
        length(linear[2])
    );
    // Reject only when EVERY column is near-zero (truly empty palette slot).
    // Linear-blend skinning of two significantly different bone rotations
    // produces a candy-wrapper matrix with one short column; that result is
    // still a valid mid-rotation transform we want to keep. Requiring all
    // columns to pass collapsed joint-spanning splats (notably neck) back to
    // identity → bind pose → splat stranded outside the moved model.
    // Threshold 1e-4 (vs WGSL's 1e-6) keeps clear of iOS mediump precision.
    return any(greaterThan(s, vec3(1e-4)));
}

mat4 readTransformFromPalette(uint paletteIndex) {
    if (paletteIndex == 0u) {
        return mat4(1.0);
    }

    int u = int(paletteIndex % 512u) * 3;
    int v = int(paletteIndex / 512u);

    mat4 t;
    t[0] = texelFetch(transformPalette, ivec2(u, v), 0);
    t[1] = texelFetch(transformPalette, ivec2(u + 1, v), 0);
    t[2] = texelFetch(transformPalette, ivec2(u + 2, v), 0);
    t[3] = vec4(0.0, 0.0, 0.0, 1.0);

    mat4 result = transpose(t);
    if (!isReasonablePaletteTransform(result)) {
        return mat4(1.0);
    }
    return result;
}

mat4 getSplatPaletteTransform() {
    #ifdef USE_BONE_BLENDING
    vec4 boneIdxVec = texelFetch(boneIndices, splat.uv, 0);
    vec4 boneWeightVec = texelFetch(boneWeights, splat.uv, 0);
    float totalWeight = dot(boneWeightVec, vec4(1.0));
    if (totalWeight > 0.001) {
        mat4 blended = mat4(0.0);
        for (int i = 0; i < 4; i++) {
            float w = boneWeightVec[i];
            if (w > 0.001) {
                uint idx = uint(boneIdxVec[i] + 0.5);
                blended += readTransformFromPalette(idx) * w;
            }
        }
        mat4 result = blended / totalWeight;
        if (isReasonablePaletteTransform(result)) {
            return result;
        }
    }
    #endif

    return mat4(1.0);
}

vec4 mat3ToQuatXYZW(mat3 R) {
    vec4 q;
    float trace = R[0][0] + R[1][1] + R[2][2];
    if (trace > 0.0) {
        float s = sqrt(trace + 1.0) * 2.0;
        q.w = 0.25 * s;
        q.x = (R[1][2] - R[2][1]) / s;
        q.y = (R[2][0] - R[0][2]) / s;
        q.z = (R[0][1] - R[1][0]) / s;
    } else if (R[0][0] > R[1][1] && R[0][0] > R[2][2]) {
        float s = sqrt(1.0 + R[0][0] - R[1][1] - R[2][2]) * 2.0;
        q.w = (R[1][2] - R[2][1]) / s;
        q.x = 0.25 * s;
        q.y = (R[1][0] + R[0][1]) / s;
        q.z = (R[2][0] + R[0][2]) / s;
    } else if (R[1][1] > R[2][2]) {
        float s = sqrt(1.0 + R[1][1] - R[0][0] - R[2][2]) * 2.0;
        q.w = (R[2][0] - R[0][2]) / s;
        q.x = (R[1][0] + R[0][1]) / s;
        q.y = 0.25 * s;
        q.z = (R[2][1] + R[1][2]) / s;
    } else {
        float s = sqrt(1.0 + R[2][2] - R[0][0] - R[1][1]) * 2.0;
        q.w = (R[0][1] - R[1][0]) / s;
        q.x = (R[2][0] + R[0][2]) / s;
        q.y = (R[2][1] + R[1][2]) / s;
        q.z = 0.25 * s;
    }
    return q;
}

#if defined(USE_REVEAL) && defined(GSPLAT_CENTER_NOPROJ)
// Per-splat distance along the skeleton, feet (0) to head (1).
float splatRevealDistance() {
    #ifdef USE_BONE_BLENDING
    return texelFetch(splatRevealDistanceTex, splat.uv, 0).r;
    #else
    return 1.0;
    #endif
}

// Signed distance behind the moving front.
float splatRevealX(float reveal) {
    float front = mix(-uRevealBand.x, 1.0 + uRevealBand.x, reveal);
    return front - splatRevealDistance();
}

// Bright edge colour derived from the splat's own colour.
vec3 splatRevealHot(vec3 base) {
    const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);
    vec3 tint = uRevealTint.rgb;
    float floorLuma = max(uRevealTint.a, 1e-4);
    float luma = dot(base, LUMA);
    vec3 hot = clamp(mix(vec3(luma), base, 2.2) * 1.9, 0.0, 1.0);
    hot = mix(hot, tint * max(luma, 0.35) * 2.0, 0.3);
    hot = clamp(hot, 0.0, 1.0);
    float lift = clamp((floorLuma - dot(hot, LUMA)) / floorLuma, 0.0, 1.0);
    return mix(hot, tint, lift);
}

// Stable sparse dots just ahead of the front.
float splatRevealSketch(float x) {
    float lead = uRevealSketch.x;
    if (x >= 0.0 || x < -lead) return 0.0;
    vec3 rest = getCenter();
    float h = fract(sin(dot(rest, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    if (h > uRevealSketch.y) return 0.0;
    return smoothstep(-lead, -lead * 0.7, x);
}

void splatRevealApply(float reveal, bool inverse, inout vec4 color) {
    float x = splatRevealX(reveal);
    float bandWidth = uRevealBand.x;
    vec3 base = clamp(color.rgb, 0.0, 1.0);
    vec3 hot = splatRevealHot(base);
    if (inverse) {
        if (x < 0.0) return;
        float band = 1.0 - smoothstep(0.0, bandWidth, x);
        color.rgb = mix(base, hot, band);
        color.a = band * 0.95;
        return;
    }
    if (x >= 0.0) {
        float band = 1.0 - smoothstep(bandWidth * uRevealBand.y, bandWidth, x);
        color.rgb = mix(base, hot, band);
        color.a = max(color.a, band * 0.95);
    } else {
        float sketch = splatRevealSketch(x);
        color.rgb = hot;
        color.a = sketch;
    }
}
#endif

// PC calls modifySplatCenter + modifySplatRotationScale in TWO places:
//   1. gsplatCopyToWorkbuffer.frag -- writes the skinned splat into the
//      work buffer. We want our palette/bone math to run HERE.
//   2. gsplatCorner.vert -- reads the already-skinned value back from the
//      work buffer and feeds it to the covariance math. Running the
//      palette again at this stage applies skinning twice (fatal: for an
//      entity with yaw ~ 180, mr^2 = I so the second pass cancels the
//      first and splats render in rest orientation while their centers are
//      in the animated pose, producing the radial limb streaks).
//
// GSPLAT_CENTER_NOPROJ is defined ONLY in the copy-to-wb fragment shader
// (PC convention, see gsplatCopyToWorkbuffer.js line 2). Gate the modifier
// body behind it so the render-pass call is a no-op.
void modifySplatCenter(inout vec3 center) {
    #ifdef GSPLAT_CENTER_NOPROJ
    mat4 palette = getSplatPaletteTransform();
    vec3 modelCenter = getCenter();
    vec3 modelDeformed = (palette * vec4(modelCenter, 1.0)).xyz;
    #ifdef USE_GROUP_OFFSET
    modelDeformed = applyGroupCut(modelDeformed);
    #endif
    center = (matrix_model * vec4(modelDeformed, 1.0)).xyz;
    #endif
}

// Extract rotation quat from the shared blended palette matrix and force
// paletteScale to (1,1,1). A host's armature animation pipeline can stamp
// non-unit scale into bone TRS (localScale.copy(skeletalPose.scale)) while
// the bind pose is always unit, so (current * inv(bind)) column lengths
// drift from 1 and multiplying srcScale by them amplifies the Gaussian
// ellipsoids into the radial streaks seen on fists/hands. Rigid skinning
// doesn't need bone scale blended into splat sigmas; treat paletteScale as
// identity and let the rotation do all the pose work.
void getBlendedSplatRotationScale(out vec4 qOut, out vec3 sOut) {
    sOut = vec3(1.0);
    #ifdef USE_BONE_BLENDING
    mat4 palette = getSplatPaletteTransform();
    mat3 lin = mat3(palette);
    vec3 s = vec3(length(lin[0]), length(lin[1]), length(lin[2]));
    if (s.x > 1e-5 && s.y > 1e-5 && s.z > 1e-5) {
        mat3 rot = mat3(
            lin[0] / s.x,
            lin[1] / s.y,
            lin[2] / s.z
        );
        qOut = mat3ToQuatXYZW(rot);
        return;
    }
    #endif
    qOut = vec4(0.0, 0.0, 0.0, 1.0);
}

void modifySplatRotationScale(
    vec3 originalCenter,
    vec3 modifiedCenter,
    inout vec4 rotation,
    inout vec3 scale
) {
    #ifdef GSPLAT_CENTER_NOPROJ
    // Compute the full world-space skinning rotation from the combined
    // matrix_model * palette transform, then compose with the splat-local
    // rotation. Equivalent to (model_rotation * paletteQuat * srcRotation)
    // when matrix_model has no scale, but reads from matrix_model directly
    // (which IS declared before this chunk, unlike model_rotation).
    mat4 palette = getSplatPaletteTransform();
    mat4 combined = matrix_model * palette;
    mat3 lin = mat3(combined);
    vec3 s = vec3(length(lin[0]), length(lin[1]), length(lin[2]));
    if (s.x > 1e-5 && s.y > 1e-5 && s.z > 1e-5) {
        mat3 rot = mat3(
            lin[0] / s.x,
            lin[1] / s.y,
            lin[2] / s.z
        );
        vec4 worldSkinQuat = mat3ToQuatXYZW(rot);
        vec4 srcRotation = getRotation().yzwx;
        #ifdef USE_GROUP_OFFSET
        srcRotation = quatMul(getGroupRotQuat(), srcRotation);
        #endif
        vec4 composed = quatMul(worldSkinQuat, srcRotation);
        composed = normalize(composed);
        if (composed.w < 0.0) composed = -composed;
        rotation = composed;
    }
    #ifdef USE_NONRIGID_COV
    // Bone-length scaling: propagate the palette's per-axis scale (s, the
    // column lengths just measured) into the Gaussian sigma so covariances
    // stretch along the bone - consistent with the rotation extracted above.
    // Requires the CPU palette to keep its scale (SplatSkinning.covStretch).
    scale *= s;
    #endif
    // (default) scale left alone - paletteScale is unit by design (CPU
    // rigid-skin normalization strips scale before building the palette).

    #ifdef USE_VARIANT_MASK
    // Variant-mask cull: collapse splats whose group bit is masked out.
    // Writing scale=0 into the work buffer makes the covariance go to zero
    // on the render-pass side, so the gaussian contributes no pixels.
    if (isSplatHiddenByVariantMask()) {
        scale = vec3(0.0);
    }
    #endif

    #ifdef USE_REVEAL
    // Reveal: ahead of the front draws small (only the sparse sketch subset
    // has alpha there, see splatRevealApply); inside the band, elongated
    // splats are squashed so the edge stays a stroke rather than sparks.
    vec4 revealGrade = texelFetch(splatGradeTex, ivec2(0, 0), 0);
    if (revealGrade.a > 0.5) {
        float x = splatRevealX(revealGrade.b);
        if (x >= 0.0 && x < uRevealBand.x) {
            float m = min(scale.x, min(scale.y, scale.z));
            scale = min(scale, vec3(m * uRevealBand.z));
        }
    } else if (revealGrade.b < 1.0) {
        float x = splatRevealX(revealGrade.b);
        if (x < 0.0) {
            scale *= uRevealSketch.z;
        } else if (x < uRevealBand.x) {
            float m = min(scale.x, min(scale.y, scale.z));
            scale = min(scale, vec3(m * uRevealBand.z));
        }
    }
    #endif
    #endif
}

void modifySplatColor(vec3 center, inout vec4 color) {
    // Same dual-call issue as center/rotation: write pass bakes the colour
    // into the workbuffer, render pass would then apply it AGAIN. Gate.
    #ifdef GSPLAT_CENTER_NOPROJ
    vec4 tintTex = texelFetch(splatTintTex, ivec2(0, 0), 0);
    vec3 tintColor = tintTex.rgb;
    // a >= 0: mix toward tintColor. a < 0: multiply by tintColor, strength -a
    // (Splat.setTintMultiply).
    if (tintTex.a >= 0.0) {
        color.rgb = mix(color.rgb, tintColor, min(tintTex.a, 1.0));
    } else {
        color.rgb = mix(color.rgb, color.rgb * tintColor, min(-tintTex.a, 1.0));
    }
    // Relight: tint, then light the tinted colour. Ordered before the grade so
    // contrast/saturation act on the lit result, the way a grade would on a
    // rendered frame.
    applyRelight(center, color);
    // Color grade: gradeTex.r = contrast, gradeTex.g = saturation. Identity
    // (1,1) is a TRUE no-op - skip the math + clamp so HDR splat colours are
    // preserved (clamping them to [0,1] turns bright splats into white specks).
    vec4 gradeTex = texelFetch(splatGradeTex, ivec2(0, 0), 0);
    float contrast = gradeTex.r;
    float saturation = gradeTex.g;
    if (contrast != 1.0 || saturation != 1.0) {
        color.rgb = (color.rgb - 0.5) * contrast + 0.5;
        float luma = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
        color.rgb = mix(vec3(luma), color.rgb, saturation);
        color.rgb = clamp(color.rgb, 0.0, 1.0);
    }
    #ifdef USE_REVEAL
    // Reveal front (gradeTex.b, 1 = identity). See Splat.setReveal.
    if (gradeTex.b < 1.0 || gradeTex.a > 0.5) {
        splatRevealApply(gradeTex.b, gradeTex.a > 0.5, color);
    }
    #endif
    // Opacity (texel 1). See Splat.setOpacity.
    color.a *= texelFetch(splatTintTex, ivec2(1, 0), 0).r;
    #endif
}
`,ga=`
${Ut}

var transformPalette: texture_2d<f32>;
var splatTintTex: texture_2d<f32>;
var splatGradeTex: texture_2d<f32>;

#ifdef USE_BONE_BLENDING
var boneIndices: texture_2d<f32>;
var boneWeights: texture_2d<f32>;
#endif

// Reveal - see GLSL twin.
#ifdef USE_REVEAL
#ifdef USE_BONE_BLENDING
var splatRevealDistanceTex: texture_2d<f32>;
#endif
uniform uRevealBand: vec4f;
uniform uRevealSketch: vec4f;
uniform uRevealTint: vec4f;
#endif

// See GLSL twin for semantics. Opted in via Splat.setSplatGroups.
#ifdef USE_VARIANT_MASK
var splatGroupIds: texture_2d<f32>;
var splatVariantMask: texture_2d<f32>;

fn isSplatHiddenByVariantMask() -> bool {
    let gidF = textureLoad(splatGroupIds, splat.uv, 0).r;
    let gid = i32(gidF + 0.5);
    let bit = textureLoad(splatVariantMask, vec2i(gid, 0), 0).r;
    return bit < 0.5;
}
#endif

// See the GLSL twin: per-group displacement and rotation; needs splatGroupIds
// (USE_VARIANT_MASK).
#ifdef USE_GROUP_OFFSET
var splatGroupOffsets: texture_2d<f32>; // xyz = model-space offset, w = piece scale
var splatGroupPivots: texture_2d<f32>;  // xyz = pivot (model space)
var splatGroupRots: texture_2d<f32>;    // xyz = unit axis, w = angle (rad) at cut 1
uniform splatCutAmount: f32;

fn getGroupId() -> i32 { return i32(textureLoad(splatGroupIds, splat.uv, 0).r + 0.5); }

fn cutRotate(p: vec3f, pivot: vec3f, axis: vec3f, angle: f32) -> vec3f {
    let v = p - pivot;
    let c = cos(angle);
    let s = sin(angle);
    return pivot + v * c + cross(axis, v) * s + axis * dot(axis, v) * (1.0 - c);
}

fn applyGroupCut(center: vec3f) -> vec3f {
    let gid = getGroupId();
    let offS = textureLoad(splatGroupOffsets, vec2i(gid, 0), 0);
    let pivot = textureLoad(splatGroupPivots, vec2i(gid, 0), 0).xyz;
    let rot = textureLoad(splatGroupRots, vec2i(gid, 0), 0);
    var rel = cutRotate(center, pivot, rot.xyz, rot.w * uniform.splatCutAmount) - pivot;
    rel = rel * mix(1.0, offS.w, uniform.splatCutAmount);
    return pivot + rel + offS.xyz * uniform.splatCutAmount;
}

fn getGroupRotQuat() -> vec4f {
    let rot = textureLoad(splatGroupRots, vec2i(getGroupId(), 0), 0);
    let a = rot.w * uniform.splatCutAmount * 0.5;
    return vec4f(rot.xyz * sin(a), cos(a));
}
#endif

fn identityMat4() -> mat4x4f {
    return mat4x4f(
        vec4f(1.0, 0.0, 0.0, 0.0),
        vec4f(0.0, 1.0, 0.0, 0.0),
        vec4f(0.0, 0.0, 1.0, 0.0),
        vec4f(0.0, 0.0, 0.0, 1.0)
    );
}

fn isReasonablePaletteTransform(t: mat4x4f) -> bool {
    let s = vec3f(
        length(t[0].xyz),
        length(t[1].xyz),
        length(t[2].xyz)
    );
    // Reject only when EVERY column is near-zero. See GLSL twin for the
    // candy-wrapper / neck-splat rationale. WGSL uses 1e-6 since WebGPU
    // doesn't have iOS mediump precision concerns.
    return any(s > vec3f(1e-6));
}

fn readTransformFromPalette(paletteIndex: u32) -> mat4x4f {
    if (paletteIndex == 0u) {
        return identityMat4();
    }

    let u: i32 = i32(paletteIndex % 512u) * 3;
    let v: i32 = i32(paletteIndex / 512u);

    var t: mat4x4f;
    t[0] = textureLoad(transformPalette, vec2i(u, v), 0);
    t[1] = textureLoad(transformPalette, vec2i(u + 1, v), 0);
    t[2] = textureLoad(transformPalette, vec2i(u + 2, v), 0);
    t[3] = vec4f(0.0, 0.0, 0.0, 1.0);

    let result = transpose(t);
    if (!isReasonablePaletteTransform(result)) {
        return identityMat4();
    }
    return result;
}

fn getSplatPaletteTransform() -> mat4x4f {
    #ifdef USE_BONE_BLENDING
    let boneIdxVec = textureLoad(boneIndices, splat.uv, 0);
    let boneWeightVec = textureLoad(boneWeights, splat.uv, 0);
    let totalWeight = dot(boneWeightVec, vec4f(1.0));
    if (totalWeight > 0.001) {
        var blended = mat4x4f(
            vec4f(0.0), vec4f(0.0), vec4f(0.0), vec4f(0.0)
        );
        for (var i: i32 = 0; i < 4; i = i + 1) {
            let w = boneWeightVec[i];
            if (w > 0.001) {
                let idx = u32(boneIdxVec[i] + 0.5);
                let m = readTransformFromPalette(idx);
                blended[0] = blended[0] + m[0] * w;
                blended[1] = blended[1] + m[1] * w;
                blended[2] = blended[2] + m[2] * w;
                blended[3] = blended[3] + m[3] * w;
            }
        }
        let invW = 1.0 / totalWeight;
        let result = mat4x4f(
            blended[0] * invW,
            blended[1] * invW,
            blended[2] * invW,
            blended[3] * invW
        );
        if (isReasonablePaletteTransform(result)) {
            return result;
        }
    }
    #endif

    return identityMat4();
}

fn mat3ToQuatXYZW(R: mat3x3f) -> vec4f {
    var q: vec4f;
    let trace = R[0][0] + R[1][1] + R[2][2];
    if (trace > 0.0) {
        let s = sqrt(trace + 1.0) * 2.0;
        q.w = 0.25 * s;
        q.x = (R[1][2] - R[2][1]) / s;
        q.y = (R[2][0] - R[0][2]) / s;
        q.z = (R[0][1] - R[1][0]) / s;
    } else if (R[0][0] > R[1][1] && R[0][0] > R[2][2]) {
        let s = sqrt(1.0 + R[0][0] - R[1][1] - R[2][2]) * 2.0;
        q.w = (R[1][2] - R[2][1]) / s;
        q.x = 0.25 * s;
        q.y = (R[1][0] + R[0][1]) / s;
        q.z = (R[2][0] + R[0][2]) / s;
    } else if (R[1][1] > R[2][2]) {
        let s = sqrt(1.0 + R[1][1] - R[0][0] - R[2][2]) * 2.0;
        q.w = (R[2][0] - R[0][2]) / s;
        q.x = (R[1][0] + R[0][1]) / s;
        q.y = 0.25 * s;
        q.z = (R[2][1] + R[1][2]) / s;
    } else {
        let s = sqrt(1.0 + R[2][2] - R[0][0] - R[1][1]) * 2.0;
        q.w = (R[0][1] - R[1][0]) / s;
        q.x = (R[2][0] + R[0][2]) / s;
        q.y = (R[2][1] + R[1][2]) / s;
        q.z = 0.25 * s;
    }
    return q;
}

#if defined(USE_REVEAL) && defined(GSPLAT_CENTER_NOPROJ)
fn splatRevealDistance() -> f32 {
    #ifdef USE_BONE_BLENDING
    return textureLoad(splatRevealDistanceTex, splat.uv, 0).r;
    #else
    return 1.0;
    #endif
}

fn splatRevealX(reveal: f32) -> f32 {
    let front = mix(-uniform.uRevealBand.x, 1.0 + uniform.uRevealBand.x, reveal);
    return front - splatRevealDistance();
}

fn splatRevealHot(base: vec3f) -> vec3f {
    let LUMA = vec3f(0.2126, 0.7152, 0.0722);
    let tint = uniform.uRevealTint.rgb;
    let floorLuma = max(uniform.uRevealTint.a, 1e-4);
    let luma = dot(base, LUMA);
    var hot = clamp(mix(vec3f(luma), base, 2.2) * 1.9, vec3f(0.0), vec3f(1.0));
    hot = mix(hot, tint * max(luma, 0.35) * 2.0, 0.3);
    hot = clamp(hot, vec3f(0.0), vec3f(1.0));
    let lift = clamp((floorLuma - dot(hot, LUMA)) / floorLuma, 0.0, 1.0);
    return mix(hot, tint, lift);
}

fn splatRevealSketch(x: f32) -> f32 {
    let lead = uniform.uRevealSketch.x;
    if (x >= 0.0 || x < -lead) { return 0.0; }
    let rest = getCenter();
    let h = fract(sin(dot(rest, vec3f(12.9898, 78.233, 37.719))) * 43758.5453);
    if (h > uniform.uRevealSketch.y) { return 0.0; }
    return smoothstep(-lead, -lead * 0.7, x);
}

// See GLSL twin: hard cutoff, hot band behind the edge, sketch dots ahead.
fn splatRevealApply(reveal: f32, inverse: bool, color: vec4f) -> vec4f {
    let x = splatRevealX(reveal);
    let bandWidth = uniform.uRevealBand.x;
    let base = clamp(color.rgb, vec3f(0.0), vec3f(1.0));
    let hot = splatRevealHot(base);
    if (inverse) {
        if (x < 0.0) { return color; }
        let band = 1.0 - smoothstep(0.0, bandWidth, x);
        return vec4f(mix(base, hot, band), band * 0.95);
    }
    if (x >= 0.0) {
        let band = 1.0 - smoothstep(bandWidth * uniform.uRevealBand.y, bandWidth, x);
        return vec4f(mix(base, hot, band), max(color.a, band * 0.95));
    }
    let sketch = splatRevealSketch(x);
    return vec4f(hot, sketch);
}
#endif

// GSPLAT_CENTER_NOPROJ gate - see GLSL version. Skip palette math on the
// render-pass call so skinning isn't applied twice.
fn modifySplatCenter(center: ptr<function, vec3f>) {
    #ifdef GSPLAT_CENTER_NOPROJ
    let palette = getSplatPaletteTransform();
    let modelCenter = getCenter();
    var modelDeformed = (palette * vec4f(modelCenter, 1.0)).xyz;
    #ifdef USE_GROUP_OFFSET
    modelDeformed = applyGroupCut(modelDeformed);
    #endif
    *center = (uniform.matrix_model * vec4f(modelDeformed, 1.0)).xyz;
    #endif
}

// See GLSL version: paletteScale forced to (1,1,1) to prevent bone-scale
// drift from amplifying splat sigmas.
fn getBlendedSplatRotationScale(qOut: ptr<function, vec4f>, sOut: ptr<function, vec3f>) {
    *sOut = vec3f(1.0);
    #ifdef USE_BONE_BLENDING
    let palette = getSplatPaletteTransform();
    let lin = mat3x3f(palette[0].xyz, palette[1].xyz, palette[2].xyz);
    let s = vec3f(length(lin[0]), length(lin[1]), length(lin[2]));
    if (s.x > 1e-5 && s.y > 1e-5 && s.z > 1e-5) {
        let rot = mat3x3f(
            lin[0] / s.x,
            lin[1] / s.y,
            lin[2] / s.z
        );
        *qOut = mat3ToQuatXYZW(rot);
        return;
    }
    #endif
    *qOut = vec4f(0.0, 0.0, 0.0, 1.0);
}

fn modifySplatRotationScale(
    originalCenter: vec3f,
    modifiedCenter: vec3f,
    rotation: ptr<function, vec4f>,
    scale: ptr<function, vec3f>
) {
    #ifdef GSPLAT_CENTER_NOPROJ
    // See GLSL: compute world-skin rotation from matrix_model * palette
    // directly, avoid the model_rotation uniform (iOS WebGL2 refuses both
    // forward-decl and no-decl).
    let palette = getSplatPaletteTransform();
    let combined = uniform.matrix_model * palette;
    let lin = mat3x3f(combined[0].xyz, combined[1].xyz, combined[2].xyz);
    let s = vec3f(length(lin[0]), length(lin[1]), length(lin[2]));
    if (s.x > 1e-5 && s.y > 1e-5 && s.z > 1e-5) {
        let rot = mat3x3f(
            lin[0] / s.x,
            lin[1] / s.y,
            lin[2] / s.z
        );
        let worldSkinQuat = mat3ToQuatXYZW(rot);
        var srcRotation = getRotation().yzwx;
        #ifdef USE_GROUP_OFFSET
        srcRotation = vec4f(quatMul(half4(getGroupRotQuat()), half4(srcRotation)));
        #endif
        var composed = vec4f(quatMul(half4(worldSkinQuat), half4(srcRotation)));
        composed = normalize(composed);
        if (composed.w < 0.0) {
            composed = -composed;
        }
        *rotation = composed;
    }
    #ifdef USE_NONRIGID_COV
    // Bone-length scaling: see GLSL twin - stretch covariance by palette scale.
    *scale = *scale * s;
    #endif

    #ifdef USE_VARIANT_MASK
    // Variant-mask cull. See GLSL twin.
    if (isSplatHiddenByVariantMask()) {
        *scale = vec3f(0.0);
    }
    #endif

    #ifdef USE_REVEAL
    // Reveal: small ahead of the front, squashed inside the band. See GLSL twin.
    let revealGrade = textureLoad(splatGradeTex, vec2i(0, 0), 0);
    if (revealGrade.a > 0.5) {
        let x = splatRevealX(revealGrade.b);
        if (x >= 0.0 && x < uniform.uRevealBand.x) {
            let m = min((*scale).x, min((*scale).y, (*scale).z));
            *scale = min(*scale, vec3f(m * uniform.uRevealBand.z));
        }
    } else if (revealGrade.b < 1.0) {
        let x = splatRevealX(revealGrade.b);
        if (x < 0.0) {
            *scale = *scale * uniform.uRevealSketch.z;
        } else if (x < uniform.uRevealBand.x) {
            let m = min((*scale).x, min((*scale).y, (*scale).z));
            *scale = min(*scale, vec3f(m * uniform.uRevealBand.z));
        }
    }
    #endif
    #endif
}

fn modifySplatColor(center: vec3f, color: ptr<function, vec4f>) {
    #ifdef GSPLAT_CENTER_NOPROJ
    let tintTex = textureLoad(splatTintTex, vec2i(0, 0), 0);
    let tintColor = tintTex.rgb;
    // a >= 0: mix toward tintColor. a < 0: multiply by tintColor, strength -a.
    let base = (*color).rgb;
    var rgb: vec3f;
    if (tintTex.a >= 0.0) {
        rgb = mix(base, tintColor, min(tintTex.a, 1.0));
    } else {
        rgb = mix(base, base * tintColor, min(-tintTex.a, 1.0));
    }
    // Relight - see the GLSL twin for the ordering rationale. Written back
    // through the pointer so the debug paint's alpha override survives.
    (*color) = vec4f(rgb, (*color).a);
    applyRelight(center, color);
    rgb = (*color).rgb;
    // Color grade: identity (1,1) is a TRUE no-op - preserve HDR colours.
    let gradeTex = textureLoad(splatGradeTex, vec2i(0, 0), 0);
    if (gradeTex.r != 1.0 || gradeTex.g != 1.0) {
        rgb = (rgb - vec3f(0.5)) * gradeTex.r + vec3f(0.5);
        let luma = dot(rgb, vec3f(0.2126, 0.7152, 0.0722));
        rgb = mix(vec3f(luma), rgb, gradeTex.g);
        rgb = clamp(rgb, vec3f(0.0), vec3f(1.0));
    }
    (*color) = vec4f(rgb, (*color).a);
    #ifdef USE_REVEAL
    // Reveal front (gradeTex.b, 1 = identity). See Splat.setReveal.
    if (gradeTex.b < 1.0 || gradeTex.a > 0.5) {
        (*color) = splatRevealApply(gradeTex.b, gradeTex.a > 0.5, *color);
    }
    #endif
    // Opacity (texel 1). See Splat.setOpacity.
    (*color).a *= textureLoad(splatTintTex, vec2i(1, 0), 0).r;
    #endif
}
`,Ca=`
// rev: ${ee}
${xt}

// No forward-decl needed in the env modifier - matrix_model is already
// declared by gsplatCenterVS (included before this chunk), and the env
// modifier doesn't reference model_rotation / model_scale.

uniform vec3 uEnvClipMin;
uniform vec3 uEnvClipMax;

// Radial clip band, squared. A splat whose center is nearer than
// sqrt(uEnvClipDistMinSq), or at or beyond sqrt(uEnvClipDistMaxSq), from
// uEnvClipDistOrigin is collapsed to zero scale - the radial twin of the
// uEnvClipMin/Max box, for the shells a box cannot describe (see
// Environment.setClipDistance). Half-open [min, max) so successive bands
// tile without drawing a seam twice. Neutral defaults (0, 1e18) keep
// every splat.
uniform float uEnvClipDistMinSq;
uniform float uEnvClipDistMaxSq;
uniform vec3 uEnvClipDistOrigin;

// Size cap: each splat axis (in the splat file's own units) is clamped to
// uEnvSplatSizeMax (see Environment.setSplatSizeMax). The 1e9 sentinel leaves
// every splat alone.
uniform float uEnvSplatSizeMax;

// Camera occlusion cutaway. Splats nearer to the camera than uCamCullMaxT
// along uCamCullDir AND above the uCamCullFloorY gate are faded to zero
// scale, so walls between the camera and the characters vanish while the
// floor stays. Neutral when uCamCullMaxT is the -1e9 sentinel: the along-
// view smoothstep then saturates to "keep" for every real-world position.
// uCamCullFade = (along-view band, floor-gate band) in metres; the caller
// clamps both to >= 1e-3 (smoothstep with edge0 == edge1 is undefined).
uniform vec3 uCamCullPos;
uniform vec3 uCamCullDir;
uniform float uCamCullMaxT;
uniform float uCamCullFloorY;
uniform vec2 uCamCullFade;

// Tint - the env twin of the character's splatTintTex, and the same blend:
// mix(colour, tint.rgb, tint.a), so a=0 leaves the capture alone whatever
// sits in rgb. A UNIFORM rather than the character's 1x1 texture, because the
// value is one global number either way and a sampler is not free here: every
// sampler a work-buffer shader declares must be bound on every draw under
// WebGPU, and this chunk compiles into every scene whether or not it ever
// tints. See Environment.setTint.
uniform vec4 uEnvTint;

// Shockwave - a ring of brightness expanding from a clicked point, opted into
// per-Environment (Environment.prepareShock / setShock) so a scene that never
// shocks compiles none of it and carries neither uniform.
//
// NO DISTANCE TEXTURE, and the reveal's bake sitting right below this is not
// the precedent it looks like. The reveal's origin is FIXED - the capture
// point - so its per-splat distance is a constant worth baking once. A shock
// starts wherever the reader clicked, a different point every time, so a bake
// would have to re-walk every splat on the click and upload a texture before
// the first frame could draw. The distance it needs is distance(center,
// origin) and modifySplatColor is already handed the world-space center, so
// the whole effect is two uniforms and one subtract per splat per frame.
//
//   uEnvShock      xyz = origin (world space), w = the ring's current radius
//   uEnvShockBand  x = half-width (crest to zero), y = peak lift, 0 = idle
#ifdef USE_SHOCK
uniform vec4 uEnvShock;
uniform vec2 uEnvShockBand;

// The lift this splat takes from the ring passing over it: 0 everywhere but
// the band, peaking at the crest, so what the wave leaves behind is exactly
// what was there before it. A FILL - everything inside the radius lit - would
// read as the flat lift this replaced, only slower.
float envShockLift(vec3 center) {
    float peak = uEnvShockBand.y;
    // Idle short-circuit. A scene sits at strength 0 for all but the half
    // second after a click, and this is the whole cost of that.
    if (peak <= 0.0) return 0.0;
    float x = abs(distance(center, uEnvShock.xyz) - uEnvShock.w) / max(uEnvShockBand.x, 1e-4);
    if (x >= 1.0) return 0.0;
    // smoothstep of the distance to the crest: 1 at the crest, 0 at both
    // edges and FLAT at both, so neither side of the ring draws a seam.
    float f = 1.0 - x;
    return peak * f * f * (3.0 - 2.0 * f);
}
#endif

// Reveal - opted into per-Environment on first use (Environment.prepareReveal
// / setReveal), so a scene that never reveals compiles none of it and
// allocates no distance texture. uEnvReveal is the front's position, 1 =
// fully revealed; uEnvRevealInverse (>0.5) reads that same front the other
// way round, for the capture a replacement is dissolving. The look uniforms
// carry the same packing as the character's (see RevealLook / packRevealLook).
#ifdef USE_REVEAL
uniform highp sampler2D splatRevealDistanceTex;
uniform float uEnvReveal;
uniform float uEnvRevealInverse;
uniform vec4 uRevealBand;
uniform vec4 uRevealSketch;
uniform vec4 uRevealTint;
#endif

// Gated on GSPLAT_CENTER_NOPROJ for the reason the character's twin is: PC
// calls these modifiers in the copy-to-work-buffer pass AND again in the
// render pass, and the reveal's scale work is a min/multiply, so letting it
// run twice would shrink the sketch dots twice over. The clip and cutaway
// above it are idempotent, which is why they are not gated.
#if defined(USE_REVEAL) && defined(GSPLAT_CENTER_NOPROJ)
// Per-splat radial distance from the capture point, 0 at it and 1 at the
// room's outer shell. Baked by bakeEnvRevealDistances; 1 until it has run,
// which keeps an unbaked scene hidden rather than showing garbage.
float splatRevealDistance() {
    return texelFetch(splatRevealDistanceTex, splat.uv, 0).r;
}

// Signed distance behind the moving front.
float splatRevealX(float reveal) {
    float front = mix(-uRevealBand.x, 1.0 + uRevealBand.x, reveal);
    return front - splatRevealDistance();
}

// Bright edge colour derived from the splat's own colour. Character twin.
vec3 splatRevealHot(vec3 base) {
    const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);
    vec3 tint = uRevealTint.rgb;
    float floorLuma = max(uRevealTint.a, 1e-4);
    float luma = dot(base, LUMA);
    vec3 hot = clamp(mix(vec3(luma), base, 2.2) * 1.9, 0.0, 1.0);
    hot = mix(hot, tint * max(luma, 0.35) * 2.0, 0.3);
    hot = clamp(hot, 0.0, 1.0);
    float lift = clamp((floorLuma - dot(hot, LUMA)) / floorLuma, 0.0, 1.0);
    return mix(hot, tint, lift);
}

// Stable sparse dots just ahead of the front. Hashed off the rest position so
// a splat is a dot or is not for the whole sweep, rather than flickering.
float splatRevealSketch(float x) {
    float lead = uRevealSketch.x;
    if (x >= 0.0 || x < -lead) return 0.0;
    vec3 rest = getCenter();
    float h = fract(sin(dot(rest, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    if (h > uRevealSketch.y) return 0.0;
    return smoothstep(-lead, -lead * 0.7, x);
}

// Whether the reveal has anything to say this frame. The INVERSE pass is
// active at every amount, including 1: a dissolve that has finished has to
// render as nothing, where a forward sweep that has finished renders as
// itself.
bool envRevealInverse() { return uEnvRevealInverse > 0.5; }
bool envRevealActive() { return uEnvReveal < 1.0 || envRevealInverse(); }

// Hard cutoff, hot band behind the front, sketch dots ahead.
//
// The INVERSE pass is the same front read the other way round: ahead of it
// the capture is untouched, behind it the band fades the splat out and then
// it is gone. That is what makes a scene gaining a new version ONE effect
// instead of two - the replaced capture dissolves on the replacement's clock
// and against the replacement's front, exactly as an outgoing character does
// (see the character twin's inverse flag). Both fronts are a NORMALISED
// radius of the same room, so the two tile it: inside the front only the new
// version draws, outside it only the old one, and the reader never sees the
// place leave before it arrives.
void splatRevealApply(float reveal, bool inverse, inout vec4 color) {
    float x = splatRevealX(reveal);
    float bandWidth = uRevealBand.x;
    vec3 base = clamp(color.rgb, 0.0, 1.0);
    vec3 hot = splatRevealHot(base);
    if (inverse) {
        if (x < 0.0) return;
        float band = 1.0 - smoothstep(0.0, bandWidth, x);
        color.rgb = mix(base, hot, band);
        color.a = band * 0.95;
        return;
    }
    if (x >= 0.0) {
        float band = 1.0 - smoothstep(bandWidth * uRevealBand.y, bandWidth, x);
        color.rgb = mix(base, hot, band);
        color.a = max(color.a, band * 0.95);
    } else {
        float sketch = splatRevealSketch(x);
        color.rgb = hot;
        color.a = sketch;
    }
}
#endif

void modifySplatCenter(inout vec3 center) {
    #ifdef GSPLAT_CENTER_NOPROJ
    vec3 modelCenter = getCenter();
    center = (matrix_model * vec4(modelCenter, 1.0)).xyz;
    #endif
}

void modifySplatRotationScale(
    vec3 originalCenter,
    vec3 modifiedCenter,
    inout vec4 rotation,
    inout vec3 scale
) {
    scale = min(scale, vec3(uEnvSplatSizeMax));
    if (any(lessThan(modifiedCenter, uEnvClipMin)) ||
        any(greaterThan(modifiedCenter, uEnvClipMax))) {
        scale = vec3(0.0);
    }
    vec3 clipDistDelta = modifiedCenter - uEnvClipDistOrigin;
    float clipDistSq = dot(clipDistDelta, clipDistDelta);
    if (clipDistSq < uEnvClipDistMinSq || clipDistSq >= uEnvClipDistMaxSq) {
        scale = vec3(0.0);
    }
    float t = dot(modifiedCenter - uCamCullPos, uCamCullDir);
    float along = 1.0 - smoothstep(uCamCullMaxT - uCamCullFade.x, uCamCullMaxT, t);
    float above = smoothstep(uCamCullFloorY, uCamCullFloorY + uCamCullFade.y, modifiedCenter.y);
    scale *= 1.0 - along * above;

    #if defined(USE_REVEAL) && defined(GSPLAT_CENTER_NOPROJ)
    // Reveal: ahead of the front draws small (only the sparse sketch subset
    // has alpha out there, see splatRevealApply); inside the band, elongated
    // splats are squashed so the front stays a stroke rather than sparks.
    // The inverse pass only squashes: AHEAD of its front the capture it is
    // dissolving is untouched, so nothing may shrink it there.
    if (envRevealActive()) {
        float revealX = splatRevealX(uEnvReveal);
        bool inBand = revealX >= 0.0 && revealX < uRevealBand.x;
        if (envRevealInverse()) {
            if (inBand) {
                float m = min(scale.x, min(scale.y, scale.z));
                scale = min(scale, vec3(m * uRevealBand.z));
            }
        } else if (revealX < 0.0) {
            scale *= uRevealSketch.z;
        } else if (inBand) {
            float m = min(scale.x, min(scale.y, scale.z));
            scale = min(scale, vec3(m * uRevealBand.z));
        }
    }
    #endif
}

void modifySplatColor(vec3 center, inout vec4 color) {
    #ifdef GSPLAT_CENTER_NOPROJ
    // Tint, then light the tinted colour, then the reveal on top - the
    // character's order, so the two subjects answer a selection the same way.
    color.rgb = mix(color.rgb, uEnvTint.rgb, clamp(uEnvTint.a, 0.0, 1.0));
    // The shock rides in the tint's seat, before the relight, because it IS
    // the tint channel's other shape: the flat lift answers a selection with
    // no origin, the ring answers one that has a point.
    #ifdef USE_SHOCK
    color.rgb = mix(color.rgb, vec3(1.0), envShockLift(center));
    #endif
    applyRelight(center, color);
    #ifdef USE_REVEAL
    if (envRevealActive()) {
        splatRevealApply(uEnvReveal, envRevealInverse(), color);
    }
    #endif
    #endif
}
`,la=`
// rev: ${ee}
${Ut}

uniform uEnvClipMin: vec3f;
uniform uEnvClipMax: vec3f;

// Radial clip band - see the GLSL variant for the full contract.
uniform uEnvClipDistMinSq: f32;
uniform uEnvClipDistMaxSq: f32;
uniform uEnvClipDistOrigin: vec3f;

// Size cap - see the GLSL variant.
uniform uEnvSplatSizeMax: f32;

// Camera occlusion cutaway - see the GLSL variant for the full contract.
uniform uCamCullPos: vec3f;
uniform uCamCullDir: vec3f;
uniform uCamCullMaxT: f32;
uniform uCamCullFloorY: f32;
uniform uCamCullFade: vec2f;

// Tint - see the GLSL variant for why this is a uniform and not a texture.
uniform uEnvTint: vec4f;

// Shockwave - see the GLSL twin, including why this needs no distance texture
// where the reveal below it bakes one.
#ifdef USE_SHOCK
uniform uEnvShock: vec4f;
uniform uEnvShockBand: vec2f;

fn envShockLift(center: vec3f) -> f32 {
    let peak = uniform.uEnvShockBand.y;
    if (peak <= 0.0) { return 0.0; }
    let x = abs(distance(center, uniform.uEnvShock.xyz) - uniform.uEnvShock.w)
          / max(uniform.uEnvShockBand.x, 1e-4);
    if (x >= 1.0) { return 0.0; }
    let f = 1.0 - x;
    return peak * f * f * (3.0 - 2.0 * f);
}
#endif

// Reveal - see the GLSL twin.
#ifdef USE_REVEAL
var splatRevealDistanceTex: texture_2d<f32>;
uniform uEnvReveal: f32;
uniform uEnvRevealInverse: f32;
uniform uRevealBand: vec4f;
uniform uRevealSketch: vec4f;
uniform uRevealTint: vec4f;
#endif

#if defined(USE_REVEAL) && defined(GSPLAT_CENTER_NOPROJ)
fn splatRevealDistance() -> f32 {
    return textureLoad(splatRevealDistanceTex, splat.uv, 0).r;
}

fn splatRevealX(reveal: f32) -> f32 {
    let front = mix(-uniform.uRevealBand.x, 1.0 + uniform.uRevealBand.x, reveal);
    return front - splatRevealDistance();
}

fn splatRevealHot(base: vec3f) -> vec3f {
    let LUMA = vec3f(0.2126, 0.7152, 0.0722);
    let tint = uniform.uRevealTint.rgb;
    let floorLuma = max(uniform.uRevealTint.a, 1e-4);
    let luma = dot(base, LUMA);
    var hot = clamp(mix(vec3f(luma), base, 2.2) * 1.9, vec3f(0.0), vec3f(1.0));
    hot = mix(hot, tint * max(luma, 0.35) * 2.0, 0.3);
    hot = clamp(hot, vec3f(0.0), vec3f(1.0));
    let lift = clamp((floorLuma - dot(hot, LUMA)) / floorLuma, 0.0, 1.0);
    return mix(hot, tint, lift);
}

fn splatRevealSketch(x: f32) -> f32 {
    let lead = uniform.uRevealSketch.x;
    if (x >= 0.0 || x < -lead) { return 0.0; }
    let rest = getCenter();
    let h = fract(sin(dot(rest, vec3f(12.9898, 78.233, 37.719))) * 43758.5453);
    if (h > uniform.uRevealSketch.y) { return 0.0; }
    return smoothstep(-lead, -lead * 0.7, x);
}

// See the GLSL twin.
fn envRevealInverse() -> bool { return uniform.uEnvRevealInverse > 0.5; }
fn envRevealActive() -> bool { return uniform.uEnvReveal < 1.0 || envRevealInverse(); }

// See the GLSL twin: hot band behind the front, sketch dots ahead, and an
// inverse pass that dissolves the capture a replacement is taking over from,
// on the replacement's own front.
fn splatRevealApply(reveal: f32, inverse: bool, color: vec4f) -> vec4f {
    let x = splatRevealX(reveal);
    let bandWidth = uniform.uRevealBand.x;
    let base = clamp(color.rgb, vec3f(0.0), vec3f(1.0));
    let hot = splatRevealHot(base);
    if (inverse) {
        if (x < 0.0) { return color; }
        let band = 1.0 - smoothstep(0.0, bandWidth, x);
        return vec4f(mix(base, hot, band), band * 0.95);
    }
    if (x >= 0.0) {
        let band = 1.0 - smoothstep(bandWidth * uniform.uRevealBand.y, bandWidth, x);
        return vec4f(mix(base, hot, band), max(color.a, band * 0.95));
    }
    let sketch = splatRevealSketch(x);
    return vec4f(hot, sketch);
}
#endif

fn modifySplatCenter(center: ptr<function, vec3f>) {
    #ifdef GSPLAT_CENTER_NOPROJ
    let modelCenter = getCenter();
    *center = (uniform.matrix_model * vec4f(modelCenter, 1.0)).xyz;
    #endif
}

fn modifySplatRotationScale(
    originalCenter: vec3f,
    modifiedCenter: vec3f,
    rotation: ptr<function, vec4f>,
    scale: ptr<function, vec3f>
) {
    *scale = min(*scale, vec3f(uniform.uEnvSplatSizeMax));
    let mn = uniform.uEnvClipMin;
    let mx = uniform.uEnvClipMax;
    if (modifiedCenter.x < mn.x || modifiedCenter.y < mn.y || modifiedCenter.z < mn.z
     || modifiedCenter.x > mx.x || modifiedCenter.y > mx.y || modifiedCenter.z > mx.z) {
        *scale = vec3f(0.0);
    }
    let clipDistDelta = modifiedCenter - uniform.uEnvClipDistOrigin;
    let clipDistSq = dot(clipDistDelta, clipDistDelta);
    if (clipDistSq < uniform.uEnvClipDistMinSq || clipDistSq >= uniform.uEnvClipDistMaxSq) {
        *scale = vec3f(0.0);
    }
    let t = dot(modifiedCenter - uniform.uCamCullPos, uniform.uCamCullDir);
    let along = 1.0 - smoothstep(uniform.uCamCullMaxT - uniform.uCamCullFade.x, uniform.uCamCullMaxT, t);
    let above = smoothstep(uniform.uCamCullFloorY, uniform.uCamCullFloorY + uniform.uCamCullFade.y, modifiedCenter.y);
    *scale = (*scale) * (1.0 - along * above);

    #if defined(USE_REVEAL) && defined(GSPLAT_CENTER_NOPROJ)
    // Reveal: small ahead of the front, squashed inside the band, and the
    // inverse pass squashing only inside it. GLSL twin.
    if (envRevealActive()) {
        let revealX = splatRevealX(uniform.uEnvReveal);
        let inBand = revealX >= 0.0 && revealX < uniform.uRevealBand.x;
        if (envRevealInverse()) {
            if (inBand) {
                let m = min((*scale).x, min((*scale).y, (*scale).z));
                *scale = min(*scale, vec3f(m * uniform.uRevealBand.z));
            }
        } else if (revealX < 0.0) {
            *scale = *scale * uniform.uRevealSketch.z;
        } else if (inBand) {
            let m = min((*scale).x, min((*scale).y, (*scale).z));
            *scale = min(*scale, vec3f(m * uniform.uRevealBand.z));
        }
    }
    #endif
}

fn modifySplatColor(center: vec3f, color: ptr<function, vec4f>) {
    #ifdef GSPLAT_CENTER_NOPROJ
    // Tint, shock, relight, reveal - see the GLSL twin for the ordering.
    var tinted = mix((*color).rgb, uniform.uEnvTint.rgb, clamp(uniform.uEnvTint.a, 0.0, 1.0));
    #ifdef USE_SHOCK
    tinted = mix(tinted, vec3f(1.0), envShockLift(center));
    #endif
    (*color) = vec4f(tinted, (*color).a);
    applyRelight(center, color);
    #ifdef USE_REVEAL
    if (envRevealActive()) {
        (*color) = splatRevealApply(uniform.uEnvReveal, envRevealInverse(), *color);
    }
    #endif
    #endif
}
`;function _a(t,A,e,i){const{pos:r,chain:a,parents:s}=e,I=a.length;if(I===0||r.length<I*3||s.length<I)return!1;let o=0;for(let c=0;c<I;c++)a[c]>o&&(o=a[c]);if(!(o>0))return!1;const{x:g,y:n,z:_,indices:C,weights:l,numSplats:B}=A,h=Math.floor(C.length/B),u=Array.from({length:I},()=>[]),d=c=>{let Q=i?i[c]??-1:c;for(;Q>=0&&Q<I&&a[Q]<0;)Q=s[Q];return Q};for(let c=0;c<I;c++){const Q=s[c];Q<0||Q>=I||a[Q]<0||a[c]<0||(u[Q].push(Q,c),u[c].push(Q,c))}for(let c=0;c<B;c++){let Q=1/0,p=o,E=o;for(let L=0;L<h;L++){const R=c*h+L;if(l[R]<=.001)continue;const F=d(C[R]);if(F<0||F>=I||a[F]<0)continue;E=Math.min(E,a[F]);const D=u[F];for(let S=0;S<D.length;S+=2){const v=D[S],P=D[S+1],f=r[v*3],k=r[v*3+1],U=r[v*3+2],Y=r[P*3]-f,G=r[P*3+1]-k,M=r[P*3+2]-U,N=Y*Y+G*G+M*M;if(N<=1e-8)continue;const Z=Math.min(1,Math.max(0,((g[c]-f)*Y+(n[c]-k)*G+(_[c]-U)*M)/N)),QA=f+Y*Z,LA=k+G*Z,RA=U+M*Z,IA=g[c]-QA,sA=n[c]-LA,nA=_[c]-RA,gA=IA*IA+sA*sA+nA*nA;gA<Q&&(Q=gA,p=a[v]+(a[P]-a[v])*Z)}}t[c]=Math.min(1,Math.max(0,(Q<1/0?p:E)/o))}return!0}var Ba=Object.freeze({bandWidth:.07,bandHold:.6,bandMaxStretch:2.5,sketchLead:.07,sketchDensity:.15,sketchScale:.35,tint:Object.freeze({r:.55,g:.9,b:1}),tintFloor:.5}),ca=Object.freeze({bandWidth:.16,bandHold:.35,bandMaxStretch:2.5,sketchLead:.18,sketchDensity:.08,sketchScale:.3,tint:Object.freeze({r:.55,g:.9,b:1}),tintFloor:.5});function XA(t,A,e,i){t.bandWidth!==void 0&&(A[0]=t.bandWidth),t.bandHold!==void 0&&(A[1]=t.bandHold),t.bandMaxStretch!==void 0&&(A[2]=t.bandMaxStretch),t.sketchLead!==void 0&&(e[0]=t.sketchLead),t.sketchDensity!==void 0&&(e[1]=t.sketchDensity),t.sketchScale!==void 0&&(e[2]=t.sketchScale),t.tint&&(i[0]=t.tint.r,i[1]=t.tint.g,i[2]=t.tint.b),t.tintFloor!==void 0&&(i[3]=t.tintFloor)}var He=[0,4,8,12,1,5,9,13,2,6,10,14],_e=512*3,ha=class{getTransform;setTransform;upload;alloc;free;texture;constructor(t,A=4096){let e,i,r=!1;const a=(I,o)=>{const g=new j(t,{name:"transformPalette",width:I,height:o,format:hA,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b}),n=g.lock();g.unlock(),e&&(n.set(i),e.destroy()),e=g,i=n,r=!0};this.getTransform=(I,o)=>{const g=o.data;for(let n=0;n<12;++n)g[He[n]]=i[I*12+n]},this.setTransform=(I,o)=>{const g=o.data,n=I*12;let _=!1;for(let C=0;C<12;++C){const l=g[He[C]];i[n+C]!==l&&(i[n+C]=l,_=!0)}_&&(r=!0)},this.upload=()=>r?(r=!1,e.upload(),!0):!1;let s=1;this.alloc=(I=1)=>{const o=s;for(;s+I>i.length/12;)a(_e,e.height*2);return s+=I,o},this.free=(I=1)=>{s-=I},Object.defineProperty(this,"texture",{get(){return e}}),a(_e,Math.ceil(A/(_e/3))),this.setTransform(0,O.IDENTITY),this.upload()}},Be=.001,Je=11;function Ea(t,A){let e=-1;for(let s=0,I=0;s<A;s++,I+=Je)for(let o=0;o<4;o++)t[I+3+o*2]>=Be&&(e=Math.max(e,t[I+4+o*2]|0));const i=e+2,r=new Float32Array(i*6);for(let s=0;s<i;s++)r.set([1/0,1/0,1/0,-1/0,-1/0,-1/0],s*6);const a=(s,I,o,g)=>{const n=s*6;I<r[n]&&(r[n]=I),o<r[n+1]&&(r[n+1]=o),g<r[n+2]&&(r[n+2]=g),I>r[n+3]&&(r[n+3]=I),o>r[n+4]&&(r[n+4]=o),g>r[n+5]&&(r[n+5]=g)};for(let s=0,I=0;s<A;s++,I+=Je){const o=t[I],g=t[I+1],n=t[I+2];let _=0;for(let C=0;C<4;C++){const l=t[I+3+C*2];l<Be||(a(t[I+4+C*2]|0,o,g,n),_+=l)}_<=Be&&a(i-1,o,g,n)}return r}function Qa(t,A,e){e[0]=e[1]=e[2]=1/0,e[3]=e[4]=e[5]=-1/0;const i=t.length/6;for(let r=0;r<i;r++){const a=r*6;if(!(t[a]<=t[a+3]))continue;const s=(t[a]+t[a+3])/2,I=(t[a+1]+t[a+4])/2,o=(t[a+2]+t[a+5])/2,g=(t[a+3]-t[a])/2,n=(t[a+4]-t[a+1])/2,_=(t[a+5]-t[a+2])/2;let C=s,l=I,B=o,h=g,u=n,d=_;if(r<i-1&&r<A.length){const c=A[r].data;C=s*c[0]+I*c[4]+o*c[8]+c[12],l=s*c[1]+I*c[5]+o*c[9]+c[13],B=s*c[2]+I*c[6]+o*c[10]+c[14],h=Math.abs(c[0])*g+Math.abs(c[4])*n+Math.abs(c[8])*_,u=Math.abs(c[1])*g+Math.abs(c[5])*n+Math.abs(c[9])*_,d=Math.abs(c[2])*g+Math.abs(c[6])*n+Math.abs(c[10])*_}C-h<e[0]&&(e[0]=C-h),l-u<e[1]&&(e[1]=l-u),B-d<e[2]&&(e[2]=B-d),C+h>e[3]&&(e[3]=C+h),l+u>e[4]&&(e[4]=l+u),B+d>e[5]&&(e[5]=B+d)}}var da=new WeakMap;function ua(t){return da.get(t)}var Ke={r:1,g:1,b:1};function La(t){return t._placement}var Gt=25e4,Pt=.005,Oe=100,qe=new WeakSet,$A=new WeakMap,We=new WeakMap,Mt=new WeakSet,ze=new WeakMap,dA=new Float32Array(6),pa=new O,je=new y,Ze=new y,ce=new y;function Tt(t,A){const e=t.node.getWorldTransform(),i=$A.get(t);if(!i)return!t.previousWorldTransform.equals(e);if(i.equals(e))return!1;const{center:r,halfExtents:a}=t.aabb;let s=0;for(let o=0;o<8;o++)ce.set(r.x+(o&1?a.x:-a.x),r.y+(o&2?a.y:-a.y),r.z+(o&4?a.z:-a.z)),s=Math.max(s,e.transformPoint(ce,je).distance(i.transformPoint(ce,Ze)));const I=Math.max(A.distance(e.transformPoint(r,je)),a.length()*e.getScale(Ze).x);return s>Pt*I}function fa(t){if(qe.has(t))return;qe.add(t);const A=t.update.bind(t),e=t.sortCpu.bind(t),i=t.world,r=i.applyWorkBufferUpdates.bind(i);let a=!1;t.update=()=>(a&&t.cpuSorter?.jobsInFlight===0&&(a=!1,t.sortNeeded=!0),A()),t.sortCpu=s=>{const I=t.cpuSorter;if(a=!!I&&I.jobsInFlight>0&&!I.hasNewVersion,e(s),!a)for(const o of s.splats){const g=o.node.getWorldTransform(),n=$A.get(o);n?n.copy(g):$A.set(o,g.clone())}},i.applyWorkBufferUpdates=(s,I)=>{if(!t.cpuSorter||t.sortNeeded)return r(s,I);const o=s.totalActiveSplats>Gt,g=t.cameraNode.getPosition();let n=!1;for(const _ of s.splats)Mt.delete(_)||(o?Tt(_,g):!_.previousWorldTransform.equals(_.node.getWorldTransform()))&&(n=!0);return r(s,I)&&n}}var Xe=new y,Fa=new y,he=new Set;function ma(t,A){if(t.length!==A.length*16)return!1;for(let e=0,i=0;e<A.length;e++){const r=A[e].data;for(let a=0;a<16;a++,i++)if(t[i]!==r[a])return!1}return!0}var qA=class K{asset;splatData;numSplats;entity;boneIndicesTexture;boneWeightsTexture;groupIdsTexture;variantMaskTexture;variantMask;groupOffsetsTexture;groupPivotsTexture;groupRotsTexture;groupIds;transformPalette;tintTexture;gradeTexture;revealDistanceTexture;linkedArmature=null;splatWeights;sourceBoneCount;localBound;_scene=null;_deformedAabb=new pA;_deformedAabbMin=new y;_deformedAabbMax=new y;_sortedCenters=null;_sortedAabb=new pA;_driftCheckAt=-1/0;_sortAabb=new pA;_worldAabb=new pA;_worldSphere={center:new y,radius:0};_cpuInfluences=null;_boneBoxes=null;_poseBones=null;_boneTextureCacheKey=null;_boneMapFirstIdx=null;_boneMapNumBones=0;_boneMapRemap=null;_variantMaskEnabled=!1;_cutEnabled=!1;_cutAmount=0;_revealEnabled=!1;_revealBaked=!1;_revealBand=new Float32Array(4);_revealSketch=new Float32Array(4);_revealTint=new Float32Array(4);_nonRigidCov=!1;_device;ownsAsset=!0;constructor(A,e,i){const r=A.resource,a=r.gsplatData,{device:s}=r;this._device=s,this.asset=A,this.splatData=a,this.numSplats=a.numSplats;const I=ua(A),o=I?.splatWeights;o?.indices&&o?.weights&&(this.splatWeights={indices:o.indices,weights:o.weights},this._bakeInfluences()),this.sourceBoneCount=I?.splatSourceBoneCount,this.entity=new mA("splatEntity",i),this.entity.setEulerAngles(e),this.entity.addComponent("gsplat",{asset:A}),this.localBound=r.aabb;const{x:g,y:n}=r.textureDimensions,_=(C,l)=>new j(s,{name:C,width:g,height:n,format:l,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b});if(this.splatWeights){const C=K._boneTextureCacheFor(this._device),l=K._assetCacheKey(A),B=l?C.get(l):null;B?(this.boneIndicesTexture=B.boneIndicesTexture,this.boneWeightsTexture=B.boneWeightsTexture,B.refCount++,this._boneTextureCacheKey=l):(this.boneIndicesTexture=_("boneIndices",hA),this.boneWeightsTexture=_("boneWeights",hA),l&&(C.set(l,{boneIndicesTexture:this.boneIndicesTexture,boneWeightsTexture:this.boneWeightsTexture,refCount:1}),this._boneTextureCacheKey=l))}this.transformPalette=new ha(s,512),this.tintTexture=new j(s,{name:"splatTint",width:2,height:1,format:hA,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b});{const C=this.tintTexture.lock();C[0]=1,C[1]=1,C[2]=1,C[3]=0,C[4]=1,this.tintTexture.unlock()}this.gradeTexture=new j(s,{name:"splatGrade",width:1,height:1,format:hA,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b});{const C=this.gradeTexture.lock();C[0]=1,C[1]=1,C[2]=1,C[3]=0,this.gradeTexture.unlock()}if(XA(Ba,this._revealBand,this._revealSketch,this._revealTint),K._liveInstances.add(this),this._installWorkBufferModifier(),this.splatWeights){const C=this.entity.gsplat;C&&(C.workBufferUpdate=2)}}_installWorkBufferModifier(){const A=this.entity.gsplat;if(!A)return;let e="";this.splatWeights&&(e+=`#define USE_BONE_BLENDING
`),this._variantMaskEnabled&&(e+=`#define USE_VARIANT_MASK
`),this._cutEnabled&&(e+=`#define USE_GROUP_OFFSET
`),this._revealEnabled&&(e+=`#define USE_REVEAL
`),this._nonRigidCov&&(e+=`#define USE_NONRIGID_COV
`),A.setWorkBufferModifier({glsl:e+na,wgsl:e+ga})}setNonRigidCovariance(A){this._nonRigidCov!==A&&(this._nonRigidCov=A,this._installWorkBufferModifier())}addToScene(A){this._scene=A,A.contentRoot.addChild(this.entity),this.uploadBoneTextures(),this.updateUnifiedWorkBufferParams(),ct(this.entity.gsplat,A.graphicsDevice)}uploadBoneTextures(){if(!this.splatWeights||!this.boneIndicesTexture||!this.boneWeightsTexture)return;if(this._boneTextureCacheKey){const g=K._boneTextureCacheFor(this._device).get(this._boneTextureCacheKey);if(g&&g.refCount>1)return}const{indices:A,weights:e}=this.splatWeights,i=A.length/this.numSplats,r=this._boneMapFirstIdx,a=this._boneMapRemap,s=this._boneMapNumBones,I=this.boneIndicesTexture.lock(),o=this.boneWeightsTexture.lock();for(let g=0;g<this.numSplats;g++)for(let n=0;n<4;n++){if(n>=i){I[g*4+n]=r??0,o[g*4+n]=0;continue}const _=A[g*i+n];if(r===null)I[g*4+n]=_,o[g*4+n]=e[g*i+n];else{const C=a?a[_]??-1:_;C<0||C>=s?(I[g*4+n]=r,o[g*4+n]=0):(I[g*4+n]=r+C,o[g*4+n]=e[g*i+n])}}this.boneIndicesTexture.unlock(),this.boneWeightsTexture.unlock()}rememberBoneMapping(A,e,i){this._boneMapFirstIdx=A,this._boneMapNumBones=e,this._boneMapRemap=i}get boneWeightsArePrivate(){return!!this.splatWeights&&this._boneTextureCacheKey===null}privatizeBoneWeights(){if(!this.splatWeights||this._boneTextureCacheKey===null)return;this.splatWeights={indices:new Uint16Array(this.splatWeights.indices),weights:new Float32Array(this.splatWeights.weights)};const A=this._boneTextureCacheKey,e=K._boneTextureCacheFor(this._device).get(A);e&&e.refCount--,this._boneTextureCacheKey=null;const i=this.boneIndicesTexture,r=this.boneWeightsTexture;if(!i||!r)return;const a=(s,I)=>new j(I.device,{name:s,width:I.width,height:I.height,format:hA,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b});this.boneIndicesTexture=a("boneIndicesPrivate",i),this.boneWeightsTexture=a("boneWeightsPrivate",r),this.uploadBoneTextures(),this.updateUnifiedWorkBufferParams()}reuploadBoneWeights(){if(this._boneTextureCacheKey!==null)throw new Error("[Splat] reuploadBoneWeights: bone weights are still shared with other instances. Call privatizeBoneWeights() first or you will corrupt sibling characters.");this.uploadBoneTextures()}updateUnifiedWorkBufferParams(){const A=this.entity.gsplat;!A||!A?.system?.app?.graphicsDevice?.scope||(A.setParameter("transformPalette",this.transformPalette.texture),A.setParameter("splatTintTex",this.tintTexture),A.setParameter("splatGradeTex",this.gradeTexture),this.boneIndicesTexture&&this.boneWeightsTexture&&(A.setParameter("boneIndices",this.boneIndicesTexture),A.setParameter("boneWeights",this.boneWeightsTexture)),this.groupIdsTexture&&this.variantMaskTexture&&(A.setParameter("splatGroupIds",this.groupIdsTexture),A.setParameter("splatVariantMask",this.variantMaskTexture)),this.groupOffsetsTexture&&this.groupPivotsTexture&&this.groupRotsTexture&&(A.setParameter("splatGroupOffsets",this.groupOffsetsTexture),A.setParameter("splatGroupPivots",this.groupPivotsTexture),A.setParameter("splatGroupRots",this.groupRotsTexture),A.setParameter("splatCutAmount",this._cutAmount)),this._revealEnabled&&(this.revealDistanceTexture&&A.setParameter("splatRevealDistanceTex",this.revealDistanceTexture),A.setParameter("uRevealBand",this._revealBand),A.setParameter("uRevealSketch",this._revealSketch),A.setParameter("uRevealTint",this._revealTint)))}setTint(A,e=Ke){const i=this.tintTexture.lock();i[0]=e.r,i[1]=e.g,i[2]=e.b,i[3]=A,this.tintTexture.unlock()}setOpacity(A){const e=this.tintTexture.lock();e[4]=Math.min(1,Math.max(0,A)),this.tintTexture.unlock()}setTintMultiply(A,e=Ke){const i=this.tintTexture.lock();i[0]=e.r,i[1]=e.g,i[2]=e.b,i[3]=-Math.max(0,Math.min(1,A)),this.tintTexture.unlock()}setGrade(A,e){const i=this.gradeTexture.lock();i[0]=A,i[1]=e,this.gradeTexture.unlock()}setReveal(A,e=!1){!this._revealEnabled&&(A<1||e)&&(this.linkedArmature?.prepareReveal?.(),this._enableReveal());const i=this.gradeTexture.lock();i[2]=Math.min(1,Math.max(0,A)),i[3]=e?1:0,this.gradeTexture.unlock()}setRevealLook(A){XA(A,this._revealBand,this._revealSketch,this._revealTint),this._revealEnabled&&this.updateUnifiedWorkBufferParams()}get revealEnabled(){return this._revealEnabled}get revealBaked(){return this._revealBaked}_enableReveal(){if(!this._revealEnabled){if(this._revealEnabled=!0,this.splatWeights){const A=this.asset.resource,{x:e,y:i}=A.textureDimensions;this.revealDistanceTexture=new j(this._device,{name:"splatRevealDistance",width:e,height:i,format:HA,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b}),this.revealDistanceTexture.lock().fill(1),this.revealDistanceTexture.unlock()}this._installWorkBufferModifier(),this.updateUnifiedWorkBufferParams()}}bakeReveal(A,e){if(this._enableReveal(),this._revealBaked=!0,!this.splatWeights||!this.revealDistanceTexture)return;const i=this.splatData.getProp("x"),r=this.splatData.getProp("y"),a=this.splatData.getProp("z");if(!i||!r||!a)return;const{indices:s,weights:I}=this.splatWeights,o=this.revealDistanceTexture.lock();_a(o,{x:i,y:r,z:a,indices:s,weights:I,numSplats:this.numSplats},A,e),this.revealDistanceTexture.unlock(),this.updateUnifiedWorkBufferParams()}setSplatGroups(A,e){if(A.length!==this.numSplats)throw new Error(`Splat.setSplatGroups: groupIds length ${A.length} != numSplats ${this.numSplats}`);if(e<1)throw new Error("Splat.setSplatGroups: numGroups must be ≥1");if(this.groupIds=A,!this.groupIdsTexture){const a=this.asset.resource,{x:s,y:I}=a.textureDimensions;this.groupIdsTexture=new j(this._device,{name:"splatGroupIds",width:s,height:I,format:HA,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b})}const i=this.groupIdsTexture.lock();for(let a=0;a<this.numSplats;a++)i[a]=A[a];this.groupIdsTexture.unlock(),(!this.variantMaskTexture||this.variantMaskTexture.width!==e)&&(this.variantMaskTexture?.destroy(),this.variantMaskTexture=new j(this._device,{name:"splatVariantMask",width:e,height:1,format:HA,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b}),this.variantMask=new Float32Array(e)),this.variantMask.fill(1),this.variantMaskTexture.lock().set(this.variantMask),this.variantMaskTexture.unlock(),this._variantMaskEnabled||(this._variantMaskEnabled=!0,this._installWorkBufferModifier()),this.updateUnifiedWorkBufferParams()}setVariantMask(A){if(!this.variantMaskTexture||!this.variantMask)return;const e=Math.min(this.variantMask.length,A.length);for(let r=0;r<e;r++)this.variantMask[r]=A[r];this.variantMaskTexture.lock().set(this.variantMask),this.variantMaskTexture.unlock()}_newGroupTex(A,e){return new j(this._device,{name:A,width:e,height:1,format:hA,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b})}_uploadCutData(A,e,i,r,a){const s=sa(A,e,i,r,a);this.groupOffsetsTexture.lock().set(s.offsets),this.groupOffsetsTexture.unlock(),this.groupPivotsTexture.lock().set(s.pivots),this.groupPivotsTexture.unlock(),this.groupRotsTexture.lock().set(s.rotations),this.groupRotsTexture.unlock()}setCutGroups(A,e,i,r,a,s){if(e.length<i*3)throw new Error(`Splat.setCutGroups: offsets length ${e.length} < numGroups*3 ${i*3}`);const I=!this._cutEnabled;this._cutEnabled=!0,(!this.groupOffsetsTexture||this.groupOffsetsTexture.width!==i)&&(this.groupOffsetsTexture?.destroy(),this.groupPivotsTexture?.destroy(),this.groupRotsTexture?.destroy(),this.groupOffsetsTexture=this._newGroupTex("splatGroupOffsets",i),this.groupPivotsTexture=this._newGroupTex("splatGroupPivots",i),this.groupRotsTexture=this._newGroupTex("splatGroupRots",i)),this._uploadCutData(e,i,r,a,s);const o=this._variantMaskEnabled;this.setSplatGroups(A,i),I&&o&&(this._installWorkBufferModifier(),this.updateUnifiedWorkBufferParams()),this.setCut(1)}setCutOffsets(A,e,i,r,a){!this.groupOffsetsTexture||!this.groupPivotsTexture||!this.groupRotsTexture||this.groupOffsetsTexture.width<e||A.length<e*3||(this._uploadCutData(A,e,i,r,a),this.setCut(1))}setCut(A){this._cutAmount=Math.max(0,Math.min(1,A));const e=this.entity.gsplat;e&&(e.setParameter("splatCutAmount",this._cutAmount),e.workBufferUpdate!==2&&(e.workBufferUpdate=1),this.requestSort())}isInFrustum(A){const e=this._deformedAabb.halfExtents.x>0||this._deformedAabb.halfExtents.y>0||this._deformedAabb.halfExtents.z>0?this._deformedAabb:this.localBound;return this._worldAabb.setFromTransformedAabb(e,this.entity.getWorldTransform()),this._worldSphere.center=this._worldAabb.center,this._worldSphere.radius=this._worldAabb.halfExtents.length(),A.containsSphere(this._worldSphere)>0}getWorldAabb(){this._skinCenters();const A=this._deformedAabb.halfExtents.x>0||this._deformedAabb.halfExtents.y>0||this._deformedAabb.halfExtents.z>0?this._deformedAabb:this.localBound,e=new pA;return e.setFromTransformedAabb(A,this.entity.getWorldTransform()),e}_groundAabb=new pA;_groundHist=new Int32Array(256);getWorldMinY(){this._skinCenters();const A=this._deformedAabb.halfExtents.x>0||this._deformedAabb.halfExtents.y>0||this._deformedAabb.halfExtents.z>0?this._deformedAabb:this.localBound;return this._groundAabb.setFromTransformedAabb(A,this.entity.getWorldTransform()),this._groundAabb.center.y-this._groundAabb.halfExtents.y}getGroundWorldY(A=.005){const e=this.asset.resource?this.posedCenters():void 0,i=this.numSplats;if(!e||i===0||!this.splatWeights)return this.getWorldMinY();let r=1/0,a=-1/0;for(let l=0;l<i;l++){const B=e[l*3+1];B<r&&(r=B),B>a&&(a=B)}const s=this.entity.getWorldTransform().data[13];if(!(a>r))return r+s;const I=256,o=this._groundHist;o.fill(0);const g=I/(a-r);for(let l=0;l<i;l++){let h=(e[l*3+1]-r)*g|0;h>=I&&(h=I-1),h<0&&(h=0),o[h]++}const n=Math.max(1,Math.floor(i*A));let _=0,C=r;for(let l=0;l<I;l++)if(_+=o[l],_>=n){C=r+(l+1)/g;break}return C+s}_bakeInfluences(){if(!this.splatWeights)return;const A=this.splatData.getProp("x"),e=this.splatData.getProp("y"),i=this.splatData.getProp("z");if(!A||!e||!i)return;const{indices:r,weights:a}=this.splatWeights,s=Math.max(1,Math.floor(r.length/this.numSplats)),I=Math.min(s,4),o=11,g=new Float32Array(this.numSplats*o);for(let n=0,_=0;n<this.numSplats;n++,_+=o){g[_]=A[n],g[_+1]=e[n],g[_+2]=i[n];const C=n*s;for(let l=0;l<I;l++)g[_+3+l*2]=a[C+l],g[_+4+l*2]=r[C+l]}this._cpuInfluences=g,this._boneBoxes=Ea(g,this.numSplats)}updatePositions(A){if(!this._scene||!this.splatWeights||!A.length||!this._cpuInfluences)return;this._poseBones=A;const e=this.asset.resource,i=e.centers,r=this.entity.gsplat,a=r?La(r)?.id:void 0,s=this.entity.getWorldTransform(),I=[],o=[],g=[];let n,_=!1,C=!1;const l=this._scene.app.renderer?.gsplatDirector;for(const Q of l?.camerasMap?.values()??[])for(const p of Q.layersMap?.values()??[])for(const E of[p.gsplatManager,p.gsplatManagerShadow]){if(!E)continue;if(!E.cpuSorter){g.push(E);continue}C=!0,fa(E);const L=(E.world.getState(E.world.lastWorldStateVersion)?.totalActiveSplats??0)>Gt;let R=!1;for(const F of E.world._worldStates.values())for(const D of F.splats)D.placementId===a&&(R=!0,L&&(Mt.add(D),n=$A.get(D)??n,Tt(D,E.cameraNode.getPosition())&&(_=!0)));R&&(L?o:I).push(E)}let B=!1,h=!1;const u=performance.now();if(o.length&&(B=_||o.some(Q=>Q.sortNeeded||Q.testCameraMovedForSort()),h=!B&&u-this._driftCheckAt>=Oe&&o.every(Q=>u-(We.get(Q)??-1/0)>=Oe)),C&&!I.length&&!o.length||I.length||B||h?this._skinCenters():this._boundPose(A),h){this._driftCheckAt=u;const Q=s.getScale(Fa).x;s.transformPoint(this._deformedAabb.center,Xe);let p=1/0;for(const L of o)p=Math.min(p,L.cameraNode.getPosition().distance(Xe));const E=Pt*Math.max(p,this._deformedAabb.halfExtents.length()*Q);if(B=this._sortDrift(s,n)*Q>E,B)for(const L of o)We.set(L,u)}B&&((this._sortedCenters??=new Float32Array(i.length)).set(i),this._sortedAabb.copy(this._deformedAabb));const c=this._sortAabb;c.copy(this._deformedAabb),o.length&&this._sortedCenters&&c.add(this._sortedAabb),r&&(r.customAabb=c);for(const Q of[...g,...I,...o]){if(Q.world._worldStates.forEach(p=>{for(const E of p.splats??[])E.placementId===a&&E.aabb.copy(c)}),!Q.cpuSorter){Q.sortNeeded=!0;continue}!B&&o.includes(Q)||(he.has(Q.cpuSorter)||(he.add(Q.cpuSorter),Q.cpuSorter.setCenters(e.id,null),Q.cpuSorter.setCenters(e.id,i)),Q.sortNeeded=!0)}he.clear()}posedCenters(){return this._skinCenters(),this.asset.resource.centers}_skinCenters(){const A=this._poseBones,e=this._cpuInfluences;if(!A||!e)return;const i=this.asset.resource;if(!i?.centers)return;const r=ze.get(i);if(r&&ma(r.bones,A)){this._deformedAabb.setMinMax(r.min,r.max);return}const a=i.centers;let s=1/0,I=1/0,o=1/0,g=-1/0,n=-1/0,_=-1/0;for(let l=0,B=0;l<this.numSplats;l++,B+=11){const h=e[B],u=e[B+1],d=e[B+2];let c=0,Q=0,p=0,E=0;for(let S=0;S<4;S++){const v=e[B+3+S*2];if(v<.001)continue;const P=e[B+4+S*2]|0;if(P>=A.length)continue;const f=A[P].data;c+=(h*f[0]+u*f[4]+d*f[8]+f[12])*v,Q+=(h*f[1]+u*f[5]+d*f[9]+f[13])*v,p+=(h*f[2]+u*f[6]+d*f[10]+f[14])*v,E+=v}let L,R,F;if(E>.001){const S=1/E;L=c*S,R=Q*S,F=p*S}else L=h,R=u,F=d;const D=l*3;a[D]=L,a[D+1]=R,a[D+2]=F,L<s&&(s=L),L>g&&(g=L),R<I&&(I=R),R>n&&(n=R),F<o&&(o=F),F>_&&(_=F)}this._deformedAabbMin.set(s,I,o),this._deformedAabbMax.set(g,n,_),this._deformedAabb.setMinMax(this._deformedAabbMin,this._deformedAabbMax);const C=r??{bones:new Float32Array(0),min:new y,max:new y};C.bones.length!==A.length*16&&(C.bones=new Float32Array(A.length*16));for(let l=0;l<A.length;l++)C.bones.set(A[l].data,l*16);C.min.copy(this._deformedAabbMin),C.max.copy(this._deformedAabbMax),ze.set(i,C)}_boundPose(A){this._boneBoxes&&(Qa(this._boneBoxes,A,dA),this._deformedAabbMin.set(dA[0],dA[1],dA[2]),this._deformedAabbMax.set(dA[3],dA[4],dA[5]),this._deformedAabb.setMinMax(this._deformedAabbMin,this._deformedAabbMax))}_sortDrift(A,e){const i=this._sortedCenters;if(!i||!e)return 1/0;const r=pa.copy(A).invert().mul(e).data,a=this.asset.resource.centers;let s=0;for(let I=0;I<a.length;I+=12){const o=i[I],g=i[I+1],n=i[I+2],_=a[I]-(o*r[0]+g*r[4]+n*r[8]+r[12]),C=a[I+1]-(o*r[1]+g*r[5]+n*r[9]+r[13]),l=a[I+2]-(o*r[2]+g*r[6]+n*r[10]+r[14]),B=_*_+C*C+l*l;B>s&&(s=B)}return Math.sqrt(s)}requestSort(){if(!this._scene)return;const A=this._scene.app.renderer?.gsplatDirector;A?.camerasMap&&A.camerasMap.forEach(e=>{e.layersMap?.forEach(i=>{for(const r of[i.gsplatManager,i.gsplatManagerShadow])!r||r.cpuSorter||(r.sortNeeded=!0)})})}setRenderingEnabled(A){this.entity.enabled=A;const e=this.entity.gsplat;e&&(e.enabled=A)}setLayers(A){const e=this.entity.gsplat;e&&(e.layers=[...A],this.requestSort())}get keepAssetOnDestroy(){return!this.ownsAsset}set keepAssetOnDestroy(A){this.ownsAsset=!A}_splatDestroyed=!1;destroy(){if(this._splatDestroyed)return;this._splatDestroyed=!0,K._liveInstances.delete(this);const A=[];if(this._boneTextureCacheKey){const i=K._boneTextureCacheFor(this._device),r=i.get(this._boneTextureCacheKey);r&&--r.refCount===0&&(i.delete(this._boneTextureCacheKey),A.push(r.boneIndicesTexture,r.boneWeightsTexture)),this._boneTextureCacheKey=null}else this.boneIndicesTexture&&A.push(this.boneIndicesTexture),this.boneWeightsTexture&&A.push(this.boneWeightsTexture);this.boneIndicesTexture=void 0,this.boneWeightsTexture=void 0,this.groupIdsTexture&&A.push(this.groupIdsTexture),this.variantMaskTexture&&A.push(this.variantMaskTexture),this.groupOffsetsTexture&&A.push(this.groupOffsetsTexture),this.groupPivotsTexture&&A.push(this.groupPivotsTexture),this.groupRotsTexture&&A.push(this.groupRotsTexture),this.groupOffsetsTexture=void 0,this.groupPivotsTexture=void 0,this.groupRotsTexture=void 0,this.groupIdsTexture=void 0,this.variantMaskTexture=void 0,this.transformPalette?.texture&&A.push(this.transformPalette.texture),this.tintTexture&&A.push(this.tintTexture),this.gradeTexture&&A.push(this.gradeTexture),this.revealDistanceTexture&&A.push(this.revealDistanceTexture),this.revealDistanceTexture=void 0;const e=this._scene?.app;try{this.entity.destroy()}catch{}if(this.ownsAsset&&(this.asset.registry?.remove(this.asset),this.asset.unload()),this.splatData=null,e&&A.length>0){let i=2;const r=()=>{if(--i>0){e.once("frameend",r);return}for(const a of A)a.destroy()};e.once("frameend",r)}else for(const i of A)i.destroy()}static _liveInstances=new Set;static _envGsplatComponents=new Set;static releaseScene(A){for(const e of[...K._liveInstances])if(e._scene===A){try{e.destroy()}catch{}K._liveInstances.delete(e)}for(const e of[...K._envGsplatComponents])e?.system?.app===A.app&&K._envGsplatComponents.delete(e)}static _sharedBoneTextureCache=new WeakMap;static _boneTextureCacheFor(A){let e=K._sharedBoneTextureCache.get(A);return e||(e=new Map,K._sharedBoneTextureCache.set(A,e)),e}static _assetCacheKey(A){const e=A.file?.url;if(!e)return null;const i=e.indexOf("?");return i===-1?e:e.slice(0,i)}static markEnvWorkBuffersDirty(A){for(const e of K._envGsplatComponents)A&&!A.has(e)||(e.workBufferUpdate=1)}},wa=class extends oi{constructor(t,A){super(t);const e=new Ii;e.graphicsDevice=A.graphicsDevice,e.componentSystems=[si,ni,gi,Ci,li,...A.physics?[_i,Bi]:[],...A.extraComponentSystems],e.resourceHandlers=[ci,hi,Ei,Qi,...A.extraResourceHandlers],this.init(e)}};function Ra(t,A){const e=t,i=e.tick,r=1e3/A-2;let a=-1/0;e.tick=(s,I)=>{const o=s??performance.now();if(o-a<r){e.tick&&(e.frameRequestId=requestAnimationFrame(e.tick));return}a=o,i(s,I)}}async function ya(t){if(t==="default")return"default";const A=typeof navigator<"u"?navigator.gpu:void 0;if(!A)return t;try{return await A.requestAdapter({powerPreference:"high-performance"})?"high-performance":(console.warn("[SplatEngine] no high-performance WebGPU adapter; using the default adapter."),"default")}catch{return"default"}}function Sa(t){return t==="webgpu"?["webgpu"]:t==="webgl"?["webgl2"]:["webgpu","webgl2"]}var TA=class extends Error{constructor(t){super(`${t}: the scene was destroyed while the asset was loading`),this.name="SceneDestroyedError"}},Wa=class pe{app;contentRoot;cameraEntity;graphicsDevice;skeletonLibrary;skeletalAnimationLibrary;postfx;_destroyed=!1;get destroyed(){return this._destroyed}cameraFrame=null;transparent=!1;animLodPreset=null;characterPoseUpdatedFrame=-1;envLayerId;overlayLayerId;_resizeObserver;_resize;get resizeBeforePaint(){return this._resize.beforePaint}set resizeBeforePaint(A){this._resize.beforePaint=A}constructor(A,e,i,r,a,s,I,o){this.app=A,this.contentRoot=e,this.cameraEntity=i,this.graphicsDevice=A.graphicsDevice,this.skeletonLibrary=r,this.skeletalAnimationLibrary=new Map,this._resizeObserver=a,this._resize=s,this.postfx=new Fi(this),this.envLayerId=I,this.overlayLayerId=o}getOrCreateCameraFrame(){if(this.cameraFrame)return this.cameraFrame;const A=this.cameraEntity.camera;if(!A)throw new Error("[Scene] getOrCreateCameraFrame: cameraEntity has no camera component");const e=new Wt(this.app,A);return e.rendering.sceneDepthMap=!0,this.transparent&&(e.rendering.renderFormats=[it,hA]),e.update(),this.cameraFrame=e,e}destroyCameraFrame(){if(this.cameraFrame){try{this.cameraFrame.destroy()}catch{}this.cameraFrame=null}}start(){this.app.start()}setSuspended(A){this._destroyed||(this.app.autoRender=!A,A||(this.app.renderNextFrame=!0))}destroy(){this._destroyed=!0,this._resizeObserver.disconnect(),this.app.autoRender=!1;const A=this.graphicsDevice.canvas,i=(A.getContext("webgl2")??A.getContext("webgl"))?.getExtension("WEBGL_lose_context");try{const r=this.cameraEntity.camera,a=r?.renderTarget;a&&(a.destroyTextureBuffers?.(),a.destroy(),r.renderTarget=null)}catch{}this.skeletalAnimationLibrary.clear();try{qA.releaseScene(this)}catch{}try{this.postfx.destroyAll()}catch{}try{this.cameraFrame?.destroy()}catch{}this.cameraFrame=null;try{this.app.destroy?.()}catch{}i?.loseContext()}static async create(A,e){const i=e?.bgColor??{r:.08,g:.08,b:.12,a:1},r=Sa(e?.backend),a=r.includes("webgpu")?await ya(e?.powerPreference??"high-performance"):e?.powerPreference??"high-performance",s=await zt(A,{deviceTypes:r,antialias:e?.antialias??!1,depth:e?.depth??!1,stencil:!1,xrCompatible:!1,...e?.preserveDrawingBuffer?{preserveDrawingBuffer:!0,alpha:!0}:{},powerPreference:a,...e?.glslangUrl&&e?.twgslUrl?{glslangUrl:e.glslangUrl,twgslUrl:e.twgslUrl}:{}});e?.logDeviceCaps&&console.log("[SplatEngine] device caps",pe.getDeviceCapabilities(s));const I=e?.physics??!1;if(I&&typeof I=="object"&&"loadAmmo"in I&&await I.loadAmmo(),I&&!globalThis.Ammo)throw new Error("[SplatEngine] physics requires globalThis.Ammo to be set. Either load Ammo before Scene.create, or pass physics={ loadAmmo: () => Promise<void> }. Ammo is not shipped with this package: take ammo.wasm.js and ammo.wasm.wasm from playcanvas/engine at examples/src/lib/ammo/, from the tag matching your PlayCanvas version, and serve them as static assets.");const o=new wa(A,{graphicsDevice:s,physics:!!I,extraComponentSystems:e?.extraComponentSystems??[],extraResourceHandlers:e?.extraResourceHandlers??[]});Ti(s),sr(),ra(),Ia(o),o.autoRender=!0,e?.maxFps&&Ra(o,e.maxFps),o._allowResize=!1;const g=e?.maxPixelRatio??1;o.graphicsDevice.maxPixelRatio=g,o.off("prerender",o._firstBake,o);const n=e?.ambientLight??.55;o.scene.ambientLight.set(n,n,n),o.scene.exposure=e?.exposure??1,o.scene.gsplat.minPixelSize=e?.subPixelCull==null||e.subPixelCull===!1?0:e.subPixelCull===!0?2:e.subPixelCull,o.scene.gsplat.minContribution=e?.contributionCull==null||e.contributionCull===!1?0:e.contributionCull===!0?3:e.contributionCull,o.scene.gsplat.splatBudget=0,o.scene.gsplat.splatBudgetMode=jt;const _=o.graphicsDevice.wgpu;e?.gsplatRenderer==="raster_cpu_sort"?o.scene.gsplat.renderer=Zt:e?.gsplatRenderer&&_&&(o.scene.gsplat.renderer=Xt);const C=new mA("contentRoot");o.root.addChild(C);const l=new rt(i.r,i.g,i.b,i.a),B=new mA("camera");B.addComponent("camera",{fov:e?.fov??60,farClip:e?.far??100,nearClip:e?.near??.1,clearColor:l});const h=e?.cameraPosition??{x:0,y:1,z:5};B.setPosition(h.x,h.y,h.z);const u=e?.cameraTarget??{x:0,y:.5,z:0};B.lookAt(new y(u.x,u.y,u.z)),o.root.addChild(B);let d=null;const c={beforePaint:!1},Q=new ResizeObserver(f=>{if(f.length>0){const k=f[0];if(k){const U=o.graphicsDevice;if(!U)return;const Y=U.maxPixelRatio,G=Math.min(window.devicePixelRatio,Y);let M,N;if(k.devicePixelContentBoxSize){const Z=G/window.devicePixelRatio;M=Math.ceil(k.devicePixelContentBoxSize[0].inlineSize*Z),N=Math.ceil(k.devicePixelContentBoxSize[0].blockSize*Z)}else if(k.contentBoxSize.length>0)M=Math.ceil(k.contentBoxSize[0].inlineSize*G),N=Math.ceil(k.contentBoxSize[0].blockSize*G);else return;M>0&&N>0&&(c.beforePaint&&o.autoRender?(d=null,(A.width!==M||A.height!==N)&&(U.setResolution(M,N),o.render())):d={w:M,h:N})}}});Q.observe(A),o.on("framerender",()=>{const f=o.graphicsDevice;if(!d||!f)return;const{w:k,h:U}=d;d=null,!(A.width===k&&A.height===U)&&(f.setResolution(k,U),o.renderNextFrame=!0)});const p=e?.loadSkeleton!==!1?bi():{boneNames:[]},E=o.scene.layers,L=new De({name:"EnvironmentSplats"}),R=E.getLayerByName("World");R?E.insert(L,E.getTransparentIndex(R)):E.push(L);const F=new De({name:"OverlaySplats"});R?E.insert(F,E.getTransparentIndex(R)+1):E.push(F);const D=B.camera,S=D.layers?[...D.layers]:[],v=R?S.indexOf(R.id):-1;v>=0?(S.splice(v,0,L.id),S.splice(v+2,0,F.id)):(S.unshift(L.id),S.push(F.id)),D.layers=S;const P=new pe(o,C,B,p,Q,c,L.id,F.id);return P.transparent=i.a<1,xi(P.graphicsDevice),P}static getDeviceCapabilities(A){const{gl:e,wgpu:i,maxRenderBufferSize:r}=A,a={deviceType:A.deviceType,isWebGL2:!!A.isWebGL2,maxTextureSize:A.maxTextureSize,maxRenderBufferSize:r,precision:A.precision,textureFloatRenderable:A.textureFloatRenderable,textureHalfFloatRenderable:A.textureHalfFloatRenderable,textureFloatFilterable:A.textureFloatFilterable,supportsMultiDraw:A.supportsMultiDraw,supportsCompute:A.supportsCompute};if(e){a.gl_VERSION=e.getParameter(e.VERSION),a.gl_RENDERER=e.getParameter(e.RENDERER),a.gl_VENDOR=e.getParameter(e.VENDOR),a.gl_MAX_TEXTURE_SIZE=e.getParameter(e.MAX_TEXTURE_SIZE),a.gl_MAX_VERTEX_TEXTURE_IMAGE_UNITS=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS);const I=e.getSupportedExtensions()??[];a.has_EXT_color_buffer_float=I.includes("EXT_color_buffer_float"),a.has_EXT_color_buffer_half_float=I.includes("EXT_color_buffer_half_float"),a.has_OES_texture_float_linear=I.includes("OES_texture_float_linear")}const s=i?.adapter;if(s){const I=[];try{s.features&&I.push(...Array.from(s.features))}catch{}const o=s.limits,g={maxTextureDimension2D:o?.maxTextureDimension2D,maxTextureArrayLayers:o?.maxTextureArrayLayers,maxBindGroups:o?.maxBindGroups,maxComputeWorkgroupStorageSize:o?.maxComputeWorkgroupStorageSize,maxComputeInvocationsPerWorkgroup:o?.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:o?.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:o?.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:o?.maxComputeWorkgroupSizeZ};a.webgpu_features=I,a.webgpu_limits=g}return a}};new O;new y;new wA;new y;new wA;new wA;var Da=0,$e=null,va=(t,A)=>{const{url:e}=A;!A.contents&&e&&($e?.key,me(e));const i=A.contents&&(A.contents instanceof Response?A.contents:new Response(A.contents)),r={url:i?`local-asset-${Da++}`:A.url??A.filename,filename:A.filename,contents:i},a={decompress:!0,reorder:!0};return new Promise((s,I)=>{const o=new fe(A.filename||A.url||"gsplat","gsplat",r,a),g=[],n=`${o.getFileUrl()}/`,_=C=>{C.type==="texture"&&C.file?.url?.startsWith(n)&&g.push(C)};t.on("add",_),o.on("load:data",C=>{if(C instanceof Ae&&C.getProp("scale_0")&&C.getProp("scale_1")&&!C.getProp("scale_2")){const l=new Float32Array(C.numSplats).fill(Math.log(1e-6));C.addProp("scale_2",l);const B=C.getElement("vertex").properties;B.splice(B.findIndex(h=>h.name==="scale_1")+1,0,B.splice(B.length-1,1)[0])}}),o.on("load",()=>{if(t.off("add",_),o.resource instanceof EA)for(const h of g){t.remove(h),h.unload();const u=h.file;u&&(u.contents=void 0)}const C=["x","y","z","scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","f_dc_0","f_dc_1","f_dc_2","opacity"],l=o.resource.gsplatData,B=C.filter(h=>!l.getProp(h));B.length>0?I(new Error(`This file does not contain gaussian splatting data. The following properties are missing: ${B.join(", ")}`)):s(o)}),o.on("error",C=>{t.off("add",_),I(C)}),t.add(o),t.load(o)})};async function ka(t,A,e){const i=e??A.split("/").pop()??"splat",r={url:A,filename:i};if(i.toLowerCase().endsWith(".spz")){const a=await Or(r),s=new fe(i,"gsplat",{url:A,filename:i});return t.assets.add(s),s.resource=qr(t.graphicsDevice,a),s.loaded=!0,s}return va(t.assets,r)}var q={Torso:0,Head:1,LeftUpperArm:2,LeftLowerArm:3,LeftHand:4,RightUpperArm:5,RightLowerArm:6,RightHand:7,LeftUpperLeg:8,LeftLowerLeg:9,LeftFoot:10,RightUpperLeg:11,RightLowerLeg:12,RightFoot:13};(()=>{const t={pelvis:"hips",spine_01:"spine",spine_03:"spine1",spine_05:"spine2",neck_01:"neck",head:"head"};for(const[A,e]of[["l","left"],["r","right"]]){Object.assign(t,{[`clavicle_${A}`]:`${e}shoulder`,[`upperarm_${A}`]:`${e}arm`,[`lowerarm_${A}`]:`${e}forearm`,[`hand_${A}`]:`${e}hand`,[`thigh_${A}`]:`${e}upleg`,[`calf_${A}`]:`${e}leg`,[`foot_${A}`]:`${e}foot`,[`ball_${A}`]:`${e}toebase`});for(const i of["thumb","index","middle","ring","pinky"])for(let r=1;r<=3;r++)t[`${i}_0${r}_${A}`]=`${e}hand${i}${r}`}return t})();new wA;new y;new y;new y;new O;new O;new y;new wA;var Na={apertureFrac:.05,minAlpha:.5,commitOpacity:5,minRadius:.02},At={depth:null,firstHit:null,median:null,seed:null,flatness:0,aperture:0,considered:0,marched:0},ba=30,xa=.02;function Ua(t,A,e){const i=Math.cos(ba*Math.PI/180),r=[];for(let o=0;o<t.count;o++){const g=t.x[o],n=t.y[o],_=t.z[o],C=Math.sqrt(g*g+n*n+_*_);if(!(C>=e.minRadius)||1/(1+Math.exp(-t.opacity[o]))<e.minAlpha)continue;const l=A*n;l<=0||l/C<i||r.push(l)}if(r.length===0)return{depth:null,flatness:0};r.sort((o,g)=>o-g);const a=r[Math.floor(r.length*.5)],s=xa*a;let I=0;for(const o of r)Math.abs(o-a)<=s&&I++;return{depth:a,flatness:I/r.length}}function Ga(t,A,e=Na){const{depth:i,flatness:r}=Ua(t,A,e);if(i===null||i<=0)return At;const a=e.apertureFrac*i,s=[];let I=0;for(let n=0;n<t.count;n++){const _=t.x[n],C=t.y[n],l=t.z[n];if(!(Math.sqrt(_*_+C*C+l*l)>=e.minRadius))continue;const h=A*C;if(h<=0||Math.hypot(_,l)>a)continue;I++;const u=1/(1+Math.exp(-t.opacity[n]));u<e.minAlpha||s.push({down:h,alpha:u,acc:0})}if(s.length===0)return{...At,seed:i,flatness:r,aperture:a,considered:I};s.sort((n,_)=>n.down-_.down);let o=0,g=-1;for(let n=0;n<s.length;n++)o+=s[n].alpha,s[n].acc=o,g<0&&o>=e.commitOpacity&&(g=n);return{depth:g>=0?s[g].down:null,firstHit:s[0].down,median:s[s.length>>1].down,seed:i,flatness:r,aperture:a,considered:I,marched:s.length}}var Pa=.98,Ma=65536;function Vt(t,A,e,i,r=Pa){if(i<=0)return 0;const a=Math.max(1,Math.ceil(i/Ma)),s=Math.floor((i+a-1)/a),I=new Float32Array(s);for(let g=0,n=0;g<s;g++,n+=a)I[g]=Math.sqrt(t[n]*t[n]+A[n]*A[n]+e[n]*e[n]);I.sort();const o=Math.min(s-1,Math.max(0,Math.round((s-1)*r)));return I[o]}function Ta(t,A,e,i,r,a=Vt(A,e,i,r)){if(!(a>0)||!Number.isFinite(a))return!1;const s=1/a,I=Math.min(r,t.length);for(let o=0;o<I;o++){const g=Math.sqrt(A[o]*A[o]+e[o]*e[o]+i[o]*i[o])*s;t[o]=g>1?1:g}return!0}function Yt(t){return t instanceof EA||typeof t?.refillStreams=="function"}function Ht(t){const A=t;A?._levels&&A._needsUpload===!1&&(A._levels[0]=null)}function Jt(t){return Yt(t)?(t.streams.textures.forEach(A=>Ht(A)),!0):!1}function Va(t){if(t instanceof EA){const A=t.gsplatData;t.updateColorData(A),t.updateTransformData(A),t.shBands>0&&t.updateSHData(A)}else t.refillStreams();Jt(t)}var x=1e9,Ya=x*x,VA=.001,Ha={r:1,g:1,b:1},za=class oA{entity;asset;_scene;_clipMin=new y(-x,-x,-x);_clipMax=new y(x,x,x);_clipMinArr=[-x,-x,-x];_clipMaxArr=[x,x,x];_clipDistMin=0;_clipDistMax=1/0;_clipDistOrigin=new y(0,0,0);_splatSizeMax=1/0;_clipDistOriginArr=[0,0,0];_cullPosArr=[0,0,0];_cullDirArr=[0,0,1];_cullFadeArr=[VA,VA];_tintArr=[1,1,1,0];_shockEnabled=!1;_shockArr=[0,0,0,0];_shockBandArr=[1,0];_radiusLocal=null;_revealEnabled=!1;_revealBaked=!1;_revealAmount=1;_revealInverse=0;_revealDistanceTexture=null;_revealBand=new Float32Array(4);_revealSketch=new Float32Array(4);_revealTint=new Float32Array(4);_dirtyOnly=null;coarseReady;constructor(A,e,i,r=Promise.resolve()){this._scene=A,this.entity=e,this.asset=i,XA(ca,this._revealBand,this._revealSketch,this._revealTint),this.coarseReady=r,this._pushClipUniforms(),this._pushClipDistanceUniforms(),this._pushSplatSizeUniform(),this.setTint(0),this.setCameraCull(null),Jt(i.resource)&&A.graphicsDevice.on("devicerestored",this._onDeviceRestored,this)}sampleWorldSample(A=2e4){const e=this.asset.resource?.gsplatData,i=e?.getProp("x"),r=e?.getProp("y"),a=e?.getProp("z");if(!e||!i||!r||!a)return{positions:new Float32Array(0),alpha:null};const s=e.getProp("opacity"),I=e.numSplats,o=Math.max(1,Math.floor(I/Math.max(1,A))),g=Math.floor(I/o),n=new Float32Array(g*3),_=s?new Float32Array(g):null,C=this.entity.getWorldTransform(),l=new y;for(let B=0,h=0;B<g;B++,h+=3){const u=B*o;l.set(i[u],r[u],a[u]),C.transformPoint(l,l),n[h]=l.x,n[h+1]=l.y,n[h+2]=l.z,_&&(_[B]=1/(1+Math.exp(-s[u])))}return{positions:n,alpha:_}}probeGroundDepth(A,e){const i=this.asset.resource?.gsplatData,r=i?.getProp("x"),a=i?.getProp("y"),s=i?.getProp("z"),I=i?.getProp("opacity");return!i||!r||!a||!s||!I?null:Ga({count:i.numSplats,x:r,y:a,z:s,opacity:I},A,e)}sampleWorldPoints(A=2e4){return this.sampleWorldSample(A).positions}get clipBoundsMin(){return this._clipMin}get clipBoundsMax(){return this._clipMax}setClipBounds(A,e){this._clipMin.copy(A),this._clipMax.copy(e),this._pushClipUniforms()}setClipMaxY(A){this._clipMax.y=A,this._pushClipUniforms()}get clipDistanceMin(){return this._clipDistMin}get clipDistanceMax(){return this._clipDistMax}get clipDistanceOrigin(){return this._clipDistOrigin}setClipDistance(A,e=1/0){this._clipDistMin=Math.max(0,A),this._clipDistMax=Math.max(0,e),this._pushClipDistanceUniforms()}get splatSizeMax(){return this._splatSizeMax}setSplatSizeMax(A){this._splatSizeMax=Math.max(0,A),this._pushSplatSizeUniform()}setClipDistanceOrigin(A){this._clipDistOrigin.copy(A),this._pushClipDistanceUniforms()}setCameraCull(A){let e=-x,i=x;A&&(this._cullPosArr[0]=A.pos.x,this._cullPosArr[1]=A.pos.y,this._cullPosArr[2]=A.pos.z,this._cullDirArr[0]=A.dir.x,this._cullDirArr[1]=A.dir.y,this._cullDirArr[2]=A.dir.z,e=A.maxT,i=A.floorY,this._cullFadeArr[0]=Math.max(A.fadeAlong,VA),this._cullFadeArr[1]=Math.max(A.fadeFloor,VA));const r=this.entity.gsplat;r&&(r.setParameter("uCamCullPos",this._cullPosArr),r.setParameter("uCamCullDir",this._cullDirArr),r.setParameter("uCamCullMaxT",e),r.setParameter("uCamCullFloorY",i),r.setParameter("uCamCullFade",this._cullFadeArr),this._scene.app.renderNextFrame=!0)}setTint(A,e=Ha){this._tintArr[0]=e.r,this._tintArr[1]=e.g,this._tintArr[2]=e.b,this._tintArr[3]=A;const i=this.entity.gsplat;i&&(i.setParameter("uEnvTint",this._tintArr),this._markDirty())}shockTravelFrom(A){const e=this._measureRadius();if(!(e>0))return 0;const i=this.entity.getWorldTransform().getScale(),r=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(i.z)),a=this.entity.getPosition(),s=A.x-a.x,I=A.y-a.y,o=A.z-a.z;return Math.hypot(s,I,o)+e*r}prepareShock(){return this._measureRadius()>0?(this._enableShock(),this._pushShockUniforms(),!0):!1}setShock(A){const e=A?Math.min(1,Math.max(0,A.strength)):0;if(A&&(this._shockArr[0]=A.origin.x,this._shockArr[1]=A.origin.y,this._shockArr[2]=A.origin.z,this._shockArr[3]=A.radius,this._shockBandArr[0]=Math.max(1e-4,A.halfWidth)),this._shockBandArr[1]=e,!this._shockEnabled){if(e<=0)return;this._enableShock()}this._pushShockUniforms()}prepareReveal(){if(this._revealBaked)return!0;const A=this.asset.resource,e=A?.gsplatData,i=A?.textureDimensions,r=e?.getProp("x"),a=e?.getProp("y"),s=e?.getProp("z");if(!e||!i||!r||!a||!s)return!1;const I=this._measureRadius();if(!(I>0))return!1;this._enableReveal(i.x,i.y);const o=this._revealDistanceTexture;if(!o)return!1;const g=o.lock(),n=Ta(g,r,a,s,e.numSplats,I);return o.unlock(),n?(this._revealBaked=!0,Ht(o),this._pushRevealUniforms(),!0):!1}_onDeviceRestored(){const A=this.asset.resource;Yt(A)&&Va(A),this._revealBaked&&(this._revealBaked=!1,this.prepareReveal())}setReveal(A,e=!1){!this._revealEnabled&&(A<1||e)&&!this.prepareReveal()||(this._revealAmount=Math.min(1,Math.max(0,A)),this._revealInverse=e?1:0,this._pushRevealUniforms())}setRevealLook(A){XA(A,this._revealBand,this._revealSketch,this._revealTint),this._revealEnabled&&this._pushRevealUniforms()}get revealEnabled(){return this._revealEnabled}_enableReveal(A,e){if(this._revealEnabled)return;this._revealEnabled=!0,this._revealDistanceTexture=new j(this._scene.graphicsDevice,{name:"envRevealDistance",width:A,height:e,format:HA,mipmaps:!1,minFilter:T,magFilter:T,addressU:b,addressV:b}),this._revealDistanceTexture.lock().fill(1),this._revealDistanceTexture.unlock();const r=this.entity.gsplat;r&&oA._installEnvModifier(r,!0,this._shockEnabled),this._pushRevealUniforms()}_measureRadius(){if(this._radiusLocal!==null)return this._radiusLocal;const A=this.asset.resource?.gsplatData,e=A?.getProp("x"),i=A?.getProp("y"),r=A?.getProp("z"),a=A&&e&&i&&r?Vt(e,i,r,A.numSplats):0;return this._radiusLocal=Number.isFinite(a)&&a>0?a:0,this._radiusLocal}_enableShock(){if(this._shockEnabled)return;this._shockEnabled=!0;const A=this.entity.gsplat;A&&oA._installEnvModifier(A,this._revealEnabled,!0)}_pushShockUniforms(){const A=this.entity.gsplat;A&&(A.setParameter("uEnvShock",this._shockArr),A.setParameter("uEnvShockBand",this._shockBandArr),this._markDirty())}_pushRevealUniforms(){const A=this.entity.gsplat;!A||!this._revealDistanceTexture||(A.setParameter("splatRevealDistanceTex",this._revealDistanceTexture),A.setParameter("uEnvReveal",this._revealAmount),A.setParameter("uEnvRevealInverse",this._revealInverse),A.setParameter("uRevealBand",this._revealBand),A.setParameter("uRevealSketch",this._revealSketch),A.setParameter("uRevealTint",this._revealTint),this._markDirty())}_markDirty(){const A=this.entity.gsplat;A&&(this._dirtyOnly??=new Set([A]),qA.markEnvWorkBuffersDirty(this._dirtyOnly)),this._scene.app.renderNextFrame=!0}_pushClipUniforms(){this._clipMinArr[0]=Number.isFinite(this._clipMin.x)?this._clipMin.x:-x,this._clipMinArr[1]=Number.isFinite(this._clipMin.y)?this._clipMin.y:-x,this._clipMinArr[2]=Number.isFinite(this._clipMin.z)?this._clipMin.z:-x,this._clipMaxArr[0]=Number.isFinite(this._clipMax.x)?this._clipMax.x:x,this._clipMaxArr[1]=Number.isFinite(this._clipMax.y)?this._clipMax.y:x,this._clipMaxArr[2]=Number.isFinite(this._clipMax.z)?this._clipMax.z:x;const A=this.entity.gsplat;A&&(A.setParameter("uEnvClipMin",this._clipMinArr),A.setParameter("uEnvClipMax",this._clipMaxArr),this._scene.app.renderNextFrame=!0)}_pushSplatSizeUniform(){const A=this.entity.gsplat;A&&(A.setParameter("uEnvSplatSizeMax",Math.min(this._splatSizeMax,x)),this._scene.app.renderNextFrame=!0)}_pushClipDistanceUniforms(){const A=this._clipDistMin*this._clipDistMin,e=Math.min(this._clipDistMax*this._clipDistMax,Ya);this._clipDistOriginArr[0]=this._clipDistOrigin.x,this._clipDistOriginArr[1]=this._clipDistOrigin.y,this._clipDistOriginArr[2]=this._clipDistOrigin.z;const i=this.entity.gsplat;i&&(i.setParameter("uEnvClipDistMinSq",A),i.setParameter("uEnvClipDistMaxSq",e),i.setParameter("uEnvClipDistOrigin",this._clipDistOriginArr),this._scene.app.renderNextFrame=!0)}static async load(A,e,i){if(A.destroyed||!A.app)throw new TA("Environment.load");const r=await ka(A.app,e,i?.filename);if(A.destroyed)throw new TA("Environment.load");const a=i?.name??r.name??"environment",s=new mA(a,A.app);return s.addComponent("gsplat",{asset:r}),s.gsplat.layers=[A.envLayerId],i?.position&&s.setPosition(i.position.x,i.position.y,i.position.z),i?.rotation&&s.setEulerAngles(i.rotation.x,i.rotation.y,i.rotation.z),i?.scale!==void 0&&s.setLocalScale(i.scale,i.scale,i.scale),oA._initEnvGsplat(A,s.gsplat),A.contentRoot.addChild(s),new oA(A,s,r)}static _initEnvGsplat(A,e){oA._installEnvModifier(e,!1,!1),qA._envGsplatComponents.add(e),ct(e,A.graphicsDevice)}static _installEnvModifier(A,e,i){const r=(e?`#define USE_REVEAL
`:"")+(i?`#define USE_SHOCK
`:"");A.setWorkBufferModifier({glsl:r+Ca,wgsl:r+la})}static async loadLodBundle(A,e,i){if(A.destroyed||!A.app)throw new TA("Environment.loadLodBundle");const r=A.app,a=new fe(e,"gsplat",{url:e});if(r.assets.add(a),await new Promise((C,l)=>{a.once("load",()=>C()),a.once("error",B=>l(new Error(String(B)))),r.assets.load(a)}),A.destroyed)throw new TA("Environment.loadLodBundle");const s=new mA(i?.name??"lod_environment",r);s.addComponent("gsplat",{asset:a}),s.gsplat.layers=[A.envLayerId],i?.position&&s.setPosition(i.position.x,i.position.y,i.position.z);const I=i?.rotation??{x:0,y:0,z:0};s.setEulerAngles(I.x+180,I.y,I.z),i?.scale!==void 0&&s.setLocalScale(i.scale,i.scale,i.scale);const o=s.gsplat;oA._initEnvGsplat(A,o),o.lodBaseDistance=i?.lodBaseDistance??8,o.lodMultiplier=i?.lodMultiplier??3,A.contentRoot.addChild(s);const g=a.resource?.octree?.lodLevels??1,n=Math.max(0,g-1);let _;if(i?.fixedLodLevel!==void 0){const C=Math.min(n,Math.max(0,Math.round(i.fixedLodLevel)));o.lodRangeMin=C,o.lodRangeMax=C,_=Promise.resolve()}else o.lodRangeMin=n,o.lodRangeMax=n,_=oA._openLodRangeWhenCoarseReady(o,n,i?.coarseTimeoutMs??8e3);return new oA(A,s,a,_)}static _openLodRangeWhenCoarseReady(A,e,i){const r=A.system,a=r.app;let s=!1,I=null,o;const g=new Promise(l=>{o=l}),n=()=>{s||(s=!0,r.off("frame:ready",C),I!==null&&clearTimeout(I),A.lodRangeMin=0,A.lodRangeMax=e,a.once("update",()=>{a.scene.gsplat.dirty=!0}),typeof requestAnimationFrame<"u"?requestAnimationFrame(()=>o()):o())},_=()=>{I!==null&&clearTimeout(I),I=setTimeout(n,i)},C=(l,B,h,u)=>{(u>0||I===null)&&_(),h&&u===0&&n()};return r.on("frame:ready",C),g}destroy(){this._scene.graphicsDevice.off("devicerestored",this._onDeviceRestored,this),this.entity.gsplat&&qA._envGsplatComponents.delete(this.entity.gsplat),this._revealDistanceTexture?.destroy(),this._revealDistanceTexture=null,this.entity.destroy(),this._scene.app.assets.remove(this.asset),this.asset.unload()}};new y(0,0,0);new y;new y;new y;new y;new y;new y(1,1,1);new O;new O;new rt(1,.55,.1,1);Array.from({length:8},()=>new y);new y;new O;new O;new O;new O;new O;new O;new y;var Ja=[["torso",q.Torso],["head",q.Head],["left_upper_arm",q.LeftUpperArm],["left_lower_arm",q.LeftLowerArm],["left_hand",q.LeftHand],["right_upper_arm",q.RightUpperArm],["right_lower_arm",q.RightLowerArm],["right_hand",q.RightHand],["left_upper_leg",q.LeftUpperLeg],["left_lower_leg",q.LeftLowerLeg],["left_foot",q.LeftFoot],["right_upper_leg",q.RightUpperLeg],["right_lower_leg",q.RightLowerLeg],["right_foot",q.RightFoot]];new Map(Ja);var Ka=`
precision highp float;
uniform float uMode;
uniform vec3 uColorTop;
uniform vec3 uColorBottom;
uniform vec3 uGround;
uniform vec3 uWarm;
uniform float uDark;
uniform float uDim;
uniform vec3 uColorAccent;
uniform vec3 uColorFloor;
uniform float uTime;
uniform float uFlow;
uniform mat4 uInvViewProj;
varying vec2 vUv0;

float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float hash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash2(i), hash2(i + vec2(1.0, 0.0)), u.x), mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
    return 0.5 * vnoise(p) + 0.25 * vnoise(p * 2.03 + 17.0) + 0.125 * vnoise(p * 4.1 + 31.0);
}
// The default framing only sees y in about -0.5..0.26, so the zenith has to
// arrive by y ≈ 0.36 or the sky reads as one pale horizon band.
vec3 threeStop(float y) {
    if (y >= 0.0) return mix(uColorBottom, uColorTop, pow(smoothstep(0.0, 0.36, y), 0.8));
    return mix(uColorBottom, uGround, smoothstep(0.0, 0.5, -y));
}

void main() {
    // Reconstruct world-space view direction from screen UV
    vec2 ndc = vUv0 * 2.0 - 1.0;
    vec4 clipNear = vec4(ndc, -1.0, 1.0);
    vec4 clipFar  = vec4(ndc,  1.0, 1.0);
    vec4 worldNear = uInvViewProj * clipNear;
    vec4 worldFar  = uInvViewProj * clipFar;
    vec3 dir = normalize(worldFar.xyz / worldFar.w - worldNear.xyz / worldNear.w);
    float y = dir.y;
    vec3 col;
    if (uMode < 0.5) {
        col = mix(uColorBottom, uColorTop, y / 2.05 + 0.5);
    } else if (uMode < 1.5) {
        col = threeStop(y);
    } else if (uMode < 2.5) {
        // Dusk: a warm band at the horizon, the cool zenith above, the floor
        // taking a little of the warmth with it.
        vec3 hz = mix(uColorBottom, uWarm, 0.7);
        col = y >= 0.0
            ? mix(hz, uColorTop, pow(smoothstep(0.0, 0.5, y), 0.7))
            : mix(hz, uGround, smoothstep(0.0, 0.5, -y));
        col = mix(col, uWarm, 0.25 * exp(-abs(y - 0.02) * 7.0));
    } else {
        col = threeStop(y);
        if (uDark < 0.5) {
            // Day: a cloud layer on a plane 1 unit up, thinning toward the horizon.
            vec2 p = dir.xz / max(y, 0.03) * 1.0;
            float n = fbm(p + vec2(3.1, 7.7));
            float cloud = smoothstep(0.42, 0.72, n) * smoothstep(0.0, 0.14, y);
            col = mix(col, mix(uColorBottom, vec3(1.0), 0.6), cloud * 0.85);
        } else {
            // Night: a hashed star field above the horizon.
            vec3 cell = dir * 240.0;
            float h = hash3(floor(cell));
            float disc = 1.0 - smoothstep(0.18, 0.4, length(fract(cell) - 0.5));
            float star = step(0.995, h) * disc * smoothstep(0.01, 0.16, y);
            col += vec3(0.85, 0.9, 1.0) * star * (0.35 + 0.65 * fract(h * 91.7));
        }
    }
    // Flow (SkyDomeOptions.flow): aurora ribbons above, an energy floor
    // below. Every term is scaled by uFlow, so 0 leaves the sky untouched.
    float az = atan(dir.z, dir.x);
    float y1 = y - (0.20 + 0.07 * sin(az * 3.0 + uTime * 0.26));
    float y2 = y - (0.46 + 0.09 * sin(az * 2.0 - uTime * 0.18 + 1.7));
    float rib1 = 1.0 - smoothstep(0.0, 0.11, abs(y1));
    float rib2 = 1.0 - smoothstep(0.0, 0.16, abs(y2));
    float shimmer = 0.7 + 0.3 * sin(az * 6.0 - uTime * 0.7);
    col += uColorAccent * ((rib1 * 0.55 + rib2 * 0.35) * shimmer * 0.5 * uFlow);
    // Project the ray onto a virtual plane below the camera; min() keeps the
    // divisor sane at the horizon (the fades zero the result there).
    vec2 fp = dir.xz * (1.0 / min(y, -0.02));
    float r = length(fp);
    float rings = 0.5 + 0.5 * sin(r * 3.2 - uTime * 0.9);
    rings = rings * rings * rings;
    float spokes = 0.85 + 0.15 * sin(az * 12.0 + uTime * 0.12);
    float floorFade = smoothstep(0.02, 0.28, -y);
    float distFade = 1.0 / (1.0 + r * r * 0.12);
    col = mix(col, uColorFloor, floorFade * 0.6 * uFlow);
    col += uColorAccent * (rings * spokes * distFade * floorFade * 0.4 * uFlow);
    // Lights down (the loading look, 2026-09-23): a step darker and cooler.
    col = mix(col, col * vec3(0.72, 0.78, 0.86), uDim);
    // One-LSB dither against banding on the long ramps.
    float dither = fract(52.9829189 * fract(0.06711056 * gl_FragCoord.x + 0.00583715 * gl_FragCoord.y));
    col += (dither - 0.5) / 255.0 * 2.0;
    gl_FragColor = vec4(col, 1.0);
}
`,Oa=`
uniform uMode: f32;
uniform uColorTop: vec3f;
uniform uColorBottom: vec3f;
uniform uGround: vec3f;
uniform uWarm: vec3f;
uniform uDark: f32;
uniform uDim: f32;
uniform uColorAccent: vec3f;
uniform uColorFloor: vec3f;
uniform uTime: f32;
uniform uFlow: f32;
uniform uInvViewProj: mat4x4f;

varying vUv0: vec2f;

fn hash2(p: vec2f) -> f32 { return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453); }
fn hash3(p: vec3f) -> f32 { return fract(sin(dot(p, vec3f(127.1, 311.7, 74.7))) * 43758.5453); }
fn vnoise(p: vec2f) -> f32 {
    let i = floor(p);
    let f = fract(p);
    let u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash2(i), hash2(i + vec2f(1.0, 0.0)), u.x), mix(hash2(i + vec2f(0.0, 1.0)), hash2(i + vec2f(1.0, 1.0)), u.x), u.y);
}
fn fbm(p: vec2f) -> f32 {
    return 0.5 * vnoise(p) + 0.25 * vnoise(p * 2.03 + 17.0) + 0.125 * vnoise(p * 4.1 + 31.0);
}
fn threeStop(y: f32) -> vec3f {
    if (y >= 0.0) { return mix(uniform.uColorBottom, uniform.uColorTop, pow(smoothstep(0.0, 0.36, y), 0.8)); }
    return mix(uniform.uColorBottom, uniform.uGround, smoothstep(0.0, 0.5, -y));
}

@fragment
fn fragmentMain(input: FragmentInput) -> FragmentOutput {
    var output: FragmentOutput;

    let ndc = input.vUv0 * 2.0 - vec2f(1.0);
    let clipNear = vec4f(ndc, -1.0, 1.0);
    let clipFar  = vec4f(ndc,  1.0, 1.0);
    let worldNear = uniform.uInvViewProj * clipNear;
    let worldFar  = uniform.uInvViewProj * clipFar;
    let dir = normalize(worldFar.xyz / worldFar.w - worldNear.xyz / worldNear.w);
    let y = dir.y;
    var col: vec3f;
    if (uniform.uMode < 0.5) {
        col = mix(uniform.uColorBottom, uniform.uColorTop, vec3f(y / 2.05 + 0.5));
    } else if (uniform.uMode < 1.5) {
        col = threeStop(y);
    } else if (uniform.uMode < 2.5) {
        let hz = mix(uniform.uColorBottom, uniform.uWarm, vec3f(0.7));
        if (y >= 0.0) {
            col = mix(hz, uniform.uColorTop, vec3f(pow(smoothstep(0.0, 0.5, y), 0.7)));
        } else {
            col = mix(hz, uniform.uGround, vec3f(smoothstep(0.0, 0.5, -y)));
        }
        col = mix(col, uniform.uWarm, vec3f(0.25 * exp(-abs(y - 0.02) * 7.0)));
    } else {
        col = threeStop(y);
        if (uniform.uDark < 0.5) {
            let p = dir.xz / max(y, 0.03) * 1.0;
            let n = fbm(p + vec2f(3.1, 7.7));
            let cloud = smoothstep(0.42, 0.72, n) * smoothstep(0.0, 0.14, y);
            col = mix(col, mix(uniform.uColorBottom, vec3f(1.0), vec3f(0.6)), vec3f(cloud * 0.85));
        } else {
            let cell = dir * 240.0;
            let h = hash3(floor(cell));
            let disc = 1.0 - smoothstep(0.18, 0.4, length(fract(cell) - vec3f(0.5)));
            let star = step(0.995, h) * disc * smoothstep(0.01, 0.16, y);
            col = col + vec3f(0.85, 0.9, 1.0) * star * (0.35 + 0.65 * fract(h * 91.7));
        }
    }
    let az = atan2(dir.z, dir.x);
    let y1 = y - (0.20 + 0.07 * sin(az * 3.0 + uniform.uTime * 0.26));
    let y2 = y - (0.46 + 0.09 * sin(az * 2.0 - uniform.uTime * 0.18 + 1.7));
    let rib1 = 1.0 - smoothstep(0.0, 0.11, abs(y1));
    let rib2 = 1.0 - smoothstep(0.0, 0.16, abs(y2));
    let shimmer = 0.7 + 0.3 * sin(az * 6.0 - uniform.uTime * 0.7);
    col = col + uniform.uColorAccent * ((rib1 * 0.55 + rib2 * 0.35) * shimmer * 0.5 * uniform.uFlow);
    let fp = dir.xz * (1.0 / min(y, -0.02));
    let r = length(fp);
    var rings = 0.5 + 0.5 * sin(r * 3.2 - uniform.uTime * 0.9);
    rings = rings * rings * rings;
    let spokes = 0.85 + 0.15 * sin(az * 12.0 + uniform.uTime * 0.12);
    let floorFade = smoothstep(0.02, 0.28, -y);
    let distFade = 1.0 / (1.0 + r * r * 0.12);
    col = mix(col, uniform.uColorFloor, vec3f(floorFade * 0.6 * uniform.uFlow));
    col = col + uniform.uColorAccent * (rings * spokes * distFade * floorFade * 0.4 * uniform.uFlow);
    col = mix(col, col * vec3f(0.72, 0.78, 0.86), vec3f(uniform.uDim));
    let px = input.vUv0 * 2048.0;
    let dither = fract(52.9829189 * fract(0.06711056 * px.x + 0.00583715 * px.y));
    col = col + vec3f((dither - 0.5) / 255.0 * 2.0);
    output.color = vec4f(col, 1.0);
    return output;
}
`;function cA(t){const A=t.replace("#",""),e=parseInt(A.substring(0,2),16)/255,i=parseInt(A.substring(2,4),16)/255,r=parseInt(A.substring(4,6),16)/255;return[e,i,r]}function et(t){return[t[0]+(1-t[0])*.45,t[1]+(1-t[1])*.45,t[2]+(1-t[2])*.45]}function tt(t){return[t[0]*.22,t[1]*.22,t[2]*.28]}function YA(t,A){t[0]=A[0],t[1]=A[1],t[2]=A[2]}var ja=class Kt{enabled=!0;entity;_topColor;_bottomColor;_ground;_warm;_mode=0;_dark=0;dim=0;flow=0;_accentColor;_floorColor;constructor(A){this.entity=A}setTopColor(A){const e=cA(A);YA(this._topColor,e),YA(this._accentColor,et(e))}setBottomColor(A){const e=cA(A);YA(this._bottomColor,e),YA(this._floorColor,tt(e))}setLook(A){if(A.zenith&&this.setTopColor(A.zenith),A.horizon&&this.setBottomColor(A.horizon),A.ground){const[e,i,r]=cA(A.ground);this._ground[0]=e,this._ground[1]=i,this._ground[2]=r}if(A.warm){const[e,i,r]=cA(A.warm);this._warm[0]=e,this._warm[1]=i,this._warm[2]=r}A.mode!==void 0&&(this._mode=A.mode),A.dark!==void 0&&(this._dark=A.dark?1:0)}static create(A,e){const i=A.graphicsDevice,r=cA(e?.zenith??e?.topColor??"#c2f0ff"),a=cA(e?.horizon??e?.bottomColor??"#ffffff"),s=cA(e?.ground??e?.horizon??e?.bottomColor??"#ffffff"),I=cA(e?.warm??"#ffd9a6"),o=et(r),g=tt(a),n=$t.createShader(i,{uniqueName:"engine-sky-gradient",attributes:{vertex_position:Ai},vertexChunk:"fullscreenQuadVS",fragmentGLSL:Ka,fragmentWGSL:Oa}),_=new ei(n),C=new O,l=new mA("skyDome");A.contentRoot.addChild(l);const B=new Kt(l);return B._topColor=r,B._bottomColor=a,B._ground=s,B._warm=I,B._mode=e?.mode??0,B._dark=e?.dark?1:0,B._accentColor=o,B._floorColor=g,B.flow=Math.max(0,Math.min(1,e?.flow??0)),A.app.scene.on(ti,(h,u,d)=>{if(!B.enabled||u.name!=="World"||d)return;const c=A.cameraEntity.camera;if(!c)return;const Q=A.cameraEntity.getWorldTransform().clone().invert(),p=c.projection===ii?C.setPerspective(c.fov,c.aspectRatio,.1,1e3,c.horizontalFov):c.projectionMatrix,L=new O().mul2(p,Q).clone().invert();i.scope.resolve("uMode").setValue(B._mode),i.scope.resolve("uColorTop").setValue(r),i.scope.resolve("uColorBottom").setValue(a),i.scope.resolve("uGround").setValue(s),i.scope.resolve("uWarm").setValue(I),i.scope.resolve("uDark").setValue(B._dark),i.scope.resolve("uDim").setValue(B.dim),i.scope.resolve("uColorAccent").setValue(o),i.scope.resolve("uColorFloor").setValue(g),i.scope.resolve("uTime").setValue(performance.now()*.001%512),i.scope.resolve("uFlow").setValue(B.flow),i.scope.resolve("uInvViewProj").setValue(L.data),i.setDepthState(ri.NODEPTH),_.render()}),B}};export{za as E,Wa as S,ja as a};
