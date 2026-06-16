// The municipality noticed an increase in water consumption during the summer in one of Jordan's neighborhoods, leading to complaints from some residents about low water pressure at certain times of the day.

// To better understand the problem, a team from the municipality collected daily water consumption data from several homes over a one-week period. However, before analyzing the data and calculating the average consumption, the team needed to use the correct mathematical symbols to understand and represent the data in a structured way.

// Your task is to use the mathematical symbols, differentiate between the variables and their actual values, apply the summation symbol (Σ), and then calculate the average water consumption.

// Here is the water consumption data (in cubic meters) for five houses over one day:

const ConsumptionArr = [12, 15, 10, 18, 20 , 35];
const home = [1, 2, 3, 4, 5 , 6];

// ما قيمة (x) للمنزل الثالث؟
let x = home[2]
console.log(x)

// هل الرمز (x) يمثل البيانات نفسها أم يمثل نوع البيانات التي نقيسها؟ 

// Actual values 

//استخدام رمز المجموع (Σ)

//استخدام رمز المجموع (سيجما) لتمثيل عملية الجمع.

const sigma = home.reduce((sum, n) => sum + n, 0);

console.log(sigma); // 75


// يستخدم علماء البيانات الترميز الرياضي لتمثيل العمليات الحسابية بطريقة مختصرة وواضحة.

// باستخدام بيانات استهلاك المياه السابقة:

// اكتب قيمة Σx باستخدام الترميز الرياضي: Σx = __________________
// اكتب قيمة n:n = __________________
// أكمل صيغة المتوسط الحسابي باستخدام الرموز والقيم المناسبة: x̅ = __________________
// اكتب الصيغة النهائية للمتوسط الحسابي باستخدام الترميز الرياضي فقط.


const Σx = ConsumptionArr.reduce((sum, value) => sum + value, 0);

const n = ConsumptionArr.length;
const x̄ = Σx / n;

console.log("Σx =", Σx); // 75 
console.log("n =", n);   // 5 
console.log("x̄ =", x̄); // 15 

//  تفسير النتائج

// هل يوجد منزل يستهلك مياهًا أكثر من المتوسط؟
// كيف يمكن أن تساعد هذه النتائج البلدية في فهم مشكلة استهلاك المياه؟

// بناءً على البيانات السابقة:

// بناءً على البيانات السابقة:

// القيم: 12، 15، 10، 18، 20
// المتوسط الحسابي: 15

// هل يوجد منزل يستهلك مياهًا أكثر من المتوسط؟
// نعم، المنزلان اللذان يستهلكان 18 و20 وحدة يستهلكان مياهًا أكثر من المتوسط (15).

// كيف يمكن أن تساعد هذه النتائج البلدية في فهم مشكلة استهلاك المياه؟

// تساعد البلدية على تحديد المنازل أو المناطق ذات الاستهلاك المرتفع للمياه.
// تمكنها من توجيه حملات التوعية لترشيد استهلاك المياه.
// تساعد في التخطيط لإدارة الموارد المائية بشكل أفضل.
// يمكن استخدامها لاكتشاف أنماط الاستهلاك غير المعتادة واتخاذ الإجراءات المناسبة عند الحاجة.


// المرحلة الخامسة: استكشاف تأثير البيانات الجديدة

// أضاف الفريق منزلاً جديداً بلغ استهلاكه 35 مترًا مكعبًا.

// أعد حساب:

// Σx = 110

// n = 6

// x̅ = 18.3

// ثم أجب:

// كيف أثّر الاستهلاك المرتفع للمنزل الجديد على المتوسط؟

