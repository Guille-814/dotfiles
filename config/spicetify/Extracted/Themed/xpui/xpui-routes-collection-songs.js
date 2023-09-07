"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7553],{72072:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var n=a(59496),l=a(83792),r=a(97601),o=a(87276),s=a(50744),i=a(14887),c=a(30099),u=a(70304),d=a(62926),g=a(75132),m=a(46915),f=a(29629),h=a(36342),y=a(48989),p=a(52118),x=a(29405),k=a(97664),j=a(53851),b=a(10047),C=a(90293),D=a(13138),F=a(34046),P=a(9990),S=a(46927),T=a(99750),E=a(68224),I=a(34092),v=a(5272),w=a(31186),L=a(5684),R=a(44711),A=a(4637);const U=n.memo((({tracklistDomRef:e})=>{const{spec:t,logger:a}=(0,F.fU)(w.createDesktopSearchBarEventFactory,{}),l=(0,n.useCallback)((()=>{a.logInteraction(t.filterFieldFactory().keyStrokeFilter())}),[a,t]),r=(0,n.useCallback)((()=>{a.logInteraction(t.filterFieldFactory().hitClearFilter())}),[a,t]),o=(0,n.useCallback)((()=>{a.logInteraction(t.sortButtonFactory().hitSort())}),[a,t]);return(0,A.jsxs)("div",{className:m.Z.searchBoxContainer,children:[(0,A.jsx)(n.Suspense,{fallback:null,children:(0,A.jsx)(L.K,{placeholder:c.ag.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:e,onFilter:l,onClear:r})}),(0,A.jsx)(R.l,{columns:y.P0,onSort:o})]})}));var N=a(26473),M=a(47948),O=a(4398),Q=a(99550);const _=n.memo((function({metadata:e,onClickTogglePlay:t,isPlaying:a,spec:l,logger:r,backgroundColor:o,canSort:s,canFilter:i}){const{uri:u,name:d,totalLength:g}=e,m=(0,n.useRef)(null),f=(0,n.useMemo)((()=>l.actionBarFactory()),[l]),h=(0,n.useMemo)((()=>f.shuffleButtonContainerFactory()),[f]),y=g>0,p=g>0,x=(0,P.W6)(M.eKc,{loadingValue:!1}),k=(0,n.useCallback)(((e,t)=>{const a=f.downloadButtonFactory();t===v.mc.ADD?r.logInteraction(a.hitDownload({itemToDownload:u})):t===v.mc.REMOVE?r.logInteraction(a.hitRemoveDownload({itemToRemoveFromDownloads:u})):t===v.mc.NO_PERMISSION&&r.logInteraction(a.hitUiReveal())}),[f,r,u]),j=(0,N.j)();return(0,A.jsx)(S.o,{backgroundColor:o,children:(0,A.jsxs)(S.F,{children:[p?(0,A.jsx)(E.$,{onClick:t,isPlaying:a,size:j,uri:u,ariaPauseLabel:c.ag.get("playlist.a11y.pause",d),ariaPlayLabel:c.ag.get("playlist.a11y.play",d)}):null,x&&(0,A.jsx)(F.Nh,{spec:h,children:(0,A.jsx)(Q.K,{entityName:d,contextUri:u,activationPlacement:"bottomEnd",size:j})}),g>0&&(0,A.jsx)(O.v,{uri:u,renderEnabled:()=>(0,A.jsx)(I.v,{uri:u})}),(0,A.jsx)(T.o,{uri:u,canDownload:y,isFollowing:!0,onFollow:()=>{},size:j,onClick:k}),i&&s&&(0,A.jsx)(F.Nh,{spec:f,children:(0,A.jsx)(U,{tracklistDomRef:m})})]})})}));var B=a(93878),z=a(18605),G=a(34198),K=a(7554),H=a(9102),V=a(72102),W=a(33960),$=a(66361),Z=a(36645),q=a(75922);const X=n.lazy((()=>Promise.all([a.e(1814),a.e(2519),a.e(682)]).then(a.bind(a,72519)))),Y=[h.QD.INDEX,h.QD.TITLE,h.QD.ALBUM,h.QD.ADDED_AT,h.QD.DURATION],J="your_library",ee=({data:e,canFilter:t,canSort:a})=>{const{uri:l,name:i,totalLength:p}=e.metadata,C=(0,n.useRef)(null),P=(0,j.Y5)("#5038a0"),{filter:S}=(0,n.useContext)(f.fo),{sortState:T,setSortState:E}=(0,n.useContext)(y.Gb),{spec:I,logger:v}=(0,F.fU)(s.Q,{data:{uri:l}}),w=n.useMemo((()=>I.headerFactory()),[I]),L=n.useMemo((()=>I.tracklistFactory()),[I]);(0,n.useEffect)((()=>{null===T.column&&E({column:h.QD.ADDED_AT,order:h.kn.DESC})}),[T,E]);const R=(0,r.ur)(),U=(0,r.TH)(),N="POP"!==R?new URLSearchParams(U.search).get("uri"):null,{isPlaying:M,togglePlay:O,usePlayContextItem:Q,isActive:K}=(0,D.n)((0,b.I)(l,(0,B.w)(T),S),{featureIdentifier:J,referrerIdentifier:"your_library"}),H=()=>{const e=(0,G.aK)({isPlaying:M,isActive:K,spec:I.actionBarFactory().playButtonFactory(),logger:v,uri:l});O({loggingParams:e})};return(0,A.jsxs)("section",{role:"presentation",className:m.Z.playlist,"data-testid":"playlist-page",children:[(0,A.jsx)(u.$,{children:c.ag.get("playlist.page-title",i)}),(0,A.jsx)(x.s,{metadata:{...e.metadata,hasSpotifyTracks:!0},isPlaying:M,togglePlay:H,backgroundColor:P,specLikedSongs:w}),(0,A.jsx)(_,{metadata:e.metadata,onClickTogglePlay:H,isPlaying:M,spec:I,logger:v,backgroundColor:P,canSort:a,canFilter:t}),(0,A.jsx)("div",{className:"contentSpacing",children:p>0?(0,A.jsx)(n.Suspense,{fallback:(0,A.jsx)(g.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-tracks-failure")}),children:(0,A.jsx)(F.Nh,{spec:L,children:(0,A.jsx)(k.m,{columns:Y,children:(0,A.jsx)(z.p,{nrTracks:p,collectionUri:l,scrollToUri:N,usePlayContextItem:Q,outerDomRef:C,spec:L,initialItems:e.contents.items})})})}):(0,A.jsx)(d.u,{message:c.ag.get("collection.empty-page.songs-subtitle"),title:c.ag.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.songs-cta"),renderInline:!0,children:(0,A.jsx)(o.F,{"aria-hidden":"true"})})})]})},te=n.memo((function({user:e,uri:t}){const{filter:a}=(0,n.useContext)(f.fo),{sortState:r}=(0,n.useContext)(y.Gb),o=function(e,t,a){const l=(0,n.useContext)(C.H),r=(0,H.useQueryClient)(),o=(0,V.jP)((()=>["useLikedSongs",e,a]),[e,a]),{data:s}=(0,H.useQuery)(o(),(()=>l.getTracks(a)),{cacheTime:18e5,keepPreviousData:!0,refetchOnWindowFocus:!1}),i=(0,n.useCallback)((()=>{r.invalidateQueries(o())}),[r,o]);(0,$.b)(W.EW.UPDATE,i);const c=(0,q.I2)(t.id);return c&&s?{metadata:{uri:e,name:c.name,images:c.images,totalLength:s?.totalLength,unfilteredTotalLength:s.unfilteredTotalLength,owner:(0,Z.V)(t)},contents:s}:null}(t,e,{offset:0,limit:25,sort:(0,B.w)(r),filter:a}),s=(0,n.useContext)(C.H).getCapabilities(),i=(0,l.v9)(K.n5),{isEnhanced:u}=(0,p.U)(`spotify:user:${i}:collection`);if(o){const e=(0,A.jsx)(ee,{data:o,canFilter:s.canFilterTracksAndEpisodes&&o.metadata.unfilteredTotalLength>0,canSort:s.canSortTracksAndEpisodes&&o.metadata.unfilteredTotalLength>0});return(0,A.jsx)(O.v,{uri:o.metadata.uri,renderEnabled:()=>u?(0,A.jsx)(n.Suspense,{fallback:null,children:(0,A.jsx)(y.kz,{uri:o.metadata.uri,children:(0,A.jsx)(X,{metadata:{...o.metadata,collaborators:{count:1,items:[{isOwner:!0,user:o.metadata.owner,tracksAdded:o.metadata.totalLength}]}},capabilities:s,featureIdentifier:J})})}):e,renderDisabled:()=>e})}return(0,A.jsx)(g.h,{hasError:!1,errorMessage:c.ag.get("error.not_found.title.playlist"),loadOffline:s.canModifyOffline})})),ae=()=>{const{user:e}=(0,l.v9)(K.Gg);if(null===e)return null;const t=(0,i.wG)(e.id).toURI();return(0,A.jsx)(y.kz,{uri:t,children:(0,A.jsx)(f.hz,{uri:t,children:(0,A.jsx)(te,{uri:t,user:e})})})}},29405:(e,t,a)=>{a.d(t,{s:()=>n.s});var n=a(5912)}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map