export interface DataSet {
    id: number;
    type: string;
    inf1: string;
    inf2: string;
  }

const datasets = {
    1: [
        { id: 1, type:'ii', inf1: 'กรุ๊ป O : 100%', inf2: 'ให้เลือดได้ทุกกรุ๊ปเลือด แต่รับเลือดได้จากกรุ๊ป O เพียงอย่างเดียว'},
    ],
    2: [
        { id: 2, type:'Iᴬi', inf1: 'กรุ๊ป A : 100%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    3: [
        { id: 3, type:'Iᴬi', inf1: 'กรุ๊ป A : 50%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 4, type:'ii', inf1: 'กรุ๊ป O : 50%', inf2: 'ให้เลือดได้ทุกกรุ๊ปเลือด แต่รับเลือดได้จากกรุ๊ป O เพียงอย่างเดียว'},
    ],
    4: [
        { id: 5, type:'Iᴮi', inf1: 'กรุ๊ป B : 100%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    5: [
        { id: 6, type:'Iᴮi', inf1: 'กรุ๊ป B : 50%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 7, type:'ii', inf1: 'กรุ๊ป O : 50%', inf2: 'ให้เลือดได้ทุกกรุ๊ปเลือด แต่รับเลือดได้จากกรุ๊ป O เพียงอย่างเดียว'},
    ],
    6: [
        { id: 8, type:'Iᴬi', inf1: 'กรุ๊ป A : 50%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 9, type:'Iᴮi', inf1: 'กรุ๊ป B : 50%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    7: [
        { id: 10, type:'IᴬIᴬ', inf1: 'กรุ๊ป A : 100%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    8: [
        { id: 11, type:'IᴬIᴬ', inf1: 'กรุ๊ป A : 50%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 12, type:'Iᴬi', inf1: 'กรุ๊ป A : 50%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    9: [
        { id: 13, type:'IᴬIᴮ', inf1: 'กรุ๊ป AB : 100%', inf2: 'ให้เลือดกรุ๊ป A B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    10: [
        { id: 14, type:'IᴬIᴮ', inf1: 'กรุ๊ป AB : 50%', inf2: 'ให้เลือดกรุ๊ป A B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 15, type:'Iᴬi', inf1: 'กรุ๊ป A : 50%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    11: [
        { id: 16, type:'IᴬIᴬ', inf1: 'กรุ๊ป A : 50%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 17, type:'IᴬIᴮ', inf1: 'กรุ๊ป AB : 50%', inf2: 'ให้เลือดกรุ๊ป A B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    12: [
        { id: 18, type:'IᴬIᴬ', inf1: 'กรุ๊ป A : 25%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 19, type:'Iᴬi', inf1: 'กรุ๊ป A : 50%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 20, type:'ii', inf1: 'กรุ๊ป O : 25%', inf2: 'ให้เลือดได้ทุกกรุ๊ปเลือด แต่รับเลือดได้จากกรุ๊ป O เพียงอย่างเดียว'},
    ],
    13: [
        { id: 21, type:'Iᴮi', inf1: 'กรุ๊ป B : 50%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 22, type:'IᴬIᴮ', inf1: 'กรุ๊ป AB : 50%', inf2: 'ให้เลือดกรุ๊ป A B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    14: [
        { id: 23, type:'Iᴬi', inf1: 'กรุ๊ป A : 25%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 24, type:'Iᴮi', inf1: 'กรุ๊ป B : 25%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 25, type:'IᴬIᴮ', inf1: 'กรุ๊ป AB : 25%', inf2: 'ให้เลือดกรุ๊ป A B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 26, type:'ii', inf1: 'กรุ๊ป O : 25%', inf2: 'ให้เลือดได้ทุกกรุ๊ปเลือด แต่รับเลือดได้จากกรุ๊ป O เพียงอย่างเดียว'},
    ],
    15: [
        { id: 27, type:'IᴬIᴬ', inf1: 'กรุ๊ป A : 25%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 28, type:'Iᴬi', inf1: 'กรุ๊ป A : 25%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 29, type:'Iᴮi', inf1: 'กรุ๊ป B : 25%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 30, type:'IᴬIᴮ', inf1: 'กรุ๊ป AB : 25%', inf2: 'ให้เลือดกรุ๊ป A B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    16: [
        { id: 31, type:'IᴮIᴮ', inf1: 'กรุ๊ป B : 100%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    17: [
        { id: 32, type:'IᴮIᴮ', inf1: 'กรุ๊ป B : 50%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 33, type:'Iᴮi', inf1: 'กรุ๊ป B : 50%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    18: [
        { id: 34, type:'IᴮIᴮ', inf1: 'กรุ๊ป B : 50%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 35, type:'IᴬIᴮ', inf1: 'กรุ๊ป AB : 50%', inf2: 'ให้เลือดกรุ๊ป A B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    19: [
        { id: 36, type:'IᴮIᴮ', inf1: 'กรุ๊ป B : 50%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 37, type:'Iᴮi', inf1: 'กรุ๊ป B : 50%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    20: [
        { id: 38, type:'Iᴬi', inf1: 'กรุ๊ป A : 25%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 39, type:'IᴮIᴮ', inf1: 'กรุ๊ป B : 25%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 40, type:'Iᴮi', inf1: 'กรุ๊ป B : 25%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 41, type:'IᴬIᴮ', inf1: 'กรุ๊ป AB : 25%', inf2: 'ให้เลือดกรุ๊ป A B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],
    21: [
        { id: 42, type:'IᴬIᴬ', inf1: 'กรุ๊ป A : 25%', inf2: 'ให้เลือดกรุ๊ป A และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 43, type:'IᴮIᴮ', inf1: 'กรุ๊ป B : 25%', inf2: 'ให้เลือดกรุ๊ป B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
        { id: 44, type:'IᴬIᴮ', inf1: 'กรุ๊ป AB : 50%', inf2: 'ให้เลือดกรุ๊ป A B และ AB ได้เท่านั้น และรับเลือดจากกรุ๊ป O ได้'},
    ],

    // เพิ่มชุดข้อมูลตามต้องการ
  };
  
  export default datasets;

  // 1 ii & ii
  // 2 ii & IᴬIᴬ หรือ IᴬIᴬ & ii
  // 3 ii & Iᴬi หรือ Iᴬi & ii
  // 4 ii & IᴮIᴮ หรือ IᴮIᴮ & ii
  // 5 ii & Iᴮi หรือ Iᴮi & ii
  // 6 ii & IᴬIᴮ หรือ IᴬIᴮ & ii

  // 7 IᴬIᴬ & IᴬIᴬ
  // 8 IᴬIᴬ & Iᴬi หรือ Iᴬi & IᴬIᴬ
  // 9 IᴬIᴬ & IᴮIᴮ หรือ IᴮIᴮ & IᴬIᴬ
  // 10 IᴬIᴬ & Iᴮi หรือ Iᴮi & IᴬIᴬ
  // 11 IᴬIᴬ & IᴬIᴮ หรือ IᴬIᴮ & IᴬIᴬ

  // 12 Iᴬi & Iᴬi
  // 13 Iᴬi & IᴮIᴮ หรือ IᴮIᴮ & Iᴬi
  // 14 Iᴬi & Iᴮi หรือ Iᴮi & Iᴬi
  // 15 Iᴬi & IᴬIᴮ หรือ IᴬIᴮ & Iᴬi

  // 16 IᴮIᴮ & IᴮIᴮ
  // 17 IᴮIᴮ & Iᴮi หรือ Iᴮi & IᴮIᴮ
  // 18 IᴮIᴮ & IᴬIᴮ หรือ IᴬIᴮ & IᴮIᴮ

  // 19 Iᴮi & Iᴮi
  // 20 Iᴮi & IᴬIᴮ หรือ IᴬIᴮ & Iᴮi
  
  // 21 IᴬIᴮ & IᴬIᴮ