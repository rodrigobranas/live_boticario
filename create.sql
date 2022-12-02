drop table branas.purchase;

create table branas.purchase (
	card_number text,
	soft_descriptor text,
	amount numeric,
	date timestamp,
	currency text
);

insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234', 'Boticário', 1000, '2022-12-01T10:00:00', 'BRL');
insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234', 'Natura', 100, '2022-12-01T10:00:00', 'USD');
insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234', 'Jequiti', 50, '2022-12-01T10:00:00', 'BRL');
insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234', 'Google', 300, '2022-11-01T10:00:00', 'BRL');
insert into branas.purchase (card_number, soft_descriptor, amount, date, currency) values ('1234', 'AWS', 1000, '2022-11-01T10:00:00', 'USD');
