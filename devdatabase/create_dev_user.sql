CREATE ROLE notices_robot PASSWORD 'n0t!c3s' LOGIN;
CREATE DATABASE notices WITH OWNER notices_robot;
ALTER ROLE notices_robot LOGIN;
