import React from 'react'
import SuggestionItem from '../Atoms/SuggestionItem'

const SuggestionCard = ({suggestions = []}) => (
    <div class="card mb-3 suggestion-card">
        {
            suggestions.map(s => (
                <SuggestionItem 
                    id={s.id}
                    course={s.course}
                    image={s.image}
                    title={s.title}
                />
            ))
        }
    </div>
)

export default SuggestionCard