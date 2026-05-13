import { QuizPhase } from '../data/types';
import { AnswerButton } from './AnswerButton';

interface Props {
  options: string[];
  correctAnswer: string;
  selectedOption: string | null;
  phase: QuizPhase;
  onAnswer: (option: string) => void;
}

export function AnswerGrid({ options, correctAnswer, selectedOption, phase, onAnswer }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map(option => {
        let state: 'default' | 'correct' | 'wrong' | 'reveal' = 'default';
        if (phase === 'feedback') {
          if (option === selectedOption) {
            state = option === correctAnswer ? 'correct' : 'wrong';
          } else if (option === correctAnswer) {
            state = 'reveal';
          }
        }
        return (
          <AnswerButton
            key={option}
            label={option}
            state={state}
            disabled={phase !== 'answering'}
            onClick={() => onAnswer(option)}
          />
        );
      })}
    </div>
  );
}
