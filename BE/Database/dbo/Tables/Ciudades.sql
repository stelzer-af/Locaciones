CREATE TABLE [dbo].[Ciudades] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [Nombre]      VARCHAR (255) NOT NULL,
    [ProvinciaId] INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([ProvinciaId]) REFERENCES [dbo].[Provincias] ([Id])
);

