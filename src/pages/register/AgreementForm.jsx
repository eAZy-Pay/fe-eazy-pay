const AgreementForm = () => {
  return (
    <div className="flex ml-36">
      <div className="flex flex-col">
        <div className="flex items-center mb-8">
          <input type="checkbox" className="mr-4" />
          <p className="w-80 text-left text-xl text-black">전체 동의</p>
        </div>

        <div className="flex justify-between items-center mb-5 w-full max-w-md">
          <input type="checkbox" className="mr-4" />
          <p className="w-80 mr-4 text-left text-lg text-black">
            (필수) 개인정보 수집 및 이용·제공 동의
          </p>
          <button className="py-1 px-4 bg-blue-100 text-[#808388] font-semibold rounded-lg hover:bg-blue-300 transition duration-300">
            보기
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="image-path.png"
            className="w-[305px] h-[146px] border border-black mb-10"
            alt="약관 설명 이미지"
          />
        </div>

        <div className="flex justify-between items-center mb-5 w-full max-w-md">
          <input type="checkbox" className="mr-4" />
          <p className="w-80 mr-4 text-left text-lg text-black">
            (필수) 개인정보 제3자 정보제공 동의
          </p>
          <button className="py-1 px-4 bg-blue-100 text-[#808388] font-semibold rounded-lg hover:bg-blue-300 transition duration-300">
            보기
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="image-path.png"
            className="w-[305px] h-[146px] border border-black mb-14"
            alt="약관 설명 이미지"
          />
        </div>
      </div>
    </div>
  );
};

export default AgreementForm;
