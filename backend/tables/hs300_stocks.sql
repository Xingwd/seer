
DROP TABLE IF EXISTS hs300_stocks;
CREATE TABLE IF NOT EXISTS hs300_stocks(
   id INT COMMENT '主键',
   code VARCHAR(10) NOT NULL COMMENT '股票代码',
   name VARCHAR(10) NOT NULL COMMENT '股票名称',
   update_date VARCHAR(10) COMMENT '数据更新日期',
   PRIMARY KEY ( id ),
   UNIQUE KEY idx_code ( code )
) COMMENT='沪深300成分股' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;