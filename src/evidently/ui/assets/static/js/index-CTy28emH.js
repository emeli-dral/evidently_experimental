import{ak as l,m as p,a5 as x,K as e,q as c,j as s}from"./vendor-C2GWNUp2.js";import{D as h}from"./index-D461mMJX.js";import{D as j}from"./DashboardViewParams-D9XhJzJS.js";const g=({Dashboard:o,OnClickedPointComponent:r,OnHoveredPlotComponent:m})=>{const{projectId:i}=l();p(i);const a=x(),n=a.min_timestamp!==null&&a.max_timestamp!==null,d={minDate:e(a.min_timestamp),maxDate:e(a.max_timestamp)},[t,D]=c("dashboard-hide-dates",!1);return s.jsxs(s.Fragment,{children:[s.jsx(h,{dataRanges:d,isShowDateFilter:n,isDashboardHideDates:t,setIsDashboardHideDates:D}),s.jsx(j.Provider,{value:{isXaxisAsCategorical:t,OnClickedPointComponent:r,OnHoveredPlotComponent:m},children:s.jsx(o,{data:a})})]})};export{g as DashboardComponentTemplate};