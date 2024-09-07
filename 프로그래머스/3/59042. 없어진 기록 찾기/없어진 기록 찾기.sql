-- ANIMAL_INS: 보호소에 들어온 동물
-- ANIMAL_OUTS: 보호소에서 입양 보낸 동물

-- 문제: 입양 기록은 있는데, 보호소 입소 기록이 없는 동물 조회
-- 순서: 동물 ID, 이름 

SELECT b.ANIMAL_ID, b.NAME
FROM ANIMAL_INS a 
RIGHT JOIN ANIMAL_OUTS b 
    ON a.ANIMAL_ID = b.ANIMAL_ID
WHERE a.ANIMAL_ID IS NULL
ORDER BY ANIMAL_ID;