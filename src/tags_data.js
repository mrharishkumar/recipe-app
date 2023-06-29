const TAGS = [
  {
    recipe_name: "POULTRY MS SPANISH RICE WITH BEANS 12/2",
    recipe_id: "A3855",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & NOODLES RED SAUCE 10/2",
    recipe_id: "M1000",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: T HAM AUGRATIN POTATOES (IMIT)",
    recipe_id: "M10000",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & NOODLES RED SAUCE 8/2",
    recipe_id: "M1001",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPAGHETTI 8/2",
    recipe_id: "M1002",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED BROWN RICE 10/2.5 MMA (WG)",
    recipe_id: "M10047",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & WG ROTINI BROWN SAUCE 10/2.5 MMA",
    recipe_id: "M10048",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: GFI - SOY TETRAZZINI (KOSHER/HALAL/VEGETARIAN)",
    recipe_id: "M10071",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: T HAM PINTO BEANS LS 1 CUP",
    recipe_id: "M10120",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY (25/75) CHILI 10/2",
    recipe_id: "M10154",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY (25/75) MAC & TOMATOES 10/2",
    recipe_id: "M10157",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: T HAM MACARONI & CHEESE (MIX) 1 C",
    recipe_id: "M10194",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY (25/75) RICE (SPICY) 10/2",
    recipe_id: "M10204",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY (CR) & RICE 8/2",
    recipe_id: "M1021",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM SCALLOPED POTATO 8/2",
    recipe_id: "M1023",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) TETRAZZINI 8/2",
    recipe_id: "M1024",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY (25/75) RICE, BROCCOLI, CHEESE (MIX) 10/2",
    recipe_id: "M10264",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPAGHETTI 10/2.5 MMA (WG)",
    recipe_id: "M10271",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI MAC 10/2.5 MMA (WG)",
    recipe_id: "M10273",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MAC & TOMATOES 10/2.5 MMA (WG)",
    recipe_id: "M10290",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "T HAM NAVY BEANS 10/1",
    recipe_id: "M1030",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH BROWN RICE 10/2.5MMA (PARBOILED/WG)",
    recipe_id: "M10303",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (MIX) 10/2.5 MMA (WG)",
    recipe_id: "M10308",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (MIX) WG 8/1 MMA",
    recipe_id: "M10309",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY AUGRATIN POTATOES (W/ MIX CH SCE) 1 CUP",
    recipe_id: "M10313",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS WG RICE, BROCCOLI, CHEESE 12/2.5 MMA (PARBROILED)",
    recipe_id: "M10319",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS JAMBALAYA BROWN RICE 12/2.5 MMA",
    recipe_id: "M10326",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM SCALLOPED POTATO 12/2",
    recipe_id: "M1033",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY NOODLES BROWN SAUCE VEGAN",
    recipe_id: "M10334",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) NOODLES 12/2",
    recipe_id: "M1034",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: VEGAN SOY JAMBALAYA BROWN RICE 1 C",
    recipe_id: "M10351",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY MACARONI TOMATOES 10/3 WG",
    recipe_id: "M10383",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY SPANISH RICE 10/2.5MMA WG",
    recipe_id: "M10386",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY WG MAC & TOMATO 10/2.5 MMA",
    recipe_id: "M10396",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SPANISH BROWN RICE 10/2.5 MMA ZTF (PARBOILED)",
    recipe_id: "M10397",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MACARONI & CHEESE (MIX) 10/2.5 MMA WG (ZTF)",
    recipe_id: "M10398",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM PINTO BEANS 10/1",
    recipe_id: "M1041",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (MIX) 8/2.5 MMA (WG)",
    recipe_id: "M10426",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY JAMBALAYA RICE LS WG (3MMA, 1/2 BG)",
    recipe_id: "M10433",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI ITALIAN SAUCE W/CHEESE WG (REAL) 10/2",
    recipe_id: "M10435",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY MAC&CHEESE (MIX)WG 1C(2.5MMA,1.5BG)",
    recipe_id: "M10437",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY FRIED RICE 1C LS/LF WG(2.5MMA,.5BG)",
    recipe_id: "M10438",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS LASAGNA CASSEROLE 8/1/1 (REAL CHEESE)",
    recipe_id: "M1046",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI WG 10/2.5 MMA",
    recipe_id: "M10469",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE 10/1",
    recipe_id: "M1047",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS BROWN RICE & PEPPERS 10/2.5 MMA WG",
    recipe_id: "M10473",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MAC & TOMATOES LS 12/3 ZTF (WG)",
    recipe_id: "M10477",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM PINTO BEANS 12/2",
    recipe_id: "M1048",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS ROTINI (WG)12/3 ZTF LS",
    recipe_id: "M10480",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & WG ROTINI CREAMY SAUCE & VEG LF ZTF 10/2.25 MMA",
    recipe_id: "M10484",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY ZITI 8/2",
    recipe_id: "M10488",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY BROWN RICE (SPICY) 10/2.5 MMA (WG)",
    recipe_id: "M10507",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY CHILI 10/1",
    recipe_id: "M10526",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS & SOY RICE SPICY 10/2.5MMA WG",
    recipe_id: "M10527",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS & SOY RICE BROCOLI CHEESE (MIX) 10/2.5MMA WG",
    recipe_id: "M10528",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: VEGAN SOY FRIED BROWN RICE 10/2",
    recipe_id: "M10619",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MACARONI & CHEESE (MIX) WG (ZTF) VOLUME",
    recipe_id: "M10621",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY WG ROTINI 1 CUP (VEGAN)",
    recipe_id: "M10624",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM AUGRATIN POTATOES (IMIT) 12/2",
    recipe_id: "M1066",
    sweetness_level: "Low",
  },
  {
    recipe_name: "KY DOC: POULTRY MS SPANISH RICE 3 OZ MEAT",
    recipe_id: "M10710",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD MACARONI & CHEESE (MIX) (8/2)",
    recipe_id: "M10743",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHILI 8/3 LS",
    recipe_id: "M10747",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD ZITI W/CHEESE (REAL) 8/2/1",
    recipe_id: "M10748",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 10/3",
    recipe_id: "M1075",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM NAVY BEANS 10/3",
    recipe_id: "M1077",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY (CR) & RICE W/ BROCCOLI 10/2",
    recipe_id: "M1085",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE CHEESE (MIX) BROCCOLI 8/2",
    recipe_id: "M10889",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) TETRAZZINI 15/3",
    recipe_id: "M1095",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE 15/3",
    recipe_id: "M1097",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF (RAW STEW MEAT) DICED FAJITA 8/3 (1/2 C BEANS)",
    recipe_id: "M11031",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SHEPHERD'S PIE (VEGAN)",
    recipe_id: "M11045",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE CASSEROLE (VEGAN)",
    recipe_id: "M11047",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GFI - BEEFARONI",
    recipe_id: "M11048",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GFI - CHILI (KOSHER/HALAL/VEGAN)",
    recipe_id: "M11049",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI 15/3",
    recipe_id: "M1105",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GFI - JAMBALAYA (KOSHER/HALAL/VEGETARIAN)",
    recipe_id: "M11052",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SHEPHERD'S PIE 10/2",
    recipe_id: "M1108",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY SPANISH RICE LS",
    recipe_id: "M11101",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: SOY CHILI 10/3",
    recipe_id: "M11135",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: SOY ROTINI 10/2",
    recipe_id: "M11137",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & WG ROTINI & TOMATOES 10/2.5 MMA",
    recipe_id: "M11186",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY MACARONI & CHEESE (MIX) 8/2",
    recipe_id: "M11193",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (MIX) MACARONI & CHEESE (MIX) 8/2",
    recipe_id: "M11266",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE (SPICY) 10/1",
    recipe_id: "M11278",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS JAMBALAYA RICE 10/1 LS",
    recipe_id: "M11279",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TUNA MACARONI WG 10/2 MMA",
    recipe_id: "M11289",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD MACARONI & CHEESE (MIX) 12/4",
    recipe_id: "M11368",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHILI MAC 12/4 LS",
    recipe_id: "M11369",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD ENCHILADA CHIP CASSEROLE 12/4 LF",
    recipe_id: "M11370",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY GD RICE & PEPPERS 12/4 LS",
    recipe_id: "M11380",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: SOY JAMBALAYA RICE",
    recipe_id: "M11392",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) CREOLE (W/ RICE) 12/2",
    recipe_id: "M1140",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD FRIED RICE 8/2",
    recipe_id: "M11412",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: TURKEY (E&P) TETRAZZINI 1 1/4C",
    recipe_id: "M11417",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS CACCIATORE W/ NOODLES",
    recipe_id: "M11418",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE, BROCCOLI, CHEESE (MIX) 10/4",
    recipe_id: "M11489",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & NOODLES BROWN SAUCE 10/3",
    recipe_id: "M1152",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY PASTA 1 CUP (FULL LIQUID - DIET HANDBOOK)",
    recipe_id: "M11543",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS & SOY RICE 1 CUP (FULL LIQUID - DIET HANDBOOK)",
    recipe_id: "M11544",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "OH DRC: T HAM AUGRATIN POTATOES 1 C (FULL LIQ-DIET HANDBOOK)",
    recipe_id: "M11546",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (E&P) MACARONI & CHEESE (MIX) 10/2",
    recipe_id: "M11599",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (E&P) TETRAZZINI 10/4",
    recipe_id: "M11619",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHILI MAC 10/3 LS",
    recipe_id: "M11684",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD & NOODLES BROWN SAUCE 10/3",
    recipe_id: "M11685",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD LASAGNA CASSEROLE 8/2/1 (REAL CHEESE) LS",
    recipe_id: "M11687",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) RICE, BROCCOLI, CHEESE (REAL) 8/2/1",
    recipe_id: "M11717",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI MAC 12/2",
    recipe_id: "M11730",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TN DOC: POULTRY MS & SOY (75/25) AUGRATIN POTATOES 8/2",
    recipe_id: "M11748",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TN DOC: POULTRY MS & SOY (75/25) FRIED RICE 8/2",
    recipe_id: "M11751",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TN DOC: POULTRY MS & SOY (75/25) JAMBALYA RICE 8/2",
    recipe_id: "M11753",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TN DOC: POULTRY MS & SOY (75/25) MAC TOMATOES 8/2",
    recipe_id: "M11754",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TN DOC: POULTRY MS & SOY (75/25) MACARONI CHEESE (MIX) 8/2",
    recipe_id: "M11761",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TN DOC: POULTRY MS & SOY (75/25) NOODLE BROWN SAUCE 8/2",
    recipe_id: "M11764",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ROTINI 10/3",
    recipe_id: "M11803",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPAGHETTI 12/2 LS",
    recipe_id: "M1210",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T FRANKS PINTO BEANS 8/2 LS",
    recipe_id: "M12234",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) CHILI 8/2",
    recipe_id: "M12236",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED), BROCCOLI, RICE 8/2",
    recipe_id: "M12241",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHILI MAC 8/2 LS",
    recipe_id: "M12243",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) TATOR TOT (SYSCO) CASSEROLE 8/2",
    recipe_id: "M12300",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) & WILD RICE 8/3",
    recipe_id: "M12319",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS STROGONOFF (W/ NOODLES) 12/2",
    recipe_id: "M1234",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MAC & TOMATOES 10/2",
    recipe_id: "M1237",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (MIX) 10/2",
    recipe_id: "M1239",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: SOY JAMBALAYA",
    recipe_id: "M12422",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "PA DOC: PASTA & BEAN CASSEROLE",
    recipe_id: "M12432",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "PA DOC: SOY TETRAZZINI",
    recipe_id: "M12435",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "PA DOC: SOY SHEPPARD'S PIE",
    recipe_id: "M12436",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "PA DOC: SWEET & SOUR POULTRY",
    recipe_id: "M12453",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "PA DOC: POULTRY ORIENTAL PASTA CASSEROLE",
    recipe_id: "M12460",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY PARMESAN",
    recipe_id: "M12464",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "PA DOC: POULTRY CHILI",
    recipe_id: "M12465",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY WHITE-STYLE CHILI",
    recipe_id: "M12466",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "PA DOC: POULTRY POT PIE",
    recipe_id: "M12469",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY TETRAZZINI",
    recipe_id: "M12474",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY MEAT SAUCE AND PASTA CASSEROLE",
    recipe_id: "M12485",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: STUFFED CABBAGE CASSEROLE (BEEF/SOY)",
    recipe_id: "M12486",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY STUFFED CABBAGE CASSEROLE",
    recipe_id: "M12487",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY STUFFED PEPPER CASSEROLE",
    recipe_id: "M12488",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY TEXAS HASH W/ RICE",
    recipe_id: "M12490",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY TEXAS HASH W/ POTATOES",
    recipe_id: "M12492",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY JAMBALAYA",
    recipe_id: "M12496",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: MEAT SAUCE AND PASTA CASSEROLE (BEEF/SOY)",
    recipe_id: "M12497",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY CHILI CON CARNE",
    recipe_id: "M12507",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: BEAN CHILI",
    recipe_id: "M12536",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) & FRESH TOMATO ALFREDO (8/2)",
    recipe_id: "M12582",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ROTINI CREAMY SAUCE & VEG 10/3",
    recipe_id: "M12845",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHILI 10/2",
    recipe_id: "M13047",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD MACARONI & TOMATOES 10/2",
    recipe_id: "M13048",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD NOODLES & BROWN SAUCE 10/2",
    recipe_id: "M13052",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD RICE & PEPPERS 10/2",
    recipe_id: "M13053",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "TURKEY GD SPANISH RICE 10/2",
    recipe_id: "M13056",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "POULTRY MS CHOP SUEY/CHOW MEIN 10/2",
    recipe_id: "M1306",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD FRIED RICE 10/2",
    recipe_id: "M13060",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) FRIED RICE 10/2",
    recipe_id: "M13061",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD RICE (SPICY) 10/2",
    recipe_id: "M13062",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD MAC & TOMATOES 10/2.5 MMA (WG)",
    recipe_id: "M13085",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD SPANISH BROWN RICE 10/2.5MMA (WG)",
    recipe_id: "M13086",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD MACARONI & CHEESE (MIX) 10/2.5 MMA (WG)",
    recipe_id: "M13087",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM SPANISH RICE 10/2",
    recipe_id: "M1309",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD ZITI",
    recipe_id: "M13120",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD SPANISH RICE",
    recipe_id: "M13127",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD MACARONI & TOMATO",
    recipe_id: "M13128",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED RICE 10/2",
    recipe_id: "M1320",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHORIZO HASH 10/2",
    recipe_id: "M1321",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD (NS) MACARONI (RENAL)",
    recipe_id: "M13213",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD (NS) RICE (RENAL)",
    recipe_id: "M13214",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPAGHETTI W/ CHEESE (REAL) 12/1/1",
    recipe_id: "M1324",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE 12/2",
    recipe_id: "M1329",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD JAMBALAYA RICE",
    recipe_id: "M13521",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD, RICE, BROCCOLI, CHEESE (MIX)",
    recipe_id: "M13525",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) TATOR TOT CASSEROLE 8/3",
    recipe_id: "M13563",
    sweetness_level: "Low",
  },
  {
    recipe_name: "HASH, BEEF (SCRATCH)",
    recipe_id: "M13568",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS CHILI 8/2",
    recipe_id: "M1359",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MAC & TOMATOES 8/2",
    recipe_id: "M1360",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ZITI 10/3",
    recipe_id: "M1361",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY ROTINI CREAMY SAUCE & VEG 10/2",
    recipe_id: "M13628",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (HALAL) SPANISH RICE 10/2",
    recipe_id: "M13639",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (HALAL) ROTINI CREAMY SAUCE & VEG 10/2",
    recipe_id: "M13643",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD FRIED RICE LF/LS",
    recipe_id: "M13645",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) CREOLE (W/ RICE) 10/2",
    recipe_id: "M1365",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 10/2",
    recipe_id: "M1368",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) & RICE 10/2",
    recipe_id: "M1370",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) JAMBALAYA & RICE 10/2",
    recipe_id: "M1372",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF (NS) CHILI MAC 8/2",
    recipe_id: "M13724",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM & BLACK-EYED PEAS 10/2",
    recipe_id: "M1373",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE 10/2",
    recipe_id: "M1374",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM NAVY BEANS 10/2",
    recipe_id: "M1377",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (BREAST) TETRAZZINI 8/3",
    recipe_id: "M13781",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM AUGRATIN POTATOES (IMIT) 10/2",
    recipe_id: "M1382",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (IMIT) 10/2/1",
    recipe_id: "M1383",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI 10/2",
    recipe_id: "M1385",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ZITI 10/2",
    recipe_id: "M1386",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPAGHETTI 10/2",
    recipe_id: "M1387",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPAGHETTI W/ CHEESE (REAL) 10/1/1",
    recipe_id: "M1388",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD AUGRATIN POTATOES (W/MIX CH SCE) 10/2",
    recipe_id: "M13959",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD JAMBALAYA RICE 10/2",
    recipe_id: "M13960",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD ZITI 10/2",
    recipe_id: "M13962",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD ROTINI CREAMY SAUCE & VEG 10/2",
    recipe_id: "M13963",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHEESE & NOODLES W/ BROCCOLI 10/2",
    recipe_id: "M13964",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TUNA & NOODLES 8/3",
    recipe_id: "M1397",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY (E&P) & PINTO BEANS 10/3",
    recipe_id: "M13986",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY (E&P) NAVY BEANS 10/3",
    recipe_id: "M13987",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TUNA (RINSED) DIETS",
    recipe_id: "M1401",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS FRIED RICE 6/2",
    recipe_id: "M14016",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TUNA & NOODLES 10/3",
    recipe_id: "M1403",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: BEEF GD (NS) RICE (ALLERGY DIET)",
    recipe_id: "M14133",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY RICE (SPICY) 12/2",
    recipe_id: "M14172",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (HALAL) ZITI 10/2",
    recipe_id: "M14370",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (HALAL) ROTINI 10/2",
    recipe_id: "M14371",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (HALAL) CHILI 8/1",
    recipe_id: "M14372",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS CHILI LS 1 1/4 C",
    recipe_id: "M14401",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS CHILI MAC 1 1/4 C",
    recipe_id: "M14402",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS RICE, BROCCOLI, CHEESE (MIX) 1 1/4C",
    recipe_id: "M14404",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS ROTINI LS 1 1/4 C",
    recipe_id: "M14405",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS SCALLOPED POTATO 1 1/4C",
    recipe_id: "M14406",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS SPAGHETTI LS 1 1/4 C",
    recipe_id: "M14407",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS SPANISH RICE LF/LS 1 1/4 C",
    recipe_id: "M14408",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS MACARONI & CHEESE (MIX) 3/4 C",
    recipe_id: "M14455",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: TURKEY (E&P) TETRAZZINI 3/4 C",
    recipe_id: "M14459",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY MAC & TOMATO 3/4 C",
    recipe_id: "M14463",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY MACARONI & CHEESE (MIX) 3/4 C",
    recipe_id: "M14464",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY SPAGHETTI 3/4 C",
    recipe_id: "M14474",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY SPANISH RICE 3/4 C",
    recipe_id: "M14475",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY CHILI 1 1/4 C",
    recipe_id: "M14478",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY MAC & TOMATO 1 1/4 C",
    recipe_id: "M14479",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY RICE, BROCCOLI, CHEESE (MIX) 1 1/4 C",
    recipe_id: "M14481",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY ROTINI 1 1/4 C",
    recipe_id: "M14482",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY SCALLOPED POTATO 1 1/4 C",
    recipe_id: "M14483",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY SPAGHETTI 1 1/4 C",
    recipe_id: "M14484",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY SPANISH RICE 1 1/4 C",
    recipe_id: "M14485",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY TETRAZZINI 1 1/4 C",
    recipe_id: "M14486",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY CHORIZO HASH 10/2",
    recipe_id: "M14489",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (WR) MACARONI 12/2",
    recipe_id: "M14556",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) MACARONI 10/2",
    recipe_id: "M14595",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) MACARONI 12/2",
    recipe_id: "M14619",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHILI 10/1",
    recipe_id: "M14644",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BUCKS CO: TURKEY GD SHEPHERD'S PIE 10/4",
    recipe_id: "M14668",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD CHILI MAC",
    recipe_id: "M14685",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY TAMALE PIE W/ CB (1 CUP/3 OZ)",
    recipe_id: "M14695",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "TURKEY GD ROTINI 10/2",
    recipe_id: "M14696",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: TURKEY (E&P) NOODLES BROWN SAUCE",
    recipe_id: "M14711",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD, MACARONI, PEAS & CARROTS",
    recipe_id: "M14722",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: POULTRY TUSCAN PASTA CASSEROLE",
    recipe_id: "M14731",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: TUSCAN SOY PASTA CASSEROLE",
    recipe_id: "M14732",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TN DOC: POULTRY MS & SOY (75/25) CHILI BEAN 8/2 NO SUGAR",
    recipe_id: "M14740",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY ENCHILADA CHIP CASSEROLE",
    recipe_id: "M14823",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) FRIED RICE 10/2",
    recipe_id: "M14839",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (MIX) 10/1 MMA (WG)",
    recipe_id: "M14840",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) ROTINI W/ CHEESE (REAL) 10/1/1 (WG)",
    recipe_id: "M14841",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) ROTINI CREAMY SAUCE & VEG 10/2",
    recipe_id: "M14842",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) JAMBALAYA BROWN RICE 10/2 MMA (WG)",
    recipe_id: "M14843",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS BROWN RICE (SPICY) 12/2.5 MMA",
    recipe_id: "M14844",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BUCKS CO: TURKEY GD SPANISH RICE 10/2",
    recipe_id: "M14846",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BUCKS CO: GD TURKY CHILI MACARONI",
    recipe_id: "M14847",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: TURKEY (CR) TETRAZZINI 1 CUP",
    recipe_id: "M14848",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHOP SUEY/CHOW MEIN 10/3",
    recipe_id: "M14947",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "T HAM, RICE, BROCCOLI, CHEESE (MIX) 8/2",
    recipe_id: "M14961",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY GD MAC & TOMATOES 12/3 LS",
    recipe_id: "M15251",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD SPANISH RICE 12/3 LF",
    recipe_id: "M15254",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (WR) NOODLES 8/2",
    recipe_id: "M15322",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP PULLED) & NOODLES12/4",
    recipe_id: "M15362",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP PULLED) CREOLE (W/ RICE) 12/4",
    recipe_id: "M15371",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MACARONI & CHEESE (MIX) 12/4",
    recipe_id: "M15375",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI MAC 12/4 LS",
    recipe_id: "M15376",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI (NO BEANS) 6/4",
    recipe_id: "M15379",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PORK CHOP SUEY 8/4",
    recipe_id: "M15386",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CASSEROLE ENTREE (FULL LIQUID DIET)",
    recipe_id: "M15393",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (CHEDDAR) 8/2/1",
    recipe_id: "M15449",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI (NO BEANS) 6/3",
    recipe_id: "M15528",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) ENCHILADA CHIP CASSEROLE 6/2.5",
    recipe_id: "M15532",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MACARONI & CHEESE (MIX) 12/2",
    recipe_id: "M15545",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI 12/2",
    recipe_id: "M15546",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) SPANISH RICE 12/2",
    recipe_id: "M15548",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) SPAGHETTI 12/2",
    recipe_id: "M15550",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS TATOR TOT (SINGLE SOURCE) CASSEROLE 10/2",
    recipe_id: "M15556",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP PULLED) WHITE CHILI 10/4",
    recipe_id: "M15587",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "CHICKEN (AP PULLED) RICE, BROCCOLI, CHEESE (MIX) 10/4",
    recipe_id: "M15588",
    sweetness_level: "Low",
  },
  {
    recipe_name: "RUSHVILLE: CHICKEN (AP PULLED) CHOP SUEY 8/4",
    recipe_id: "M15625",
    sweetness_level: "Low",
  },
  {
    recipe_name: "FL DOC: TACO SKILLET",
    recipe_id: "M15629",
    sweetness_level: "Low",
  },
  {
    recipe_name: "KIELBASA, CABBAGE, & NOODLES",
    recipe_id: "M15645",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD MAC & TOMATOES 12/2",
    recipe_id: "M15660",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHEESE & NOODLES W/ BROCCOLI 12/2",
    recipe_id: "M15661",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD MACARONI & CHEESE (MIX) 12/2",
    recipe_id: "M15662",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD ZITI 12/2",
    recipe_id: "M15663",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHILI 12/2 (CANNED BEANS)",
    recipe_id: "M15664",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD SPANISH RICE 12/2",
    recipe_id: "M15665",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD AUGRATIN POTATOES (W/MIX CH SCE) 12/2",
    recipe_id: "M15666",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD JAMBALAYA RICE 12/2 LS",
    recipe_id: "M15667",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY GD SCALLOPED POTATO 12/2",
    recipe_id: "M15671",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD RICE (SPICY) 12/2",
    recipe_id: "M15672",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD RICE 12/2",
    recipe_id: "M15673",
    sweetness_level: "Low",
  },
  {
    recipe_name: "HENRICO: MEATLESS CHILI W/ PINTO BEANS CANNED",
    recipe_id: "M15677",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (HALAL) ZITI 8/1/1 (REAL)",
    recipe_id: "M15689",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (HALAL) MACARONI & TOMATOES 8/1",
    recipe_id: "M15690",
    sweetness_level: "Low",
  },
  {
    recipe_name: "FL DOC: POULTRY MS CHILI MAC 10/2",
    recipe_id: "M15713",
    sweetness_level: "Low",
  },
  {
    recipe_name: "FL DOC: POULTRY MS CHILI 10/2",
    recipe_id: "M15715",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHILI 10/3",
    recipe_id: "M15806",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD FRIED RICE 10/3",
    recipe_id: "M15812",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD RICE, BROCCOLI, CHEESE (MIX) 10/3",
    recipe_id: "M15814",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD ROTINI CREAMY SAUCE & VEG 10/3",
    recipe_id: "M15815",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (MIX) 12/2.5 MMA (WG)",
    recipe_id: "M15977",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED BROWN RICE 12/2.5 MMA (WG) PARBOILED",
    recipe_id: "M15978",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY CHORIZO HASH",
    recipe_id: "M16211",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY STROGANOFF (W/ NOODLES)",
    recipe_id: "M16212",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: TURKEY (CR) PINTO BEANS",
    recipe_id: "M16214",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY SPAGHETTI",
    recipe_id: "M16223",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY CHEESE MACARONI MEXICAN 1.5/.5",
    recipe_id: "M16228",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY PICADILLO",
    recipe_id: "M16229",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "IN DOC: SOY RICE (SPICY) 1 CUP",
    recipe_id: "M16247",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY ENCHILADA CHIP CASSEROLE",
    recipe_id: "M16248",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY PASTA 1 CUP (FULL LIQUID)",
    recipe_id: "M16332",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "IN DOC: SOY RICE 1 CUP (FULL LIQUID)",
    recipe_id: "M16333",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "BEEF GD (HALAL) MACARONI & CHEESE (IMIT) 10/2",
    recipe_id: "M16348",
    sweetness_level: "Low",
  },
  {
    recipe_name: "ERIE CC: PIEROGI, HAM (DICED), & CHEESE CASSEROLE",
    recipe_id: "M16358",
    sweetness_level: "Low",
  },
  {
    recipe_name: "HARRIS: BEEF GD (NS) RICE (SPICY) 12/2",
    recipe_id: "M16390",
    sweetness_level: "Low",
  },
  {
    recipe_name: "HARRIS: BEEF GD (NS) MAC & TOMATOES 12/2",
    recipe_id: "M16392",
    sweetness_level: "Low",
  },
  {
    recipe_name: "HARRIS: BEEF GD (NS) ENCHILADA CHIP CASSEROLE 12/2",
    recipe_id: "M16396",
    sweetness_level: "Low",
  },
  {
    recipe_name: "HARRIS: BEEF GD (NS) SPANISH RICE 12/2",
    recipe_id: "M16397",
    sweetness_level: "Low",
  },
  {
    recipe_name: "HARRIS: BEEF GD (NS) CHILI MAC 12/2",
    recipe_id: "M16400",
    sweetness_level: "Low",
  },
  {
    recipe_name: "HARRIS: BEEF GD (NS) MACARONI & CHEESE (MIX) 12/2",
    recipe_id: "M16404",
    sweetness_level: "Low",
  },
  {
    recipe_name: "HARRIS: BEEF GD (NS) SHEPHERD'S PIE 12/3",
    recipe_id: "M16412",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) CHOP SUEY/CHOW MEIN 12/2",
    recipe_id: "M16414",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TUNA & EGG NOODLES 8/3",
    recipe_id: "M16431",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GCI: POULTRY MS MACARONI & CHEESE (MIX) 8/2",
    recipe_id: "M16442",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GCI: POULTRY MS SHEPHERD'S PIE 8/2",
    recipe_id: "M16445",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GCI: BEEF GD SPANISH RICE 8/2",
    recipe_id: "M16448",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD ROTINI CREAMY SAUCE & VEG 12/4",
    recipe_id: "M16461",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "CALIFORNIA: TURKEY GD CHILI 12/3 (1C BEANS)",
    recipe_id: "M16462",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI WG TOMATO SAUCE 10/2.5 MMA",
    recipe_id: "M16477",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD FRIED RICE LF (2)",
    recipe_id: "M16535",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: CHICKEN GD SPANISH RICE (2)",
    recipe_id: "M16536",
    sweetness_level: "Low",
  },
  {
    recipe_name: "FL DOC: TURKEY (E&P) & POTATO CASSEROLE 10/3",
    recipe_id: "M16543",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY SHEPHERD'S PIE",
    recipe_id: "M16647",
    sweetness_level: "Low",
  },
  {
    recipe_name: "MD DOC: TURKEY (E&P) FRICASSE 8 OZ",
    recipe_id: "M16652",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "BEEF GD (NS) MACARONI & CHEESE (MIX) 10/2",
    recipe_id: "M16734",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (MIX) 10/1",
    recipe_id: "M16736",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ENCHILADA CASSEROLE 10/3",
    recipe_id: "M16747",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PA DOC: PASTA FZN & BEAN CASSEROLE (CONSTRUCTION)",
    recipe_id: "M16863",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GCI: CHICKEN QUARTER & BEEF JAMBALAYA RICE 8/2",
    recipe_id: "M16895",
    sweetness_level: "Low",
  },
  {
    recipe_name: "NV DOC: TEXAS HASH W/BEANS",
    recipe_id: "M16898",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GCI: POULTRY MS CHILI W/ CORN 8/2 LS",
    recipe_id: "M16900",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GCI: BEEF GD SKILLET",
    recipe_id: "M16908",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GCI: BAKED CHICKEN & NOODLES (QUARTERS)",
    recipe_id: "M16910",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GCI: BEEF GD HOPPIN JOHN",
    recipe_id: "M16912",
    sweetness_level: "Low",
  },
  {
    recipe_name: "NV DOC: CHICKEN (AP DICED) CREOLE (NO RICE) 5/2",
    recipe_id: "M16921",
    sweetness_level: "Low",
  },
  {
    recipe_name: "NV DOC: CHICKEN (AP DICED) & RICE (GF) 8/2",
    recipe_id: "M16931",
    sweetness_level: "Low",
  },
  {
    recipe_name: "JAMBALAYA, CHICKEN, T. HAM",
    recipe_id: "M16944",
    sweetness_level: "Low",
  },
  {
    recipe_name: "MD DOC: CHICKEN CHOW MEIN",
    recipe_id: "M16958",
    sweetness_level: "Low",
  },
  {
    recipe_name: "MD DOC: T HAM SCALLOPED NOODLES",
    recipe_id: "M16959",
    sweetness_level: "Low",
  },
  {
    recipe_name: "MD DOC: T HAM SCALLOPED NOODLES 10/2",
    recipe_id: "M16960",
    sweetness_level: "Low",
  },
  {
    recipe_name: "MD DOC: CHICKEN TETRAZZINI",
    recipe_id: "M16966",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) AUGRATIN POTATOES (W/MIX CH SCE) 10/2",
    recipe_id: "M17015",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) JAMBALAYA RICE 10/2",
    recipe_id: "M17016",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) TETRAZZINI 10/2",
    recipe_id: "M17017",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) SCALLOPED POTATO 10/2",
    recipe_id: "M17018",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY ZITI 12/2",
    recipe_id: "M17029",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: T HAM AUGRATIN POTATOES (MIX)",
    recipe_id: "M17033",
    sweetness_level: "Low",
  },
  {
    recipe_name: "NV DOC: MEATLESS CHILI W/ PINTO BEANS VEGAN",
    recipe_id: "M17035",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SD DOC: BEEF GD (NS) CHILI 10/2",
    recipe_id: "M17037",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD NOODLES BROWN SAUCE 8/3",
    recipe_id: "M17038",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD RICE, BROCCOLI, CHEESE (MIX) 8/3",
    recipe_id: "M17039",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD MACARONI & CHEESE (MIX) 8/3",
    recipe_id: "M17040",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD ENCHILADA CHIP CASSEROLE 6/3",
    recipe_id: "M17041",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHILI 4/2",
    recipe_id: "M17119",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD TAMALE PIE (NO CB) 12/2",
    recipe_id: "M17120",
    sweetness_level: "Low",
  },
  {
    recipe_name: "NV DOC: GOULASH, BEEF",
    recipe_id: "M17121",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD RICE, BROCCOLI, CHEESE (MIX) 12/2",
    recipe_id: "M17146",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) FRIED RICE 10/2 (CF EGG)",
    recipe_id: "M17177",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED RICE 10/3 (CF EGG)",
    recipe_id: "M17178",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY FRIED RICE 10/3 (CF EGG)",
    recipe_id: "M17181",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED BROWN RICE 10/2.5 MMA (WG) (CF EGG)",
    recipe_id: "M17183",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD SPANISH RICE 8/3",
    recipe_id: "M17206",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ROTINI 10/2 VEGAN",
    recipe_id: "M17251",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE & BROCCOLI 10/2 VEGAN",
    recipe_id: "M17252",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY MACARONI & CHEESE (MIX) 10/2 NO WORCES",
    recipe_id: "M17255",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY RICE, BROCCOLI, CHEESE (MIX) 10/2 NO WORCES",
    recipe_id: "M17258",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SHEPHERD'S PIE 10/2 VEGAN",
    recipe_id: "M17259",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY JAMBALAYA RICE 10/2 NO WORCES",
    recipe_id: "M17261",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY SCALLOPED POTATO 10/2 NO WORCES",
    recipe_id: "M17262",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY AUGRATIN POTATOES (W/MIX CH SCE) 10/2 NO WORCE",
    recipe_id: "M17263",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE (SPICY) 10/2 NO WORCES",
    recipe_id: "M17264",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY STROGANOFF (W/ RICE) 10/2 NO WORCES",
    recipe_id: "M17265",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED RICE 8/2 (CF EGG)",
    recipe_id: "M17292",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY GD CHILI 6/2",
    recipe_id: "M17303",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY MAC & TOMATO 12/2 NO WORC",
    recipe_id: "M17349",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MACARONI & CHEESE (MIX) 12/2 NO WORC",
    recipe_id: "M17350",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ZITI 12/2 NO WORC",
    recipe_id: "M17351",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY JAMBALAYA RICE 12/2 NO WORC",
    recipe_id: "M17352",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY FRIED RICE 12/2 NO WORC",
    recipe_id: "M17353",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY RICE (SPICY) 12/2 NO WORC",
    recipe_id: "M17354",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY GD FRIED BROWN RICE 10/2.5 MMA (WG)",
    recipe_id: "M17366",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY GD ROTINI CREAMY SAUCE & VEG 12/2",
    recipe_id: "M17392",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) TAMALE PIE W/ CB 10/2",
    recipe_id: "M17449",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS FRIED RICE 1 1/4 C",
    recipe_id: "M17624",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MACARONI & CHEESE (MIX) WG 8/2",
    recipe_id: "M17638",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI MAC WG 10/3 LS",
    recipe_id: "M17644",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS SCALLOPED POTATO 3/4 C",
    recipe_id: "M17650",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS SPAGHETTI 3/4 C",
    recipe_id: "M17651",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS FRIED RICE 3/4 C",
    recipe_id: "M17652",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS CHILI 3/4 C LS",
    recipe_id: "M17653",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS CHILI MAC 3/4 C",
    recipe_id: "M17654",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY FRIED RICE 3/4 C",
    recipe_id: "M17658",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY CHILI MAC 3/4 C",
    recipe_id: "M17659",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: SOY FRIED RICE 1 1/4 C",
    recipe_id: "M17660",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "DOC: SOY CHILI MAC 1 1/4 C",
    recipe_id: "M17661",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED RICE 12/2",
    recipe_id: "M2547",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) TETRAZZINI 8/3",
    recipe_id: "M2644",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE & PEPPERS 10/2",
    recipe_id: "M2665",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ENCHILADA CHIP CASSEROLE 10/2",
    recipe_id: "M2670",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (MIX) 10/2",
    recipe_id: "M2682",
    sweetness_level: "Low",
  },
  {
    recipe_name: "MEATLESS CHILI W/ PINTO BEANS",
    recipe_id: "M2770",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI W/ CHEESE (REAL) 10/2/1",
    recipe_id: "M2785",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS STROGANOFF (W/ NOODLES) 8/2",
    recipe_id: "M2808",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 10/2 LS",
    recipe_id: "M2832",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE 10/2 LS",
    recipe_id: "M2841",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MAC & TOMATOES 8/3",
    recipe_id: "M2856",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) NOODLES BROWN SAUCE 8/3",
    recipe_id: "M2861",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI 8/3",
    recipe_id: "M2862",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) SPANISH RICE 8/3",
    recipe_id: "M2868",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE & PEPPERS 10/3",
    recipe_id: "M2953",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 6/1.5 LS",
    recipe_id: "M2954",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SPAGHETTI 10/2",
    recipe_id: "M3007",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SPANISH RICE 10/2",
    recipe_id: "M3008",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY NOODLES BROWN SAUCE 10/2",
    recipe_id: "M3009",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY FRIED RICE 10/2",
    recipe_id: "M3010",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY CHILI 10/2",
    recipe_id: "M3012",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHILI 8/2",
    recipe_id: "M3015",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY FRIED RICE 12/2",
    recipe_id: "M3018",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHILI 12/2",
    recipe_id: "M3019",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SPANISH RICE 12/2",
    recipe_id: "M3022",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "POULTRY MS RICE, BROCCOLI, CHEESE (MIX) 10/2",
    recipe_id: "M3084",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "POULTRY MS FRIED RICE 10/3",
    recipe_id: "M3110",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: BEEF GD (NS) MAC & TOMATOES 10/3",
    recipe_id: "M3112",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM AUGRATIN POTATOES (W/MIX CH SCE) 10/2",
    recipe_id: "M3129",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHEESE & NOODLES W/ BROCCOLI 10/2",
    recipe_id: "M3136",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHEESE & NOODLES W/ BROCCOLI 8/2",
    recipe_id: "M3137",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (MIX) 10/3",
    recipe_id: "M3144",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHEESE (IMIT) ENCHILADA CASSEROLE 10/2/1",
    recipe_id: "M3254",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ENCHILADA CASSEROLE (NO CHEESE) 10/2",
    recipe_id: "M3255",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHOP SUEY/CHOW MEIN 12/2",
    recipe_id: "M3281",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (MIX) 12/2",
    recipe_id: "M3283",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ENCHILADA CHIP CASSEROLE 8/2",
    recipe_id: "M3289",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 10/2.5",
    recipe_id: "M3327",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS PICADILLO 10/2",
    recipe_id: "M3403",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPAGHETTI 10/4",
    recipe_id: "M3406",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) SPANISH RICE 10/2",
    recipe_id: "M3425",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS AUGRATIN POTATOES (W/MIX CH SCE) 10/2",
    recipe_id: "M3439",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM SCALLOPED NOODLES 12/2",
    recipe_id: "M3463",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (MIX) 15/3",
    recipe_id: "M3504",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 15/3",
    recipe_id: "M3509",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MAC & TOMATOES 6/2",
    recipe_id: "M3582",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS TETRAZZINI 10/2",
    recipe_id: "M3585",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE 10/4",
    recipe_id: "M3672",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE & PEPPERS 12/2",
    recipe_id: "M3679",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) NOODLES BROWN SAUCE 12/2",
    recipe_id: "M3705",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI MAC 10/4",
    recipe_id: "M3712",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS PICADILLO 8/2",
    recipe_id: "M3726",
    sweetness_level: "Low",
  },
  {
    recipe_name: "MEATBALL & NOODLES BROWN SAUCE 10/2 OZ",
    recipe_id: "M3756",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHEESE (REAL) ENCHILADA CASSEROLE 12/2/1",
    recipe_id: "M3762",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) ENCHILADA CASSEROLE 6/2",
    recipe_id: "M3778",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SCALLOPED POTATO 10/2",
    recipe_id: "M3782",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE & PEPPERS 8/2",
    recipe_id: "M3799",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) CHOP SUEY/CHOW MEIN 12/2",
    recipe_id: "M3809",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS AUGRATIN POTATOES (W/MIX CH SCE) 8/2 OZ",
    recipe_id: "M3813",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED RICE 8/2",
    recipe_id: "M3815",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) ALA KING 10/2 W/ NOODLES",
    recipe_id: "M3818",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS STROGANOFF (W/ NOODLES) 10/2",
    recipe_id: "M3819",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS JAMBALAYA RICE 10/3",
    recipe_id: "M3879",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS JAMBALAYA RICE 10/2",
    recipe_id: "M3892",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 10/4 LF/LS",
    recipe_id: "M3895",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED RICE 12/2 LS/LF",
    recipe_id: "M3900",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE & PEPPERS 10/4 LS",
    recipe_id: "M3902",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY MAC & TOM 10/2",
    recipe_id: "M3937",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY W/ NOODLES BROWN SAUCE 10/2 OZ",
    recipe_id: "M3938",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS & SOY CHILI 10/2",
    recipe_id: "M3940",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY CHILI MAC 10/2",
    recipe_id: "M3941",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY SPANISH RICE 10/2",
    recipe_id: "M3943",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI & TOMATOES 10/4",
    recipe_id: "M3950",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & NOODLES BROWN SAUCE 10/4",
    recipe_id: "M3953",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS JAMBALAYA RICE 8/2",
    recipe_id: "M3973",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (MIX) 8/2",
    recipe_id: "M3978",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS STROGANOFF (W/ RICE) 10/2",
    recipe_id: "M3979",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (MIX) 12/2",
    recipe_id: "M3980",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) RICE, PEPPERS 8/2",
    recipe_id: "M4038",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) SPAGHETTI 8/1/1 (REAL)",
    recipe_id: "M4039",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) CREOLE (W/ RICE) 10/1",
    recipe_id: "M4048",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (MIX) 8/2",
    recipe_id: "M4078",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE & BROCCOLI 8/2",
    recipe_id: "M4081",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI & TOMATOES 10/2 LS",
    recipe_id: "M4089",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM KIDNEY BEANS & RICE 10/2",
    recipe_id: "M4094",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM AUGRATIN POTATOES (W/MIX CH SCE) 8/2",
    recipe_id: "M4112",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS TATOR TOT (SYSCO) CASSEROLE 10/2",
    recipe_id: "M4133",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) CACCIATORE W/ NOODLES 10/2",
    recipe_id: "M4144",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (WR) TETRAZZINI 12/2",
    recipe_id: "M4147",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM AUGRATIN POTATOES (W/MIX CH SCE) 12/2",
    recipe_id: "M4154",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI 10/2 LS",
    recipe_id: "M4168",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ENCHILADA CHIP CASSEROLE 6/3",
    recipe_id: "M4203",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI MAC 10/3 LS",
    recipe_id: "M4206",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (IMIT) 10/1",
    recipe_id: "M4296",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SPAGHETTI 8/2",
    recipe_id: "M4299",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE 10/3 LS",
    recipe_id: "M4358",
    sweetness_level: "Low",
  },
  {
    recipe_name: "MEATLESS CHILI W/ PINTO BEANS VEGAN",
    recipe_id: "M4382",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM & RICE 12/2",
    recipe_id: "M4445",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS TETRAZZINI 12/2",
    recipe_id: "M4588",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) NOODLES BROWN SAUCE 10/2",
    recipe_id: "M4636",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS PASTA 10/2 (FULL LIQUID - DIET HANDBOOK)",
    recipe_id: "M4655",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS RICE 10/2 (FULL LIQUID - DIET HANDBOOK)",
    recipe_id: "M4656",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "T HAM AUGRATIN POTATOES 10/2 (FULL LIQUID - DIET HANDBOOK)",
    recipe_id: "M4657",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI MAC LS 10/2",
    recipe_id: "M4717",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI W/ CHEESE (REAL) 10/1/1",
    recipe_id: "M4719",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TUNA & NOODLES WITH VEGETABLES",
    recipe_id: "M4749",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MACARONI & CHEESE (MIX) 8/2",
    recipe_id: "M4772",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CALDO 10/2",
    recipe_id: "M4775",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI 12/2 LS",
    recipe_id: "M4778",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI 12/4",
    recipe_id: "M4797",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI 10/2",
    recipe_id: "M4875",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP PULLED) & NOODLES 8/2",
    recipe_id: "M4905",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM AUGRATIN POTATOES (W/MIX CH SCE) 10/3",
    recipe_id: "M4959",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHILI 10/2 VEGAN",
    recipe_id: "M5020",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SPANISH RICE 10/2 VEGAN",
    recipe_id: "M5021",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SPAGHETTI 10/2 VEGAN",
    recipe_id: "M5022",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MACARONI & TOMATOES 10/2 VEGAN",
    recipe_id: "M5023",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY FRIED RICE 10/2 VEGAN",
    recipe_id: "M5024",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) POT PIE W/ PASTRY 10/2",
    recipe_id: "M5075",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) SCALLOPED NOODLES (REAL) 10/2",
    recipe_id: "M5077",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE, BROCCOLI, CHEESE (MIX) 10/3",
    recipe_id: "M5093",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS JAMBALAYA RICE 12/3",
    recipe_id: "M5102",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE, BROCCOLI, CHEESE (MIX) 12/2",
    recipe_id: "M5220",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) SPANISH RICE 8/2",
    recipe_id: "M524",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHORIZO HASH 8/2",
    recipe_id: "M5281",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (MIX) 10/1",
    recipe_id: "M5313",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI (NO BEANS) 6/3",
    recipe_id: "M5354",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "CHICKEN (AP DICED) & RICE 8/2",
    recipe_id: "M5373",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) LASAGNA CASSEROLE 8/2/1 (REAL CHEESE)",
    recipe_id: "M5386",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS TAMALE PIE (NO CB) 12/2",
    recipe_id: "M5388",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS AUGRATIN POTATOES (W/MIX CH SCE) 12/2",
    recipe_id: "M5390",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE & BROCCOLI 10/2",
    recipe_id: "M5395",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) CHILI 8/2",
    recipe_id: "M543",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MAC & TOMATOES 8/2",
    recipe_id: "M544",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM HASH W/ POTATO, ONION, PEPPERS 8/2",
    recipe_id: "M5743",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) RICE, BROCCOLI 10/2",
    recipe_id: "M5781",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) TETRAZZINI 8/2",
    recipe_id: "M5815",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) ZITI 10/2",
    recipe_id: "M5848",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PORK HAM AUGRATIN POTATOES (W/MIX CH SCE) 10/2",
    recipe_id: "M5956",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MAC & TOMATOES 10/2",
    recipe_id: "M598",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI CREAMY SAUCE & VEG 10/3",
    recipe_id: "M5992",
    sweetness_level: "Low",
  },
  {
    recipe_name: "MEATLESS CHILI W/ BEANS",
    recipe_id: "M5993",
    sweetness_level: "Low",
  },
  {
    recipe_name: "OH DRC: BEEF GD (NS) RICE 10/2",
    recipe_id: "M601",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) ZITI 8/2",
    recipe_id: "M602",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI CREAMY SAUCE & VEG 10/2",
    recipe_id: "M6067",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY STROGANOFF (W/ NOODLES) 10/2",
    recipe_id: "M6084",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MACARONI & CHEESE (MIX) 10/2",
    recipe_id: "M6085",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY TAMALE PIE W/ CB 10/2",
    recipe_id: "M6086",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "SOY ZITI 10/2",
    recipe_id: "M6087",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ROTINI 10/2",
    recipe_id: "M6088",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (MIX) 15/3",
    recipe_id: "M6112",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ENCHILADA CHIP CASSEROLE 12/2",
    recipe_id: "M6155",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T FRANKS & BAKED BEANS 12/2",
    recipe_id: "M6248",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "T FRANKS & BAKED BEANS 10/2",
    recipe_id: "M6249",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "POULTRY MS LASAGNA CASSEROLE 10/1/1 (REAL CHEESE)",
    recipe_id: "M6250",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SCALLOPED POTATO 12/2",
    recipe_id: "M6272",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS PICADILLO 12/2",
    recipe_id: "M6274",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SCALLOPED POTATO 10/2",
    recipe_id: "M6290",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY PICADILLO 10/2",
    recipe_id: "M6291",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE & PEPPERS 10/2",
    recipe_id: "M6292",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY NOODLES W/ BROCCOLI & CHEESE (MIX) 10/2",
    recipe_id: "M6293",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE 10/2",
    recipe_id: "M6324",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY JAMBALAYA RICE 10/2",
    recipe_id: "M6326",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE, BROCCOLI, CHEESE (MIX) 10/2",
    recipe_id: "M6328",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY TETRAZZINI 10/2",
    recipe_id: "M6331",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE (SPICY) 12/2",
    recipe_id: "M6376",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS RICE (SPICY) 8/2",
    recipe_id: "M6430",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE, BROCCOLI, CHEESE (MIX) 8/2",
    recipe_id: "M6504",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY FRIED RICE 10/2",
    recipe_id: "M6567",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY SPAGHETTI 10/2",
    recipe_id: "M6569",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SHEPHERD'S PIE 10/2",
    recipe_id: "M6580",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) POT PIE W/ PASTRY 6/2",
    recipe_id: "M6693",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS CHILI (2 OZ MT)",
    recipe_id: "M6751",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS CHILI MAC (2 OZ MT)",
    recipe_id: "M6753",
    sweetness_level: "Low",
  },
  {
    recipe_name: "DOC: POULTRY MS SPAGHETTI (2 OZ MT)",
    recipe_id: "M6755",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY CHEESE POTATOES (W/MIX)",
    recipe_id: "M6760",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY CHILI LS (2MMA, 3/4 C VEG)",
    recipe_id: "M6762",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY CHILI MAC LS",
    recipe_id: "M6763",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS SOY CHOP SUEY W/ CABBAGE LS",
    recipe_id: "M6766",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM AUGRATIN POTATOES (IMIT) 15/3",
    recipe_id: "M6783",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE, BROCCOLI, CHEESE (MIX) 12/2",
    recipe_id: "M6817",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE (SPICY) 12/2",
    recipe_id: "M6821",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ROTINI 12/2",
    recipe_id: "M6822",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHILI MAC 12/2",
    recipe_id: "M6823",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MACARONI & CHEESE (MIX) 12/2",
    recipe_id: "M6824",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY JAMBALAYA RICE 12/2",
    recipe_id: "M6825",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GFI - BEEF STROGANOFF (KOSHER/HALAL/VEGETARIAN)",
    recipe_id: "M6857",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GFI - CREAMY CHICKEN DINNER (KOSHER/HALAL/VEGETARIAN)",
    recipe_id: "M6859",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GFI - ITALIAN CHICKEN (KOSHER/HALAL/VEGAN)",
    recipe_id: "M6860",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY NOODLES BROWN SAUCE LS",
    recipe_id: "M6864",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY MACARONI & CHEESE (MIX)",
    recipe_id: "M6865",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY ROTINI LS",
    recipe_id: "M6867",
    sweetness_level: "Low",
  },
  {
    recipe_name: "GFI - TURKEY A LA KING (KOSHER/HALAL/VEGETARIAN)",
    recipe_id: "M6870",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "GFI - TURKEY TETRAZZINI (KOSHER/HALAL/VEGETARIAN)",
    recipe_id: "M6871",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY SPAGHETTI LS",
    recipe_id: "M6873",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS FRIED RICE 10/2 LF/LS",
    recipe_id: "M6889",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHEESE & NOODLES W/ BROCCOLI 12/2",
    recipe_id: "M6892",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY ROTINI CREAM SCE & VEG",
    recipe_id: "M6971",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY PICADILLO 12/2",
    recipe_id: "M6987",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE & PEPPERS 12/2",
    recipe_id: "M6988",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ENCHILADA CHIP CASSEROLE 12/2",
    recipe_id: "M6990",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY PICADILLO 10/3",
    recipe_id: "M6993",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE, BROCCOLI, CHEESE (MIX) 10/3",
    recipe_id: "M6994",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE & PEPPERS 10/3",
    recipe_id: "M6995",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MAC & TOMATO 10/3",
    recipe_id: "M6997",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHILI 10/3",
    recipe_id: "M7001",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY & NOODLES BROWN SAUCE 10/3",
    recipe_id: "M7002",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ENCHILADA CHIP CASSEROLE 10/3",
    recipe_id: "M7005",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY FRIED RICE 10/3",
    recipe_id: "M7006",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MACARONI & CHEESE (MIX) 10/3",
    recipe_id: "M7012",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ENCHILADA CHIP CASSEROLE 10/2",
    recipe_id: "M7088",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SCALLOPED POTATO 8/2",
    recipe_id: "M7143",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MACARONI & CHEESE (MIX) 12/3 ZTF",
    recipe_id: "M7144",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS AUGRATIN POTATOES (MIX) 12/3 ZTF",
    recipe_id: "M7145",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI W/ CHEESE (MOZZARELLA) 10/2/1",
    recipe_id: "M7186",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY NOODLES W/ BROCCOLI & CHEESE 10/2",
    recipe_id: "M7250",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY ENCHILADA CHIP CASSEROLE 10/2",
    recipe_id: "M7251",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY MACARONI & CHEESE (MIX) 10/2",
    recipe_id: "M7253",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY RICE, BROCCOLI, CHEESE (MIX) 10/2",
    recipe_id: "M7255",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY RICE & PEPPERS 10/2",
    recipe_id: "M7256",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY RICE (SPICY) 10/2",
    recipe_id: "M7257",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY W/ NOODLES RED SAUCE 10/2",
    recipe_id: "M7260",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHILI 10/2 (1/2 C BEANS)",
    recipe_id: "M7274",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ZITI 12/2",
    recipe_id: "M7276",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE 12/3 LF",
    recipe_id: "M7281",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ROTINI CREAMY SAUCE & VEG 10/2",
    recipe_id: "M7294",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY SPANISH RICE 12/2",
    recipe_id: "M7325",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY (50/50) MACARONI & CHEESE (MIX) 12/2",
    recipe_id: "M7326",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY (50/50) RICE & PEPPERS 12/2",
    recipe_id: "M7327",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY (50/50) JAMBALAYA RICE 12/2",
    recipe_id: "M7329",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) TETRAZZINI 12/2",
    recipe_id: "M735",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY JAMBALAYA RICE 10/2",
    recipe_id: "M7364",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHILI MAC 10/3",
    recipe_id: "M7369",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ENCHILADA CASSEROLE 10/4 (ZTF)",
    recipe_id: "M7415",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS PICADILLO 10/3 (ZTF)",
    recipe_id: "M7420",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHEESE & NOODLES W/ BROCCOLI 10/3",
    recipe_id: "M7476",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE (SPICY) 10/3 (ZTF)",
    recipe_id: "M7485",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SCALLOPED POTATO 10/3 (ZTF)",
    recipe_id: "M7487",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SPANISH RICE 10/3 (ZTF)",
    recipe_id: "M7489",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) ROTINI 10/2.25 MMA (WG)",
    recipe_id: "M7499",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY JAMBALAYA RICE 8/2",
    recipe_id: "M7515",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY AUGRATIN POTATOES (W/MIX CH SCE) 8/2 OZ",
    recipe_id: "M7516",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY PICADILLO 8/2",
    recipe_id: "M7517",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY FRIED RICE 8/2",
    recipe_id: "M7518",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE & BROCCOLI 8/2",
    recipe_id: "M7525",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY MACARONI & CHEESE (MIX) 8/2",
    recipe_id: "M7526",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "BEEF GD (NS) RICE, BROCCOLI, CHEESE (MIX) 10/2",
    recipe_id: "M7532",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) NOODLES & CHEESE (MIX) W/ BROCCOLI 10/2",
    recipe_id: "M7537",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS AUGRATIN POTATOES (W/MIX CH SCE) 10/2.5",
    recipe_id: "M7596",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & NOODLES BROWN SAUCE 12/3",
    recipe_id: "M760",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ZITI 8/2",
    recipe_id: "M7605",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHOP SUEY 10/2",
    recipe_id: "M7621",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH BROWN RICE 10/3 (LONG GRAIN-ZTF)",
    recipe_id: "M7636",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY TAMALE PIE W/ CB 10/3",
    recipe_id: "M7656",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "POULTRY MS & BEEF (NS) SHEPHERD'S PIE 10/2",
    recipe_id: "M7662",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 6/2",
    recipe_id: "M771",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPAGHETTI 10/1",
    recipe_id: "M775",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 10/1",
    recipe_id: "M776",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY AUGRATIN POTATOES (W/MIXCHSCE) 10/3 OZ",
    recipe_id: "M7807",
    sweetness_level: "Low",
  },
  {
    recipe_name: "KY DOC: POULTRY MS SPANISH RICE 10/2",
    recipe_id: "M7813",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 10/2.5 MMA LF/LS",
    recipe_id: "M7868",
    sweetness_level: "Low",
  },
  {
    recipe_name: "KY DOC: SUB - SOY SPANISH RICE 8/2",
    recipe_id: "M7888",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI 8/2",
    recipe_id: "M791",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS AUGRATIN POTATOES (W/MIX CH SCE) 10/3 (ZTF) LS",
    recipe_id: "M7946",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) RICE, BROCCOLI, CHEESE (MIX) 10/2",
    recipe_id: "M7955",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) & NOODLES BROWN SAUCE 10/2",
    recipe_id: "M7957",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) ROTINI BROCCOLI CHEESE (MIX) 10/2",
    recipe_id: "M7958",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SCALLOPED POTATO 10/3",
    recipe_id: "M7963",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & BEEF GD (NS) LASAGNA CASSEROLE 10/1/1(REAL CHS)",
    recipe_id: "M800",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ZITI W/ CHEESE (REAL) 10/1/1",
    recipe_id: "M808",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ENCHILADA CHIP CASSEROLE 10/3",
    recipe_id: "M8108",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI (NO BEANS) 6/2.5 MMA",
    recipe_id: "M8133",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE (SPICY) 10/3",
    recipe_id: "M8149",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS AUGRATIN POTATOES (W/MIX CH SCE) ZTF 12/2.5 MMA",
    recipe_id: "M8160",
    sweetness_level: "Low",
  },
  {
    recipe_name: "KY DOC: SUB - SOY SPAGHETTI (3/4C)",
    recipe_id: "M8168",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS MACARONI & TOMATOES 10/3",
    recipe_id: "M817",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MACARONI & CHEESE (MIX) 8/3",
    recipe_id: "M8190",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ZITI 8/3",
    recipe_id: "M8191",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ZITI W/ CHEESE (REAL) 10/2/1",
    recipe_id: "M821",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (E&P) CREOLE (W/ RICE) 10/2",
    recipe_id: "M8301",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (E&P) TETRAZZINI 10/2",
    recipe_id: "M8302",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "TURKEY (E&P) TETRAZZINI 12/2",
    recipe_id: "M8305",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "POULTRY MS LASAGNA CASSEROLE 12/2/1 (REAL CHEESE)",
    recipe_id: "M834",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MAC & TOMATOES 6/2/.25",
    recipe_id: "M8378",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (E&P) SCALLOPED POTATO 10/2",
    recipe_id: "M8397",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY SPAGHETTI 10/2 VEGAN",
    recipe_id: "M8399",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY MACARONI & TOMATOES 10/2 VEGAN",
    recipe_id: "M8400",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: VEGAN SOY FRIED RICE 10/2",
    recipe_id: "M8401",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI (NO BEANS) 6/2 MMA",
    recipe_id: "M8450",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPAGHETTI 12/2",
    recipe_id: "M846",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS MAC & TOMATOES 12/2",
    recipe_id: "M847",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ROTINI BROWN SAUCE 8/2",
    recipe_id: "M8488",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "SOY ROTINI 8/2",
    recipe_id: "M8489",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI 12/2",
    recipe_id: "M851",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ZITI 12/2",
    recipe_id: "M852",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI 12/2.5 ZTF",
    recipe_id: "M8568",
    sweetness_level: "Low",
  },
  {
    recipe_name: "PORK HAM NAVY BEANS 8/2",
    recipe_id: "M8586",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 8/1",
    recipe_id: "M869",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI MAC 8/2",
    recipe_id: "M871",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI MAC 10/2",
    recipe_id: "M876",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI MAC 10/3",
    recipe_id: "M877",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SCALLOPED POTATO 8/2",
    recipe_id: "M8816",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 12/2",
    recipe_id: "M883",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS CHILI 12/3",
    recipe_id: "M884",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY FRIED RICE 10/2",
    recipe_id: "M8951",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY JAMBALAYA RICE 10/2",
    recipe_id: "M8952",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY MACARONI & CHEESE (MIX) LS",
    recipe_id: "M8960",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & NOODLES BROWN SAUCE 8/2",
    recipe_id: "M898",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & NOODLES BROWN SAUCE 12/2",
    recipe_id: "M899",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & NOODLES RED SAUCE 12/2",
    recipe_id: "M901",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "PORK HAM (E&P) AUGRATIN POTATOES (W/MIX CH SCE) 10/2",
    recipe_id: "M9012",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY SOUTHWEST HASH POTATOES D VEGAN",
    recipe_id: "M9016",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY STROGANOFF (W/ NOODLES) 1 C",
    recipe_id: "M9025",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY CHILI MAC 1 C",
    recipe_id: "M9026",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MACARONI & CHEESE (MIX) VOLUME",
    recipe_id: "M9027",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: SOY JAMBALAYA RICE 1 C",
    recipe_id: "M9028",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: VEGAN SOY CHILI W/ BEANS (1 CUP)",
    recipe_id: "M9031",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE 8/2",
    recipe_id: "M907",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) BROCCOLI DIVAN",
    recipe_id: "M9074",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE W/ BEANS 10/2",
    recipe_id: "M908",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY ROTINI 10/2 LS",
    recipe_id: "M9088",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY CHILI (NO BEANS) 8/3",
    recipe_id: "M9089",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY NOODLES BROWN SAUCE 10/2 LS",
    recipe_id: "M9090",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY MAC & TOMATO 10/2 LS",
    recipe_id: "M9091",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY SPANISH RICE 10/2 LS",
    recipe_id: "M9092",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY SPANISH RICE 10/2 LS",
    recipe_id: "M9108",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY W/ NOODLES BROWN SAUCE 10/2 LS",
    recipe_id: "M9110",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY RICE (SPICY) 8/2",
    recipe_id: "M9115",
    sweetness_level: "Low",
  },
  {
    recipe_name: "SOY TETRAZZINI 8/2",
    recipe_id: "M9117",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "SOY RICE & PEPPERS 8/2",
    recipe_id: "M9119",
    sweetness_level: "Mild",
  },
  {
    recipe_name: "SOY ROTINI CHEESE (MIX) BROCCOLI 8/2",
    recipe_id: "M9120",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS ROTINI CREAM SCE & VEG (8/2)",
    recipe_id: "M9127",
    sweetness_level: "Low",
  },
  {
    recipe_name: "KY DOC: SUB - SOY AUGRATIN POTATOES (W/MIX CH SCE) 3/4 C",
    recipe_id: "M9142",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE 12/2",
    recipe_id: "M915",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SPANISH RICE 12/3",
    recipe_id: "M916",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY CHILI W/BEANS 8/2",
    recipe_id: "M9182",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY AUGRATIN POTATOES (W/MIX CH SCE) 8/2",
    recipe_id: "M9183",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY MAC TOMATO 8/2",
    recipe_id: "M9184",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY SPANISH RICE 8/2",
    recipe_id: "M9186",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE 8/2",
    recipe_id: "M921",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS RICE 10/2",
    recipe_id: "M922",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T SAUSAGE, T HAM JAMBALAYA",
    recipe_id: "M9227",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) ZITI BAKED W/CHEESE",
    recipe_id: "M9260",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: T HAM SCALLOPED POTATO 1 CUP",
    recipe_id: "M9269",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) & DUMPLINGS 8/2",
    recipe_id: "M9285",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) NOODLES BROWN SAUCE 6/2",
    recipe_id: "M9321",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (E&P) TETRAZZINI 8/2",
    recipe_id: "M9332",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY SCALLOPED POTATO 1 CUP",
    recipe_id: "M9334",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: T HAM NAVY BEANS 1 CUP",
    recipe_id: "M9356",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "IN DOC: SOY SCALLOPED POTATO 1 CUP",
    recipe_id: "M9463",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS SHEPHERD'S PIE 8/2",
    recipe_id: "M949",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) RICE, PEPPERS 10/2",
    recipe_id: "M9528",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHILI CON CARNE (BEEF) (CANNED BEANS)",
    recipe_id: "M9547",
    sweetness_level: "Low",
  },
  {
    recipe_name: "BEEF GD (NS) MACARONI & CHEESE (IMIT) 10/2",
    recipe_id: "M9593",
    sweetness_level: "Low",
  },
  {
    recipe_name: "IN DOC: POULTRY MS & SOY RICE (SPICY) 1 CUP",
    recipe_id: "M9624",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM NAVY BEANS 8/2",
    recipe_id: "M966",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) POT PIE W/ PASTRY 12/4",
    recipe_id: "M9693",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM PINTO BEANS 10/2",
    recipe_id: "M973",
    sweetness_level: "Low",
  },
  {
    recipe_name: "T HAM NAVY BEANS 12/2",
    recipe_id: "M974",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "T HAM SCALLOPED NOODLES (REAL) 10/2",
    recipe_id: "M977",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "T HAM MACARONI & CHEESE (IMIT) 10/2",
    recipe_id: "M979",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (E&P) NOODLES 10/2",
    recipe_id: "M986",
    sweetness_level: "Low",
  },
  {
    recipe_name: "TURKEY (CR) TETRAZZINI 10/2",
    recipe_id: "M987",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN (AP DICED) & MUSHROOM ALFREDO",
    recipe_id: "M9948",
    sweetness_level: "Low",
  },
  {
    recipe_name: "CHICKEN BREAST & THIGH (LB)",
    recipe_id: "M9949",
    sweetness_level: "Zero",
  },
  {
    recipe_name: "T HAM AUGRATIN POTATOES (W/MIX CH SCE) 10/4",
    recipe_id: "M9951",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS & SOY ROTINI CREAMY SAUCE & VEG 10/2",
    recipe_id: "M9959",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS TAMALE PIE W/ CB 10/3",
    recipe_id: "M996",
    sweetness_level: "Low",
  },
  {
    recipe_name: "POULTRY MS TAMALE PIE W/ CB 10/2",
    recipe_id: "M997",
    sweetness_level: "Mild",
  },
];

export default TAGS;
