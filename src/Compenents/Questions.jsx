import { useState } from 'react';
import axios from 'axios';
import './Questions.Module.css';


export default function Questions() {
  const [currentPage, setCurrentPage] = useState(0); // الصفحة الحالية
  const questionsPerPage = 5;

  const [scores, setScores] = useState({ red: 0, green: 0, yellow: 0, blue: 0, purple: 0 });
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  // مصفوفة الأسئلة كاملة
  const questions = [
    { id: 1, text: "أنت تكون صداقات جديدة بشكل منتظم.", color: "red", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 2, text: "إن الأفكار المعقدة والجديدة تثير اهتمامك أكثر من الأفكار البسيطة.", color: "green", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 3, text: "تقتنع بالعاطفة أكثر من المنطق.", color: "yellow", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 4, text: "تفضل التخطيط على العفوية.", color: "blue", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 5, text: "تحب العمل بمفردك.", color: "purple", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 6, text: "تستمتع بالمناسبات الاجتماعية الكبيرة.", color: "red", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 7, text: "غالباً ما تنغمس في أفكارك لدرجة تجاهل محيطك.", color: "green", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 8, text: "تستمتع بالمناسبات الاجتماعية الكبيرة.", color: "red", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 9, text: "غالباً ما تنغمس في أفكارك لدرجة تجاهل محيطك.", color: "green", reselta: [-3, -2, -1, 0, 1, 2, 3] },
    { id: 10, text: "تستمتع بالمناسبات الاجتماعية الكبيرة.", color: "red", reselta: [-3, -2, -1, 0, 1, 2, 3] },
   
    // يمكنك إضافة المزيد هنا...
  ];

  // حساب الأسئلة التي ستظهر في الصفحة الحالية
  const startIndex = currentPage * questionsPerPage;
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

  const handleSelect = (questionId, color, value) => {
    const oldValue = answers[questionId];
    setScores(prev => ({
      ...prev,
      [color]: prev[color] + value - (oldValue || 0),
    }));
    setAnswers(prev => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const nextStep = () => {
    if (startIndex + questionsPerPage < questions.length) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); // العودة لأعلى الصفحة عند التنقل
    } else {
      submitResults();
    }
  };
  const prevStep = () => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0); // للعودة لأعلى الصفحة عند الانتقال
  }
};

  const submitResults = async () => {
    if (Object.keys(answers).length < questions.length) {
      alert("يرجى الإجابة على جميع الأسئلة قبل المتابعة");
      return;
    }
    setLoading(true);
    try {
      await axios.post('http://localhost/myproject/public/api/save-test', { scores, answers });
      alert("تم حفظ النتائج بنجاح!");
    } catch (error) {
      alert("حدث خطأ أثناء الحفظ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 bg-white text-right" dir="rtl">
        <img src='Wha.jpeg' width={100}></img>
        <h1 className="titre">اختبار شخصية مجاني</h1>
             <article className="steps"> <div className="card">
               <h1>الخطوة 1</h1> 
             <h3>أكمل الاختبار</h3>
              <p>كن على طبيعتك وأجب بصراحة لمعرفة نوع شخصيتك.</p> </div> 
             <div className="card">
               <h1>الخطوة 2</h1> 
               <h3>عرض النتائج التفصيلية</h3>
                <p>اكتشف كيف يؤثر نوع شخصيتك على حياتك.</p> </div>
              <div className="card">
                 <h1>الخطوة 3</h1>
                  <h3>أطلق العنان لإمكاناتك</h3>
                   <p>طور نفسك لتصبح الشخص الذي تريد أن تكونه.</p>
                    </div> </article>
        {/* شريط التقدم البسيط */}
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${((startIndex + currentQuestions.length) / questions.length) * 100}%` }}></div>
        </div>

        {currentQuestions.map((q) => (
          <div key={q.id} className="qus">
            <p className="text-xl text-gray-700 text-center mb-6 font-medium">{q.text}</p>

            <div className="flex items-center justify-center gap-2 md:gap-4 flex-row-reverse">
              <span className="text-teal-600 font-bold">غير موافق </span>

              {q.reselta.map((val) => (
                <button
    key={val}
    onClick={() => handleSelect(q.id, q.color, val)}
    className={`rounded-full border-2 transition-all 
        size-${Math.abs(val)} 
        ${answers[q.id] === val ? (val > 0 ? 'selected-positive' : 'selected-negative') : 'bg-white'}
    `}
/>
              ))}

              <span className="text-purple-600 font-bold"> موافق</span>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-10 gap-4">
  {/* زر العودة للخلف - يظهر فقط إذا لم نكن في الصفحة الأولى */}
  {currentPage > 0 ? (
    <button 
      onClick={prevStep} 
      className="btn-back"
    >
      السابق
    </button>
  ) : (
    <div></div> // مكان فارغ للحفاظ على التوازن (Alignment)
  )}

  {/* زر التالي أو عرض النتائج */}
  <button 
    onClick={nextStep} 
    className="btnn" 
    disabled={loading}
  >
    {loading ? "جاري المعالجة..." : (startIndex + questionsPerPage < questions.length ? "التالي" : "عرض النتائج")}
  </button>
</div>
          <div className="mt-6 text-center">
            <p>Red: {scores.red}</p>
            <p>Green: {scores.green}</p>
            <p>Yellow: {scores.yellow}</p>
            <p>Blue: {scores.blue}</p>
            <p>Purple: {scores.purple}</p>
          </div>
      </div>
    </>
  );
}