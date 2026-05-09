"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ElectionScope = "national" | "wilaya" | "commun";

interface DataContextType {
  wilayasData: any[];
  setWilayasData: React.Dispatch<React.SetStateAction<any[]>>;
  communesData: any[];
  setCommunesData: React.Dispatch<React.SetStateAction<any[]>>;
  centersData: any[];
  setCentersData: React.Dispatch<React.SetStateAction<any[]>>;
  desksData: any[];
  setDesksData: React.Dispatch<React.SetStateAction<any[]>>;
  partiesData: any[];
  setPartiesData: React.Dispatch<React.SetStateAction<any[]>>;
  candidatesData: any[];
  setCandidatesData: React.Dispatch<React.SetStateAction<any[]>>;
  adminsData: any[];
  setAdminsData: React.Dispatch<React.SetStateAction<any[]>>;
  membersData: any[];
  setMembersData: React.Dispatch<React.SetStateAction<any[]>>;
  observersData: any[];
  setObserversData: React.Dispatch<React.SetStateAction<any[]>>;
  electionScope: ElectionScope;
  setElectionScope: (scope: ElectionScope) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [wilayasData, setWilayasData] = useState([
  {
    "id": 1,
    "name": "أدرار",
    "num_wilaya": "01",
    "seats_count": 18,
    "communes": 16,
    "centers": 64,
    "desks": 320
  },
  {
    "id": 2,
    "name": "الشلف",
    "num_wilaya": "02",
    "seats_count": 10,
    "communes": 35,
    "centers": 140,
    "desks": 700
  },
  {
    "id": 3,
    "name": "الأغواط",
    "num_wilaya": "03",
    "seats_count": 11,
    "communes": 23,
    "centers": 92,
    "desks": 460
  },
  {
    "id": 4,
    "name": "أم البواقي",
    "num_wilaya": "04",
    "seats_count": 13,
    "communes": 29,
    "centers": 116,
    "desks": 580
  },
  {
    "id": 5,
    "name": "باتنة",
    "num_wilaya": "05",
    "seats_count": 19,
    "communes": 60,
    "centers": 240,
    "desks": 1200
  },
  {
    "id": 6,
    "name": "بجاية",
    "num_wilaya": "06",
    "seats_count": 27,
    "communes": 52,
    "centers": 208,
    "desks": 1040
  },
  {
    "id": 7,
    "name": "بسكرة",
    "num_wilaya": "07",
    "seats_count": 13,
    "communes": 26,
    "centers": 104,
    "desks": 520
  },
  {
    "id": 8,
    "name": "بشار",
    "num_wilaya": "08",
    "seats_count": 12,
    "communes": 12,
    "centers": 48,
    "desks": 240
  },
  {
    "id": 9,
    "name": "البليدة",
    "num_wilaya": "09",
    "seats_count": 13,
    "communes": 25,
    "centers": 100,
    "desks": 500
  },
  {
    "id": 10,
    "name": "البويرة",
    "num_wilaya": "10",
    "seats_count": 27,
    "communes": 45,
    "centers": 180,
    "desks": 900
  },
  {
    "id": 11,
    "name": "تمنراست",
    "num_wilaya": "11",
    "seats_count": 10,
    "communes": 5,
    "centers": 20,
    "desks": 100
  },
  {
    "id": 12,
    "name": "تبسة",
    "num_wilaya": "12",
    "seats_count": 25,
    "communes": 27,
    "centers": 108,
    "desks": 540
  },
  {
    "id": 13,
    "name": "تلمسان",
    "num_wilaya": "13",
    "seats_count": 16,
    "communes": 52,
    "centers": 208,
    "desks": 1040
  },
  {
    "id": 14,
    "name": "تيارت",
    "num_wilaya": "14",
    "seats_count": 17,
    "communes": 41,
    "centers": 164,
    "desks": 820
  },
  {
    "id": 15,
    "name": "تيزي وزو",
    "num_wilaya": "15",
    "seats_count": 22,
    "communes": 67,
    "centers": 268,
    "desks": 1340
  },
  {
    "id": 16,
    "name": "الجزائر",
    "num_wilaya": "16",
    "seats_count": 23,
    "communes": 57,
    "centers": 228,
    "desks": 1140
  },
  {
    "id": 17,
    "name": "الجلفة",
    "num_wilaya": "17",
    "seats_count": 8,
    "communes": 34,
    "centers": 136,
    "desks": 680
  },
  {
    "id": 18,
    "name": "جيجل",
    "num_wilaya": "18",
    "seats_count": 19,
    "communes": 28,
    "centers": 112,
    "desks": 560
  },
  {
    "id": 19,
    "name": "سطيف",
    "num_wilaya": "19",
    "seats_count": 25,
    "communes": 60,
    "centers": 240,
    "desks": 1200
  },
  {
    "id": 20,
    "name": "سعيدة",
    "num_wilaya": "20",
    "seats_count": 18,
    "communes": 16,
    "centers": 64,
    "desks": 320
  },
  {
    "id": 21,
    "name": "سكيكدة",
    "num_wilaya": "21",
    "seats_count": 11,
    "communes": 38,
    "centers": 152,
    "desks": 760
  },
  {
    "id": 22,
    "name": "سيدي بلعباس",
    "num_wilaya": "22",
    "seats_count": 18,
    "communes": 52,
    "centers": 208,
    "desks": 1040
  },
  {
    "id": 23,
    "name": "عنابة",
    "num_wilaya": "23",
    "seats_count": 13,
    "communes": 12,
    "centers": 48,
    "desks": 240
  },
  {
    "id": 24,
    "name": "قالمة",
    "num_wilaya": "24",
    "seats_count": 17,
    "communes": 34,
    "centers": 136,
    "desks": 680
  },
  {
    "id": 25,
    "name": "قسنطينة",
    "num_wilaya": "25",
    "seats_count": 27,
    "communes": 12,
    "centers": 48,
    "desks": 240
  },
  {
    "id": 26,
    "name": "المدية",
    "num_wilaya": "26",
    "seats_count": 18,
    "communes": 63,
    "centers": 252,
    "desks": 1260
  },
  {
    "id": 27,
    "name": "مستغانم",
    "num_wilaya": "27",
    "seats_count": 25,
    "communes": 32,
    "centers": 128,
    "desks": 640
  },
  {
    "id": 28,
    "name": "المسيلة",
    "num_wilaya": "28",
    "seats_count": 20,
    "communes": 46,
    "centers": 184,
    "desks": 920
  },
  {
    "id": 29,
    "name": "معسكر",
    "num_wilaya": "29",
    "seats_count": 20,
    "communes": 47,
    "centers": 188,
    "desks": 940
  },
  {
    "id": 30,
    "name": "ورقلة",
    "num_wilaya": "30",
    "seats_count": 23,
    "communes": 8,
    "centers": 32,
    "desks": 160
  },
  {
    "id": 31,
    "name": "وهران",
    "num_wilaya": "31",
    "seats_count": 26,
    "communes": 26,
    "centers": 104,
    "desks": 520
  },
  {
    "id": 32,
    "name": "البيض",
    "num_wilaya": "32",
    "seats_count": 22,
    "communes": 21,
    "centers": 84,
    "desks": 420
  },
  {
    "id": 33,
    "name": "إيليزي",
    "num_wilaya": "33",
    "seats_count": 20,
    "communes": 4,
    "centers": 16,
    "desks": 80
  },
  {
    "id": 34,
    "name": "Bordj Bou Arreridj",
    "num_wilaya": "34",
    "seats_count": 21,
    "communes": 34,
    "centers": 136,
    "desks": 680
  },
  {
    "id": 35,
    "name": "بومرداس",
    "num_wilaya": "35",
    "seats_count": 23,
    "communes": 32,
    "centers": 128,
    "desks": 640
  },
  {
    "id": 36,
    "name": "الطارف",
    "num_wilaya": "36",
    "seats_count": 26,
    "communes": 24,
    "centers": 96,
    "desks": 480
  },
  {
    "id": 37,
    "name": "تندوف",
    "num_wilaya": "37",
    "seats_count": 11,
    "communes": 2,
    "centers": 8,
    "desks": 40
  },
  {
    "id": 38,
    "name": "تيسمسيلت",
    "num_wilaya": "38",
    "seats_count": 22,
    "communes": 22,
    "centers": 88,
    "desks": 440
  },
  {
    "id": 39,
    "name": "الوادي",
    "num_wilaya": "39",
    "seats_count": 19,
    "communes": 22,
    "centers": 88,
    "desks": 440
  },
  {
    "id": 40,
    "name": "خنشلة",
    "num_wilaya": "40",
    "seats_count": 25,
    "communes": 21,
    "centers": 84,
    "desks": 420
  },
  {
    "id": 41,
    "name": "سوق أهراس",
    "num_wilaya": "41",
    "seats_count": 25,
    "communes": 26,
    "centers": 104,
    "desks": 520
  },
  {
    "id": 42,
    "name": "تيبازة",
    "num_wilaya": "42",
    "seats_count": 13,
    "communes": 28,
    "centers": 112,
    "desks": 560
  },
  {
    "id": 43,
    "name": "ميلة",
    "num_wilaya": "43",
    "seats_count": 15,
    "communes": 32,
    "centers": 128,
    "desks": 640
  },
  {
    "id": 44,
    "name": "عين الدفلى",
    "num_wilaya": "44",
    "seats_count": 13,
    "communes": 36,
    "centers": 144,
    "desks": 720
  },
  {
    "id": 45,
    "name": "النعامة",
    "num_wilaya": "45",
    "seats_count": 16,
    "communes": 12,
    "centers": 48,
    "desks": 240
  },
  {
    "id": 46,
    "name": "عين تموشنت",
    "num_wilaya": "46",
    "seats_count": 12,
    "communes": 28,
    "centers": 112,
    "desks": 560
  },
  {
    "id": 47,
    "name": "غرداية",
    "num_wilaya": "47",
    "seats_count": 14,
    "communes": 10,
    "centers": 40,
    "desks": 200
  },
  {
    "id": 48,
    "name": "غليزان",
    "num_wilaya": "48",
    "seats_count": 27,
    "communes": 38,
    "centers": 152,
    "desks": 760
  },
  {
    "id": 49,
    "name": "تيميمون",
    "num_wilaya": "49",
    "seats_count": 23,
    "communes": 10,
    "centers": 40,
    "desks": 200
  },
  {
    "id": 50,
    "name": "برج باجي مختار",
    "num_wilaya": "50",
    "seats_count": 11,
    "communes": 2,
    "centers": 8,
    "desks": 40
  },
  {
    "id": 51,
    "name": "أولاد جلال",
    "num_wilaya": "51",
    "seats_count": 9,
    "communes": 6,
    "centers": 24,
    "desks": 120
  },
  {
    "id": 52,
    "name": "بني عباس",
    "num_wilaya": "52",
    "seats_count": 21,
    "communes": 9,
    "centers": 36,
    "desks": 180
  },
  {
    "id": 53,
    "name": "عين صالح",
    "num_wilaya": "53",
    "seats_count": 8,
    "communes": 3,
    "centers": 12,
    "desks": 60
  },
  {
    "id": 54,
    "name": "عين قزام",
    "num_wilaya": "54",
    "seats_count": 9,
    "communes": 2,
    "centers": 8,
    "desks": 40
  },
  {
    "id": 55,
    "name": "تقرت",
    "num_wilaya": "55",
    "seats_count": 16,
    "communes": 13,
    "centers": 52,
    "desks": 260
  },
  {
    "id": 56,
    "name": "جانت",
    "num_wilaya": "56",
    "seats_count": 13,
    "communes": 2,
    "centers": 8,
    "desks": 40
  },
  {
    "id": 57,
    "name": "El Meghaier",
    "num_wilaya": "57",
    "seats_count": 14,
    "communes": 8,
    "centers": 32,
    "desks": 160
  },
  {
    "id": 58,
    "name": "El Menia",
    "num_wilaya": "58",
    "seats_count": 21,
    "communes": 3,
    "centers": 12,
    "desks": 60
  },
  {
    "id": 59,
    "name": "أفلو",
    "num_wilaya": "59",
    "seats_count": 12,
    "communes": 3,
    "centers": 12,
    "desks": 60
  },
  {
    "id": 60,
    "name": "بريكة",
    "num_wilaya": "60",
    "seats_count": 17,
    "communes": 3,
    "centers": 12,
    "desks": 60
  },
  {
    "id": 61,
    "name": "قصر الشلالة",
    "num_wilaya": "61",
    "seats_count": 20,
    "communes": 3,
    "centers": 12,
    "desks": 60
  },
  {
    "id": 62,
    "name": "مسعد",
    "num_wilaya": "62",
    "seats_count": 15,
    "communes": 5,
    "centers": 20,
    "desks": 100
  },
  {
    "id": 63,
    "name": "Aïn Oussera",
    "num_wilaya": "63",
    "seats_count": 23,
    "communes": 2,
    "centers": 8,
    "desks": 40
  },
  {
    "id": 64,
    "name": "Boussaâda",
    "num_wilaya": "64",
    "seats_count": 14,
    "communes": 3,
    "centers": 12,
    "desks": 60
  },
  {
    "id": 65,
    "name": "El Abiodh Sidi Cheikh",
    "num_wilaya": "65",
    "seats_count": 9,
    "communes": 1,
    "centers": 4,
    "desks": 20
  },
  {
    "id": 66,
    "name": "القنطرة",
    "num_wilaya": "66",
    "seats_count": 16,
    "communes": 2,
    "centers": 8,
    "desks": 40
  },
  {
    "id": 67,
    "name": "Bir El Ater",
    "num_wilaya": "67",
    "seats_count": 18,
    "communes": 2,
    "centers": 8,
    "desks": 40
  },
  {
    "id": 68,
    "name": "قصر البخاري",
    "num_wilaya": "68",
    "seats_count": 13,
    "communes": 3,
    "centers": 12,
    "desks": 60
  },
  {
    "id": 69,
    "name": "العريشة",
    "num_wilaya": "69",
    "seats_count": 16,
    "communes": 2,
    "centers": 8,
    "desks": 40
  }
]);;

