-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


SET XACT_ABORT ON

BEGIN TRANSACTION QUICKDBD

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).
-- Table documentation comment 1 (try the PDF/RTF export)
-- Table documentation comment 2
CREATE TABLE [User] (
    [UserID] int  NOT NULL ,
    [Name] varchar(200)  NOT NULL ,
    [City] varchar(20)  NOT NULL ,
    [Adress] varchar(50)  NOT NULL ,
    [ZipCode] int  NOT NULL ,
    [Phone] int  NOT NULL ,
    [ProffID] int  NOT NULL ,
    CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED (
        [UserID] ASC
    ),
    CONSTRAINT [UK_User_Name] UNIQUE (
        [Name]
    )
)

CREATE TABLE [Proff] (
    [ProffID] int  NOT NULL ,
    [Name] string  NOT NULL ,
    [City] string  NOT NULL ,
    [Address] string  NOT NULL ,
    [ZipCode] int  NOT NULL ,
    [Phone] int  NOT NULL ,
    [RatingUserID] int  NOT NULL ,
    [RatingProffID] int  NOT NULL ,
    CONSTRAINT [PK_Proff] PRIMARY KEY CLUSTERED (
        [ProffID] ASC
    )
)

CREATE TABLE [CommentsUser] (
    [CommentsUserID] int  NOT NULL ,
    [UserID] int  NOT NULL ,
    CONSTRAINT [PK_CommentsUser] PRIMARY KEY CLUSTERED (
        [CommentsUserID] ASC
    )
)

CREATE TABLE [CommentsProff] (
    [CommentsProffID] int  NOT NULL ,
    [ProffID] int  NOT NULL ,
    CONSTRAINT [PK_CommentsProff] PRIMARY KEY CLUSTERED (
        [CommentsProffID] ASC
    )
)

CREATE TABLE [RatingProff] (
    [RatingProffID] int  NOT NULL ,
    [CommentsProffID] int  NOT NULL ,
    [ProffID] int  NOT NULL ,
    [Stars] int  NOT NULL ,
    CONSTRAINT [PK_RatingProff] PRIMARY KEY CLUSTERED (
        [RatingProffID] ASC
    )
)

CREATE TABLE [RatingUser] (
    [RatingUserID] int  NOT NULL ,
    [CommentsUserID] int  NOT NULL ,
    [UserID] int  NOT NULL ,
    [Stars] int  NOT NULL ,
    CONSTRAINT [PK_RatingUser] PRIMARY KEY CLUSTERED (
        [RatingUserID] ASC
    )
)

ALTER TABLE [User] WITH CHECK ADD CONSTRAINT [FK_User_ProffID] FOREIGN KEY([ProffID])
REFERENCES [Proff] ([ProffID])

ALTER TABLE [User] CHECK CONSTRAINT [FK_User_ProffID]

ALTER TABLE [Proff] WITH CHECK ADD CONSTRAINT [FK_Proff_RatingUserID] FOREIGN KEY([RatingUserID])
REFERENCES [RatingUser] ([RatingUserID])

ALTER TABLE [Proff] CHECK CONSTRAINT [FK_Proff_RatingUserID]

ALTER TABLE [Proff] WITH CHECK ADD CONSTRAINT [FK_Proff_RatingProffID] FOREIGN KEY([RatingProffID])
REFERENCES [RatingProff] ([RatingProffID])

ALTER TABLE [Proff] CHECK CONSTRAINT [FK_Proff_RatingProffID]

ALTER TABLE [RatingProff] WITH CHECK ADD CONSTRAINT [FK_RatingProff_CommentsProffID] FOREIGN KEY([CommentsProffID])
REFERENCES [CommentsProff] ([CommentsProffID])

ALTER TABLE [RatingProff] CHECK CONSTRAINT [FK_RatingProff_CommentsProffID]

ALTER TABLE [RatingProff] WITH CHECK ADD CONSTRAINT [FK_RatingProff_ProffID] FOREIGN KEY([ProffID])
REFERENCES [User] ([ProffID])

ALTER TABLE [RatingProff] CHECK CONSTRAINT [FK_RatingProff_ProffID]

ALTER TABLE [RatingUser] WITH CHECK ADD CONSTRAINT [FK_RatingUser_CommentsUserID] FOREIGN KEY([CommentsUserID])
REFERENCES [CommentsUser] ([CommentsUserID])

ALTER TABLE [RatingUser] CHECK CONSTRAINT [FK_RatingUser_CommentsUserID]

ALTER TABLE [RatingUser] WITH CHECK ADD CONSTRAINT [FK_RatingUser_UserID] FOREIGN KEY([UserID])
REFERENCES [User] ([UserID])

ALTER TABLE [RatingUser] CHECK CONSTRAINT [FK_RatingUser_UserID]

CREATE INDEX [idx_Proff_Name]
ON [Proff] ([Name])

COMMIT TRANSACTION QUICKDBD