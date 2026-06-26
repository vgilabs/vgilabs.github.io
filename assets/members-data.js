// Add a new member as a new key (e.g. `jymoon: { ... }`). Put their photo at /images/members/.
window.VGI_MEMBERS = {
  jhlee: {
    id: 'jhlee', name_en: 'Jae-Ho Lee', name_kr: '이재호',
    role: 'Ph.D. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/jhlee.jpg',
    email: 'jaeho-lee@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: 'Continual Learning, Lifelong Learning, Transformer, Multi-modality, LipSync Generation, and HPC',
    github: 'https://github.com/JH-LEE-KR',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'Ph.D. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Kyung Hee University', location: 'Yongin, Republic of Korea', degree: 'M.S. in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Kyung Hee University', location: 'Yongin, Republic of Korea', degree: 'B.S. in Computer Science and Engineering', advisor: 'Prof. Gyeong-Moon Park' }
    ],
    publications: [
      { num: 7, authors: '<me>J.-H. Lee</me>, J.-Y. Moon, M.-Y. Park, Jung Uk Kim<sup>†</sup>, and G.-M. Park<sup>†</sup>',
        title: 'Online Versatile Incremental Learning: Towards Class and Domain-Agnostic Adaptation at Any Time',
        venue: 'ECCV', venueFull: 'European Conference on Computer Vision', location: 'Malmö, Sweden', date: 'Oct. 2026' },
      { num: 6, authors: '<me>J.-H. Lee</me>, J.-E. Lee, and G.-M. Park<sup>†</sup>',
        title: 'DARE to Mitigate Hallucination: Dual-path Auto-Regressive-aware Editing',
        venue: 'ECCV', venueFull: 'European Conference on Computer Vision', location: 'Malmö, Sweden', date: 'Oct. 2026' },
      { num: 5, authors: 'M.-Y. Park*, <me>J.-H. Lee</me>*, and G.-M. Park<sup>†</sup>',
        title: 'Versatile Incremental Learning: Towards Class and Domain-Agnostic Incremental Learning',
        venue: 'ECCV', venueFull: 'European Conference on Computer Vision', location: 'Milan, Italy', date: 'Sep. 2024' },
      { num: 4, authors: 'A.-H. Shin, <me>J.-H. Lee</me>, J.-W. Hwang, Yoonhyung Kim, and G.-M. Park<sup>†</sup>',
        title: 'Wav2NeRF: Audio-Driven Realistic Talking Head Generation via Wavelet-based NeRF',
        venue: 'IMAVIS', venueFull: 'Image and Vision Computing, vol. 148, 105104', location: '', date: 'Aug. 2024', journal: true },
      { num: 3, authors: '<me>J.-H. Lee</me> and G.-M. Park',
        title: 'Prompt Based Incremental Learning Using Attention Diversity',
        venue: 'KSC', venueFull: 'Korea Software Congress', location: 'Jeju Island, Republic of Korea', date: 'Dec. 2022', domestic: true,
        tag: 'Award', award: '/images/award/award_230202_jhlee.pdf' },
      { num: 2, authors: '<me>J.-H. Lee</me>, T.-Y. Lee, and G.-M. Park',
        title: 'Vision Transformer Uncertainty Estimation With Image Tokens',
        venue: 'KCC', venueFull: 'Korea Computer Congress', location: 'Jeju Island, Republic of Korea', date: 'Jun. 2022', domestic: true },
      { num: 1, authors: '<me>J.-H. Lee</me> and G.-M. Park',
        title: 'Vision Transformer Based Continual Learning',
        venue: 'KSC', venueFull: 'Korea Software Congress', location: 'Pyeongchang, Republic of Korea', date: 'Dec. 2021', domestic: true,
        tag: 'Award', award: '/images/award/award_220203_jhlee.pdf' }
    ],
    patents: [
      { num: 1, authors: '<me>J.-H. Lee</me>, M.-Y. Park, and G.-M. Park',
        title: '클러스터 기반 어댑터 변화 제어와 증분 분류기를 통한 다목적 증분 학습 장치 및 방법 (Versatile Incremental Learning Apparatus and Method using Cluster-based Adapter Shift Control and Incremental Classifier)',
        venue: 'Korean Patent Application (10-2024-0026300)', date: '' }
    ],
    awards: [
      { num: 2, title: 'Best Paper Award', venue: 'Korea Software Congress (KSC)', location: 'Jeju Island, Republic of Korea', date: 'Dec. 2022', cert: '/images/award/award_230202_jhlee.pdf' },
      { num: 1, title: 'Best Paper Award', venue: 'Korea Software Congress (KSC)', location: 'Pyeongchang, Republic of Korea', date: 'Dec. 2021', cert: '/images/award/award_220203_jhlee.pdf' }
    ]
  },

  tylee: {
    id: 'tylee', name_en: 'Tae-Young Lee', name_kr: '이태영',
    role: 'M.S.-Ph.D. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/tylee2.jpg',
    email: 'tylee0415@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: 'Continual Learning and Robotics',
    github: 'https://github.com/TY-LEE-KR',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'M.S.-Ph.D. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Kyung Hee University', location: 'Yongin, Republic of Korea', degree: 'B.S. in Mechanical Engineering; B.S. in Computer Science and Engineering' }
    ],
    publications: [
      { num: 7, authors: 'Kang Eun Jeon, Yunsung Kang, Do Yeong Kang, <me>T.-Y. Lee</me>, G.-M. Park<sup>†</sup>, and Jong Hwan Ko<sup>†</sup>',
        title: 'R-ESC: Robustly Erasing Space Concepts via Stochastic Feature Remapping',
        venue: 'ECCV', venueFull: 'European Conference on Computer Vision', location: 'Malmö, Sweden', date: 'Oct. 2026' },
      { num: 6, authors: '<me>T.-Y. Lee</me>*, J. Seo*, Jong Hwan Ko<sup>†</sup>, and G.-M. Park<sup>†</sup>',
        title: 'Perturb a Model, Not an Image: Towards Robust Privacy Protection via Anti-Personalized Diffusion Models',
        venue: 'NeurIPS', venueFull: 'Neural Information Processing Systems', location: 'San Diego, U.S.A.', date: 'Dec. 2025' },
      { num: 5, authors: '<me>T.-Y. Lee</me>*, Sundong Park*, Minwoo Jeon*, Hyoseok Hwang<sup>†</sup>, and G.-M. Park<sup>†</sup>',
        title: 'ESC: Erasing Space Concept for Knowledge Deletion',
        venue: 'CVPR', venueFull: 'Computer Vision and Pattern Recognition', location: 'Nashville, U.S.A.', date: 'Jun. 2025',
        tag: 'Highlight', tagNote: 'acceptance rate = 2.98%' },
      { num: 4, authors: 'J. Seo*, S.-H. Lee*, <me>T.-Y. Lee</me>*, Seung-Jun Moon, and G.-M. Park<sup>†</sup>',
        title: 'Generative Unlearning for Any Identity',
        venue: 'CVPR', venueFull: 'Computer Vision and Pattern Recognition', location: 'Seattle, U.S.A.', date: 'Jun. 2024' },
      { num: 3, authors: 'S.-H. Lee, <me>T.-Y. Lee</me> and G.-M. Park',
        title: 'OutLaST: Out-of-Distribution-based Continual Learning via Sample Selection and Task Prediction',
        venue: 'KSC', venueFull: 'Korea Software Congress', location: 'Busan, Republic of Korea', date: 'Dec. 2023', domestic: true },
      { num: 2, authors: '<me>T.-Y. Lee</me>, and G.-M. Park',
        title: 'Prompt based continual learning with OOD Score based replay buffer',
        venue: 'KSC', venueFull: 'Korea Software Congress', location: 'Jeju Island, Republic of Korea', date: 'Dec. 2022', domestic: true },
      { num: 1, authors: 'J.-H. Lee, <me>T.-Y. Lee</me>, and G.-M. Park',
        title: 'Vision Transformer Uncertainty Estimation With Image Tokens',
        venue: 'KCC', venueFull: 'Korea Computer Congress', location: 'Jeju Island, Republic of Korea', date: 'Jun. 2022', domestic: true }
    ],
    patents: [
      { num: 4, authors: 'G.-M. Park, Jong Hwan Ko, and <me>T.-Y. Lee</me>',
        title: '인공지능 모델의 개인화 방지를 위한 방법 및 장치 (Method and Apparatus for Preventing Personalization of Artificial Intelligence Model)',
        venue: 'Korean Patent Application (10-2026-0056933)', date: 'Mar. 30, 2026' },
      { num: 3, authors: 'G.-M. Park, <me>T.-Y. Lee</me>, and J. Seo',
        title: '생성 모델에서 인물에 대한 학습 제거를 수행하는 방법 및 이를 수행하기 위한 컴퓨팅 장치 (Method for Performing Unlearning of People in a Generative Model and Computing Device for Performing the Same)',
        venue: 'US Patent Application (18/925,176)', date: 'Oct. 24, 2024' },
      { num: 2, authors: 'G.-M. Park, <me>T.-Y. Lee</me>, Sundong Park, Minwoo Jeon, and Hyoseok Hwang',
        title: '깊은 신경망에서의 특징 수준의 학습 제거 수행 방법 및 이를 수행하기 위한 컴퓨팅 장치 (Method for Feature-level Unlearning in Deep Neural Networks and Computing Device for Executing the Method)',
        venue: 'Korean Patent Application (10-2024-0087740)', date: 'Jul. 3, 2024' },
      { num: 1, authors: 'G.-M. Park, <me>T.-Y. Lee</me>, and J.-W. Seo',
        title: '생성 모델에서 인물에 대한 학습 제거를 수행하는 방법 및 이를 수행하기 위한 컴퓨팅 장치 (Method for Performing Unlearning of People in a Generative Model and Computing Device for Performing the Same)',
        venue: 'Korean Patent Application (10-2024-0060152)', date: 'May. 7, 2024' }
    ]
  },

  mjkim: {
    id: 'mjkim', name_en: 'Min-Jae Kim', name_kr: '김민재',
    role: 'M.S.-Ph.D. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/mjkim.jpeg',
    email: 'minjaekim@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: 'Back-Channel Prediction',
    publications: [
      { num: 3, authors: '<me>M.-J. Kim</me>*, J.-Y. Moon*, Mujeen Sung<sup>†</sup>, and G.-M. Park<sup>†</sup>',
        title: "Open Your Model's Eyes: Video and Context-Aware Multimodal Backchannel Prediction",
        venue: 'ACL', venueFull: 'Association for Computational Linguistics', location: 'San Diego, U.S.A.', date: 'Jul. 2026' },
      { num: 2, authors: 'W.-J. Lee, J. Seo, <me>M.-J. Kim</me>, and G.-M. Park',
        title: 'Multi-Modal Generation with Leveraging Pre-Trained Single-Modal Models',
        venue: 'KCC', venueFull: 'Korea Computer Congress', location: 'Jeju Island, Republic of Korea', date: 'Jun. 2024', domestic: true,
        tag: 'Award' },
      { num: 1, authors: '<me>M.-J. Kim</me>, J.-Y. Moon, and G.-M. Park',
        title: 'Backchannel Prediction Model using Prototype Prompting',
        venue: 'KSC', venueFull: 'Korea Software Congress', location: 'Busan, Republic of Korea', date: 'Dec. 2023', domestic: true }
    ],
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'M.S.-Ph.D. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Kyung Hee University', location: 'Yongin, Republic of Korea', degree: 'B.S. in Computer Science and Engineering', advisor: 'Prof. Gyeong-Moon Park' }
    ],
    awards: [
      { num: 1, title: 'Best Paper Award', venue: 'Korea Computer Congress (KCC)', location: 'Jeju Island, Republic of Korea', date: 'Jun. 2024' }
    ]
  },

  hmlew: {
    id: 'hmlew', name_en: 'Hah Min Lew', name_kr: '류하민',
    role: 'Ph.D. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/hmlew.jpg',
    email: 'hahminlew@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: '',
    github: 'https://hahminlew.github.io/',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'Ph.D. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'DGIST', location: 'Daegu, Republic of Korea', degree: 'M.S. in Electrical Engineering & Computer Science' }
    ],
    publications: [
      { num: 11, authors: 'Seungeun Lee, Seung-Jun Moon, <me>H. M. Lew</me>, Ji-Su Kang, and G.-M. Park<sup>†</sup>',
        title: 'AudioAvatar: Personalized Audio-driven Whole-body Talking Avatars',
        venue: 'CVPR', venueFull: 'Computer Vision and Pattern Recognition', location: 'Denver, U.S.A.', date: 'Jun. 2026' },
      { num: 10, authors: 'Seungeun Lee, Seung-Jun Moon, <me>H. M. Lew</me>, Ji-Su Kang, and G.-M. Park<sup>†</sup>',
        title: 'SMAGA: Secondary Motion-Aware 3D Clothed Gaussian Avatars from Monocular Videos',
        venue: 'ICLR', venueFull: 'International Conference on Learning Representations', location: 'Rio de Janeiro, Brazil', date: 'Apr. 2026' },
      { num: 9, authors: 'Seung-Jun Moon*, <me>H. M. Lew</me>*, Seungeun Lee, Ji-Su Kang, and G.-M. Park<sup>†</sup>',
        title: 'GeoAvatar: Adaptive Geometrical Gaussian Splatting for 3D Head Avatar',
        venue: 'ICCV', venueFull: 'International Conference on Computer Vision', location: 'Hawaii, U.S.A.', date: 'Oct. 2025' },
      { num: 8, authors: '<me>H. M. Lew</me>*, Sahng-Min Yoo*, Hyunwoo Kang*, and G.-M. Park<sup>†</sup>',
        title: 'Towards High-fidelity Head Blending with Chroma Keying for Industrial Applications',
        venue: 'WACV', venueFull: 'Winter Conference on Applications of Computer Vision', location: 'Arizona, U.S.A.', date: 'Mar. 2025' },
      { num: 7, authors: 'Kyungsu Lee, Thiago Coutinho Cavalcanti, Sewoong Kim, <me>H. M. Lew</me>, Dong Hun Lee, and Jae Youn Hwang<sup>†</sup>',
        title: 'Multi-task and Few-shot Learning-based Fully Automatic Deep Learning Platform for Mobile Diagnosis of Skin Diseases',
        venue: 'JBHI', venueFull: 'IEEE Journal of Biomedical and Health Informatics, vol. 27, no. 1, pp. 176-187', location: '', date: 'Jan. 2023', journal: true },
      { num: 6, authors: 'Kyungsu Lee, <me>H. M. Lew</me>, Moon Hwan Lee, Minji Kang, Junyoung Kim, and Jae Youn Hwang<sup>†</sup>',
        title: 'CSS-Net: Classification and Substitution for Segmentation of Rotator Cuff Tear',
        venue: 'ACCV', venueFull: 'Asian Conference on Computer Vision', location: 'Macau, China', date: 'Dec. 2022' },
      { num: 5, authors: 'Moon Hwan Lee, <me>H. M. Lew</me>, Sangyeon Youn, Tae Kim, and Jae Youn Hwang<sup>†</sup>',
        title: 'Deep learning-based framework for fast and accurate acoustic hologram generation',
        venue: 'TUFFC', venueFull: 'IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 69, no. 12, pp. 3353-3366', location: '', date: 'Dec. 2022', journal: true },
      { num: 4, authors: 'Haeyun Lee, Moon Hwan Lee, Sangyeon Youn, Kyungsu Lee, <me>H. M. Lew</me>, and Jae Youn Hwang<sup>†</sup>',
        title: 'Speckle Reduction via Deep Content-Aware Image Prior for Precise Breast Tumor Segmentation in an Ultrasound Image',
        venue: 'TUFFC', venueFull: 'IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 69, no. 9, pp. 2638-2650', location: '', date: 'Sep. 2022', journal: true },
      { num: 3, authors: 'Thiago Coutinho Cavalcanti, <me>H. M. Lew</me>, Kyungsu Lee, Sang-yeon Lee, Moo Kyun Park, and Jae Youn Hwang<sup>†</sup>',
        title: 'Intelligent Smartphone-based Multimode Imaging Otoscope for the Mobile Diagnosis of Otitis Media',
        venue: 'BOE', venueFull: 'Biomedical Optics Express, vol. 12, no. 12, pp. 7765-7779', location: '', date: 'Dec. 2021', journal: true },
      { num: 2, authors: '<me>H. M. Lew</me>, Heean Shin, Moon Hwan Lee, Sangyeon Youn, Hee Chan Kim, and Jae Youn Hwang<sup>†</sup>',
        title: 'Ultrasonic Blood Flowmeter with a Novel Xero Algorithm for a Mechanical Circulatory Support System',
        venue: 'Ultrasonics', venueFull: 'Ultrasonics, vol. 115, 106422', location: '', date: 'Aug. 2021', journal: true },
      { num: 1, authors: 'Jihun Kim, <me>H. M. Lew</me>, Jung-Hee Kim, Sangyeon Youn, Hasan Al Faruque, An Na Seo, Soo Yeun Park, Jin Ho Chang, Enjoo Kim, and Jae Youn Hwang<sup>†</sup>',
        title: 'Forward-looking Multimodal Endoscopic System based on Optical Multispectral and High-frequency Ultrasound Imaging Techniques for Tumor Detection',
        venue: 'TMI', venueFull: 'IEEE Transactions on Medical Imaging, vol. 40, no. 2, pp. 594-606', location: '', date: 'Feb. 2021', journal: true }
    ],
    patents: [
      { num: 5, authors: '<me>H. M. Lew</me>, Hyunwoo Kang, Sahng-Min Yoo, and G.-M. Park',
        title: '헤드 스와핑을 위한 컴퓨팅 장치 (Computing Device for Head Swapping)',
        venue: 'PCT Patent Application (WO2025042068A1); Korean Patent Application (10-2023-0154188)', date: 'Feb. 2025' },
      { num: 4, authors: 'Jae Youn Hwang, Thiago Coutinho Cavalcanti, and <me>H. M. Lew</me>',
        title: '모바일 오토스코프 시스템 (Mobile Otoscope System)',
        venue: 'Korean Patent Registration (10-2648059)', date: 'Mar. 2024' },
      { num: 3, authors: 'Jae Youn Hwang, <me>H. M. Lew</me>, and Hee Chan Kim',
        title: '초음파 혈류량 측정 장치 및 그 방법 (Ultrasonic Blood Flow Measuring Apparatus and Method Thereof)',
        venue: 'Korean Patent Registration (10-2514633)', date: 'Mar. 2023' },
      { num: 2, authors: 'Jae Youn Hwang, Moon Hwan Lee, and <me>H. M. Lew</me>',
        title: '방광 모니터링 장치 및 방광 모니터링 장치의 제어 방법 (Bladder Monitoring Apparatus and Method for Controlling Bladder Monitoring Apparatus)',
        venue: 'Korean Patent Registration (10-2460829)', date: 'Oct. 2022' },
      { num: 1, authors: 'Jae Youn Hwang, Jihun Kim, and <me>H. M. Lew</me>',
        title: '3차원 진단 시스템 (Three-dimensional Diagnostic System)',
        venue: 'Korean Patent Registration (10-2379481)', date: 'Mar. 2022' }
    ]
  },

  wjlee: {
    id: 'wjlee', name_en: 'Won-Jeong Lee', name_kr: '이원정',
    role: 'M.S. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/wjlee.jpg',
    email: 'wonnon@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: 'Generative models',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'M.S. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Kyung Hee University', location: 'Yongin, Republic of Korea', degree: 'B.S. in Applied Mathematics; B.S. in Computer Science and Engineering' }
    ],
    publications: [
      { num: 3, authors: 'M.-Y. Park*, <me>W.-J. Lee</me>*, Seong Tae Kim<sup>†</sup>, and G.-M. Park<sup>†</sup>',
        title: 'When Will It Fail?: Anomaly to Prompt for Forecasting Future Anomalies in Time Series',
        venue: 'ICML', venueFull: 'International Conference on Machine Learning', location: 'Vancouver, Canada', date: 'Jul. 2025' },
      { num: 2, authors: '<me>W.-J. Lee</me>, M.-Y. Park, and G.-M. Park',
        title: 'Time-Series Anomaly Detection Using Attention Mechanism with Defined Pseudo Anomalies',
        venue: 'KSC', venueFull: 'Korea Software Congress', location: 'Yeosu, Republic of Korea', date: 'Dec. 2024', domestic: true, tag: 'Award' },
      { num: 1, authors: '<me>W.-J. Lee</me>, J. Seo, M.-J. Kim, and G.-M. Park',
        title: 'Multi-Modal Generation with Leveraging Pre-Trained Single-Modal Models',
        venue: 'KCC', venueFull: 'Korea Computer Congress', location: 'Jeju Island, Republic of Korea', date: 'Jun. 2024', domestic: true, tag: 'Award' }
    ],
    awards: [
      { num: 2, title: 'Best Paper Award', venue: 'Korea Software Congress (KSC)', location: 'Yeosu, Republic of Korea', date: 'Dec. 2024' },
      { num: 1, title: 'Best Paper Award', venue: 'Korea Computer Congress (KCC)', location: 'Jeju Island, Republic of Korea', date: 'Jun. 2024' }
    ]
  },

  hblim: {
    id: 'hblim', name_en: 'Habin Lim', name_kr: '임하빈',
    role: 'M.S.-Ph.D. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/hblim.png',
    email: 'ha001211@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: 'Generative models',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'M.S.-Ph.D. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Kyung Hee University', location: 'Yongin, Republic of Korea', degree: 'B.S. in Computer Science and Engineering' }
    ],
    publications: [
      { num: 5, authors: '<me>H. Lim</me> and G.-M. Park<sup>†</sup>',
        title: 'OSVE: One Step Video Editing with One Step Diffusion Models',
        venue: 'ECCV', venueFull: 'European Conference on Computer Vision', location: 'Malmö, Sweden', date: 'Oct. 2026' },
      { num: 4, authors: '<me>H. Lim</me>*, Euijune Lee*, Si Eun Kwoun, Sung-Ho Bae, G.-M. Park, Yohan Hwang, and Sangmin-Michelle Lee<sup>†</sup>',
        title: 'Diffusion-Based AI System for Second Language Reading: Development, Text Quality Validation, and Learner Perception',
        venue: 'C&E', venueFull: 'Computers & Education, vol. 251, 105653', location: '', date: 'Oct. 2026', journal: true },
      { num: 3, authors: '<me>H. Lim</me>, Youngseob Won, J. Seo, and G.-M. Park<sup>†</sup>',
        title: 'ConceptSplit: Decoupled Multi-Concept Personalization of Diffusion Models via Token-wise Adaptation and Attention Disentanglement',
        venue: 'ICCV', venueFull: 'International Conference on Computer Vision', location: 'Hawaii, U.S.A.', date: 'Oct. 2025' },
      { num: 2, authors: '<me>H. Lim</me> and G.-M. Park<sup>†</sup>',
        title: 'Good-Text Inversion for Faster Real Image Editing using Guided Diffusion Models',
        venue: 'KSC', venueFull: 'Korea Software Congress', location: 'Yeosu, Republic of Korea', date: 'Dec. 2024', domestic: true },
      { num: 1, authors: '<me>H. Lim</me>, Y.-S. Won, SeonHyeok Kim, Yeonjin Seo, and G.-M. Park',
        title: 'LFS-DIFFUSION: Lifelong Few-shot Image Generation In Latent Diffusion Model Via LeFT Weight Modulator',
        venue: 'KCC', venueFull: 'Korea Computer Congress', location: 'Jeju Island, Republic of Korea', date: 'Jun. 2024', domestic: true, tag: 'Award' }
    ],
    awards: [
      { num: 1, title: 'Best Paper Award', venue: 'Korea Computer Congress (KCC)', location: 'Jeju Island, Republic of Korea', date: 'Jun. 2024' }
    ]
  },

  cswoo: {
    id: 'cswoo', name_en: 'Chang-Sik Woo', name_kr: '우창식',
    role: 'M.S. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/cswoo.jpg',
    email: 'woocs@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: 'Continual Learning and Computer Vision',
    github: 'https://changsik-woo.github.io',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'M.S. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Sungkyunkwan University', location: 'Suwon, Republic of Korea', degree: 'B.S. in Electronic and Electric Engineering' }
    ],
    career: [
      { org: 'LG Display', location: 'Paju, Republic of Korea', role: 'Inspection Process Senior Engineer in OLED Manufacture', years: '2016 — Present' }
    ]
  },

  jelee: {
    id: 'jelee', name_en: 'Jeong-Eun Lee', name_kr: '이정은',
    role: 'B.S.-M.S. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/jelee.png',
    email: 'esilver@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: '',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'B.S. in Data Science' }
    ],
    publications: [
      { num: 1, authors: 'J.-H. Lee, <me>J.-E. Lee</me>, and G.-M. Park<sup>†</sup>',
        title: 'DARE to Mitigate Hallucination: Dual-path Auto-Regressive-aware Editing',
        venue: 'ECCV', venueFull: 'European Conference on Computer Vision', location: 'Malmö, Sweden', date: 'Oct. 2026' }
    ]
  },

  jwheo: {
    id: 'jwheo', name_en: 'Jun-Woo Heo', name_kr: '허준우',
    role: 'M.S.-Ph.D. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/jwheo.JPG',
    email: 'dinleo11@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: '',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'M.S.-Ph.D. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'B.S. in Computer Science' }
    ],
    publications: [
      { num: 1, authors: '<me>J.-W. Heo</me>*, K.-H. Park*, and G.-M. Park',
        title: 'Detecting Unknown Objects via Energy-based Separation for Open World Object Detection',
        venue: 'CVPR', venueFull: 'Computer Vision and Pattern Recognition', location: 'Denver, U.S.A.', date: 'Jun. 2026' }
    ]
  },

  yblee: {
    id: 'yblee', name_en: 'Yoo-Bin Lee', name_kr: '이유빈',
    role: 'M.S.-Ph.D. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/yblee.jpg',
    email: 'jackbeen@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: '',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'M.S.-Ph.D. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'B.S. in Civil, Environmental and Architectural Engineering' }
    ]
  },

  jsjang: {
    id: 'jsjang', name_en: 'Ji-Su Jang', name_kr: '장지수',
    role: 'M.S.-Ph.D. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/jsjang.jpg',
    email: 'j2500jan@gmail.com',
    room: '#203B, Woo Jung Informatics Building',
    interests: '',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'M.S.-Ph.D. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Sookmyung Women\'s University', location: 'Seoul, Republic of Korea', degree: 'B.S. in IT Engineering' }
    ]
  },

  jmyang: {
    id: 'jmyang', name_en: 'Jae-Min Yang', name_kr: '양재민',
    role: 'M.S.-Ph.D. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/jmyang.JPG',
    email: 'yangjaemin1128@gmail.com',
    room: '#203B, Woo Jung Informatics Building',
    interests: '',
    education: [
      { school: 'Korea University', location: 'Seoul, Republic of Korea', degree: 'M.S.-Ph.D. student in Artificial Intelligence', advisor: 'Prof. Gyeong-Moon Park' },
      { school: 'Kwang Woon University', location: 'Seoul, Republic of Korea', degree: 'B.S. in Robotics' }
    ]
  },

  jhkim: {
    id: 'jhkim', name_en: 'Joonhyuk Kim', name_kr: '김준혁',
    role: 'Post-M.S. student',
    dept: 'Department of Artificial Intelligence, Korea University',
    photo: '/images/members/jhkim.jpg',
    email: 'joonhyukkim@korea.ac.kr',
    room: '#203B, Woo Jung Informatics Building',
    interests: 'Computer Vision, Continual Learning, Domain Adaptation, Generative Models, Robotics',
    education: [
      { school: 'Korea Advanced Institute of Science and Technology', location: 'Daejeon, Republic of Korea', degree: 'M.S. in Electrical Engineering', advisor: 'Prof. Jong-Hwan Kim' },
      { school: 'Seoul National University', location: 'Seoul, Republic of Korea', degree: 'B.S. in Mechanical and Aerospace Engineering' }
    ],
    publications: [
      { num: 4, authors: 'Dong-Hwan Jang, Sanghyeok Chu, <me>J. Kim</me>, Bohyung Han',
        title: 'Pooling Revisited: Your Receptive Field is Suboptimal',
        venue: 'CVPR', venueFull: 'Computer Vision and Pattern Recognition', location: 'New Orleans, U.S.A.', date: 'Jun. 2022' },
      { num: 3, authors: '<me>J. Kim</me>, Sahng-Min Yoo, G.-M. Park, Jong-Hwan Kim',
        title: 'Continual Unsupervised Domain Adaptation for Semantic Segmentation',
        venue: 'arXiv', venueFull: 'arXiv e-prints', location: '', date: 'Oct. 2021', journal: true },
      { num: 2, authors: '<me>J. Kim</me>, Inug Yoon, G.-M. Park, Jong-Hwan Kim',
        title: 'Non-Probabilistic Cosine Similarity Loss for Few-Shot Image Classification',
        venue: 'BMVC', venueFull: 'British Machine Vision Conference', location: 'Manchester, United Kingdom', date: 'Sep. 2020' },
      { num: 1, authors: '<me>J. Kim</me>, G.-M. Park, Jong-Hwan Kim',
        title: 'Multi-channel Classification Resonance Network',
        venue: 'RiTA', venueFull: 'International Conference on Robot Intelligence Technology and Applications', location: 'Daejeon, Republic of Korea', date: 'Nov. 2019' }
    ],
    patents: [
      { num: 11, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '이미지의 특징 추출 및 합성 시스템의 학습 방법 (Learning Method for Image Feature Extraction and Synthesis System)',
        venue: 'Korean Patent (10-2023-0073819)', date: 'Jun. 8, 2023' },
      { num: 10, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '이미지 합성 시스템의 학습 방법 (Learning Method for Image Synthesis System)',
        venue: 'Korean Patent (10-2023-0073814)', date: 'Jun. 8, 2023' },
      { num: 9, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '이미지 조정 방법 (Image Adjustment Method)',
        venue: 'Korean Patent (10-2023-0073800)', date: 'Jun. 8, 2023' },
      { num: 8, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '딥러닝을 기반으로하는 사람 얼굴을 생성하는 컴퓨터 구현 학습 시스템 (A Computer-Implemented Learning System That Generates Human Faces Based on Deep Learning)',
        venue: 'Korean Patent (10-2023-0055457)', date: 'Apr. 27, 2023' },
      { num: 7, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '복수의 인물 이미지로부터 추출된 특성을 반영한 가상인물 생성 딥러닝 모델의 학습방법 (A Learning Method for a Deep Learning Model That Creates a Virtual Character That Reflects Characteristics Extracted From Multiple Character Images)',
        venue: 'Korean Patent (10-2023-0055450)', date: 'Apr. 27, 2023' },
      { num: 6, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '어텐션 마스크를 통해 학습의 효율을 증대시키는 페이스 스와핑 딥러닝 시스템의 학습방법 (Learning Method of Face Swapping Deep Learning System That Increases Learning Efficiency Through Attention Mask)',
        venue: 'Korean Patent (10-2023-0055027)', date: 'Apr. 26, 2023' },
      { num: 5, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '3DMM 을 활용한 딥러닝 시스템 학습방법 (Deep Learning System Learning Method Using 3DMM)',
        venue: 'Korean Patent (10-2023-0055026)', date: 'Apr. 26, 2023' },
      { num: 4, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '가상의 사람 얼굴을 생성하는 얼굴 생성 딥러닝 모델의 학습방법 및 이를 이용한 시스템 (Learning Method of Face Generation Deep Learning Model Generating Virtual Human Face and System Using the Same)',
        venue: 'Korean Patent (10-2023-0015237)', date: 'Feb. 4, 2023' },
      { num: 3, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '페이스 스와핑 딥러닝 시스템을 학습하는 방법 및 장치 (Method and Apparatus for Learning Face Swapping Deep Learning System)',
        venue: 'Korean Patent (10-2023-0015236)', date: 'Feb. 4, 2023' },
      { num: 2, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '딥 러닝을 이용하여 특정한 속성을 선별적으로 변화시키는 이미지 조정 방법 (Image Adjustment Method That Selectively Changes Specific Properties Using Deep Learning)',
        venue: 'Korean Patent (10-2022-0053573)', date: 'Apr. 29, 2022' },
      { num: 1, authors: 'Jung-Hyuk Im, <me>J. Kim</me>, Won-Jong Ryu, Jeong-Young Jung, and Hwal Kim',
        title: '딥 러닝을 이용한 이미지의 특징 추출 및 합성 시스템 및 이의 학습 방법 (Image Feature Extraction and Synthesis System Using Deep Learning and Its Learning Method)',
        venue: 'Korean Patent (10-2022-0053447)', date: 'Apr. 29, 2022' }
    ]
  }

};
