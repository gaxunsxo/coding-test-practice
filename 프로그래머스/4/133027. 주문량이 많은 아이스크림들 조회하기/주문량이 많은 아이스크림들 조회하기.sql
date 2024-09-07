-- FIRST_HALF: 상반기 주문정보
-- JULY: 7월의 주문정보 

-- 주의: 7월엔 주문량이 많아 같은 맛이라도 다른 출하 번호(공장)을 가질 수 있음 
-- 문제: (7월 아이스크림 총 주문량 + 상반기의 아이스크림 총 주문량)이 큰 순서대로 상위 3개의 맛을 조회

SELECT JULY.FLAVOR AS FLAVOR
FROM JULY
LEFT JOIN FIRST_HALF
    ON FIRST_HALF.FLAVOR = JULY.FLAVOR
GROUP BY JULY.FLAVOR
ORDER BY SUM(FIRST_HALF.TOTAL_ORDER + JULY.TOTAL_ORDER) DESC
LIMIT 3;