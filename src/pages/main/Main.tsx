import React from 'react';

import classes from './Main.module.css';

import { ReturnComponentType } from 'types';

export const Main = (): ReturnComponentType => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>«ВНИИРТ»</h1>
            <h2 className={classes.subtitle}>Кратко о «ВНИИРТ»</h2>
            <p>
                Тип предприятия: Исполнитель НИОКР Всероссийский научно-исследовательский
                Институт радиотехники является одним из старейших оборонных
                научно-исследовательских предприятий. 27 октября 1908 года Государственная
                Дума рекомендовала постройку Научно-технической лаборатории Военного
                ведомства. К началу первой Мировой войны уже функционировала Центральная
                научно-техническая лаборатория Военного ведомства, преобразованная в 1920
                году в Государственный научно-технический Институт, на базе которого в
                1921 году было создано Особое техническое бюро - предшественник АО
                «ВНИИРТ».
            </p>
            <h2 className={classes.subtitle}>О нас</h2>
            <p>
                АБС Электро объединяет многопрофильные предприятия, которые более 60-ти
                лет занимаются разработкой и производством широкого спектра
                электротехнического оборудования, внедрением систем автоматизации и
                защиты, проектированием, строительством, инженерным оснащением и
                комплектацией энергообъектов, а также предлагают комплексные решения для
                электроэнергетики, атомной, нефтяной, газовой, металлургической,
                химической, горнодобывающей, лесоперерабатывающей, оборонной,
                судостроительной, транспортной, жилищно-коммунальной и других отраслей
                промышленности.
            </p>
            <br />
            <p>
                Благодаря высокому уровню научно-технического потенциала и первоклассным
                опытным специалистам, предприятия АБС Электро разрабатывают и выпускают
                инновационную и перспективную технику, востребованную на рынке.
            </p>
            <br />
            <p>
                Предприятия АБС Электро ведут постоянную работу, направленную на
                укрепление и развитие партнерских отношений с крупнейшими зарубежными и
                отечественными производственными компаниями, что позволяет предлагать
                заказчикам наиболее эффективные и оптимальные решения на
                конкурентоспособных условиях.
            </p>
            <br />
            <p>
                Накопленный опыт и компетенции в области реализации уникальных и
                нестандартных проектных решений позволяют решать задачи любой сложности,
                обеспечивая индивидуальный подход к выполнению требований заказчиков.
            </p>
        </div>
    );
};
