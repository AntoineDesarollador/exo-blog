SELECT story.title AS storyTitle, content, date AS storyDate, alias, category.title AS categoryTitle
FROM story
JOIN user ON story.id_user = user.id
JOIN category_story ON story.id = category_story.id_story
JOIN category ON category_story.id_category = category.id