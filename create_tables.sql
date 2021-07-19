CREATE TABLE IF NOT EXISTS employees (
    id SERIAL,
    fullname VARCHAR(255),
    function VARCHAR(255),
    bossId INTEGER REFERENCES employees (id) ON DELETE SET NULL ON UPDATE CASCADE,
    PRIMARY KEY (id)
);