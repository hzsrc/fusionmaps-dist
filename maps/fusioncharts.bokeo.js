(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=2)})([,,function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(3);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Bokeo.1.06-19-2019 08:58:30
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Bokeo",revision:1,creditLabel:false,standaloneInit:false,baseWidth:500,baseHeight:477,baseScaleFactor:10,firstEntity:"LA.BK.HO",entities:{"LA.BK.HO":{outlines:[[M,3263,1285,Q,3263,1264,3251,1241,3249,1240,3247,1240,3169,1240,3128,1243,3049,1249,3009,1264,2944,1287,2883,1295,L,2752,1307,Q,2752,1307,2753,1308,2751,1308,2733,1306,2712,1302,2646,1292,2645,1291,2644,1291,2611,1278,2562,1270,2495,1258,2478,1253,2448,1246,2385,1232,2364,1227,2341,1226,2328,1225,2287,1225,L,2287,1226,Q,2287,1225,2286,1225,L,2286,1225,Q,2284,1222,2257,1225,2226,1227,2194,1232,2183,1233,2144,1238,2120,1240,2100,1247,1981,1292,1942,1299,1938,1301,1934,1307,1928,1316,1925,1320,1905,1336,1898,1342,1878,1361,1836,1382,1761,1445,1700,1470,1639,1494,1621,1501,1580,1518,1535,1541,1514,1551,1449,1578,1376,1609,1357,1618,1316,1635,1281,1661,1271,1668,1249,1683,1228,1698,1215,1715,1196,1735,1192,1741,1185,1750,1175,1774,1173,1779,1169,1791,1165,1801,1161,1805,1132,1833,1130,1835,1124,1840,1094,1857,1072,1869,1066,1881,1064,1883,1046,1912,1040,1922,1040,1943,1040,1959,1046,2014,1051,2064,1053,2075,1093,2084,1123,2102,1162,2124,1173,2166,1188,2222,1209,2249,1265,2323,1281,2411,1286,2435,1322,2485,1360,2538,1371,2576,1380,2608,1405,2646,1420,2669,1454,2715,1462,2726,1483,2739,1496,2747,1523,2763,1571,2795,1567,2838,1562,2892,1584,2923,1605,2952,1650,2965,1685,2976,1708,3015,1721,3038,1749,3089,1798,3133,1839,3161,1893,3196,1922,3196,1964,3196,1993,3173,2013,3157,2032,3093,2053,3059,2068,3069,2204,2983,2218,2973,2293,2920,2336,2863,2345,2851,2393,2804,2407,2791,2417,2780,2440,2755,2448,2740,2482,2684,2498,2656,2526,2609,2536,2579,2536,2578,2536,2577,2541,2563,2555,2515,2565,2483,2578,2453,2589,2427,2612,2400,2646,2357,2650,2352,2666,2329,2706,2301,2747,2273,2775,2266,2811,2259,2853,2241,2880,2230,2915,2230,2943,2230,2986,2252,3029,2274,3061,2274,3089,2274,3157,2242,3193,2225,3226,2206,3258,2186,3276,2173,3294,2159,3312,2142,3329,2125,3355,2110,3368,2102,3389,2090,3395,2078,3407,2070,3420,2062,3444,2051,3457,2045,3511,2022,3555,2002,3578,1990,3584,1988,3624,1988,3636,1989,3649,1989,3676,1988,3681,1989,3686,1989,3703,2002,3712,2008,3723,2017,L,3765,2043,Q,3788,2058,3802,2071,3889,2160,3940,2165,3927,2140,3930,2117,3942,2010,3928,1929,3922,1895,3880,1849,3841,1806,3841,1786,3841,1768,3855,1737,3868,1706,3868,1693,3868,1675,3823,1674,3775,1677,3771,1677,3755,1679,3746,1679,3730,1681,3720,1677,3709,1673,3709,1657,3711,1630,3709,1622,3705,1602,3689,1566,3671,1525,3659,1518,3652,1514,3636,1513,3611,1511,3588,1510,3578,1509,3551,1511,3542,1512,3539,1512,3535,1511,3531,1510,3472,1511,3418,1536,3360,1563,3319,1563,3270,1563,3239,1525,3208,1487,3208,1426,3208,1413,3209,1409,3211,1401,3220,1393,3220,1391,3221,1390,3232,1362,3253,1331,Q,3263,1316,3263,1285,Z]],label:"Houaixai District",shortLabel:"HO",labelPosition:[249,194],labelAlignment:[CEN,MID],nextId:"LA.BK.TO"},"LA.BK.TO":{outlines:[[M,1272,1136,Q,1006,1078,868,994,781,942,673,885,545,818,500,793,474,840,455,886,394,1033,339,1250,268,1532,245,1612,243,1660,228,1784,225,1811,203,1867,184,1915,186,1936,192,1975,174,2010,159,2043,128,2067,86,2099,67,2121,38,2155,38,2192,38,2240,69,2282,100,2324,100,2375,100,2403,88,2454,76,2504,76,2545,76,2619,82,2631,95,2660,170,2697,231,2728,314,2752,403,2780,403,2762,483,2762,503,2745,527,2725,527,2640,527,2632,515,2574,503,2516,503,2516,503,2486,559,2477,635,2466,651,2456,683,2436,697,2379,708,2312,713,2287,721,2254,751,2224,793,2183,813,2150,855,2081,878,2069,890,2063,951,2063,1008,2063,1053,2075,1051,2064,1046,2014,1040,1959,1040,1943,1040,1922,1046,1912,1064,1883,1066,1881,1072,1869,1094,1857,1124,1840,1130,1835,1132,1833,1161,1805,1165,1801,1169,1791,1173,1779,1175,1774,1185,1750,1192,1741,1196,1735,1215,1715,1228,1698,1249,1683,1271,1668,1281,1661,1316,1635,1357,1618,1376,1609,1449,1578,1514,1551,1535,1541,1580,1518,1621,1501,1639,1494,1700,1470,1761,1445,1836,1382,1878,1361,1898,1342,1905,1336,1925,1320,1928,1316,1934,1307,1938,1301,1942,1299,1934,1301,1929,1301,1922,1301,1852,1281,1839,1277,1815,1273,1792,1269,1778,1265,1762,1260,1731,1254,1696,1249,1688,1247,1675,1243,1648,1234,1621,1225,1606,1221,1567,1210,1443,1181,1340,1155,1274,1136,Q,1273,1136,1272,1136,Z]],label:"Tonpheung District",shortLabel:"TO",labelPosition:[72,167.3],labelAlignment:[CEN,MID],nextId:"LA.BK.ME"},"LA.BK.ME":{outlines:[[M,2312,89,Q,2255,39,2221,39,2192,39,2156,61,2113,92,2086,110,1979,180,1832,180,1780,180,1748,168,1681,143,1636,132,1628,130,1596,111,1566,93,1536,88,1514,84,1456,86,1397,87,1390,85,1383,83,1381,84,1297,84,1287,85,1233,89,1216,111,1207,123,1173,183,1143,237,1123,257,1091,287,1046,294,996,297,971,304,928,317,892,346,852,380,843,390,730,474,617,618,546,709,500,793,545,818,673,885,781,942,868,994,1006,1078,1272,1136,1273,1136,1274,1136,1340,1155,1443,1181,1567,1210,1606,1221,1621,1225,1648,1234,1675,1243,1688,1247,1696,1249,1731,1254,1762,1260,1778,1265,1792,1269,1815,1273,1839,1277,1852,1281,1922,1301,1929,1301,1934,1301,1942,1299,1981,1292,2100,1247,2120,1240,2144,1238,2183,1233,2194,1232,2226,1227,2257,1225,2284,1222,2286,1225,L,2287,1225,Q,2328,1225,2341,1226,2364,1227,2385,1232,2448,1246,2478,1253,2495,1258,2562,1270,2611,1278,2644,1291,2645,1291,2646,1292,2712,1302,2733,1306,2751,1308,2753,1308,2752,1307,2752,1307,L,2883,1295,Q,2944,1287,3009,1264,3049,1249,3128,1243,3169,1240,3247,1240,3249,1240,3251,1241,3241,1222,3223,1202,3177,1150,3171,1130,3156,1086,3157,1032,3158,953,3157,944,3155,922,3148,900,3141,873,3131,860,3124,852,3094,831,3067,813,3064,803,3064,801,3065,761,3066,731,3051,717,3038,706,3013,693,2993,683,2978,676,2975,675,2975,674,2974,673,2972,672,2934,649,2900,612,2829,536,2836,483,2842,429,2814,341,2772,208,2708,208,2706,208,2629,244,2551,280,2530,280,2510,280,2451,236,2394,193,2383,170,Q,2364,134,2312,89,Z]],label:"Meung District",shortLabel:"ME",labelPosition:[187.5,70.9],labelAlignment:[CEN,MID],nextId:"LA.BK.PH"},"LA.BK.PH":{outlines:[[M,4086,2315,Q,4049,2285,4025,2258,3983,2219,3962,2196,3948,2180,3940,2165,3889,2160,3802,2071,3788,2058,3765,2043,L,3723,2017,Q,3712,2008,3703,2002,3686,1989,3681,1989,3676,1988,3649,1989,3636,1989,3624,1988,3584,1988,3578,1990,3555,2002,3511,2022,3457,2045,3444,2051,3420,2062,3407,2070,3395,2078,3389,2090,3368,2102,3355,2110,3329,2125,3312,2142,3294,2159,3276,2173,3258,2186,3226,2206,3193,2225,3157,2242,3089,2274,3061,2274,3029,2274,2986,2252,2943,2230,2915,2230,2880,2230,2853,2241,2811,2259,2775,2266,2747,2273,2706,2301,2666,2329,2650,2352,2646,2357,2612,2400,2589,2427,2578,2453,2565,2483,2555,2515,2541,2563,2536,2577,2536,2578,2536,2579,2526,2609,2498,2656,2482,2684,2448,2740,2440,2755,2417,2780,2501,2859,2508,2865,2522,2878,2525,2916,2530,2968,2535,2979,2582,3295,2593,3355,2604,3416,2607,3433,2610,3449,2616,3482,2621,3514,2629,3528,2637,3542,2657,3558,2679,3577,2699,3584,2713,3589,2747,3597,2780,3604,2788,3608,2796,3611,2826,3617,2850,3621,2867,3631,2887,3642,2894,3658,2898,3665,2904,3696,2913,3736,2914,3740,2918,3765,2916,3782,2923,3778,2929,3778,3001,3778,3064,3772,3128,3764,3152,3764,3176,3764,3277,3772,3378,3778,3422,3778,3511,3778,3532,3715,3544,3675,3547,3671,3559,3651,3589,3651,3607,3651,3634,3658,3661,3665,3677,3665,3715,3665,3736,3634,3761,3588,3784,3558,3790,3552,3847,3539,3898,3529,3898,3504,3898,3481,3867,3448,3836,3414,3836,3397,3875,3372,3910,3326,3929,3299,3966,3247,4034,3156,4143,3156,4214,3156,4243,3199,4265,3230,4274,3239,4298,3263,4337,3280,4339,3281,4453,3342,4549,3393,4569,3393,4771,3393,4791,3268,4793,3205,4796,3182,4803,3142,4839,3142,4843,3142,4865,3146,4886,3150,4891,3150,4901,3150,4916,3111,4930,3075,4932,3053,4932,3052,4932,3050,L,4932,3050,Q,4957,2871,4957,2850,4957,2824,4955,2820,4950,2815,4907,2798,4873,2785,4862,2780,4846,2770,4846,2752,4846,2730,4879,2711,4912,2693,4912,2677,4912,2652,4886,2588,4864,2532,4851,2512,4841,2497,4818,2429,4809,2400,4769,2399,L,4769,2400,Q,4769,2400,4768,2400,4763,2403,4707,2402,4685,2402,4622,2375,4559,2347,4545,2347,4403,2421,4391,2421,4380,2421,4357,2412,4334,2404,4315,2404,4308,2404,4277,2412,4248,2421,4230,2421,4211,2421,4194,2404,4163,2374,4154,2367,Q,4146,2363,4086,2315,Z]],label:"Pha Oudom District",shortLabel:"PH",labelPosition:[343.5,288.5],labelAlignment:[CEN,MID],nextId:"LA.BK.PA"},"LA.BK.PA":{outlines:[[M,2525,2916,Q,2522,2878,2508,2865,2501,2859,2417,2780,2407,2791,2393,2804,2345,2851,2336,2863,2293,2920,2218,2973,2204,2983,2068,3069,2079,3076,2087,3107,L,2087,3255,Q,2079,3285,2047,3441,2024,3556,1997,3630,1979,3682,1918,3816,1867,3943,1867,4024,1867,4038,1876,4083,1884,4128,1884,4146,1884,4213,1775,4295,1722,4335,1656,4375,1653,4376,1651,4379,1602,4416,1595,4430,1579,4460,1581,4483,1582,4501,1577,4534,1571,4570,1571,4586,1571,4618,1598,4638,1615,4650,1660,4671,1689,4687,1704,4717,1715,4737,1740,4737,1774,4737,1801,4728,1809,4725,1852,4706,1866,4700,1894,4698,1917,4696,1938,4682,1956,4669,1989,4671,2026,4672,2052,4661,2058,4658,2089,4626,2116,4599,2136,4599,2145,4599,2164,4611,2184,4623,2206,4623,2392,4575,2393,4575,2415,4575,2438,4589,2460,4602,2496,4602,2513,4602,2621,4542,2729,4481,2785,4436,2841,4391,2899,4346,2956,4302,2970,4259,2969,4258,2968,4256,2943,4226,2919,4180,2911,4165,2907,4135,2904,4105,2898,4094,2890,4078,2864,4070,2832,4062,2813,4056,2768,4043,2756,4023,2751,4014,2751,3986,2751,3961,2753,3950,2757,3927,2768,3922,2773,3919,2808,3910,2834,3902,2840,3895,2859,3858,2875,3831,2898,3793,2916,3782,2918,3765,2914,3740,2913,3736,2904,3696,2898,3665,2894,3658,2887,3642,2867,3631,2850,3621,2826,3617,2796,3611,2788,3608,2780,3604,2747,3597,2713,3589,2699,3584,2679,3577,2657,3558,2637,3542,2629,3528,2621,3514,2616,3482,2610,3449,2607,3433,2604,3416,2593,3355,2582,3295,2535,2979,Q,2530,2968,2525,2916,Z]],label:"Paktha District",shortLabel:"PA",labelPosition:[227,402.8],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"bokeo",type:"maps"}}])});