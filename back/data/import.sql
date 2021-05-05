BEGIN;

INSERT INTO "user" (email, password, pseudo)
VALUES ('mathis.local@et.fr', '1234', 'Raz'),
('marion.local@et.fr', '5678', 'coing'),
('yassine.local@et.fr', 'azerty', 'LimLim'),
('alice.local@et.fr', '12az', 'PaDla Province');

INSERT INTO category (type)
VALUES ('Art de rue'),
('Musique'),
('Expo'),
('Théâtre');

INSERT INTO curioset (title, description, address, latitude, longitude, website, agenda, price, user_id, category_id )
VALUES ('Best of van gogh', 'une présentation de ses meilleures oeuvres', '12 Rue du Croissant, Nantes, France', 47.23737335205078, -1.5248912572860718, NULL,'Du 03/05/2021 au 25/06/2021 de 9h à 17h', 10.50, 2, 3),
('Spectacle de rue', 'Ateliers art du cirque', 'Place Viarme, Nantes, France', 47.2209341, -1.5625805, NULL,'Le 08/05/2021 toute la journée', 0, 4, 1),
('Orchestre de rue', 'un petit orchestre organisé en pleine rue ', 'Place des Oliviers, 26200 Montélimar, France', 44.5613927, 4.7520228, 'https://tenor.com/view/because-baby-animals-cute-adorable-jump-hop-gif-14466509', 'Le 12/05/2021', 0, 1, 2);

COMMIT;