  const [communesData, setCommunesData] = useState([
  {
    "id": 1,
    "name": "تيمقطن",
    "num_bladia": "22",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 2,
    "name": "بودة",
    "num_bladia": "06",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 3,
    "name": "أولاد أحمد تيمي",
    "num_bladia": "13",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 4,
    "name": "أدرار",
    "num_bladia": "01",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 5,
    "name": "فنوغيل",
    "num_bladia": "09",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 6,
    "name": "إن زغمير",
    "num_bladia": "10",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 7,
    "name": "رقان",
    "num_bladia": "16",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 8,
    "name": "سالي",
    "num_bladia": "17",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 9,
    "name": "السبع",
    "num_bladia": "18",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 10,
    "name": "تسابيت",
    "num_bladia": "27",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 11,
    "name": "تامست",
    "num_bladia": "21",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 12,
    "name": "تامنطيط",
    "num_bladia": "20",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 13,
    "name": "تيت",
    "num_bladia": "26",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 14,
    "name": "زاوية كنتة",
    "num_bladia": "28",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 15,
    "name": "اقبلي",
    "num_bladia": "02",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 16,
    "name": "أولف",
    "num_bladia": "04",
    "wilaya": "أدرار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 17,
    "name": "تلعصة",
    "num_bladia": "60",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 18,
    "name": "الزبوجة",
    "num_bladia": "63",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 19,
    "name": "الحجاج",
    "num_bladia": "41",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 20,
    "name": "أولاد بن عبد القادر",
    "num_bladia": "52",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 21,
    "name": "عين مران",
    "num_bladia": "30",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 22,
    "name": "بريرة",
    "num_bladia": "37",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 23,
    "name": "أولاد عباس",
    "num_bladia": "51",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 24,
    "name": "وادي الفضة",
    "num_bladia": "48",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 25,
    "name": "بني راشد",
    "num_bladia": "34",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 26,
    "name": "الهرانفة",
    "num_bladia": "45",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 27,
    "name": "تاجنة",
    "num_bladia": "59",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 28,
    "name": "المرسى",
    "num_bladia": "43",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 29,
    "name": "الشلف",
    "num_bladia": "39",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 30,
    "name": "أم الدروع",
    "num_bladia": "54",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 31,
    "name": "سنجاس",
    "num_bladia": "55",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 32,
    "name": "سيدي عبد الرحمن",
    "num_bladia": "56",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 33,
    "name": "سيدي عكاشة",
    "num_bladia": "57",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 34,
    "name": "تنس",
    "num_bladia": "62",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 35,
    "name": "بني بوعتاب",
    "num_bladia": "32",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 36,
    "name": "الكريمية",
    "num_bladia": "42",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 37,
    "name": "حرشون",
    "num_bladia": "44",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 38,
    "name": "بوزغاية",
    "num_bladia": "36",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 39,
    "name": "تاوقريت",
    "num_bladia": "61",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 40,
    "name": "بني حواء",
    "num_bladia": "33",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 41,
    "name": "أبو الحسن",
    "num_bladia": "29",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 42,
    "name": "وادي قوسين",
    "num_bladia": "49",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 43,
    "name": "الشطية",
    "num_bladia": "38",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 44,
    "name": "مصدق",
    "num_bladia": "47",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 45,
    "name": "أولاد فارس",
    "num_bladia": "53",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 46,
    "name": "بوقادير",
    "num_bladia": "35",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 47,
    "name": "وادي سلي",
    "num_bladia": "50",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 48,
    "name": "الصبحة",
    "num_bladia": "58",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 49,
    "name": "بنايرية",
    "num_bladia": "31",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 50,
    "name": "الأبيض مجاجة",
    "num_bladia": "46",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 51,
    "name": "الظهرة",
    "num_bladia": "40",
    "wilaya": "الشلف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 52,
    "name": "البيضاء",
    "num_bladia": "67",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 53,
    "name": "قلتة سيدي سعد",
    "num_bladia": "73",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 54,
    "name": "بريدة",
    "num_bladia": "69",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 55,
    "name": "عين سيدي علي",
    "num_bladia": "66",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 56,
    "name": "تاجموت",
    "num_bladia": "85",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 57,
    "name": "الحاج مشري",
    "num_bladia": "74",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 58,
    "name": "تاويالة",
    "num_bladia": "87",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 59,
    "name": "الغيشة",
    "num_bladia": "71",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 60,
    "name": "تاجرونة",
    "num_bladia": "86",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 61,
    "name": "سبقاق",
    "num_bladia": "82",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 62,
    "name": "سيدي بوزيد",
    "num_bladia": "83",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 63,
    "name": "وادي مرة",
    "num_bladia": "80",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 64,
    "name": "الأغواط",
    "num_bladia": "79",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 65,
    "name": "وادي مزي",
    "num_bladia": "81",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 66,
    "name": "قصر الحيران",
    "num_bladia": "78",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 67,
    "name": "العسافية",
    "num_bladia": "70",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 68,
    "name": "سيدي مخلوف",
    "num_bladia": "84",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 69,
    "name": "حاسي الدلاعة",
    "num_bladia": "75",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 70,
    "name": "حاسي الرمل",
    "num_bladia": "76",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 71,
    "name": "عين ماضي",
    "num_bladia": "65",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 72,
    "name": "الحويطة",
    "num_bladia": "72",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 73,
    "name": "الخنق",
    "num_bladia": "77",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 74,
    "name": "بن ناصر بن شهرة",
    "num_bladia": "68",
    "wilaya": "الأغواط",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 75,
    "name": "فكيرينة",
    "num_bladia": "104",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 76,
    "name": "الفجوج بوغرارة سعودي",
    "num_bladia": "102",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 77,
    "name": "عين فكرون",
    "num_bladia": "91",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 78,
    "name": "الرحية",
    "num_bladia": "113",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 79,
    "name": "مسكيانة",
    "num_bladia": "107",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 80,
    "name": "البلالة",
    "num_bladia": "100",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 81,
    "name": "بحير الشرقي",
    "num_bladia": "95",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 82,
    "name": "قصر الصباحي",
    "num_bladia": "106",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 83,
    "name": "سوق نعمان",
    "num_bladia": "115",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 84,
    "name": "Ouled Zouai",
    "num_bladia": "111",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 85,
    "name": "أم البواقي",
    "num_bladia": "112",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 86,
    "name": "عين ببوش",
    "num_bladia": "88",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 87,
    "name": "عين الزيتون",
    "num_bladia": "94",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 88,
    "name": "بئر الشهداء",
    "num_bladia": "97",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 89,
    "name": "عين البيضاء",
    "num_bladia": "89",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 90,
    "name": "بريش",
    "num_bladia": "96",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 91,
    "name": "الزرق",
    "num_bladia": "116",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 92,
    "name": "عين مليلة",
    "num_bladia": "93",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 93,
    "name": "أولاد قاسم",
    "num_bladia": "109",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 94,
    "name": "أولاد حملة",
    "num_bladia": "110",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 95,
    "name": "العامرية",
    "num_bladia": "99",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 96,
    "name": "سيقوس",
    "num_bladia": "114",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 97,
    "name": "وادي نيني",
    "num_bladia": "108",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 98,
    "name": "عين الديس",
    "num_bladia": "90",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 99,
    "name": "الضلعة",
    "num_bladia": "98",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 100,
    "name": "الجازية",
    "num_bladia": "101",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 101,
    "name": "عين كرشة",
    "num_bladia": "92",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 102,
    "name": "الحرملية",
    "num_bladia": "103",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 103,
    "name": "هنشير تومغني",
    "num_bladia": "105",
    "wilaya": "أم البواقي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 104,
    "name": "معافة",
    "num_bladia": "150",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 105,
    "name": "القصبات",
    "num_bladia": "139",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 106,
    "name": "تيمقاد",
    "num_bladia": "176",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 107,
    "name": "تاكسلانت",
    "num_bladia": "170",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 108,
    "name": "أولاد سي سليمان",
    "num_bladia": "161",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 109,
    "name": "Lemcene",
    "num_bladia": "148",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 110,
    "name": "Talkhamt",
    "num_bladia": "169",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 111,
    "name": "رأس العيون",
    "num_bladia": "164",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 112,
    "name": "الرحبات",
    "num_bladia": "163",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 113,
    "name": "أولاد سلام",
    "num_bladia": "160",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 114,
    "name": "القيقبة",
    "num_bladia": "140",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 115,
    "name": "ثنية العابد",
    "num_bladia": "172",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 116,
    "name": "باتنة",
    "num_bladia": "123",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 117,
    "name": "فسديس",
    "num_bladia": "136",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 118,
    "name": "وادي الشعبة",
    "num_bladia": "154",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 119,
    "name": "حيدوسة",
    "num_bladia": "141",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 120,
    "name": "قصر بلزمة",
    "num_bladia": "145",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 121,
    "name": "مروانة",
    "num_bladia": "152",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 122,
    "name": "وادي الماء",
    "num_bladia": "155",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 123,
    "name": "لازرو",
    "num_bladia": "147",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 124,
    "name": "سريانة",
    "num_bladia": "167",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 125,
    "name": "زانة البيضاء",
    "num_bladia": "177",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 126,
    "name": "منعة",
    "num_bladia": "151",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 127,
    "name": "تغرغار",
    "num_bladia": "174",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 128,
    "name": "عين ياقوت",
    "num_bladia": "119",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 129,
    "name": "بومية",
    "num_bladia": "128",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 130,
    "name": "جرمة",
    "num_bladia": "132",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 131,
    "name": "المعذر",
    "num_bladia": "135",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 132,
    "name": "عيون العصافير",
    "num_bladia": "162",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 133,
    "name": "تازولت",
    "num_bladia": "171",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 134,
    "name": "بومقر",
    "num_bladia": "127",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 135,
    "name": "نقاوس",
    "num_bladia": "153",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 136,
    "name": "سفيان",
    "num_bladia": "165",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 137,
    "name": "أريس",
    "num_bladia": "120",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 138,
    "name": "تيغانمين",
    "num_bladia": "173",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 139,
    "name": "عين جاسر",
    "num_bladia": "117",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 140,
    "name": "الحاسي",
    "num_bladia": "134",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 141,
    "name": "سقانة",
    "num_bladia": "166",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 142,
    "name": "تيلاطو",
    "num_bladia": "175",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 143,
    "name": "فم الطوب",
    "num_bladia": "137",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 144,
    "name": "إشمول",
    "num_bladia": "142",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 145,
    "name": "إينوغيسن",
    "num_bladia": "143",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 146,
    "name": "بوزينة",
    "num_bladia": "129",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 147,
    "name": "الأربعاء",
    "num_bladia": "146",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 148,
    "name": "بولهيلات",
    "num_bladia": "126",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 149,
    "name": "الشمرة",
    "num_bladia": "130",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 150,
    "name": "بيطام",
    "num_bladia": "125",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 151,
    "name": "إمدوكل",
    "num_bladia": "149",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 152,
    "name": "عزيل عبد القادر",
    "num_bladia": "121",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 153,
    "name": "الجزار",
    "num_bladia": "133",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 154,
    "name": "أولاد عمار",
    "num_bladia": "157",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 155,
    "name": "غسيرة",
    "num_bladia": "138",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 156,
    "name": "كيمل",
    "num_bladia": "144",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 157,
    "name": "تكوت",
    "num_bladia": "168",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 158,
    "name": "عين التوتة",
    "num_bladia": "118",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 159,
    "name": "بني فضالة الحقانية",
    "num_bladia": "124",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 160,
    "name": "أولاد فاضل",
    "num_bladia": "159",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 161,
    "name": "أولاد عوف",
    "num_bladia": "158",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 162,
    "name": "شير",
    "num_bladia": "131",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 163,
    "name": "وادي الطاقة",
    "num_bladia": "156",
    "wilaya": "باتنة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 164,
    "name": "سيدي عياد",
    "num_bladia": "212",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 165,
    "name": "برباشة",
    "num_bladia": "186",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 166,
    "name": "الفلاي",
    "num_bladia": "199",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 167,
    "name": "كنديرة",
    "num_bladia": "206",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 168,
    "name": "سيدي عيش",
    "num_bladia": "213",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 169,
    "name": "تيفرة",
    "num_bladia": "225",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 170,
    "name": "تينبدار",
    "num_bladia": "227",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 171,
    "name": "القصر",
    "num_bladia": "200",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 172,
    "name": "فناية الماثن",
    "num_bladia": "201",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 173,
    "name": "توجة",
    "num_bladia": "229",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 174,
    "name": "ذراع القايد",
    "num_bladia": "198",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 175,
    "name": "خراطة",
    "num_bladia": "207",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 176,
    "name": "بجاية",
    "num_bladia": "187",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 177,
    "name": "وادي غير",
    "num_bladia": "210",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 178,
    "name": "بني معوش",
    "num_bladia": "191",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 179,
    "name": "بني جليل",
    "num_bladia": "188",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 180,
    "name": "فرعون",
    "num_bladia": "202",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 181,
    "name": "سمعون",
    "num_bladia": "214",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 182,
    "name": "تيمزريت",
    "num_bladia": "226",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 183,
    "name": "مالبو",
    "num_bladia": "209",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 184,
    "name": "سوق لإثنين",
    "num_bladia": "215",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 185,
    "name": "تامريجت",
    "num_bladia": "219",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 186,
    "name": "بوخليفة",
    "num_bladia": "194",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 187,
    "name": "تالة حمزة",
    "num_bladia": "217",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 188,
    "name": "تيشي",
    "num_bladia": "224",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 189,
    "name": "أيت رزين",
    "num_bladia": "179",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 190,
    "name": "إغيل علي",
    "num_bladia": "204",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 191,
    "name": "أيت إسماعيل",
    "num_bladia": "180",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 192,
    "name": "درقينة",
    "num_bladia": "197",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 193,
    "name": "تاسكريوت",
    "num_bladia": "221",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 194,
    "name": "أوقاس",
    "num_bladia": "185",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 195,
    "name": "تيزي نبربر",
    "num_bladia": "228",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 196,
    "name": "أدكار",
    "num_bladia": "178",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 197,
    "name": "بني كسيلة",
    "num_bladia": "189",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 198,
    "name": "تاوريرت إغيل",
    "num_bladia": "220",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 199,
    "name": "أقبو",
    "num_bladia": "181",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 200,
    "name": "شلاطة",
    "num_bladia": "195",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 201,
    "name": "اغرم",
    "num_bladia": "205",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 202,
    "name": "تامقرة",
    "num_bladia": "218",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 203,
    "name": "أمالو",
    "num_bladia": "183",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 204,
    "name": "بوحمزة",
    "num_bladia": "193",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 205,
    "name": "مسيسنة",
    "num_bladia": "208",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 206,
    "name": "صدوق",
    "num_bladia": "211",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 207,
    "name": "بني مليكش",
    "num_bladia": "190",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 208,
    "name": "بو جليل",
    "num_bladia": "192",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 209,
    "name": "تازمالت",
    "num_bladia": "222",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 210,
    "name": "أكفادو",
    "num_bladia": "182",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 211,
    "name": "شميني",
    "num_bladia": "196",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 212,
    "name": "سوق اوفلا",
    "num_bladia": "216",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 213,
    "name": "طيبان",
    "num_bladia": "223",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 214,
    "name": "أوزلاقن",
    "num_bladia": "203",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 215,
    "name": "أميزور",
    "num_bladia": "184",
    "wilaya": "بجاية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 216,
    "name": "الفيض",
    "num_bladia": "241",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 217,
    "name": "ليشانة",
    "num_bladia": "249",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 218,
    "name": "بوشقرون",
    "num_bladia": "235",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 219,
    "name": "مخادمة",
    "num_bladia": "252",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 220,
    "name": "جمورة",
    "num_bladia": "239",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 221,
    "name": "برانيس",
    "num_bladia": "236",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 222,
    "name": "الوطاية",
    "num_bladia": "246",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 223,
    "name": "خنقة سيدي ناجي",
    "num_bladia": "248",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 224,
    "name": "عين زعطوط",
    "num_bladia": "231",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 225,
    "name": "زريبة الوادي",
    "num_bladia": "262",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 226,
    "name": "المزيرعة",
    "num_bladia": "253",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 227,
    "name": "بسكرة",
    "num_bladia": "233",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 228,
    "name": "الحاجب",
    "num_bladia": "243",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 229,
    "name": "مليلي",
    "num_bladia": "254",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 230,
    "name": "فوغالة",
    "num_bladia": "247",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 231,
    "name": "الغروس",
    "num_bladia": "242",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 232,
    "name": "برج بن عزوز",
    "num_bladia": "234",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 233,
    "name": "أورلال",
    "num_bladia": "257",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 234,
    "name": "أوماش",
    "num_bladia": "256",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 235,
    "name": "عين الناقة",
    "num_bladia": "230",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 236,
    "name": "شتمة",
    "num_bladia": "238",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 237,
    "name": "الحوش",
    "num_bladia": "244",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 238,
    "name": "سيدي عقبة",
    "num_bladia": "260",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 239,
    "name": "مشونش",
    "num_bladia": "251",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 240,
    "name": "ليوة",
    "num_bladia": "250",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 241,
    "name": "طولقة",
    "num_bladia": "261",
    "wilaya": "بسكرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 242,
    "name": "بشار",
    "num_bladia": "264",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 243,
    "name": "بوكايس",
    "num_bladia": "268",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 244,
    "name": "لحمر",
    "num_bladia": "275",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 245,
    "name": "موغل",
    "num_bladia": "278",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 246,
    "name": "المريجة",
    "num_bladia": "277",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 247,
    "name": "تاغيت",
    "num_bladia": "281",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 248,
    "name": "العبادلة",
    "num_bladia": "263",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 249,
    "name": "عرق فراج",
    "num_bladia": "270",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 250,
    "name": "مشرع هواري بومدين",
    "num_bladia": "276",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 251,
    "name": "بني ونيف",
    "num_bladia": "267",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 252,
    "name": "تبلبالة",
    "num_bladia": "280",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 253,
    "name": "القنادسة",
    "num_bladia": "272",
    "wilaya": "بشار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 254,
    "name": "بني مراد",
    "num_bladia": "285",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 255,
    "name": "اولاد سلامة",
    "num_bladia": "305",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 256,
    "name": "موزاية",
    "num_bladia": "302",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 257,
    "name": "حمام ملوان",
    "num_bladia": "299",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 258,
    "name": "بوقرة",
    "num_bladia": "291",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 259,
    "name": "صوحان",
    "num_bladia": "307",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 260,
    "name": "الأربعاء",
    "num_bladia": "300",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 261,
    "name": "الصومعة",
    "num_bladia": "308",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 262,
    "name": "قرواو",
    "num_bladia": "298",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 263,
    "name": "بوفاريك",
    "num_bladia": "290",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 264,
    "name": "مفتاح",
    "num_bladia": "301",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 265,
    "name": "الشفة",
    "num_bladia": "294",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 266,
    "name": "عين الرمانة",
    "num_bladia": "284",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 267,
    "name": "وادي جر",
    "num_bladia": "303",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 268,
    "name": "العفرون",
    "num_bladia": "297",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 269,
    "name": "أولاد يعيش",
    "num_bladia": "306",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 270,
    "name": "الشريعة",
    "num_bladia": "295",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 271,
    "name": "جبابرة",
    "num_bladia": "296",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 272,
    "name": "وادي العلايق",
    "num_bladia": "304",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 273,
    "name": "بن خليل",
    "num_bladia": "287",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 274,
    "name": "بني تامو",
    "num_bladia": "286",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 275,
    "name": "الشبلي",
    "num_bladia": "293",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 276,
    "name": "بوعينان",
    "num_bladia": "292",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 277,
    "name": "بوعرفة",
    "num_bladia": "289",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 278,
    "name": "البليدة",
    "num_bladia": "288",
    "wilaya": "البليدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 279,
    "name": "عين العلوي",
    "num_bladia": "312",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 280,
    "name": "الحجرة الزرقاء",
    "num_bladia": "334",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 281,
    "name": "مزدور",
    "num_bladia": "342",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 282,
    "name": "تاقديت",
    "num_bladia": "351",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 283,
    "name": "ريدان",
    "num_bladia": "346",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 284,
    "name": "المعمورة",
    "num_bladia": "341",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 285,
    "name": "الحاكمية",
    "num_bladia": "331",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 286,
    "name": "أهل القصر",
    "num_bladia": "310",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 287,
    "name": "ديرة",
    "num_bladia": "325",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 288,
    "name": "الدشمية",
    "num_bladia": "324",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 289,
    "name": "بشلول",
    "num_bladia": "317",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 290,
    "name": "آث  منصور",
    "num_bladia": "352",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 291,
    "name": "سحاريج",
    "num_bladia": "347",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 292,
    "name": "العجيبة",
    "num_bladia": "327",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 293,
    "name": "الأسنام",
    "num_bladia": "328",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 294,
    "name": "أمشدالة",
    "num_bladia": "339",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 295,
    "name": "برج أوخريص",
    "num_bladia": "319",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 296,
    "name": "سور الغزلان",
    "num_bladia": "349",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 297,
    "name": "حنيف",
    "num_bladia": "336",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 298,
    "name": "الشرفاء",
    "num_bladia": "323",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 299,
    "name": "Ouled Rached",
    "num_bladia": "344",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 300,
    "name": "عين الحجر",
    "num_bladia": "311",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 301,
    "name": "أغبالو",
    "num_bladia": "309",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 302,
    "name": "روراوة",
    "num_bladia": "345",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 303,
    "name": "الخبوزية",
    "num_bladia": "330",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 304,
    "name": "بئر غبالو",
    "num_bladia": "318",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 305,
    "name": "البويرة",
    "num_bladia": "321",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 306,
    "name": "عين الترك",
    "num_bladia": "313",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 307,
    "name": "أيت لعزيز",
    "num_bladia": "315",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 308,
    "name": "عين بسام",
    "num_bladia": "314",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 309,
    "name": "المقراني",
    "num_bladia": "332",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 310,
    "name": "سوق الخميس",
    "num_bladia": "348",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 311,
    "name": "أعمر",
    "num_bladia": "316",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 312,
    "name": "جباحية",
    "num_bladia": "326",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 313,
    "name": "الهاشمية",
    "num_bladia": "329",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 314,
    "name": "حيزر",
    "num_bladia": "335",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 315,
    "name": "تغزوت",
    "num_bladia": "350",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 316,
    "name": "بودربالة",
    "num_bladia": "320",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 317,
    "name": "بوكرم",
    "num_bladia": "322",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 318,
    "name": "قرومة",
    "num_bladia": "333",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 319,
    "name": "الأخضرية",
    "num_bladia": "338",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 320,
    "name": "معلة",
    "num_bladia": "340",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 321,
    "name": "قادرية",
    "num_bladia": "337",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 322,
    "name": "زبربر",
    "num_bladia": "353",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 323,
    "name": "وادي البردي",
    "num_bladia": "343",
    "wilaya": "البويرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 324,
    "name": "تاظروك",
    "num_bladia": "362",
    "wilaya": "تمنراست",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 325,
    "name": "ابلسة",
    "num_bladia": "354",
    "wilaya": "تمنراست",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 326,
    "name": "تمنراست",
    "num_bladia": "361",
    "wilaya": "تمنراست",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 327,
    "name": "عين امقل",
    "num_bladia": "355",
    "wilaya": "تمنراست",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 328,
    "name": "أدلس",
    "num_bladia": "359",
    "wilaya": "تمنراست",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 329,
    "name": "الحويجبات",
    "num_bladia": "380",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 330,
    "name": "العوينات",
    "num_bladia": "379",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 331,
    "name": "فركان",
    "num_bladia": "381",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 332,
    "name": "نقرين",
    "num_bladia": "385",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 333,
    "name": "بئر مقدم",
    "num_bladia": "368",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 334,
    "name": "بئر الذهب",
    "num_bladia": "367",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 335,
    "name": "صفصاف الوسرى",
    "num_bladia": "388",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 336,
    "name": "قريقر",
    "num_bladia": "382",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 337,
    "name": "بكارية",
    "num_bladia": "366",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 338,
    "name": "بولحاف الدير",
    "num_bladia": "371",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 339,
    "name": "أم علي",
    "num_bladia": "387",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 340,
    "name": "بوخضرة",
    "num_bladia": "370",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 341,
    "name": "الماء الابيض",
    "num_bladia": "374",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 342,
    "name": "الونزة",
    "num_bladia": "386",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 343,
    "name": "المريج",
    "num_bladia": "375",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 344,
    "name": "عين الزرقاء",
    "num_bladia": "364",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 345,
    "name": "سطح قنطيس",
    "num_bladia": "389",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 346,
    "name": "العقلة",
    "num_bladia": "377",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 347,
    "name": "المزرعة",
    "num_bladia": "376",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 348,
    "name": "بجن",
    "num_bladia": "365",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 349,
    "name": "مرسط",
    "num_bladia": "384",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 350,
    "name": "ثليجان",
    "num_bladia": "391",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 351,
    "name": "الشريعة",
    "num_bladia": "372",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 352,
    "name": "العقلة المالحة",
    "num_bladia": "378",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 353,
    "name": "تبسة",
    "num_bladia": "390",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 354,
    "name": "الحمامات",
    "num_bladia": "383",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 355,
    "name": "الكويف",
    "num_bladia": "373",
    "wilaya": "تبسة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 356,
    "name": "باب العسة",
    "num_bladia": "400",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 357,
    "name": "تيرني بني هديل",
    "num_bladia": "441",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 358,
    "name": "منصورة",
    "num_bladia": "424",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 359,
    "name": "بني مستر",
    "num_bladia": "404",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 360,
    "name": "عين غرابة",
    "num_bladia": "394",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 361,
    "name": "شتوان",
    "num_bladia": "411",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 362,
    "name": "عمير",
    "num_bladia": "399",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 363,
    "name": "عين فزة",
    "num_bladia": "393",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 364,
    "name": "هنين",
    "num_bladia": "422",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 365,
    "name": "بني خلاد",
    "num_bladia": "403",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 366,
    "name": "سيدي الجيلالي",
    "num_bladia": "436",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 367,
    "name": "البويهي",
    "num_bladia": "410",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 368,
    "name": "ندرومة",
    "num_bladia": "427",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 369,
    "name": "مسيردة الفواقة",
    "num_bladia": "426",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 370,
    "name": "مرسى بن مهيدي",
    "num_bladia": "425",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 371,
    "name": "سيدي مجاهد",
    "num_bladia": "437",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 372,
    "name": "Beni Boussaid",
    "num_bladia": "402",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 373,
    "name": "سبدو",
    "num_bladia": "434",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 374,
    "name": "القور",
    "num_bladia": "417",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 375,
    "name": "بوحلو",
    "num_bladia": "409",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 376,
    "name": "مغنية",
    "num_bladia": "423",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 377,
    "name": "حمام بوغرارة",
    "num_bladia": "420",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 378,
    "name": "زناتة",
    "num_bladia": "444",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 379,
    "name": "أولاد رياح",
    "num_bladia": "430",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 380,
    "name": "الحناية",
    "num_bladia": "421",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 381,
    "name": "سيدي العبدلي",
    "num_bladia": "435",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 382,
    "name": "سوق الثلاثاء",
    "num_bladia": "440",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 383,
    "name": "بن سكران",
    "num_bladia": "408",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 384,
    "name": "فلاوسن",
    "num_bladia": "418",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 385,
    "name": "عين الكبيرة",
    "num_bladia": "395",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 386,
    "name": "عين فتاح",
    "num_bladia": "392",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 387,
    "name": "تلمسان",
    "num_bladia": "443",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 388,
    "name": "عين النحالة",
    "num_bladia": "396",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 389,
    "name": "عين تالوت",
    "num_bladia": "397",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 390,
    "name": "عين يوسف",
    "num_bladia": "398",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 391,
    "name": "بني وارسوس",
    "num_bladia": "405",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 392,
    "name": "الفحول",
    "num_bladia": "416",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 393,
    "name": "الرمشي",
    "num_bladia": "431",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 394,
    "name": "سبعة شيوخ",
    "num_bladia": "433",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 395,
    "name": "السواني",
    "num_bladia": "439",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 396,
    "name": "صبرة",
    "num_bladia": "432",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 397,
    "name": "دار يغمراسن",
    "num_bladia": "412",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 398,
    "name": "الغزوات",
    "num_bladia": "419",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 399,
    "name": "السواحلية",
    "num_bladia": "438",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 400,
    "name": "تيانت",
    "num_bladia": "442",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 401,
    "name": "بني صميل",
    "num_bladia": "406",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 402,
    "name": "وادي الخضر",
    "num_bladia": "428",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 403,
    "name": "أولاد ميمون",
    "num_bladia": "429",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 404,
    "name": "بني بهدل",
    "num_bladia": "401",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 405,
    "name": "بني سنوس",
    "num_bladia": "407",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 406,
    "name": "العزايل",
    "num_bladia": "415",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 407,
    "name": "جبالة",
    "num_bladia": "413",
    "wilaya": "تلمسان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 408,
    "name": "مهدية",
    "num_bladia": "461",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 409,
    "name": "عين دزاريت",
    "num_bladia": "447",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 410,
    "name": "السبعين",
    "num_bladia": "472",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 411,
    "name": "الفايجة",
    "num_bladia": "455",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 412,
    "name": "سي عبد الغني",
    "num_bladia": "475",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 413,
    "name": "السوقر",
    "num_bladia": "480",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 414,
    "name": "توسنينة",
    "num_bladia": "485",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 415,
    "name": "مغيلة",
    "num_bladia": "465",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 416,
    "name": "Sebt",
    "num_bladia": "473",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 417,
    "name": "سيدي حسني",
    "num_bladia": "479",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 418,
    "name": "عين الحديد",
    "num_bladia": "448",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 419,
    "name": "فرندة",
    "num_bladia": "456",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 420,
    "name": "تخمرت",
    "num_bladia": "482",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 421,
    "name": "عين كرمس",
    "num_bladia": "449",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 422,
    "name": "جبيلات الرصفاء",
    "num_bladia": "453",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 423,
    "name": "مادنة",
    "num_bladia": "460",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 424,
    "name": "مدريسة",
    "num_bladia": "463",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 425,
    "name": "سيدي عبد الرحمن",
    "num_bladia": "476",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 426,
    "name": "قرطوفة",
    "num_bladia": "457",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 427,
    "name": "سرغين",
    "num_bladia": "474",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 428,
    "name": "زمالة  الأمير عبد القادر",
    "num_bladia": "486",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 429,
    "name": "وادي ليلي",
    "num_bladia": "469",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 430,
    "name": "سيدي علي ملال",
    "num_bladia": "477",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 431,
    "name": "جيلالي بن عمار",
    "num_bladia": "454",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 432,
    "name": "مشرع الصفا",
    "num_bladia": "462",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 433,
    "name": "تاقدمت",
    "num_bladia": "481",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 434,
    "name": "بوقرة",
    "num_bladia": "450",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 435,
    "name": "حمادية",
    "num_bladia": "458",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 436,
    "name": "الرشايقة",
    "num_bladia": "471",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 437,
    "name": "تيدة",
    "num_bladia": "484",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 438,
    "name": "الناظورة",
    "num_bladia": "467",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 439,
    "name": "تيارت",
    "num_bladia": "483",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 440,
    "name": "مدروسة",
    "num_bladia": "464",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 441,
    "name": "ملاكو",
    "num_bladia": "466",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 442,
    "name": "سيدي بختي",
    "num_bladia": "478",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 443,
    "name": "عين الذهب",
    "num_bladia": "446",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 444,
    "name": "شحيمة",
    "num_bladia": "451",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 445,
    "name": "النعيمة",
    "num_bladia": "468",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 446,
    "name": "عين بوشقيف",
    "num_bladia": "445",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 447,
    "name": "دحموني",
    "num_bladia": "452",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 448,
    "name": "الرحوية",
    "num_bladia": "470",
    "wilaya": "تيارت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 449,
    "name": "ميزرانـــة",
    "num_bladia": "535",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 450,
    "name": "إيجــار",
    "num_bladia": "522",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 451,
    "name": "بني دوالة",
    "num_bladia": "510",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 452,
    "name": "بني زيكــي",
    "num_bladia": "512",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 453,
    "name": "إيلولة أومـــالو",
    "num_bladia": "527",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 454,
    "name": "أقني قغران",
    "num_bladia": "489",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 455,
    "name": "أيت بــوادو",
    "num_bladia": "493",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 456,
    "name": "واضية",
    "num_bladia": "538",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 457,
    "name": "تيزي نثلاثة",
    "num_bladia": "547",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 458,
    "name": "أغريب",
    "num_bladia": "488",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 459,
    "name": "أيت شافع",
    "num_bladia": "498",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 460,
    "name": "أقرو",
    "num_bladia": "504",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 461,
    "name": "أزفون",
    "num_bladia": "507",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 462,
    "name": "إفليـــسن",
    "num_bladia": "525",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 463,
    "name": "تيقـزيرت",
    "num_bladia": "544",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 464,
    "name": "أسي يوسف",
    "num_bladia": "505",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 465,
    "name": "بوغني",
    "num_bladia": "513",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 466,
    "name": "بونوح",
    "num_bladia": "515",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 467,
    "name": "مشطراس",
    "num_bladia": "533",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 468,
    "name": "ذراع بن خدة",
    "num_bladia": "517",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 469,
    "name": "سيدي نعمان",
    "num_bladia": "540",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 470,
    "name": "تادمايت",
    "num_bladia": "543",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 471,
    "name": "تيرمتين",
    "num_bladia": "546",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 472,
    "name": "أيت بومهدي",
    "num_bladia": "494",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 473,
    "name": "أيت تودرت",
    "num_bladia": "501",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 474,
    "name": "بني عيسي",
    "num_bladia": "509",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 475,
    "name": "واسيف",
    "num_bladia": "537",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 476,
    "name": "أيت خليلي",
    "num_bladia": "495",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 477,
    "name": "مقــلع",
    "num_bladia": "534",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 478,
    "name": "صوامـــع",
    "num_bladia": "541",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 479,
    "name": "بني يني",
    "num_bladia": "511",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 480,
    "name": "إبودرارن",
    "num_bladia": "521",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 481,
    "name": "تيزي وزو",
    "num_bladia": "549",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 482,
    "name": "Abi-Youcef",
    "num_bladia": "487",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 483,
    "name": "عين الحمام",
    "num_bladia": "490",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 484,
    "name": "أيت يحيى",
    "num_bladia": "502",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 485,
    "name": "اقبيل",
    "num_bladia": "503",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 486,
    "name": "بوجيمة",
    "num_bladia": "514",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 487,
    "name": "ماكودة",
    "num_bladia": "532",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 488,
    "name": "عين الزاوية",
    "num_bladia": "491",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 489,
    "name": "أيت يحي موسى",
    "num_bladia": "496",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 490,
    "name": "ذراع الميزان",
    "num_bladia": "518",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 491,
    "name": "فريقات",
    "num_bladia": "520",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 492,
    "name": "مكيرة",
    "num_bladia": "536",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 493,
    "name": "تيزي غنيف",
    "num_bladia": "548",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 494,
    "name": "يطــافن",
    "num_bladia": "552",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 495,
    "name": "إيلـيــلتـن",
    "num_bladia": "526",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 496,
    "name": "إمســوحال",
    "num_bladia": "528",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 497,
    "name": "عزازقة",
    "num_bladia": "506",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 498,
    "name": "فريحة",
    "num_bladia": "519",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 499,
    "name": "إيفيغاء",
    "num_bladia": "524",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 500,
    "name": "إعــكورن",
    "num_bladia": "551",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 501,
    "name": "زكري",
    "num_bladia": "553",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 502,
    "name": "أيت عقـواشة",
    "num_bladia": "492",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 503,
    "name": "إيرجـــن",
    "num_bladia": "529",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 504,
    "name": "الأربعــاء ناث إيراثن",
    "num_bladia": "530",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 505,
    "name": "Ait-Oumalou",
    "num_bladia": "500",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 506,
    "name": "تيزي راشد",
    "num_bladia": "550",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 507,
    "name": "أيت عيسى ميمون",
    "num_bladia": "497",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 508,
    "name": "واقنون",
    "num_bladia": "539",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 509,
    "name": "تيمـيزار",
    "num_bladia": "545",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 510,
    "name": "معـــاتقة",
    "num_bladia": "531",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 511,
    "name": "سوق الإثنين",
    "num_bladia": "542",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 512,
    "name": "أيت محمود",
    "num_bladia": "499",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 513,
    "name": "بنــــي زمنزار",
    "num_bladia": "508",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 514,
    "name": "إفــرحــونان",
    "num_bladia": "523",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 515,
    "name": "بوزقــن",
    "num_bladia": "516",
    "wilaya": "تيزي وزو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 516,
    "name": "حسين داي",
    "num_bladia": "588",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 517,
    "name": "الكاليتوس",
    "num_bladia": "592",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 518,
    "name": "سيدي موسى",
    "num_bladia": "606",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 519,
    "name": "القبة",
    "num_bladia": "591",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 520,
    "name": "محمد بلوزداد",
    "num_bladia": "594",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 521,
    "name": "عين طاية",
    "num_bladia": "555",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 522,
    "name": "باب الزوار",
    "num_bladia": "558",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 523,
    "name": "برج الكيفان",
    "num_bladia": "569",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 524,
    "name": "الدار البيضاء",
    "num_bladia": "574",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 525,
    "name": "المرسى",
    "num_bladia": "584",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 526,
    "name": "المحمدية",
    "num_bladia": "595",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 527,
    "name": "بئر توتة",
    "num_bladia": "566",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 528,
    "name": "اولاد شبل",
    "num_bladia": "598",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 529,
    "name": "تسالة المرجة",
    "num_bladia": "609",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 530,
    "name": "هراوة",
    "num_bladia": "587",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 531,
    "name": "رغاية",
    "num_bladia": "602",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 532,
    "name": "الرويبة",
    "num_bladia": "603",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 533,
    "name": "المعالمة",
    "num_bladia": "593",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 534,
    "name": "الرحمانية",
    "num_bladia": "600",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 535,
    "name": "سويدانية",
    "num_bladia": "607",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 536,
    "name": "سطاوالي",
    "num_bladia": "608",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 537,
    "name": "زرالدة",
    "num_bladia": "610",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 538,
    "name": "بابا حسن",
    "num_bladia": "559",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 539,
    "name": "الدويرة",
    "num_bladia": "577",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 540,
    "name": "الدرارية",
    "num_bladia": "578",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 541,
    "name": "العاشور",
    "num_bladia": "579",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 542,
    "name": "الخرايسية",
    "num_bladia": "590",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 543,
    "name": "عين البنيان",
    "num_bladia": "554",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 544,
    "name": "الشراقة",
    "num_bladia": "573",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 545,
    "name": "دالي ابراهيم",
    "num_bladia": "575",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 546,
    "name": "الحمامات",
    "num_bladia": "586",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 547,
    "name": "اولاد فايت",
    "num_bladia": "599",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 548,
    "name": "الجزائر الوسطى",
    "num_bladia": "556",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 549,
    "name": "المدنية",
    "num_bladia": "582",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 550,
    "name": "المرادية",
    "num_bladia": "585",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 551,
    "name": "سيدي امحمد",
    "num_bladia": "605",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 552,
    "name": "السحاولة",
    "num_bladia": "604",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 553,
    "name": "بولوغين بن زيري",
    "num_bladia": "567",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 554,
    "name": "القصبة",
    "num_bladia": "572",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 555,
    "name": "وادي قريش",
    "num_bladia": "596",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 556,
    "name": "الرايس حميدو",
    "num_bladia": "601",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 557,
    "name": "بئر مراد رايس",
    "num_bladia": "564",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 558,
    "name": "بئر خادم",
    "num_bladia": "565",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 559,
    "name": "جسر قسنطينة",
    "num_bladia": "576",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 560,
    "name": "حيدرة",
    "num_bladia": "589",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 561,
    "name": "المغارية",
    "num_bladia": "583",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 562,
    "name": "ابن عكنون",
    "num_bladia": "562",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 563,
    "name": "بني مسوس",
    "num_bladia": "563",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 564,
    "name": "بوزريعة",
    "num_bladia": "571",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 565,
    "name": "الابيار",
    "num_bladia": "580",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 566,
    "name": "باش جراح",
    "num_bladia": "560",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 567,
    "name": "بوروبة",
    "num_bladia": "570",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 568,
    "name": "الحراش",
    "num_bladia": "581",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 569,
    "name": "وادي السمار",
    "num_bladia": "597",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 570,
    "name": "براقي",
    "num_bladia": "561",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 571,
    "name": "برج البحري",
    "num_bladia": "568",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 572,
    "name": "باب الوادي",
    "num_bladia": "557",
    "wilaya": "الجزائر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 573,
    "name": "حاسي العش",
    "num_bladia": "634",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 574,
    "name": "عين الإبل",
    "num_bladia": "612",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 575,
    "name": "القديد",
    "num_bladia": "626",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 576,
    "name": "الشارف",
    "num_bladia": "621",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 577,
    "name": "بن يعقوب",
    "num_bladia": "618",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 578,
    "name": "سيدي بايزيد",
    "num_bladia": "642",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 579,
    "name": "مليليحة",
    "num_bladia": "637",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 580,
    "name": "دار الشيوخ",
    "num_bladia": "622",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 581,
    "name": "تعظميت",
    "num_bladia": "644",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 582,
    "name": "حد الصحاري",
    "num_bladia": "632",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 583,
    "name": "بويرة الأحداب",
    "num_bladia": "620",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 584,
    "name": "عين فقه",
    "num_bladia": "613",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 585,
    "name": "سيدي لعجال",
    "num_bladia": "643",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 586,
    "name": "حاسي فدول",
    "num_bladia": "635",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 587,
    "name": "الخميس",
    "num_bladia": "628",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 588,
    "name": "سلمانة",
    "num_bladia": "641",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 589,
    "name": "سد الرحال",
    "num_bladia": "640",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 590,
    "name": "قطارة",
    "num_bladia": "631",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 591,
    "name": "دلدول",
    "num_bladia": "623",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 592,
    "name": "زكار",
    "num_bladia": "646",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 593,
    "name": "دويس",
    "num_bladia": "625",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 594,
    "name": "الادريسية",
    "num_bladia": "627",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 595,
    "name": "عين الشهداء",
    "num_bladia": "611",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 596,
    "name": "الجلفة",
    "num_bladia": "624",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 597,
    "name": "بيرين",
    "num_bladia": "619",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 598,
    "name": "أم العظام",
    "num_bladia": "639",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 599,
    "name": "فيض البطمة",
    "num_bladia": "629",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 600,
    "name": "عمورة",
    "num_bladia": "616",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 601,
    "name": "زعفران",
    "num_bladia": "645",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 602,
    "name": "قرنيني",
    "num_bladia": "630",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 603,
    "name": "بنهار",
    "num_bladia": "617",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 604,
    "name": "عين معبد",
    "num_bladia": "614",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 605,
    "name": "حاسي بحبح",
    "num_bladia": "633",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 606,
    "name": "مجبارة",
    "num_bladia": "638",
    "wilaya": "الجلفة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 607,
    "name": "جيجل",
    "num_bladia": "662",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 608,
    "name": "العوانة",
    "num_bladia": "656",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 609,
    "name": "سلمى بن زيادة",
    "num_bladia": "668",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 610,
    "name": "أراقن سويسي",
    "num_bladia": "660",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 611,
    "name": "بوسيف أولاد عسكر",
    "num_bladia": "650",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 612,
    "name": "زيامة منصورية",
    "num_bladia": "674",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 613,
    "name": "الشحنة",
    "num_bladia": "651",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 614,
    "name": "الامير عبد القادر",
    "num_bladia": "659",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 615,
    "name": "وجانة",
    "num_bladia": "665",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 616,
    "name": "الطاهير",
    "num_bladia": "672",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 617,
    "name": "الشقفة",
    "num_bladia": "652",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 618,
    "name": "القنار نشفي",
    "num_bladia": "657",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 619,
    "name": "سيدي عبد العزيز",
    "num_bladia": "670",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 620,
    "name": "الميلية",
    "num_bladia": "658",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 621,
    "name": "أولاد يحيى خدروش",
    "num_bladia": "667",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 622,
    "name": "أولاد رابح",
    "num_bladia": "666",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 623,
    "name": "سيدي معروف",
    "num_bladia": "671",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 624,
    "name": "غبالة",
    "num_bladia": "661",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 625,
    "name": "السطارة",
    "num_bladia": "669",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 626,
    "name": "بوراوي بلهادف",
    "num_bladia": "649",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 627,
    "name": "العنصر",
    "num_bladia": "655",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 628,
    "name": "خيري واد عجول",
    "num_bladia": "664",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 629,
    "name": "جيملة",
    "num_bladia": "654",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 630,
    "name": "قاوس",
    "num_bladia": "663",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 631,
    "name": "تاكسنة",
    "num_bladia": "673",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 632,
    "name": "برج الطهر",
    "num_bladia": "647",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 633,
    "name": "بودريعة بني  ياجيس",
    "num_bladia": "648",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 634,
    "name": "الجمعة بني حبيبي",
    "num_bladia": "653",
    "wilaya": "جيجل",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 635,
    "name": "الرصفة",
    "num_bladia": "726",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 636,
    "name": "واد البارد",
    "num_bladia": "721",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 637,
    "name": "تيزي نبشار",
    "num_bladia": "734",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 638,
    "name": "مزلوق",
    "num_bladia": "720",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 639,
    "name": "قلال",
    "num_bladia": "709",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 640,
    "name": "قصر الابطال",
    "num_bladia": "717",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 641,
    "name": "أولاد سي أحمد",
    "num_bladia": "724",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 642,
    "name": "أيت نوال مزادة",
    "num_bladia": "684",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 643,
    "name": "ايت تيزي",
    "num_bladia": "685",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 644,
    "name": "بوعنداس",
    "num_bladia": "699",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 645,
    "name": "بوسلام",
    "num_bladia": "701",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 646,
    "name": "حمام السخنة",
    "num_bladia": "713",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 647,
    "name": "الطاية",
    "num_bladia": "732",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 648,
    "name": "التلة",
    "num_bladia": "733",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 649,
    "name": "عين ولمان",
    "num_bladia": "680",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 650,
    "name": "بوطالب",
    "num_bladia": "702",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 651,
    "name": "الحامة",
    "num_bladia": "714",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 652,
    "name": "أولاد تبان",
    "num_bladia": "725",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 653,
    "name": "عموشة",
    "num_bladia": "686",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 654,
    "name": "صالح باي",
    "num_bladia": "727",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 655,
    "name": "عين أزال",
    "num_bladia": "677",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 656,
    "name": "عين الحجر",
    "num_bladia": "679",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 657,
    "name": "بيضاء برج",
    "num_bladia": "689",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 658,
    "name": "بئر حدادة",
    "num_bladia": "697",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 659,
    "name": "قنزات",
    "num_bladia": "711",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 660,
    "name": "حربيل",
    "num_bladia": "716",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 661,
    "name": "عين الروى",
    "num_bladia": "682",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 662,
    "name": "بني وسين",
    "num_bladia": "694",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 663,
    "name": "أوريسيا",
    "num_bladia": "707",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 664,
    "name": "بوقاعة",
    "num_bladia": "700",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 665,
    "name": "ذراع قبيلة",
    "num_bladia": "705",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 666,
    "name": "حمام قرقور",
    "num_bladia": "715",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 667,
    "name": "سطيف",
    "num_bladia": "729",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 668,
    "name": "عين الكبيرة",
    "num_bladia": "678",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 669,
    "name": "الدهامشة",
    "num_bladia": "703",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 670,
    "name": "أولاد عدوان",
    "num_bladia": "722",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 671,
    "name": "عين السبت",
    "num_bladia": "683",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 672,
    "name": "بني عزيز",
    "num_bladia": "695",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 673,
    "name": "معاوية",
    "num_bladia": "718",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 674,
    "name": "بلاعة",
    "num_bladia": "690",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 675,
    "name": "بئر العرش",
    "num_bladia": "698",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 676,
    "name": "الولجة",
    "num_bladia": "708",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 677,
    "name": "تاشودة",
    "num_bladia": "730",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 678,
    "name": "تالة إيفاسن",
    "num_bladia": "731",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 679,
    "name": "سرج الغول",
    "num_bladia": "728",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 680,
    "name": "قجال",
    "num_bladia": "712",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 681,
    "name": "أولاد صابر",
    "num_bladia": "723",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 682,
    "name": "بازر سكرة",
    "num_bladia": "688",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 683,
    "name": "العلمة",
    "num_bladia": "706",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 684,
    "name": "Guelta Zerka",
    "num_bladia": "710",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 685,
    "name": "بني فودة",
    "num_bladia": "692",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 686,
    "name": "جميلة",
    "num_bladia": "704",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 687,
    "name": "عين لقراج",
    "num_bladia": "681",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 688,
    "name": "بني شبانة",
    "num_bladia": "691",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 689,
    "name": "بني ورتيلان",
    "num_bladia": "693",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 690,
    "name": "بني موحلي",
    "num_bladia": "696",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 691,
    "name": "عين عباسة",
    "num_bladia": "675",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 692,
    "name": "عين أرنات",
    "num_bladia": "676",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 693,
    "name": "بابور",
    "num_bladia": "687",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 694,
    "name": "ماوكلان",
    "num_bladia": "719",
    "wilaya": "سطيف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 695,
    "name": "سعيدة",
    "num_bladia": "745",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 696,
    "name": "تيرسين",
    "num_bladia": "749",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 697,
    "name": "أولاد إبراهيم",
    "num_bladia": "743",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 698,
    "name": "عين السلطان",
    "num_bladia": "737",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 699,
    "name": "المعمورة",
    "num_bladia": "741",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 700,
    "name": "الحساسنة",
    "num_bladia": "739",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 701,
    "name": "عين السخونة",
    "num_bladia": "736",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 702,
    "name": "سيدي بوبكر",
    "num_bladia": "748",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 703,
    "name": "أولاد خالد",
    "num_bladia": "744",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 704,
    "name": "هونت",
    "num_bladia": "740",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 705,
    "name": "يوب",
    "num_bladia": "750",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 706,
    "name": "دوي ثابت",
    "num_bladia": "738",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 707,
    "name": "سيدي احمد",
    "num_bladia": "746",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 708,
    "name": "مولاي العربي",
    "num_bladia": "742",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 709,
    "name": "عين الحجر",
    "num_bladia": "735",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 710,
    "name": "سيدي عمار",
    "num_bladia": "747",
    "wilaya": "سعيدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 711,
    "name": "عين بوزيان",
    "num_bladia": "751",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 712,
    "name": "صالح بو الشعور",
    "num_bladia": "783",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 713,
    "name": "الحدائق",
    "num_bladia": "768",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 714,
    "name": "زردازة",
    "num_bladia": "787",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 715,
    "name": "أولاد حبابة",
    "num_bladia": "780",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 716,
    "name": "بني ولبان",
    "num_bladia": "759",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 717,
    "name": "سيدي مزغيش",
    "num_bladia": "784",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 718,
    "name": "بني بشير",
    "num_bladia": "758",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 719,
    "name": "رمضان جمال",
    "num_bladia": "782",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 720,
    "name": "بين الويدان",
    "num_bladia": "761",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 721,
    "name": "مجاز الدشيش",
    "num_bladia": "770",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 722,
    "name": "تمالوس",
    "num_bladia": "786",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 723,
    "name": "عين قشرة",
    "num_bladia": "753",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 724,
    "name": "Ouldja Boulbalout",
    "num_bladia": "778",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 725,
    "name": "أم الطوب",
    "num_bladia": "781",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 726,
    "name": "الغدير",
    "num_bladia": "767",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 727,
    "name": "الكركرة",
    "num_bladia": "775",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 728,
    "name": "الحروش",
    "num_bladia": "766",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 729,
    "name": "الزيتونة",
    "num_bladia": "788",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 730,
    "name": "أولاد عطية",
    "num_bladia": "779",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 731,
    "name": "وادي الزهور",
    "num_bladia": "777",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 732,
    "name": "القل",
    "num_bladia": "764",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 733,
    "name": "الشرايع",
    "num_bladia": "763",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 734,
    "name": "بني زيد",
    "num_bladia": "760",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 735,
    "name": "خناق مايو",
    "num_bladia": "776",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 736,
    "name": "المرسى",
    "num_bladia": "769",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 737,
    "name": "بن عزوز",
    "num_bladia": "757",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 738,
    "name": "بكوش لخضر",
    "num_bladia": "756",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 739,
    "name": "السبت",
    "num_bladia": "771",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 740,
    "name": "عين شرشار",
    "num_bladia": "752",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 741,
    "name": "عزابة",
    "num_bladia": "755",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 742,
    "name": "بوشطاطة",
    "num_bladia": "762",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 743,
    "name": "فلفلة",
    "num_bladia": "772",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 744,
    "name": "حمادي كرومة",
    "num_bladia": "773",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 745,
    "name": "سكيكدة",
    "num_bladia": "785",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 746,
    "name": "عين زويت",
    "num_bladia": "754",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 747,
    "name": "جندل سعدي محمد",
    "num_bladia": "765",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 748,
    "name": "قنواع",
    "num_bladia": "774",
    "wilaya": "سكيكدة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 749,
    "name": "سيدي علي بن يوب",
    "num_bladia": "822",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 750,
    "name": "مولاي سليسن",
    "num_bladia": "814",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 751,
    "name": "الحصيبة",
    "num_bladia": "804",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 752,
    "name": "عين تندمين",
    "num_bladia": "792",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 753,
    "name": "تنيرة",
    "num_bladia": "837",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 754,
    "name": "وادي سفيون",
    "num_bladia": "816",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 755,
    "name": "حاسي دحو",
    "num_bladia": "805",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 756,
    "name": "وادي تاوريرة",
    "num_bladia": "817",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 757,
    "name": "بن عشيبة شلية",
    "num_bladia": "798",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 758,
    "name": "سيدي يعقوب",
    "num_bladia": "831",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 759,
    "name": "سيدي لحسن",
    "num_bladia": "830",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 760,
    "name": "سيدي  خالد",
    "num_bladia": "829",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 761,
    "name": "طابية",
    "num_bladia": "832",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 762,
    "name": "سيدي ابراهيم",
    "num_bladia": "825",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 763,
    "name": "العمارنة",
    "num_bladia": "794",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 764,
    "name": "بوخنفيس",
    "num_bladia": "801",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 765,
    "name": "حاسي زهانة",
    "num_bladia": "806",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 766,
    "name": "شيطوان البلايلة",
    "num_bladia": "802",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 767,
    "name": "أبن باديس الهرية",
    "num_bladia": "797",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 768,
    "name": "بضرابين المقراني",
    "num_bladia": "795",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 769,
    "name": "سفيزف",
    "num_bladia": "821",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 770,
    "name": "مسيد",
    "num_bladia": "810",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 771,
    "name": "بوجبهة البرج",
    "num_bladia": "800",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 772,
    "name": "عين أدن",
    "num_bladia": "793",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 773,
    "name": "سيدي حمادوش",
    "num_bladia": "828",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 774,
    "name": "سيدي شعيب",
    "num_bladia": "826",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 775,
    "name": "مكدرة",
    "num_bladia": "808",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 776,
    "name": "عين البرد",
    "num_bladia": "789",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 777,
    "name": "رجم دموش",
    "num_bladia": "819",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 778,
    "name": "راس الماء",
    "num_bladia": "818",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 779,
    "name": "وادي السبع",
    "num_bladia": "815",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 780,
    "name": "مرحوم",
    "num_bladia": "809",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 781,
    "name": "سيدي بلعباس",
    "num_bladia": "824",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 782,
    "name": "عين الثريد",
    "num_bladia": "791",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 783,
    "name": "السهالة الثورة",
    "num_bladia": "820",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 784,
    "name": "تسالة",
    "num_bladia": "838",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 785,
    "name": "بلعربي",
    "num_bladia": "796",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 786,
    "name": "مصطفى بن ابراهيم",
    "num_bladia": "813",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 787,
    "name": "تلموني",
    "num_bladia": "839",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 788,
    "name": "زروالة",
    "num_bladia": "840",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 789,
    "name": "الضاية",
    "num_bladia": "803",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 790,
    "name": "مزاورو",
    "num_bladia": "812",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 791,
    "name": "تغاليمت",
    "num_bladia": "835",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 792,
    "name": "تلاغ",
    "num_bladia": "836",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 793,
    "name": "عين قادة",
    "num_bladia": "790",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 794,
    "name": "لمطار",
    "num_bladia": "807",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 795,
    "name": "سيدي علي بوسيدي",
    "num_bladia": "823",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 796,
    "name": "سيدي دحو الزاير",
    "num_bladia": "827",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 797,
    "name": "بئر الحمام",
    "num_bladia": "799",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 798,
    "name": "مرين",
    "num_bladia": "811",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 799,
    "name": "تفسور",
    "num_bladia": "834",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 800,
    "name": "تاودموت",
    "num_bladia": "833",
    "wilaya": "سيدي بلعباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 801,
    "name": "عنابة",
    "num_bladia": "842",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 802,
    "name": "سرايدي",
    "num_bladia": "850",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 803,
    "name": "برحال",
    "num_bladia": "843",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 804,
    "name": "واد العنب",
    "num_bladia": "849",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 805,
    "name": "الحجار",
    "num_bladia": "848",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 806,
    "name": "سيدي عمار",
    "num_bladia": "851",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 807,
    "name": "البوني",
    "num_bladia": "846",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 808,
    "name": "عين الباردة",
    "num_bladia": "841",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 809,
    "name": "الشرفة",
    "num_bladia": "845",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 810,
    "name": "العلمة",
    "num_bladia": "847",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 811,
    "name": "Treat",
    "num_bladia": "852",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 812,
    "name": "شطايبي",
    "num_bladia": "844",
    "wilaya": "عنابة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 813,
    "name": "نشماية",
    "num_bladia": "875",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 814,
    "name": "Bou Hamdane",
    "num_bladia": "863",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 815,
    "name": "حمام دباغ",
    "num_bladia": "872",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 816,
    "name": "الركنية",
    "num_bladia": "884",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 817,
    "name": "الدهوارة",
    "num_bladia": "867",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 818,
    "name": "حمام النبايل",
    "num_bladia": "873",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 819,
    "name": "قالمة",
    "num_bladia": "871",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 820,
    "name": "بومهرة أحمد",
    "num_bladia": "866",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 821,
    "name": "عين بن بيضاء",
    "num_bladia": "853",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 822,
    "name": "بوشقوف",
    "num_bladia": "865",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 823,
    "name": "مجاز الصفاء",
    "num_bladia": "878",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 824,
    "name": "وادي فراغة",
    "num_bladia": "881",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 825,
    "name": "بوعاتي محمود",
    "num_bladia": "864",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 826,
    "name": "الفجوج",
    "num_bladia": "869",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 827,
    "name": "هيليوبوليس",
    "num_bladia": "874",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 828,
    "name": "مجاز عمار",
    "num_bladia": "877",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 829,
    "name": "هواري بومدين",
    "num_bladia": "879",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 830,
    "name": "رأس العقبة",
    "num_bladia": "883",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 831,
    "name": "سلاوة عنونة",
    "num_bladia": "885",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 832,
    "name": "جبالة الخميسي",
    "num_bladia": "868",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 833,
    "name": "برج صباط",
    "num_bladia": "861",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 834,
    "name": "وادي الزناتي",
    "num_bladia": "882",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 835,
    "name": "عين رقادة",
    "num_bladia": "856",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 836,
    "name": "عين العربي",
    "num_bladia": "854",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 837,
    "name": "عين مخلوف",
    "num_bladia": "855",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 838,
    "name": "تاملوكة",
    "num_bladia": "886",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 839,
    "name": "عين صندل",
    "num_bladia": "857",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 840,
    "name": "بوحشانة",
    "num_bladia": "862",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 841,
    "name": "Khezaras",
    "num_bladia": "876",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 842,
    "name": "بلخير",
    "num_bladia": "858",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 843,
    "name": "Beni Mezline",
    "num_bladia": "860",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 844,
    "name": "قلعة بوصبع",
    "num_bladia": "870",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 845,
    "name": "وادي الشحم",
    "num_bladia": "880",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 846,
    "name": "بن جراح",
    "num_bladia": "859",
    "wilaya": "قالمة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 847,
    "name": "ديدوش مراد",
    "num_bladia": "892",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 848,
    "name": "حامة بوزيان",
    "num_bladia": "894",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 849,
    "name": "بني حميدان",
    "num_bladia": "890",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 850,
    "name": "زيغود يوسف",
    "num_bladia": "898",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 851,
    "name": "عين السمارة",
    "num_bladia": "888",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 852,
    "name": "الخروب",
    "num_bladia": "893",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 853,
    "name": "أولاد رحمون",
    "num_bladia": "897",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 854,
    "name": "عين عبيد",
    "num_bladia": "887",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 855,
    "name": "أبن باديس الهرية",
    "num_bladia": "889",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 856,
    "name": "ابن زياد",
    "num_bladia": "895",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 857,
    "name": "بوجريو مسعود",
    "num_bladia": "896",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 858,
    "name": "قسنطينة",
    "num_bladia": "891",
    "wilaya": "قسنطينة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 859,
    "name": "أولاد هلال",
    "num_bladia": "943",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 860,
    "name": "السواقي",
    "num_bladia": "956",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 861,
    "name": "مفاتحة",
    "num_bladia": "934",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 862,
    "name": "السانق",
    "num_bladia": "947",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 863,
    "name": "العزيزية",
    "num_bladia": "920",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 864,
    "name": "مغراوة",
    "num_bladia": "930",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 865,
    "name": "ميهوب",
    "num_bladia": "935",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 866,
    "name": "Bouaiche",
    "num_bladia": "909",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 867,
    "name": "بوغزول",
    "num_bladia": "912",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 868,
    "name": "الشهبونية",
    "num_bladia": "914",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 869,
    "name": "حناشة",
    "num_bladia": "926",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 870,
    "name": "عوامري",
    "num_bladia": "936",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 871,
    "name": "وادي حربيل",
    "num_bladia": "937",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 872,
    "name": "بني سليمان",
    "num_bladia": "905",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 873,
    "name": "بوعيشون",
    "num_bladia": "910",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 874,
    "name": "أولاد بوعشرة",
    "num_bladia": "939",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 875,
    "name": "سي المحجوب",
    "num_bladia": "950",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 876,
    "name": "بوسكن",
    "num_bladia": "913",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 877,
    "name": "سيدي الربيع",
    "num_bladia": "953",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 878,
    "name": "البرواقية",
    "num_bladia": "906",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 879,
    "name": "أولاد دايد",
    "num_bladia": "941",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 880,
    "name": "الربعية",
    "num_bladia": "946",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 881,
    "name": "مجبر",
    "num_bladia": "932",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 882,
    "name": "ثلاث دوائر",
    "num_bladia": "961",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 883,
    "name": "الزبيرية",
    "num_bladia": "962",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 884,
    "name": "العيساوية",
    "num_bladia": "901",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 885,
    "name": "الحوضان",
    "num_bladia": "923",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 886,
    "name": "Mezerana",
    "num_bladia": "933",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 887,
    "name": "تابلاط",
    "num_bladia": "957",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 888,
    "name": "بوغار",
    "num_bladia": "908",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 889,
    "name": "سغوان",
    "num_bladia": "949",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 890,
    "name": "ذراع السمار",
    "num_bladia": "919",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 891,
    "name": "المدية",
    "num_bladia": "931",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 892,
    "name": "تمسقيدة",
    "num_bladia": "959",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 893,
    "name": "بن شكاو",
    "num_bladia": "904",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 894,
    "name": "الحمدانية",
    "num_bladia": "922",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 895,
    "name": "وزرة",
    "num_bladia": "945",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 896,
    "name": "تيزي مهدي",
    "num_bladia": "960",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 897,
    "name": "عين بوسيف",
    "num_bladia": "899",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 898,
    "name": "El Ouinet",
    "num_bladia": "925",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 899,
    "name": "الكاف الاخضر",
    "num_bladia": "927",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 900,
    "name": "أولاد امعرف",
    "num_bladia": "942",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 901,
    "name": "سيدي دامد",
    "num_bladia": "951",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 902,
    "name": "بعطة",
    "num_bladia": "903",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 903,
    "name": "العمارية",
    "num_bladia": "924",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 904,
    "name": "أولاد إبراهيم",
    "num_bladia": "940",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 905,
    "name": "بئر بن عابد",
    "num_bladia": "907",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 906,
    "name": "القلب الكبير",
    "num_bladia": "921",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 907,
    "name": "سدراية",
    "num_bladia": "948",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 908,
    "name": "عين اقصير",
    "num_bladia": "900",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 909,
    "name": "شلالة العذاورة",
    "num_bladia": "915",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 910,
    "name": "شنيقل",
    "num_bladia": "916",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 911,
    "name": "تفراوت",
    "num_bladia": "958",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 912,
    "name": "بوشراحيل",
    "num_bladia": "911",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 913,
    "name": "خمس جوامع",
    "num_bladia": "928",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 914,
    "name": "سيدي نعمان",
    "num_bladia": "952",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 915,
    "name": "عزيز",
    "num_bladia": "902",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 916,
    "name": "دراق",
    "num_bladia": "917",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 917,
    "name": "أم الجليل",
    "num_bladia": "944",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 918,
    "name": "جواب",
    "num_bladia": "918",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 919,
    "name": "سيدي زهار",
    "num_bladia": "954",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 920,
    "name": "Sidi Ziane",
    "num_bladia": "955",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 921,
    "name": "أولاد عنتر",
    "num_bladia": "938",
    "wilaya": "المدية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 922,
    "name": "فرناقة",
    "num_bladia": "970",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 923,
    "name": "وادي الخير",
    "num_bladia": "981",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 924,
    "name": "الحسيان (بني ياحي",
    "num_bladia": "973",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 925,
    "name": "حاسي ماماش",
    "num_bladia": "972",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 926,
    "name": "مزغران",
    "num_bladia": "977",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 927,
    "name": "ستيدية",
    "num_bladia": "992",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 928,
    "name": "عين تادلس",
    "num_bladia": "967",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 929,
    "name": "سيدي بلعطار",
    "num_bladia": "987",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 930,
    "name": "سور",
    "num_bladia": "991",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 931,
    "name": "عين بودينار",
    "num_bladia": "964",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 932,
    "name": "خير الدين",
    "num_bladia": "975",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 933,
    "name": "صيادة",
    "num_bladia": "985",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 934,
    "name": "سيدي علي",
    "num_bladia": "986",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 935,
    "name": "تزقايت",
    "num_bladia": "993",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 936,
    "name": "بن عبد المالك رمضان",
    "num_bladia": "968",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 937,
    "name": "مستغانم",
    "num_bladia": "979",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 938,
    "name": "حجاج",
    "num_bladia": "971",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 939,
    "name": "سيدي لخضر",
    "num_bladia": "988",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 940,
    "name": "عشعاشة",
    "num_bladia": "963",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 941,
    "name": "خضرة",
    "num_bladia": "974",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 942,
    "name": "نكمارية",
    "num_bladia": "980",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 943,
    "name": "أولاد بوغالم",
    "num_bladia": "982",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 944,
    "name": "بوقيراط",
    "num_bladia": "969",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 945,
    "name": "Safsaf",
    "num_bladia": "984",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 946,
    "name": "سيرات",
    "num_bladia": "989",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 947,
    "name": "السوافلية",
    "num_bladia": "990",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 948,
    "name": "عين سيدي الشريف",
    "num_bladia": "966",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 949,
    "name": "منصورة",
    "num_bladia": "976",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 950,
    "name": "ماسرة",
    "num_bladia": "978",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 951,
    "name": "الطواهرية",
    "num_bladia": "994",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 952,
    "name": "عين نويسي",
    "num_bladia": "965",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 953,
    "name": "أولاد مع الله",
    "num_bladia": "983",
    "wilaya": "مستغانم",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 954,
    "name": "شلال",
    "num_bladia": "1008",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 955,
    "name": "أولاد ماضي",
    "num_bladia": "1028",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 956,
    "name": "خطوطي سد الجير",
    "num_bladia": "1014",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 957,
    "name": "بلعايبة",
    "num_bladia": "1000",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 958,
    "name": "برهوم",
    "num_bladia": "1004",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 959,
    "name": "دهاهنة",
    "num_bladia": "1009",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 960,
    "name": "مقرة",
    "num_bladia": "1018",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 961,
    "name": "بني يلمان",
    "num_bladia": "1002",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 962,
    "name": "بوطي السايح",
    "num_bladia": "1007",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 963,
    "name": "سيدي عيسى",
    "num_bladia": "1033",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 964,
    "name": "عين الحجل",
    "num_bladia": "995",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 965,
    "name": "سيدي هجرس",
    "num_bladia": "1035",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 966,
    "name": "الهامل",
    "num_bladia": "1011",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 967,
    "name": "ولتام",
    "num_bladia": "1032",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 968,
    "name": "بن زوه",
    "num_bladia": "1003",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 969,
    "name": "أولاد سيدي ابراهيم",
    "num_bladia": "1030",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 970,
    "name": "Sidi Ameur",
    "num_bladia": "1034",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 971,
    "name": "تامسة",
    "num_bladia": "1039",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 972,
    "name": "بن سرور",
    "num_bladia": "1001",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 973,
    "name": "محمد بوضياف",
    "num_bladia": "1022",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 974,
    "name": "أولاد سليمان",
    "num_bladia": "1031",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 975,
    "name": "زرزور",
    "num_bladia": "1041",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 976,
    "name": "عين الملح",
    "num_bladia": "996",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 977,
    "name": "عين فارس",
    "num_bladia": "997",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 978,
    "name": "عين الريش",
    "num_bladia": "999",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 979,
    "name": "بئر فضة",
    "num_bladia": "1005",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 980,
    "name": "سيدي امحمد",
    "num_bladia": "1036",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 981,
    "name": "امجدل",
    "num_bladia": "1020",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 982,
    "name": "منعة",
    "num_bladia": "1021",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 983,
    "name": "جبل مساعد",
    "num_bladia": "1010",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 984,
    "name": "سليم",
    "num_bladia": "1037",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 985,
    "name": "المسيلة",
    "num_bladia": "1023",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 986,
    "name": "حمام الضلعة",
    "num_bladia": "1013",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 987,
    "name": "ونوغة",
    "num_bladia": "1025",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 988,
    "name": "أولاد منصور",
    "num_bladia": "1029",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 989,
    "name": "تارمونت",
    "num_bladia": "1040",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 990,
    "name": "المعاضيد",
    "num_bladia": "1016",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 991,
    "name": "M'tarfa",
    "num_bladia": "1024",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 992,
    "name": "معاريف",
    "num_bladia": "1017",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 993,
    "name": "أولاد دراج",
    "num_bladia": "1027",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 994,
    "name": "السوامع",
    "num_bladia": "1038",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 995,
    "name": "El Houamed",
    "num_bladia": "1012",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 996,
    "name": "خبانة",
    "num_bladia": "1015",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 997,
    "name": "مسيف",
    "num_bladia": "1019",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 998,
    "name": "عين الخضراء",
    "num_bladia": "998",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 999,
    "name": "أولاد عدي لقبالة",
    "num_bladia": "1026",
    "wilaya": "المسيلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1000,
    "name": "وادي الأبطال",
    "num_bladia": "1075",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1001,
    "name": "سيدي عبد المومن",
    "num_bladia": "1081",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1002,
    "name": "سجرارة",
    "num_bladia": "1078",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1003,
    "name": "المحمدية",
    "num_bladia": "1072",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1004,
    "name": "تيغنيف",
    "num_bladia": "1085",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1005,
    "name": "مقطع الدوز",
    "num_bladia": "1071",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1006,
    "name": "فراقيق",
    "num_bladia": "1060",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1007,
    "name": "الغمري",
    "num_bladia": "1054",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1008,
    "name": "زهانة",
    "num_bladia": "1087",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1009,
    "name": "القعدة",
    "num_bladia": "1053",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1010,
    "name": "رأس عين عميروش",
    "num_bladia": "1077",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1011,
    "name": "عقاز",
    "num_bladia": "1074",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1012,
    "name": "العلايمية",
    "num_bladia": "1046",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1013,
    "name": "سيق",
    "num_bladia": "1084",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1014,
    "name": "الشرفاء",
    "num_bladia": "1051",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1015,
    "name": "بوهني",
    "num_bladia": "1049",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1016,
    "name": "المأمونية",
    "num_bladia": "1058",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1017,
    "name": "القطنة",
    "num_bladia": "1055",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1018,
    "name": "عين فارس",
    "num_bladia": "1042",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1019,
    "name": "غروس",
    "num_bladia": "1062",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1020,
    "name": "بنيان",
    "num_bladia": "1048",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1021,
    "name": "عوف",
    "num_bladia": "1047",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1022,
    "name": "قرجوم",
    "num_bladia": "1064",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1023,
    "name": "عين أفرص",
    "num_bladia": "1045",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1024,
    "name": "عين فكان",
    "num_bladia": "1043",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1025,
    "name": "خلوية",
    "num_bladia": "1066",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1026,
    "name": "المنور",
    "num_bladia": "1059",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1027,
    "name": "البرج",
    "num_bladia": "1052",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1028,
    "name": "سيدي بوسعيد",
    "num_bladia": "1082",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1029,
    "name": "المطمور",
    "num_bladia": "1070",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1030,
    "name": "سيدي قادة",
    "num_bladia": "1083",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1031,
    "name": "ماقضة",
    "num_bladia": "1067",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1032,
    "name": "معسكر",
    "num_bladia": "1069",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1033,
    "name": "بوحنيفية",
    "num_bladia": "1050",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1034,
    "name": "غريس",
    "num_bladia": "1063",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1035,
    "name": "حسين",
    "num_bladia": "1065",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1036,
    "name": "القرط",
    "num_bladia": "1057",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1037,
    "name": "فروحة",
    "num_bladia": "1061",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1038,
    "name": "Tizi",
    "num_bladia": "1086",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1039,
    "name": "السهايلية",
    "num_bladia": "1079",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1040,
    "name": "ماوسة",
    "num_bladia": "1068",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1041,
    "name": "سيدي عبد الجبار",
    "num_bladia": "1080",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1042,
    "name": "الحشم",
    "num_bladia": "1056",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1043,
    "name": "نسمط",
    "num_bladia": "1073",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1044,
    "name": "زلامطة",
    "num_bladia": "1088",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1045,
    "name": "عين فراح",
    "num_bladia": "1044",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1046,
    "name": "وادي التاغية",
    "num_bladia": "1076",
    "wilaya": "معسكر",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1047,
    "name": "ورقلة",
    "num_bladia": "1101",
    "wilaya": "ورقلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1048,
    "name": "حاسي مسعود",
    "num_bladia": "1096",
    "wilaya": "ورقلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1049,
    "name": "عين البيضاء",
    "num_bladia": "1089",
    "wilaya": "ورقلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1050,
    "name": "حاسي بن عبد الله",
    "num_bladia": "1095",
    "wilaya": "ورقلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1051,
    "name": "سيدي خويلد",
    "num_bladia": "1103",
    "wilaya": "ورقلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1052,
    "name": "البرمة",
    "num_bladia": "1093",
    "wilaya": "ورقلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1053,
    "name": "الرويسات",
    "num_bladia": "1102",
    "wilaya": "ورقلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1054,
    "name": "انقوسة",
    "num_bladia": "1100",
    "wilaya": "ورقلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1055,
    "name": "سيدي الشحمي",
    "num_bladia": "1134",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1056,
    "name": "حاسي مفسوخ",
    "num_bladia": "1127",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1057,
    "name": "بئر الجير",
    "num_bladia": "1116",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1058,
    "name": "حاسي بن عقبة",
    "num_bladia": "1125",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1059,
    "name": "قديل",
    "num_bladia": "1124",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1060,
    "name": "حاسي بونيف",
    "num_bladia": "1126",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1061,
    "name": "الكرمة",
    "num_bladia": "1122",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1062,
    "name": "السانية",
    "num_bladia": "1123",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1063,
    "name": "بن فريحة",
    "num_bladia": "1114",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1064,
    "name": "أرزيو",
    "num_bladia": "1113",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1065,
    "name": "سيدي بن يبقى",
    "num_bladia": "1133",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1066,
    "name": "عين البية",
    "num_bladia": "1110",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1067,
    "name": "بطيوة",
    "num_bladia": "1115",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1068,
    "name": "مرسى الحجاج",
    "num_bladia": "1128",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1069,
    "name": "عين الترك",
    "num_bladia": "1112",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1070,
    "name": "وهران",
    "num_bladia": "1131",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1071,
    "name": "العنصر",
    "num_bladia": "1120",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1072,
    "name": "المرسى الكبير",
    "num_bladia": "1129",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1073,
    "name": "بوفاتيس",
    "num_bladia": "1117",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1074,
    "name": "البراية",
    "num_bladia": "1121",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1075,
    "name": "وادي تليلات",
    "num_bladia": "1132",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1076,
    "name": "عين الكرمة",
    "num_bladia": "1111",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1077,
    "name": "بوتليليس",
    "num_bladia": "1119",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1078,
    "name": "مسرغين",
    "num_bladia": "1130",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1079,
    "name": "بوسفر",
    "num_bladia": "1118",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1080,
    "name": "طفراوي",
    "num_bladia": "1135",
    "wilaya": "وهران",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1081,
    "name": "عين العراك",
    "num_bladia": "1136",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1082,
    "name": "كراكدة",
    "num_bladia": "1151",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1083,
    "name": "سيدي سليمان",
    "num_bladia": "1154",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1084,
    "name": "Sidi Ameur",
    "num_bladia": "1153",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1085,
    "name": "بوعلام",
    "num_bladia": "1138",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1086,
    "name": "البنود",
    "num_bladia": "1146",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1087,
    "name": "بوقطب",
    "num_bladia": "1139",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1088,
    "name": "الخيثر",
    "num_bladia": "1147",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1089,
    "name": "توسمولين",
    "num_bladia": "1157",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1090,
    "name": "سيدي طيفور",
    "num_bladia": "1155",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1091,
    "name": "ستيتن",
    "num_bladia": "1156",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1092,
    "name": "البيض",
    "num_bladia": "1144",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1093,
    "name": "رقاصة",
    "num_bladia": "1152",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1094,
    "name": "المحرة",
    "num_bladia": "1148",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1095,
    "name": "الكاف الأحمر",
    "num_bladia": "1150",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1096,
    "name": "بريزينة",
    "num_bladia": "1141",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1097,
    "name": "الغاسول",
    "num_bladia": "1149",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1098,
    "name": "بوسمغون",
    "num_bladia": "1140",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1099,
    "name": "الشقيق",
    "num_bladia": "1142",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1100,
    "name": "شلالة",
    "num_bladia": "1143",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1101,
    "name": "اربوات",
    "num_bladia": "1137",
    "wilaya": "البيض",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1102,
    "name": "برج عمر إدريس",
    "num_bladia": "1159",
    "wilaya": "إيليزي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1103,
    "name": "دبداب",
    "num_bladia": "1160",
    "wilaya": "إيليزي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1104,
    "name": "إن أمناس",
    "num_bladia": "1163",
    "wilaya": "إيليزي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1105,
    "name": "إيليزي",
    "num_bladia": "1162",
    "wilaya": "إيليزي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1106,
    "name": "Elhammadia",
    "num_bladia": "1177",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1107,
    "name": "أولاد سيدي ابراهيم",
    "num_bladia": "1189",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1108,
    "name": "عين تاغروت",
    "num_bladia": "1164",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1109,
    "name": "تيكستار",
    "num_bladia": "1197",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1110,
    "name": "بليمور",
    "num_bladia": "1167",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1111,
    "name": "العناصر",
    "num_bladia": "1176",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1112,
    "name": "غيلاسة",
    "num_bladia": "1180",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1113,
    "name": "تقلعيت",
    "num_bladia": "1194",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1114,
    "name": "برج الغدير",
    "num_bladia": "1170",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1115,
    "name": "العش",
    "num_bladia": "1174",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1116,
    "name": "سيدي أمبارك",
    "num_bladia": "1192",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1117,
    "name": "خليل",
    "num_bladia": "1183",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1118,
    "name": "بئر قاصد علي",
    "num_bladia": "1169",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1119,
    "name": "تفرق",
    "num_bladia": "1193",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1120,
    "name": "الماين",
    "num_bladia": "1178",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1121,
    "name": "جعافرة",
    "num_bladia": "1173",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1122,
    "name": "القلة",
    "num_bladia": "1172",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1123,
    "name": "ثنية النصر",
    "num_bladia": "1196",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1124,
    "name": "المهير",
    "num_bladia": "1179",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1125,
    "name": "القصور",
    "num_bladia": "1184",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1126,
    "name": "المنصورة",
    "num_bladia": "1185",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1127,
    "name": "حرازة",
    "num_bladia": "1181",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1128,
    "name": "الرابطة",
    "num_bladia": "1190",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1129,
    "name": "الياشير",
    "num_bladia": "1175",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1130,
    "name": "حسناوة",
    "num_bladia": "1182",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1131,
    "name": "مجانة",
    "num_bladia": "1186",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1132,
    "name": "عين تسرة",
    "num_bladia": "1165",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1133,
    "name": "أولاد أبراهم",
    "num_bladia": "1187",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1134,
    "name": "رأس الوادي",
    "num_bladia": "1191",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1135,
    "name": "برج زمورة",
    "num_bladia": "1171",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1136,
    "name": "أولاد دحمان",
    "num_bladia": "1188",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1137,
    "name": "تسامرت",
    "num_bladia": "1195",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1138,
    "name": "برج بوعريرج",
    "num_bladia": "1166",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1139,
    "name": "بن داود",
    "num_bladia": "1168",
    "wilaya": "Bordj Bou Arreridj",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1140,
    "name": "El Kharrouba",
    "num_bladia": "1212",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1141,
    "name": "دلس",
    "num_bladia": "1210",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1142,
    "name": "بن شود",
    "num_bladia": "1201",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1143,
    "name": "أعفير",
    "num_bladia": "1198",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1144,
    "name": "الثنية",
    "num_bladia": "1226",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1145,
    "name": "بني عمران",
    "num_bladia": "1202",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1146,
    "name": "خميس الخشنة",
    "num_bladia": "1215",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1147,
    "name": "عمال",
    "num_bladia": "1199",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1148,
    "name": "تيمزريت",
    "num_bladia": "1228",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1149,
    "name": "زموري",
    "num_bladia": "1229",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1150,
    "name": "الاربعطاش",
    "num_bladia": "1216",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1151,
    "name": "يسر",
    "num_bladia": "1214",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1152,
    "name": "شعبة العامر",
    "num_bladia": "1208",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1153,
    "name": "أولاد عيسى",
    "num_bladia": "1219",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1154,
    "name": "الناصرية",
    "num_bladia": "1218",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1155,
    "name": "بوزقزة قدارة",
    "num_bladia": "1207",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1156,
    "name": "Souk El Had",
    "num_bladia": "1224",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1157,
    "name": "سيدي داود",
    "num_bladia": "1223",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1158,
    "name": "بغلية",
    "num_bladia": "1200",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1159,
    "name": "لقاطة",
    "num_bladia": "1217",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1160,
    "name": "جنات",
    "num_bladia": "1211",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1161,
    "name": "تيجلابين",
    "num_bladia": "1227",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1162,
    "name": "سي مصطفى",
    "num_bladia": "1222",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1163,
    "name": "أولاد هداج",
    "num_bladia": "1220",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1164,
    "name": "أولاد موسى",
    "num_bladia": "1221",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1165,
    "name": "بومرداس",
    "num_bladia": "1206",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1166,
    "name": "قورصو",
    "num_bladia": "1209",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1167,
    "name": "برج منايل",
    "num_bladia": "1203",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1168,
    "name": "بودواو",
    "num_bladia": "1204",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1169,
    "name": "بودواو البحري",
    "num_bladia": "1205",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1170,
    "name": "تاورقة",
    "num_bladia": "1225",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1171,
    "name": "حمادي",
    "num_bladia": "1213",
    "wilaya": "بومرداس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1172,
    "name": "عين العسل",
    "num_bladia": "1230",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1173,
    "name": "بوقوس",
    "num_bladia": "1236",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1174,
    "name": "الطارف",
    "num_bladia": "1246",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1175,
    "name": "الزيتونة",
    "num_bladia": "1253",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1176,
    "name": "بسباس",
    "num_bladia": "1235",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1177,
    "name": "عين الكرمة",
    "num_bladia": "1231",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1178,
    "name": "بوحجار",
    "num_bladia": "1237",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1179,
    "name": "حمام بني صالح",
    "num_bladia": "1247",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1180,
    "name": "وادي الزيتون",
    "num_bladia": "1249",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1181,
    "name": "بن مهيدي",
    "num_bladia": "1233",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1182,
    "name": "بريحان",
    "num_bladia": "1234",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1183,
    "name": "شبيطة مختار",
    "num_bladia": "1239",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1184,
    "name": "الشط",
    "num_bladia": "1243",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1185,
    "name": "العيون",
    "num_bladia": "1244",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1186,
    "name": "القالة",
    "num_bladia": "1245",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1187,
    "name": "السوارخ",
    "num_bladia": "1251",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1188,
    "name": "زريزر",
    "num_bladia": "1252",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1189,
    "name": "بوثلجة",
    "num_bladia": "1238",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1190,
    "name": "الشافية",
    "num_bladia": "1240",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1191,
    "name": "بحيرة الطيور",
    "num_bladia": "1248",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1192,
    "name": "شحاني",
    "num_bladia": "1241",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1193,
    "name": "رمل السوق",
    "num_bladia": "1250",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1194,
    "name": "عصفور",
    "num_bladia": "1232",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1195,
    "name": "الذرعـان",
    "num_bladia": "1242",
    "wilaya": "الطارف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1196,
    "name": "تندوف",
    "num_bladia": "1255",
    "wilaya": "تندوف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1197,
    "name": "أم العسل",
    "num_bladia": "1254",
    "wilaya": "تندوف",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1198,
    "name": "خميستي",
    "num_bladia": "1262",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1199,
    "name": "ثنية الاحد",
    "num_bladia": "1275",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1200,
    "name": "أولاد بسام",
    "num_bladia": "1269",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1201,
    "name": "سيدي بوتوشنت",
    "num_bladia": "1271",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1202,
    "name": "تيسمسيلت",
    "num_bladia": "1276",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1203,
    "name": "سيدي العنتري",
    "num_bladia": "1272",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1204,
    "name": "بني شعيب",
    "num_bladia": "1257",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1205,
    "name": "بني لحسن",
    "num_bladia": "1258",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1206,
    "name": "سيدي عابد",
    "num_bladia": "1270",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1207,
    "name": "سيدي سليمان",
    "num_bladia": "1273",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1208,
    "name": "بوقائد",
    "num_bladia": "1261",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1209,
    "name": "الأربعاء",
    "num_bladia": "1263",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1210,
    "name": "الأزهرية",
    "num_bladia": "1266",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1211,
    "name": "لرجام",
    "num_bladia": "1264",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1212,
    "name": "الملعب",
    "num_bladia": "1268",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1213,
    "name": "العيون",
    "num_bladia": "1265",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1214,
    "name": "تملاحت",
    "num_bladia": "1274",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1215,
    "name": "اليوسفية",
    "num_bladia": "1277",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1216,
    "name": "برج الأمير عبد القادر",
    "num_bladia": "1260",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1217,
    "name": "عماري",
    "num_bladia": "1256",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1218,
    "name": "المعاصم",
    "num_bladia": "1267",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1219,
    "name": "برج بونعامة",
    "num_bladia": "1259",
    "wilaya": "تيسمسيلت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1220,
    "name": "دوار الماء",
    "num_bladia": "1282",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1221,
    "name": "العقلة",
    "num_bladia": "1283",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1222,
    "name": "المقرن",
    "num_bladia": "1291",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1223,
    "name": "سيدي عون",
    "num_bladia": "1301",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1224,
    "name": "اميه وانسة",
    "num_bladia": "1292",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1225,
    "name": "كوينين",
    "num_bladia": "1290",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1226,
    "name": "البياضة",
    "num_bladia": "1278",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1227,
    "name": "النخلة",
    "num_bladia": "1294",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1228,
    "name": "الرباح",
    "num_bladia": "1299",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1229,
    "name": "قمار",
    "num_bladia": "1286",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1230,
    "name": "بن  قشة",
    "num_bladia": "1279",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1231,
    "name": "ورماس",
    "num_bladia": "1297",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1232,
    "name": "تغزوت",
    "num_bladia": "1304",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1233,
    "name": "الحمراية",
    "num_bladia": "1287",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1234,
    "name": "الرقيبة",
    "num_bladia": "1298",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1235,
    "name": "الدبيلة",
    "num_bladia": "1280",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1236,
    "name": "حساني عبد الكريم",
    "num_bladia": "1288",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1237,
    "name": "حاسي خليفة",
    "num_bladia": "1289",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1238,
    "name": "الطريفاوي",
    "num_bladia": "1307",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1239,
    "name": "الطالب العربي",
    "num_bladia": "1305",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1240,
    "name": "وادي العلندة",
    "num_bladia": "1295",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1241,
    "name": "الوادي",
    "num_bladia": "1285",
    "wilaya": "الوادي",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1242,
    "name": "خيران",
    "num_bladia": "1321",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1243,
    "name": "بابار",
    "num_bladia": "1309",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1244,
    "name": "المحمل",
    "num_bladia": "1316",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1245,
    "name": "أولاد رشاش",
    "num_bladia": "1324",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1246,
    "name": "جلال",
    "num_bladia": "1314",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1247,
    "name": "يابوس",
    "num_bladia": "1328",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1248,
    "name": "خنشلة",
    "num_bladia": "1320",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1249,
    "name": "قايس",
    "num_bladia": "1319",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1250,
    "name": "شلية",
    "num_bladia": "1313",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1251,
    "name": "الرميلة",
    "num_bladia": "1325",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1252,
    "name": "تاوزيانت",
    "num_bladia": "1327",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1253,
    "name": "بغاي",
    "num_bladia": "1310",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1254,
    "name": "الحامة",
    "num_bladia": "1315",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1255,
    "name": "انسيغة",
    "num_bladia": "1318",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1256,
    "name": "طامزة",
    "num_bladia": "1326",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1257,
    "name": "عين الطويلة",
    "num_bladia": "1308",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1258,
    "name": "متوسة",
    "num_bladia": "1323",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1259,
    "name": "بوحمامة",
    "num_bladia": "1311",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1260,
    "name": "El Oueldja",
    "num_bladia": "1317",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1261,
    "name": "مصارة",
    "num_bladia": "1322",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1262,
    "name": "ششار",
    "num_bladia": "1312",
    "wilaya": "خنشلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1263,
    "name": "سوق أهراس",
    "num_bladia": "1349",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1264,
    "name": "عين السلطان",
    "num_bladia": "1329",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1265,
    "name": "سدراتة",
    "num_bladia": "1347",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1266,
    "name": "الحنانشة",
    "num_bladia": "1334",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1267,
    "name": "المشروحة",
    "num_bladia": "1337",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1268,
    "name": "عين الزانة",
    "num_bladia": "1330",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1269,
    "name": "أولاد إدريس",
    "num_bladia": "1341",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1270,
    "name": "ترقالت",
    "num_bladia": "1351",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1271,
    "name": "أم العظايم",
    "num_bladia": "1343",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1272,
    "name": "وادي الكبريت",
    "num_bladia": "1340",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1273,
    "name": "تيفاش",
    "num_bladia": "1352",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1274,
    "name": "الراقوبة",
    "num_bladia": "1345",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1275,
    "name": "الدريعة",
    "num_bladia": "1332",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1276,
    "name": "تاورة",
    "num_bladia": "1350",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1277,
    "name": "الزعرورية",
    "num_bladia": "1353",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1278,
    "name": "الحدادة",
    "num_bladia": "1333",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1279,
    "name": "الخضارة",
    "num_bladia": "1335",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1280,
    "name": "أولاد مومن",
    "num_bladia": "1342",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1281,
    "name": "المراهنة",
    "num_bladia": "1339",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1282,
    "name": "ويلان",
    "num_bladia": "1344",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1283,
    "name": "Sidi Fredj",
    "num_bladia": "1348",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1284,
    "name": "بئر بوحوش",
    "num_bladia": "1331",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1285,
    "name": "سافل الويدان",
    "num_bladia": "1346",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1286,
    "name": "خميسة",
    "num_bladia": "1336",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1287,
    "name": "مداوروش",
    "num_bladia": "1338",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1288,
    "name": "الزوابي",
    "num_bladia": "1354",
    "wilaya": "سوق أهراس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1289,
    "name": "حجوط",
    "num_bladia": "1369",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1290,
    "name": "مراد",
    "num_bladia": "1375",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1291,
    "name": "مناصر",
    "num_bladia": "1374",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1292,
    "name": "أغبال",
    "num_bladia": "1355",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1293,
    "name": "الناظور",
    "num_bladia": "1377",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1294,
    "name": "Sidi-Amar",
    "num_bladia": "1381",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1295,
    "name": "قوراية",
    "num_bladia": "1368",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1296,
    "name": "مسلمون",
    "num_bladia": "1376",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1297,
    "name": "شرشال",
    "num_bladia": "1364",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1298,
    "name": "حجرة النص",
    "num_bladia": "1370",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1299,
    "name": "سيدي غيلاس",
    "num_bladia": "1378",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1300,
    "name": "الداموس",
    "num_bladia": "1365",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1301,
    "name": "الأرهاط",
    "num_bladia": "1373",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1302,
    "name": "فوكة",
    "num_bladia": "1367",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1303,
    "name": "عين تاقورايت",
    "num_bladia": "1357",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1304,
    "name": "بوهارون",
    "num_bladia": "1360",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1305,
    "name": "بواسماعيل",
    "num_bladia": "1361",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1306,
    "name": "خميستي",
    "num_bladia": "1371",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1307,
    "name": "أحمر العين",
    "num_bladia": "1356",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1308,
    "name": "بورقيقة",
    "num_bladia": "1362",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1309,
    "name": "دواودة",
    "num_bladia": "1366",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1310,
    "name": "سيدي راشد",
    "num_bladia": "1379",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1311,
    "name": "الحطاطبة",
    "num_bladia": "1358",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1312,
    "name": "الشعيبة",
    "num_bladia": "1363",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1313,
    "name": "القليعة",
    "num_bladia": "1372",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1314,
    "name": "سيدي سميان",
    "num_bladia": "1380",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1315,
    "name": "تيبازة",
    "num_bladia": "1382",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1316,
    "name": "بني ميلك",
    "num_bladia": "1359",
    "wilaya": "تيبازة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1317,
    "name": "مشيرة",
    "num_bladia": "1394",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1318,
    "name": "العياضي برباس",
    "num_bladia": "1393",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1319,
    "name": " عين البيضاء أحريش",
    "num_bladia": "1384",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1320,
    "name": "تسالة لمطاعي",
    "num_bladia": "1411",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1321,
    "name": "ترعي باينان",
    "num_bladia": "1410",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1322,
    "name": "اعميرة اراس",
    "num_bladia": "1387",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1323,
    "name": "تسدان حدادة",
    "num_bladia": "1408",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1324,
    "name": "مينار زارزة",
    "num_bladia": "1399",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1325,
    "name": "سيدي مروان",
    "num_bladia": "1406",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1326,
    "name": "الشيقارة",
    "num_bladia": "1391",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1327,
    "name": "حمالة",
    "num_bladia": "1397",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1328,
    "name": "القرارم قوقة",
    "num_bladia": "1396",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1329,
    "name": "تيبرقنت",
    "num_bladia": "1412",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1330,
    "name": "الرواشد",
    "num_bladia": "1404",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1331,
    "name": "دراحي بوصلاح",
    "num_bladia": "1392",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1332,
    "name": "زغاية",
    "num_bladia": "1414",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1333,
    "name": "وادي النجاء",
    "num_bladia": "1401",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1334,
    "name": "أحمد راشدي",
    "num_bladia": "1383",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1335,
    "name": "تاجنانت",
    "num_bladia": "1407",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1336,
    "name": "عين الملوك",
    "num_bladia": "1385",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1337,
    "name": "أولاد اخلوف",
    "num_bladia": "1403",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1338,
    "name": "بن يحي عبد الرحمن",
    "num_bladia": "1388",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1339,
    "name": "التلاغمة",
    "num_bladia": "1409",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1340,
    "name": "وادي سقان",
    "num_bladia": "1402",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1341,
    "name": "وادي العثمانية",
    "num_bladia": "1400",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1342,
    "name": "عين التين",
    "num_bladia": "1386",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1343,
    "name": "شلغوم العيد",
    "num_bladia": "1390",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1344,
    "name": "يحي بني قشة",
    "num_bladia": "1413",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1345,
    "name": "فرجيوة",
    "num_bladia": "1395",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1346,
    "name": "سيدي خليفة",
    "num_bladia": "1405",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1347,
    "name": "ميلة",
    "num_bladia": "1398",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1348,
    "name": "بوحاتم",
    "num_bladia": "1389",
    "wilaya": "ميلة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1349,
    "name": "خميس مليانة",
    "num_bladia": "1440",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1350,
    "name": "سيدي لخضر",
    "num_bladia": "1446",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1351,
    "name": "عين البنيان",
    "num_bladia": "1415",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1352,
    "name": "عين التركي",
    "num_bladia": "1420",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1353,
    "name": "حمام ريغة",
    "num_bladia": "1437",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1354,
    "name": "بوراشد",
    "num_bladia": "1429",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1355,
    "name": "الحسينية",
    "num_bladia": "1439",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1356,
    "name": "جليدة",
    "num_bladia": "1430",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1357,
    "name": "عريب",
    "num_bladia": "1421",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1358,
    "name": "جمعة أولاد الشيخ",
    "num_bladia": "1431",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1359,
    "name": "العامرة",
    "num_bladia": "1434",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1360,
    "name": "العطاف",
    "num_bladia": "1435",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1361,
    "name": "تبركانين",
    "num_bladia": "1449",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1362,
    "name": "عين بويحيى",
    "num_bladia": "1416",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1363,
    "name": "العبادية",
    "num_bladia": "1433",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1364,
    "name": "تاشتة زقاغة",
    "num_bladia": "1447",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1365,
    "name": "بربوش",
    "num_bladia": "1422",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1366,
    "name": "جندل",
    "num_bladia": "1432",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1367,
    "name": "بن علال",
    "num_bladia": "1425",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1368,
    "name": "وادي الشرفاء",
    "num_bladia": "1443",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1369,
    "name": "بومدفع",
    "num_bladia": "1428",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1370,
    "name": "عين الاشياخ",
    "num_bladia": "1418",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1371,
    "name": "عين السلطان",
    "num_bladia": "1419",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1372,
    "name": "واد الجمعة",
    "num_bladia": "1444",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1373,
    "name": "الماين",
    "num_bladia": "1436",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1374,
    "name": "الروينة",
    "num_bladia": "1445",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1375,
    "name": "زدين",
    "num_bladia": "1450",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1376,
    "name": "بئر ولد خليفة",
    "num_bladia": "1426",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1377,
    "name": "برج الأمير خالد",
    "num_bladia": "1427",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1378,
    "name": "طارق بن زياد",
    "num_bladia": "1448",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1379,
    "name": "بطحية",
    "num_bladia": "1423",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1380,
    "name": "بلعاص",
    "num_bladia": "1424",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1381,
    "name": "الحسانية",
    "num_bladia": "1438",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1382,
    "name": "عين الدفلى",
    "num_bladia": "1417",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1383,
    "name": "مليانة",
    "num_bladia": "1442",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1384,
    "name": "المخاطرية",
    "num_bladia": "1441",
    "wilaya": "عين الدفلى",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1385,
    "name": "تيوت",
    "num_bladia": "1462",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1386,
    "name": "مغرار",
    "num_bladia": "1459",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1387,
    "name": "عسلة",
    "num_bladia": "1453",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1388,
    "name": "القصدير",
    "num_bladia": "1456",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1389,
    "name": "مكمن بن عمار",
    "num_bladia": "1457",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1390,
    "name": "عين الصفراء",
    "num_bladia": "1452",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1391,
    "name": "المشرية",
    "num_bladia": "1458",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1392,
    "name": "البيوض",
    "num_bladia": "1455",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1393,
    "name": "عين بن خليل",
    "num_bladia": "1451",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1394,
    "name": "النعامة",
    "num_bladia": "1460",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1395,
    "name": "جنين بورزق",
    "num_bladia": "1454",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1396,
    "name": "سفيسيفة",
    "num_bladia": "1461",
    "wilaya": "النعامة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1397,
    "name": "سيدي بومدين",
    "num_bladia": "1486",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1398,
    "name": "تامزورة",
    "num_bladia": "1489",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1399,
    "name": "شعبة اللحم",
    "num_bladia": "1471",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1400,
    "name": "المالح",
    "num_bladia": "1474",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1401,
    "name": "أولاد الكيحل",
    "num_bladia": "1483",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1402,
    "name": "Chentouf",
    "num_bladia": "1472",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1403,
    "name": "تارقة",
    "num_bladia": "1490",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1404,
    "name": "وادي الصباح",
    "num_bladia": "1481",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1405,
    "name": "العامرية",
    "num_bladia": "1473",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1406,
    "name": "حاسي الغلة",
    "num_bladia": "1479",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1407,
    "name": "أولاد بوجمعة",
    "num_bladia": "1482",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1408,
    "name": "أغلال",
    "num_bladia": "1463",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1409,
    "name": "عين الكيحل",
    "num_bladia": "1465",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1410,
    "name": "عين الطلبة",
    "num_bladia": "1467",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1411,
    "name": "عقب الليل",
    "num_bladia": "1468",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1412,
    "name": "بني صاف",
    "num_bladia": "1469",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1413,
    "name": "Hassasna",
    "num_bladia": "1478",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1414,
    "name": "الامير عبد القادر",
    "num_bladia": "1476",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1415,
    "name": "سيدي صافي",
    "num_bladia": "1488",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1416,
    "name": "ولهاصة الغرابة",
    "num_bladia": "1484",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1417,
    "name": "سيدي ورياش",
    "num_bladia": "1487",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1418,
    "name": "عين الأربعاء",
    "num_bladia": "1464",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1419,
    "name": "المساعيد",
    "num_bladia": "1475",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1420,
    "name": "وادي برقش",
    "num_bladia": "1480",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1421,
    "name": "سيدي بن عدة",
    "num_bladia": "1485",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1422,
    "name": "عين تموشنت",
    "num_bladia": "1466",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1423,
    "name": "بوزجار",
    "num_bladia": "1470",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1424,
    "name": "حمام بوحجر",
    "num_bladia": "1477",
    "wilaya": "عين تموشنت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1425,
    "name": "ضاية بن ضحوة",
    "num_bladia": "1493",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1426,
    "name": "المنصورة",
    "num_bladia": "1500",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1427,
    "name": "العطف",
    "num_bladia": "1494",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1428,
    "name": "بونورة",
    "num_bladia": "1492",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1429,
    "name": "زلفانة",
    "num_bladia": "1503",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1430,
    "name": "القرارة",
    "num_bladia": "1497",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1431,
    "name": "سبسب",
    "num_bladia": "1502",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1432,
    "name": "متليلي",
    "num_bladia": "1501",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1433,
    "name": "بريان",
    "num_bladia": "1491",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1434,
    "name": "غرداية",
    "num_bladia": "1496",
    "wilaya": "غرداية",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1435,
    "name": "القطار",
    "num_bladia": "1516",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1436,
    "name": "أولاد يعيش",
    "num_bladia": "1530",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1437,
    "name": "بني درقن",
    "num_bladia": "1509",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1438,
    "name": "دار بن عبد الله",
    "num_bladia": "1511",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1439,
    "name": "زمورة",
    "num_bladia": "1541",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1440,
    "name": "جديوية",
    "num_bladia": "1512",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1441,
    "name": "حمري",
    "num_bladia": "1519",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1442,
    "name": "بلعسل بوزقزة",
    "num_bladia": "1507",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1443,
    "name": "المطمر",
    "num_bladia": "1517",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1444,
    "name": "سيدي  خطاب",
    "num_bladia": "1534",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1445,
    "name": "سيدي امحمد بن عودة",
    "num_bladia": "1537",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1446,
    "name": "عين طارق",
    "num_bladia": "1505",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1447,
    "name": "حد الشكالة",
    "num_bladia": "1518",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1448,
    "name": "الولجة",
    "num_bladia": "1515",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1449,
    "name": "مازونة",
    "num_bladia": "1522",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1450,
    "name": "عين الرحمة",
    "num_bladia": "1504",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1451,
    "name": "القلعة",
    "num_bladia": "1520",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1452,
    "name": "سيدي سعادة",
    "num_bladia": "1538",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1453,
    "name": "يلل",
    "num_bladia": "1540",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1454,
    "name": "Souk El Had",
    "num_bladia": "1539",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1455,
    "name": "منداس",
    "num_bladia": "1524",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1456,
    "name": "وادي السلام",
    "num_bladia": "1528",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1457,
    "name": "سيدي لزرق",
    "num_bladia": "1535",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1458,
    "name": "عمي موسى",
    "num_bladia": "1506",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1459,
    "name": "واريزان",
    "num_bladia": "1526",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1460,
    "name": "مرجة سيدي عابد",
    "num_bladia": "1525",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1461,
    "name": "أولاد سيدي الميهوب",
    "num_bladia": "1531",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1462,
    "name": "بن داود",
    "num_bladia": "1508",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1463,
    "name": "وادي رهيو",
    "num_bladia": "1529",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1464,
    "name": "الحاسي",
    "num_bladia": "1513",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1465,
    "name": "سيدي أمحمد بن علي",
    "num_bladia": "1536",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1466,
    "name": "مديونة",
    "num_bladia": "1523",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1467,
    "name": "بني زنطيس",
    "num_bladia": "1510",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1468,
    "name": "وادي الجمعة",
    "num_bladia": "1527",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1469,
    "name": "لحلاف",
    "num_bladia": "1521",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1470,
    "name": "غليزان",
    "num_bladia": "1533",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1471,
    "name": "الحمادنة",
    "num_bladia": "1514",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1472,
    "name": "الرمكة",
    "num_bladia": "1532",
    "wilaya": "غليزان",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1473,
    "name": "تنركوك",
    "num_bladia": "25",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1474,
    "name": "تيميمون",
    "num_bladia": "24",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1475,
    "name": "أولاد السعيد",
    "num_bladia": "15",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1476,
    "name": "المطارفة",
    "num_bladia": "12",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1477,
    "name": "طالمين",
    "num_bladia": "19",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1478,
    "name": "أولاد عيسى",
    "num_bladia": "14",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1479,
    "name": "شروين",
    "num_bladia": "07",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1480,
    "name": "أوقروت",
    "num_bladia": "03",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1481,
    "name": "دلدول",
    "num_bladia": "08",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1482,
    "name": "قصر قدور",
    "num_bladia": "11",
    "wilaya": "تيميمون",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1483,
    "name": "تيمياوين",
    "num_bladia": "23",
    "wilaya": "برج باجي مختار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1484,
    "name": "برج باجي مختار",
    "num_bladia": "05",
    "wilaya": "برج باجي مختار",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1485,
    "name": "رأس الميعاد",
    "num_bladia": "258",
    "wilaya": "أولاد جلال",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1486,
    "name": "بسباس",
    "num_bladia": "232",
    "wilaya": "أولاد جلال",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1487,
    "name": "سيدي  خالد",
    "num_bladia": "259",
    "wilaya": "أولاد جلال",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1488,
    "name": "الدوسن",
    "num_bladia": "240",
    "wilaya": "أولاد جلال",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1489,
    "name": "الشعيبة",
    "num_bladia": "237",
    "wilaya": "أولاد جلال",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1490,
    "name": "أولاد جلال",
    "num_bladia": "255",
    "wilaya": "أولاد جلال",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1491,
    "name": "بني عباس",
    "num_bladia": "265",
    "wilaya": "بني عباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1492,
    "name": "تامترت",
    "num_bladia": "282",
    "wilaya": "بني عباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1493,
    "name": "إقلي",
    "num_bladia": "271",
    "wilaya": "بني عباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1494,
    "name": "الواتة",
    "num_bladia": "269",
    "wilaya": "بني عباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1495,
    "name": "أولاد خضير",
    "num_bladia": "279",
    "wilaya": "بني عباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1496,
    "name": "كرزاز",
    "num_bladia": "273",
    "wilaya": "بني عباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1497,
    "name": "تيمودي",
    "num_bladia": "283",
    "wilaya": "بني عباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1498,
    "name": "القصابي",
    "num_bladia": "274",
    "wilaya": "بني عباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1499,
    "name": "بن يخلف",
    "num_bladia": "266",
    "wilaya": "بني عباس",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1500,
    "name": "إينغر",
    "num_bladia": "360",
    "wilaya": "عين صالح",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1501,
    "name": "عين صالح",
    "num_bladia": "357",
    "wilaya": "عين صالح",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1502,
    "name": "فقارة الزوى",
    "num_bladia": "358",
    "wilaya": "عين صالح",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1503,
    "name": "تين زواتين",
    "num_bladia": "363",
    "wilaya": "عين قزام",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1504,
    "name": "عين قزام",
    "num_bladia": "356",
    "wilaya": "عين قزام",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1505,
    "name": "تماسين",
    "num_bladia": "1107",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1506,
    "name": "سيدي سليمان",
    "num_bladia": "1104",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1507,
    "name": "المقارين",
    "num_bladia": "1097",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1508,
    "name": "النزلة",
    "num_bladia": "1099",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1509,
    "name": "بلدة اعمر",
    "num_bladia": "1091",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1510,
    "name": "تبسبست",
    "num_bladia": "1106",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1511,
    "name": "تقرت",
    "num_bladia": "1108",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1512,
    "name": "الطيبات",
    "num_bladia": "1105",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1513,
    "name": "العالية",
    "num_bladia": "1092",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1514,
    "name": "الحجيرة",
    "num_bladia": "1094",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1515,
    "name": "بن ناصر",
    "num_bladia": "1090",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1516,
    "name": "المنقر",
    "num_bladia": "1098",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1517,
    "name": "الزاوية العابدية",
    "num_bladia": "1109",
    "wilaya": "تقرت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1518,
    "name": "جانت",
    "num_bladia": "1161",
    "wilaya": "جانت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1519,
    "name": "برج الحواس",
    "num_bladia": "1158",
    "wilaya": "جانت",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1520,
    "name": "أم الطيور",
    "num_bladia": "1296",
    "wilaya": "El Meghaier",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1521,
    "name": "سيدي عمران",
    "num_bladia": "1300",
    "wilaya": "El Meghaier",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1522,
    "name": "المرارة",
    "num_bladia": "1293",
    "wilaya": "El Meghaier",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1523,
    "name": "جامعة",
    "num_bladia": "1281",
    "wilaya": "El Meghaier",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1524,
    "name": "تندلة",
    "num_bladia": "1306",
    "wilaya": "El Meghaier",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1525,
    "name": "المغير",
    "num_bladia": "1284",
    "wilaya": "El Meghaier",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1526,
    "name": "سطيل",
    "num_bladia": "1303",
    "wilaya": "El Meghaier",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1527,
    "name": "سيدي خليل",
    "num_bladia": "1302",
    "wilaya": "El Meghaier",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1528,
    "name": "المنيعة",
    "num_bladia": "1495",
    "wilaya": "El Menia",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1529,
    "name": "حاسي القارة",
    "num_bladia": "1499",
    "wilaya": "El Menia",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1530,
    "name": "حاسي الفحل",
    "num_bladia": "1498",
    "wilaya": "El Menia",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1531,
    "name": "أفلو",
    "num_bladia": "01",
    "wilaya": "أفلو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1532,
    "name": "سبقاق",
    "num_bladia": "02",
    "wilaya": "أفلو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1533,
    "name": "سيدي بوزيد",
    "num_bladia": "03",
    "wilaya": "أفلو",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1534,
    "name": "بريكة",
    "num_bladia": "01",
    "wilaya": "بريكة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1535,
    "name": "M'doukel",
    "num_bladia": "02",
    "wilaya": "بريكة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1536,
    "name": "بيطام",
    "num_bladia": "03",
    "wilaya": "بريكة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1537,
    "name": "قصر الشلالة",
    "num_bladia": "01",
    "wilaya": "قصر الشلالة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1538,
    "name": "سرغين",
    "num_bladia": "02",
    "wilaya": "قصر الشلالة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1539,
    "name": "Zmalet El Emir Abdelkader",
    "num_bladia": "03",
    "wilaya": "قصر الشلالة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1540,
    "name": "مسعد",
    "num_bladia": "01",
    "wilaya": "مسعد",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1541,
    "name": "دلدول",
    "num_bladia": "02",
    "wilaya": "مسعد",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1542,
    "name": "سلمانة",
    "num_bladia": "03",
    "wilaya": "مسعد",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1543,
    "name": "سد الرحال",
    "num_bladia": "04",
    "wilaya": "مسعد",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1544,
    "name": "قطارة",
    "num_bladia": "05",
    "wilaya": "مسعد",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1545,
    "name": "Aïn Oussera",
    "num_bladia": "01",
    "wilaya": "Aïn Oussera",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1546,
    "name": "قرنيني",
    "num_bladia": "02",
    "wilaya": "Aïn Oussera",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1547,
    "name": "Boussaâda",
    "num_bladia": "01",
    "wilaya": "Boussaâda",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1548,
    "name": "الهامل",
    "num_bladia": "02",
    "wilaya": "Boussaâda",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1549,
    "name": "Oultem",
    "num_bladia": "03",
    "wilaya": "Boussaâda",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1550,
    "name": "El Abiodh Sidi Cheikh",
    "num_bladia": "01",
    "wilaya": "El Abiodh Sidi Cheikh",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1551,
    "name": "القنطرة",
    "num_bladia": "01",
    "wilaya": "القنطرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1552,
    "name": "Aïn Zaatout",
    "num_bladia": "02",
    "wilaya": "القنطرة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1553,
    "name": "Bir El Ater",
    "num_bladia": "01",
    "wilaya": "Bir El Ater",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1554,
    "name": "Ogla Melha",
    "num_bladia": "02",
    "wilaya": "Bir El Ater",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1555,
    "name": "قصر البخاري",
    "num_bladia": "01",
    "wilaya": "قصر البخاري",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1556,
    "name": "Meftaha",
    "num_bladia": "02",
    "wilaya": "قصر البخاري",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1557,
    "name": "السانق",
    "num_bladia": "03",
    "wilaya": "قصر البخاري",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1558,
    "name": "العريشة",
    "num_bladia": "01",
    "wilaya": "العريشة",
    "centers": 4,
    "desks": 20
  },
  {
    "id": 1559,
    "name": "القور",
    "num_bladia": "02",
    "wilaya": "العريشة",
    "centers": 4,
    "desks": 20
  }
]);;

