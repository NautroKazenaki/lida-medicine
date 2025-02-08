import React, { useState } from 'react';

const App = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [formValues, setFormValues] = useState(Array(64).fill('')); // Храним значения всех форм

  const fieldGroupsData = [
    { title: 'Маркеры углеводного обмена', fields: [0, 1] },
    { title: 'Маркеры метаболизма в цикле Кребса...', fields: [2, 3, 4, 5, 6, 7, 8, 9] },
    { title: 'Маркеры кетогенеза...', fields: [10, 11, 12] },
    { title: 'Маркеры метаболизма разветвленных аминокислот', fields: [13, 14, 15, 16] },
    { title: 'Маркеры метаболизма ароматических аминокислот', fields: [17, 18, 19, 20, 21, 22] },
    { title: 'Маркеры метаболизма триптофана', fields: [23, 24] },
    { title: 'Маркеры метаболизма щавелевой кислоты', fields: [25, 26, 27] },
    { title: 'Маркеры достаточности витаминов В1, B2, липоевой кислоты', fields: [28, 29, 30] },
    { title: 'Маркеры достаточности витаминов В2, B5...', fields: [31, 32, 33, 34] },
    { title: 'Маркеры достаточности витаминов В2, B5...', fields: [35, 36] },
    { title: 'Маркеры достаточности витамина В6', fields: [37, 38] },
    { title: 'Маркеры достаточности витамина В7 и В8', fields: [39] },
    { title: 'Маркеры нарушения синтеза коэнзима Q10', fields: [40] },
    { title: 'Маркеры достаточности вит. В9', fields: [41] },
    { title: 'Маркеры достаточности вит. В12', fields: [42] },
    { title: 'Маркеры детоксикации и эндогенной интоксикации', fields: [43, 44, 45, 46] },
    { title: 'Маркеры интоксикации производными бензола', fields: [47, 48, 49, 50] },
    { title: 'Маркеры дисбиоза кишечника', fields: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61] },
    { title: 'Дрожжевые и грибковые маркеры дисбиоза кишечника', fields: [62, 63] },
  ];

  const minMaxValuesData = [
    { min: 4.081, max: 28.79 },
    { min: 3.26, max: 21.087 },
    { min: 46.76, max: 368.01 },
    { min: 10.16, max: 45.44 },
    { min: 13.21, max: 58.38 },
    { min: 0.681, max: 4.493 },
    { min: 1.5, max: 10.73 },
    { min: 0.153, max: 1.312 },
    { min: 0.153, max: 1.721 },
    { min: 0.404, max: 2.457 },
    { min: 0.0018, max: 0.1263 },
    { min: 0.489, max: 30.466 },
    { min: 0.202, max: 1.198 },
    { min: 0.071, max: 0.46 },
    { min: 0.297, max: 4.5 },
    { min: 0.39, max: 2.526 },
    { min: 0.179, max: 1.996 },
    { min: 0, max: 0.87 },
    { min: 0.338, max: 4.692 },
    { min: 0.046, max: 1.583 },
    { min: 0.02, max: 0.223 },
    { min: 0, max: 1.743 },
    { min: 0.094, max: 0.36 },
    { min: 0.761, max: 2.374 },
    { min: 0.215, max: 1.709 },
    { min: 7.17, max: 28.16 },
    { min: 0.936, max: 4.51 },
    { min: 1.36, max: 15.07 },
    { min: 0.197, max: 0.981 },
    { min: 0.339, max: 2.477 },
    { min: 0.162, max: 1.318 },
    { min: 0.068, max: 0.542 },
    { min: 0.009, max: 0.126 },
    { min: 0.525, max: 3.743 },
    { min: 0.363, max: 1.914 },
    { min: 1.52, max: 13.73 },
    { min: 0.74, max: 3.265 },
    { min: 0.1371, max: 1.3414 },
    { min: 0.599, max: 2.177 },
    { min: 2.281, max: 11.538 },
    { min: 3.306, max: 8.73 },
    { min: 0.092, max: 0.851 },
    { min: 0.362, max: 2.396 },
    { min: 0.125, max: 0.722 },
    { min: 4.87, max: 25.74 },
    { min: 0.465, max: 7.476 },
    { min: 0.12, max: 0.864 },
    { min: 0.689, max: 8.392 },
    { min: 0, max: 10.36 },
    { min: 0, max: 0.018 },
    { min: 0, max: 2.36 },
    { min: 0.116, max: 0.987 },
    { min: 0.46, max: 3.1 },
    { min: 0.358, max: 3.85 },
    { min: 106.53, max: 868.71 },
    { min: 0, max: 1.1 },
    { min: 0.016, max: 0.172 },
    { min: 0.021, max: 0.241 },
    { min: 0.022, max: 0.175 },
    { min: 0.053, max: 0.698 },
    { min: 1.07, max: 5.645 },
    { min: 0.0651, max: 0.2841 },
    { min: 0.493, max: 9.66 },
    { min: 0.788, max: 8.4 },
  ];

  const formNamesData = [
    "Молочная кислота (лактат, E270)",
    "Пировиноградная кислота (пируват)",
    "Лимонная кислота (цитрат, Е330)",
    "Цис-Аконитовая кислота (пропилентрикарбоновая)",
    "Изолимонная кислота (изоцитрат)",
    "2-Кетоглутаровая кислота (2-оксоглутаровая)",
    "Янтарная кислота (сукциновая, сукцинат, Е363)",
    "Фумаровая кислота (болетовая, E297)",
    "Яблочная кислота (малат, оксиянтарная, Е296)",
    "2-Метилглутаровая (2-метилпентандиовая)",
    "Ацетоуксусная кислота (3-кетомасляная, ацетоацетат)",
    "3-Гидроксимасляная кислота",
    "Малоновая кислота (пропандиовая)",
    "2-Гидрокси-3-метилбутановая кислота (2-гидроксиизовалериановая)",
    "3-Метилкротонилглицин",
    "3-Метилглутаровая кислота (3-метилпентандиоевая)",
    "Изовалерилглицин (N-изопентаноилглицин)",
    "Пара-Гидроксифенилмолочная кислота",
    "Пара-Гидроксифенилпировиноградная кислота",
    "Гомогентизиновая кислота (2,5-дигидроксифенилуксусная, мелановая)",
    "3-Фенилмолочная кислота (2-гидрокси-3-фенилпропионовая)",
    "Фенилглиоксиловая кислота (бензоилмуравьиная), ммоль/моль кр.",
    "Миндальная кислота (фенилгликолевая), ммоль/моль кр.",
    "Квинолиновая кислота (хинолиновая; 2,3-пиридиндикарбоновая)",
    "Пиколиновая кислота",
    "Гликолиевая кислота (гидроксиуксусная)",
    "Глицериновая кислота (2,3-дигидроксипропановая)",
    "Щавелевая кислота (этандиовая, оксаловая)",
    "2-Кетоизовалериановая кислота",
    "3-метил-2-оксовалерьяновая кислота (3-метил-2-оксопентановая)",
    "4-Метил-2-оксовалерьяновая кислота (2-кетоизокапроевая)",
    "Глутаровая кислота (пентандиовая)",
    "Себациновая кислота (декандиовая)",
    "Адипиновая кислота (гександиовая, Е355)",
    "Субериновая кислота (пробковая, октандиовая)",
    "Этилмалоновая кислота (2-карбоксимасляная)",
    "Метилянтарная кислота (пиротартаровая)",
    "Ксантуреновая кислота (8-гидроксикинуреновая)",
    "Кинуреновая кислота",
    "3-Гидроксиизовалериановая кислота (3-гидрокси-3-метилбутановая)",
    "3-Гидрокси-3-метилглутаровая кислота (меглутол)",
    "Формиминоглутаминовая кислота",
    "Метилмалоновая кислота",
    "2-Гидроксимасляная кислота (2-Гидроксибутановая)",
    "Пироглутаминовая кислота (5-оксопролин)",
    "N-Ацетил-L-аспартиковая кислота (N-ацетил-L-аспартат)",
    "Оротовая кислота (пиримидин-4-карбоновая)",
    "Гиппуровая кислота (N-бензоилглицин), ммоль/л",
    "Метилгиппуровые кислоты, сум., ммоль/л",
    "Фенилглиоксиловая кислота (бензоилмуравьиная), ммоль/л",
    "Миндальная кислота (фенилгликолевая), ммоль/л",
    "Бензойная кислота (драциловая, E210)",
    "орто-Гидроксифенилуксусная кислота",
    "пара-Гидроксибензойная кислота (пара-карбоксифенол)",
    "Гиппуровая кислота (N-бензоилглицин), ммоль/моль кр.",
    "Метилгиппуровые кислоты, сум., ммоль/моль кр.",
    "орто-Метилгиппуровая кислота",
    "мета-Метилгиппуровая кислота",
    "пара-Метилгиппуровая кислота",
    "Трикарболлиловая кислота (1,2,3-пропантрикабоксиловая)",
    "3-Индолилуксусная кислота (гетероауксин)",
    "Кофейная кислота (3,4-дигидроксикоричная, 3,4-дигидроксибензенакриловая)",
    "Винная кислота (диоксиянтарная, тартаровая кислота, Е334)",
    "2-Гидрокси-2-метилбутандиовая кислота (лимонно-яблочная)",
  ];

  // Вычисляем позицию для красной риски (в процентах)
  const calculatePosition = (index) => {
    const value = parseFloat(formValues[index]);
    const { min, max } = minMaxValuesData[index];
    if (isNaN(value) || value < 0) return 0;
    const extendedMin = min - (max - min) * 0.5;
    const extendedMax = max + (max - min) * 0.5;
    const position = ((value - extendedMin) / (extendedMax - extendedMin)) * 100;
    return Math.min(Math.max(position, 0), 100);
  };

  // Печатный вид – для каждой группы создаём таблицу с тремя колонками:
  // 1) Показатель, 2) Значение, 3) Шкала с графическим отображением.
  const renderPrintableFullPage = () => {
    return (
      <div>
        {fieldGroupsData.map((group, groupIndex) => (
          <div
            key={groupIndex}
            style={{
              marginBottom: '40px',
              pageBreakAfter: 'always',
              width: '100%'
            }}
          >
            <h2 style={{ textAlign: 'center' }}>{group.title}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #000', padding: '8px' }}>Показатель</th>
                  <th style={{ border: '1px solid #000', padding: '8px' }}>Значение</th>
                  <th style={{ border: '1px solid #000', padding: '8px' }}>Шкала</th>
                </tr>
              </thead>
              <tbody>
                {group.fields.map(index => {
                  const { min, max } = minMaxValuesData[index];
                  const extendedMin = min - (max - min) * 0.5;
                  const extendedMax = max + (max - min) * 0.5;
                  const position = calculatePosition(index);
                  return (
                    <tr key={index}>
                      <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'center' }}>
                        {formNamesData[index]}
                      </td>
                      <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'center' }}>
                        {formValues[index]}
                      </td>
                      <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span>{min.toFixed(2)}</span>
                          <div style={{
                              width: '200px',
                              height: '10px',
                              backgroundColor: '#ddd',
                              margin: '0 10px',
                              position: 'relative'
                          }}>
                            <div style={{
                              position: 'absolute',
                              left: `${position}%`,
                              transform: 'translateX(-50%)',
                              height: '100%',
                              width: '2px',
                              backgroundColor: 'red'
                            }} />
                            <div style={{
                              position: 'absolute',
                              left: `${((min - extendedMin) / (extendedMax - extendedMin)) * 100}%`,
                              width: `${((max - min) / (extendedMax - extendedMin)) * 100}%`,
                              height: '100%',
                              backgroundColor: 'rgba(0,128,0,0.3)'
                            }} />
                          </div>
                          <span>{max.toFixed(2)}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };

  // Интерактивный режим – отображение текущей группы (не для печати)
  const renderCurrentGroup = () => {
    const group = fieldGroupsData[currentGroup];
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Левая колонка – формы */}
        <div style={{ width: '50%', textAlign: 'center' }}>
          <h2>{group.title}</h2>
          {group.fields.map(index => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block' }}>{formNamesData[index]}:</label>
              <input
                type="number"
                step="0.001"
                value={formValues[index]}
                onChange={(e) => {
                  const newVal = e.target.value;
                  const newValues = [...formValues];
                  newValues[index] = newVal;
                  setFormValues(newValues);
                }}
                placeholder="Введите значение (≥ 0)"
                style={{ margin: '0 auto' }}
              />
            </div>
          ))}
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => setCurrentGroup((prev) => (prev - 1 + fieldGroupsData.length) % fieldGroupsData.length)}>Предыдущая группа</button>
            <button onClick={() => setFormValues(Array(64).fill(''))} style={{ margin: '0 10px' }}>Очистить все поля</button>
            <button onClick={() => setCurrentGroup((prev) => (prev + 1) % fieldGroupsData.length)}>Следующая группа</button>
          </div>
        </div>
        {/* Правая колонка – шкалы */}
        <div style={{ width: '50%' }}>
        <h2 style={{ textAlign: 'center' }}>Шкалы</h2>
        {group.fields.map(index => {
          const { min, max } = minMaxValuesData[index];
          const extendedMin = min - (max - min) * 0.5;
          const extendedMax = max + (max - min) * 0.5; // Исправлено с 0.55 на 0.5
          const position = calculatePosition(index);
            return (
              <div key={index} style={{ marginBottom: '20px', textAlign: 'center' }}>
                <div style={{ marginBottom: '5px' }}>{formNamesData[index]}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span>{min.toFixed(2)}</span>
                  <div style={{
                      width: '200px',
                      height: '10px',
                      backgroundColor: '#ddd',
                      margin: '0 10px',
                      position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: `${position}%`,
                      transform: 'translateX(-50%)',
                      height: '100%',
                      width: '2px',
                      backgroundColor: 'red'
                    }} />
                    <div style={{
                      position: 'absolute',
                      left: `${((min - extendedMin) / (extendedMax - extendedMin)) * 100}%`,
                      width: `${((max - min) / (extendedMax - extendedMin)) * 100}%`,
                      height: '100%',
                      backgroundColor: 'rgba(0,128,0,0.3)'
                    }} />
                  </div>
                  <span>{max.toFixed(2)}</span>
                </div>
                <div>Значение: {formValues[index]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Добавляем глобальные стили для печати, чтобы фоновые цвета печатались */}
      <style>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
        }
        @media screen {
          .print-only { display: none; }
        }
      `}</style>

      {/* Интерактивный интерфейс – не печатается */}
      <div className="no-print" style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button onClick={() => window.print()}>Печать всех результатов</button>
        </div>
        {renderCurrentGroup()}
      </div>

      {/* Печатный вид – отображается только при печати */}
      <div className="print-only" style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        {renderPrintableFullPage()}
      </div>
    </div>
  );
};

export default App;
