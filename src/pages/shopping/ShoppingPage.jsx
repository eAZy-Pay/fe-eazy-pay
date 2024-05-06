import DefaultLayout from '../../components/layout/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ categoryId, storeCode, storeName, image, category, name, price }) => {
  const navigate = useNavigate();

  const formattedPrice = new Intl.NumberFormat().format(price); // 가격을 세 자리마다 쉼표로 구분하여 형식화

  const handleCardClick = () => {
    const queryParams = new URLSearchParams({
      categoryId,
      storeCode,
      storeName,
      image,
      name,
      price,
    });
    navigate(`/shopping/detail?${queryParams.toString()}`); // 쿼리 파라미터를 포함해 라우팅
  };

  return (
    <div className="border rounded-md overflow-hidden shadow-lg" onClick={handleCardClick}>
      <img src={image} alt={category} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{category}</h3>
        <p className="text-sm text-gray-500">{name}</p>
        <div className="flex justify-end mt-2">
          <p className="text-sm font-bold">{formattedPrice} 원</p>
        </div>
      </div>
    </div>
  );
};
const ShoppingPage = () => {
  const data = [
    {
      categoryId: '1',
      storeCode: '010000020001',
      storeName: '하이마트',
      image:
        'https://images.samsung.com/kdp/goods/2024/03/25/6d6d8342-0187-46d7-96d8-60b48fb93332.png?$SRP_PRD_THUM_GRID_PNG$',
      category: '생활/주거',
      name: '삼성 노트북 8',
      price: '5000',
    },
    {
      categoryId: '2',
      storeCode: '020000030001',
      storeName: '이마트 상암점',
      image:
        'https://shop-phinf.pstatic.net/20240229_222/1709172376739WuEoG_JPEG/15774861547537251_1271033337.jpg?type=m510',
      category: '슈퍼/마트',
      name: '햇반 24개입',
      price: '20000',
    },
    {
      categoryId: '3',
      storeCode: '030000070001',
      storeName: '오토김밥 상암점',
      image:
        'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTVfMTIg/MDAxNTgxNjkzNDQ2NzMx.vhiF13ju44Uzte_mHUxRF5t6PQrz14xwOSZd7wj2SHUg.FUd6Jet1mSLGGPp4jc4s8L0LcXjPi_TIvsVksTo8tMUg.JPEG.webkim/1581693449488.jpg?type=w800',
      category: '외식',
      name: '스팸김밥',
      price: '3000',
    },
    {
      categoryId: '4',
      storeCode: '040000120001',
      storeName: '우리약국',
      image:
        'https://i.namu.wiki/i/2IwI0O1V9wmYmZYzixR6Nmg2qgNvDeJ93bovlg5yaHTo-8LIsgo2jKVrxgtzc88eRgTVXX79Y-3eK6ctZ8wvbw.webp',
      category: '의료',
      name: '알보칠',
      price: '700',
    },
    {
      categoryId: '5',
      storeCode: '050000130001',
      storeName: '우리옷가게',
      image: 'https://maninstore.co.kr/web/product/big/202402/401540336184fbd064d6d188c60715ca.jpg',
      category: '패션',
      name: '블랙 비건 레더 자켓',
      price: '89000',
    },
    {
      categoryId: '6',
      storeCode: '060000160001',
      storeName: '우리여행사',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBTm4xgRuEHDBFpON7UFumFDuFt0f_eNFAQ&usqp=CAU',
      category: '숙박/여행',
      name: '광안대교 뷰 호텔 1박 2일',
      price: '154000',
    },
    {
      categoryId: '7',
      storeCode: '070000210001',
      storeName: '우리꽃집',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTsR43gi-yG1jUkna7gx54kWWjye_o7lj2g&usqp=CAU',
      category: '문화/취미',
      name: '봄내음 꽃다발 당일배송',
      price: '39000',
    },
    {
      categoryId: '8',
      storeCode: '080000220001',
      storeName: '상암주유소',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12127bfgvUkLqQT2-ZuJoJFVErExsxVjQWZBXGNhjRKz9uTlOaFPi98_fGCwZiIUgvsU&usqp=CAU',
      category: '자동차',
      name: '주유상품권 30L',
      price: '50000',
    },
  ];

  return (
    <DefaultLayout>
      <div>
        <div className="container mx-auto px-4 py-6">
          <div className="grid gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {data.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

Card.propTypes = {
  categoryId: PropTypes.string.isRequired,
  storeCode: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ShoppingPage;