  const [centersData, setCentersData] = useState([
    { id: 1, name: "مركز باستور", location: "شارع ديدوش مراد", male: 2400, female: 2400, total: 4800, numbers_desks: 12 },
    { id: 2, name: "مركز ابن باديس", location: "ساحة أول ماي", male: 1600, female: 1600, total: 3200, numbers_desks: 8 },
    { id: 3, name: "مركز الأمير عبد القادر", location: "شارع الشهداء", male: 2000, female: 2000, total: 4000, numbers_desks: 10 },
  ]);

  const [desksData, setDesksData] = useState([
    { id: 1, num_desk: "01", center: "مركز باستور", male: 200, female: 200, total: 400 },
    { id: 2, num_desk: "02", center: "مركز باستور", male: 150, female: 150, total: 300 },
    { id: 3, num_desk: "01", center: "مركز ابن باديس", male: 250, female: 230, total: 480 },
  ]);

  const [partiesData, setPartiesData] = useState([
    { id: 1, name: "Front de Libération Nationale", short: "FLN", leader: "Abou El Fadhel Baadji", wilaya_siege: "الجزائر" },
    { id: 2, name: "Rassemblement National Démocratique", short: "RND", leader: "Mustapha Yahi", wilaya_siege: "الجزائر" },
    { id: 3, name: "Mouvement de la Société pour la Paix", short: "MSP", leader: "Abdelali Hassani Cherif", wilaya_siege: "الجزائر" },
    { id: 4, name: "Front des Forces Socialistes", short: "FFS", leader: "Youcef Aouchiche", wilaya_siege: "Tizi Ouzou" },
    { id: 5, name: "Parti des Travailleurs", short: "PT", leader: "Louisa Hanoune", wilaya_siege: "الجزائر" },
    { id: 6, name: "Jil Jadid", short: "JJ", leader: "Soufiane Djilali", wilaya_siege: "الجزائر" },
  ]);

