---
title: "Breast Cancer Diagnosis Classifier"
stack: "Python, SciKit-Learn, XGBoost, Seaborn"
order: 3
images:
  - "/src/assets/some_subplots.png"
  - "/src/assets/Naive_Bayes_ROC_curve.png"
  - "/src/assets/XGBoost_ROC.png"
  - "/src/assets/model_performance.png"
  - "/src/assets/fractal_dimension.png"
---

Using popular machine learning/data science libraries, I trained several classifier models on UCI's Wisconsin Breast Cancer dataset in order to compare how accurately different types of models performed.

I used Seaborn to create modern histograms of this dataset's feature distributions, as well as ROC curves for analyzing model performance. After determining that my XGBoost classifier was the most accurate, I tuned the model's hyperparameters for further optimization, resulting in a model with over 97% accuracy and over 96% precision (cross-validated on 10 folds).

<a class="link link-primary" href="https://github.com/Jake-Funk/cancer-machine-learning" target="_blank" >Click here for the code</a>
