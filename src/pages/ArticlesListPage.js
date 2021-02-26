import React from 'react'
import articleContent from './article-content';
import ArticlesList from '../Components/ArticlesList'

const ArticlesListPage = () => {
    return (
        <>
            <h1>[Articles]</h1>
            <ArticlesList articles={articleContent}/>
        </>
    )
}

export default ArticlesListPage