  const [candidatesData, setCandidatesData] = useState([
    { id: 1, full_name: "Abdelmadjid Tebboune", party: "Indépendant", wilaya: "الجزائر", nin: "194511171600123456", phone: "0550112233", birthday: "1945-11-17", fav: true, result: 0 },
    { id: 2, full_name: "Youcef Aouchiche", party: "FFS", wilaya: "Tizi Ouzou", nin: "198301291500456789", phone: "0550445566", birthday: "1983-01-29", fav: false, result: 0 },
    { id: 3, full_name: "Abdelali Hassani Cherif", party: "MSP", wilaya: "المسيلة", nin: "196603152800789123", phone: "0550778899", birthday: "1966-03-15", fav: false, result: 0 },
    { id: 4, full_name: "Louisa Hanoune", party: "PT", wilaya: "الجزائر", nin: "195404071600234567", phone: "0661223344", birthday: "1954-04-07", fav: false, result: 0 },
    { id: 5, full_name: "Ali Benflis", party: "Indépendant", wilaya: "Batna", nin: "194409080500345678", phone: "0770556677", birthday: "1944-09-08", fav: true, result: 0 },
  ]);

  const [adminsData, setAdminsData] = useState([
    { id: 1, name: "Mohamed Benali", email: "m.benali@anie.dz", nin: "197516010012345678", phone: "0550123456", role: "Super Admin", status: "Actif", wilaya: "الجزائر" },
    { id: 2, name: "Zohra Mansouri", email: "z.mansouri@anie.dz", nin: "198009010098765432", phone: "0550987654", role: "Admin Wilaya (Blida)", status: "Actif", wilaya: "Blida" },
    { id: 3, name: "Abdelkader Brahimi", email: "a.brahimi@anie.dz", nin: "197231010055555555", phone: "0550555555", role: "Admin Baladia (Oran)", status: "Actif", wilaya: "وهران" },
    { id: 4, name: "Amine Khelladi", email: "a.khelladi@anie.dz", nin: "198825010022334455", phone: "0661223344", role: "Admin Wilaya (Constantine)", status: "Actif", wilaya: "قسنطينة" },
  ]);

