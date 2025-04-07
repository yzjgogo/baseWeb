-- 这个文件是当时学习的时候，老师在MySQL Workbench中演示的sql语句，以后复习的时候可以用这些语句在MySQL Workbench中演示，参考：04_数据库与身份认证.pptx


-- 你想操作my_db_01这个数据库，则鼠标右键左侧的'my_db_01'选择'Set as Default Schema'，则以后所以得操作，例如增删改查都是针对'my_db_01'数据库，无需再加'my_db_01.'
-- 例如当前默认的Schema是my_db_02，则select * from users等价与select * from my_db_02.users，在操作错数据库了
-- select * from users

-- 从 users 表中把 username 和 password 对应的数据查询出来
-- select username, password from users

-- 向 users 表中，插入新数据，username 的值为 tony stark  password 的值为 098123
-- insert into users (username, password) values ('tony stark', '098123');
-- select * from users

-- 将 id 为 4 的用户密码，更新成 888888
-- update users set password='888888' where id=4;
-- select * from users

-- 更新 id 为 2 的用户，把用户密码更新为 admin123  同时，把用户的状态更新为 1
-- update users set password='admin123', status=1 where id=2
-- select * from users

-- 删除 users 表中， id 为 4 的用户
-- delete from users where id=4
-- select * from users

-- 演示 where 子句的使用
-- select * from users where status=1
-- select * from users where id>=2
-- 不等于<> 或 !=
-- select * from users where username<>'ls'
-- select * from users where username!='ls'

-- 使用 AND 来显示所有状态为0且id小于3的用户
-- select * from users where status=0 and id<3

-- 使用 or 来显示所有状态为1 或 username 为 zs 的用户
-- select * from users where status=1 or username='zs'

-- 对users表中的数据，按照 status 字段进行升序排序，默认就是升序asc
-- select * from users order by status

-- 按照 id 对结果进行降序的排序  desc 表示降序排序   asc 表示升序排序（默认情况下，就是升序排序的）
-- select * from users order by id desc

-- 对 users 表中的数据，先按照 status 进行降序排序，再按照 username 字母的顺序，进行升序的排序，即按照status降序后，对于status相同的行，再按照username首字母的升序排列
-- select * from users order by status desc, username asc

-- 使用 count(*) 来统计 users 表中，状态为 0 用户的总数量
-- select count(*) from users where status=0

-- 使用 AS 关键字给列起别名，
-- 查询结果的列名就叫count(*)
-- select count(*) from users where status=0
-- 查询结果的列名叫total
-- select count(*) as total from users where status=0
-- select username as uname, password as upwd from users