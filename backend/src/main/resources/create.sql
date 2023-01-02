create table tb_category (id  bigserial not null, name varchar(255), primary key (id));
create table tb_payment_method (id  bigserial not null, description varchar(255), primary key (id));
create table tb_sale (id  bigserial not null, date date, gender int4, total float8, volume int4, category_id int8, payment_method_id int8, store_id int8, primary key (id));
create table tb_store (id  bigserial not null, name varchar(255), primary key (id));
alter table tb_sale add constraint FKlpwddt86f11jgen0lsv0xnwon foreign key (category_id) references tb_category;
alter table tb_sale add constraint FKr1t2k051avij8fc6ixi36exyw foreign key (payment_method_id) references tb_payment_method;
alter table tb_sale add constraint FKb42e4bb6i9ujys2n4ytb97kj2 foreign key (store_id) references tb_store;