  const [membersData, setMembersData] = useState([
    { id: 1, name: "Yassine Belmadi", email: "y.belmadi@gmail.com", nin: "199016010011122233", phone: "0660112233", birthday: "1990-05-20", party: "FLN", goal: "Supervision du centre Pasteur", location: "الجزائر", admin_commun: "Mohamed Benali", status: "Permanent" },
    { id: 2, name: "Lydia Bensaïd", email: "l.bensaid@outlook.com", nin: "199509010077788899", phone: "0660998877", birthday: "1995-11-12", party: "MSP", goal: "Contrôle des listes électorales", location: "Blida", admin_commun: "Zohra Mansouri", status: "Permanent" },
    { id: 3, name: "Ryad Mahrez", email: "r.mahrez@gmail.com", nin: "199131010033445566", phone: "0770334455", birthday: "1991-02-21", party: "FFS", goal: "Observateur de bureau", location: "وهران", admin_commun: "Abdelkader Brahimi", status: "Permanent" },
  ]);

  const [observersData, setObserversData] = useState([
    { id: 1, name: "Karim Slimani", role: "Observateur Bureau", center: "مركز باستور", desk: "08", location: "Centre Pasteur - Bureau 08", code: "TMP-882-X", status: "Actif", expires: "20:00", email: "k.slimani@gmail.com", nin: "198516010011223344", phone: "0550112233" },
    { id: 2, name: "Sara Haddad", role: "Chef de Centre", center: "مركز ابن باديس", desk: "N/A", location: "مركز ابن باديس", code: "TMP-441-Y", status: "Actif", expires: "22:00", email: "s.haddad@gmail.com", nin: "199216010044556677", phone: "0550445566" },
    { id: 3, name: "Ahmed Mansour", role: "Observateur Centre", center: "مركز الأمير عبد القادر", desk: "N/A", location: "مركز الأمير عبد القادر", code: "TMP-901-Z", status: "Expiré", expires: "08:00 (Fermé)", email: "a.mansour@gmail.com", nin: "197816010077889900", phone: "0550778899" },
    { id: 4, name: "Leila Bekhti", role: "Observateur Bureau", center: "مركز باستور", desk: "02", location: "Centre Pasteur - Bureau 02", code: "TMP-112-A", status: "Actif", expires: "20:00", email: "l.bekhti@gmail.com", nin: "199516010022334455", phone: "0661223344" },
  ]);

  const [electionScope, setElectionScope] = useState<ElectionScope>("national");

  return (
    <DataContext.Provider value={{
      wilayasData, setWilayasData,
      communesData, setCommunesData,
      centersData, setCentersData,
      desksData, setDesksData,
      partiesData, setPartiesData,
      candidatesData, setCandidatesData,
      adminsData, setAdminsData,
      membersData, setMembersData,
      observersData, setObserversData,
      electionScope, setElectionScope
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
