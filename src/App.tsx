import React from 'react';
import { TrendingUp, Users, Briefcase, Target, CheckCircle, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Container with 652px width */}
      <div className="mx-auto" style={{ maxWidth: '652px' }}>
        
        {/* Section 1: 인트로 */}
        <section className="px-6 py-16 text-center bg-gradient-to-b from-blue-50 to-white">
          {/* Image placeholder */}
          <div className="mb-8">
           <div className="w-full h-[300px] rounded-lg overflow-hidden">
  <img src="/sec1.png" alt="블로그 자동포스팅" className="w-full h-full object-cover" />
</div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            블로그, 더 이상 혼자 고민하지 마세요
          </h1>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-3">
            <p>안녕하세요, 블로그 대행 전문 <span className="font-semibold text-blue-900">다비큐</span>입니다.</p>
            <p>우리는 고객님의 목적에 딱 맞춘 블로그 콘텐츠를 통해</p>
            <p>브랜드 신뢰도를 높이고 검색 노출을 극대화합니다.</p>
            <p className="font-semibold text-blue-800">블로그의 힘, 이제 다비큐와 함께 키워보세요.</p>
          </div>
        </section>

        {/* Section 2: 다비큐의 차별화 전략 */}
        <section className="px-6 py-12 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            다비큐는 무엇이 다를까요?
          </h2>
          
          {/* Image placeholder */}
          <div className="mb-8">
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
  <img src="/sec2.png" alt="블로그 대행 상담" className="w-full h-full object-cover" />
</div>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-800">2주 이상 대행 시 전화 상담으로 목적 확인</span>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-800">맞춤 키워드 설정 + 1500~2000자 포스팅</span>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Users className="text-blue-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-800">일반대행 vs 완전대행 구분 제공</span>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-800">고객이 직접 블로그를 성장시키는 방식을 권장</span>
            </div>
          </div>
        </section>

        {/* Section 3: 일반대행이란? */}
        <section className="px-6 py-12 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            일반대행, 이것만 알면 충분합니다
          </h2>
          
          {/* Image placeholder */}
          <div className="mb-8">
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
  <img src="/sec3.png" alt="블로그 자동포스팅2" className="w-full h-full object-cover" />
</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">제공</h3>
                <p className="text-gray-700">글 + 자동입력기 + 이미지</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">간편함</h3>
                <p className="text-gray-700">내가 내 블로그에 3분 만에 등록</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">안전성</h3>
                <p className="text-gray-700">IP 고정(내컴퓨터사용)으로 네이버 알고리즘에도 유리</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">지속성</h3>
                <p className="text-gray-700">블로그 지수에 악영향 없이 건강하게 성장 가능</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 가격 안내 */}
        <section className="px-6 py-12 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            가격, 궁금하셨죠?
          </h2>
          
          <div className="space-y-6">
            {/* A. 맛보기 서비스 */}
            <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">A. 맛보기 서비스</h3>
                <div className="text-gray-700 mb-3">
                  <p>글 1건 + 자동입력기 1일 + 이미지 10장</p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl font-bold text-red-600">9,000원</span>
                </div>
                <p className="text-sm text-red-600 font-medium">(한시적)</p>
                <p className="text-sm text-gray-600 mt-2">후기 작성 시, 키워드 글 + 이미지 10장 추가 제공</p>
              </div>
            </div>

            {/* B. 2주 대행 */}
            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-green-900 mb-2">B. 2주 대행</h3>
                <div className="text-gray-700 mb-3">
                  <p>글 14건 + 자동입력기 17일</p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-lg text-gray-500 line-through">220,000원</span>
                  <span className="text-2xl font-bold text-green-600">170,000원</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">후기 작성 시, 원고 2건 + 이미지 추가 제공</p>
              </div>
            </div>

            {/* C. 4주 대행 */}
            <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-purple-900 mb-2">C. 4주 대행</h3>
                <div className="text-gray-700 mb-3">
                  <p>글 28건 + 자동입력기 30일</p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-lg text-gray-500 line-through">420,000원</span>
                  <span className="text-2xl font-bold text-purple-600">290,000원</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">후기 작성 시, 원고 2건 + 이미지 추가 제공</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: 추천 업종 */}
        <section className="px-6 py-12 bg-blue-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            누가 사용하면 좋을까요?
          </h2>
          
          {/* Image placeholder */}
          <div className="mb-8">
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
  <img src="/sec4.png" alt="블로그 성장 고민" className="w-full h-full object-cover" />
</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
                <span className="text-gray-800 text-sm">학원</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
                <span className="text-gray-800 text-sm">부동산</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
                <span className="text-gray-800 text-sm">병원</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
                <span className="text-gray-800 text-sm">금융</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
                <span className="text-gray-800 text-sm">보험업</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
                <span className="text-gray-800 text-sm">미용·뷰티</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
                <span className="text-gray-800 text-sm">요식업</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
                <span className="text-gray-800 text-sm">여행·숙박</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <Briefcase className="text-blue-600" size={20} />
                <span className="text-gray-800 text-sm">생활서비스</span>
              </div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
              <Users className="mx-auto text-blue-600 mb-2" size={24} />
              <p className="text-gray-800 font-medium">개인 브랜딩을 원하는 일반인도 가능</p>
            </div>
          </div>
        </section>

        {/* Section 6: 우리가 일반대행을 추천하는 이유 */}
        <section className="px-6 py-12 bg-gray-900">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            완전대행보다 일반대행을 추천하는 진짜 이유
          </h2>
          
          {/* Image placeholder */}
          <div className="mb-8">
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
  <img src="/sec5.png" alt="블로그 성장그래프" className="w-full h-full object-cover" />
</div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-blue-600">완전대행은 당연히 수익이 더 큽니다.</span>
              </p>
              <p className="text-lg">
                하지만 우리는 고객님 블로그의 <span className="font-semibold text-green-600">건강한 성장</span>을 원합니다.
              </p>
              <p className="text-lg">
                <span className="font-semibold text-purple-600">내 손으로 직접 올리는 방식</span>이 더 오래 갑니다.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-800 font-medium">
                  진심을 담은 운영이 블로그 지수를 높이고,<br/>
                  장기적으로 브랜드를 구축하게 합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 bg-gray-100 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Award className="text-blue-600" size={24} />
            <span className="text-xl font-bold text-gray-900">다비큐</span>
          </div>
          <p className="text-gray-600 text-sm">블로그 관리대행 전문 서비스</p>
        </footer>

      </div>
    </div>
  );
}

export default App;