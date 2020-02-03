CREATE TABLE [dbo].[Provincias] (
    [Id]     INT           IDENTITY (1, 1) NOT NULL,
    [Nombre] VARCHAR (255) NOT NULL,
    [PaisId] INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([PaisId]) REFERENCES [dbo].[Paises] ([Id])
);

