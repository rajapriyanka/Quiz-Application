package com.quizserver.dto;

public class QuestionResponse {
    private Long questionId;
    private String selectedOption;  // This holds the user's selected answer

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getSelectedOption() {
        return selectedOption;
    }

    public void setSelectedOption(String selectedOption) {
        this.selectedOption = selectedOption;
    }
}
